#!/usr/bin/env bash
# Local equivalent of .github/workflows/update-stars.yml — fetches GitHub star
# counts for repos in tracked_repos.txt and refreshes public/stars.json.
#
# Usage:
#   ./update_stars.sh              # fetch + write public/stars.json
#   GITHUB_TOKEN=ghp_... ./update_stars.sh
#
# A token is optional but recommended to avoid the 60 req/hr unauthenticated
# rate limit. If `gh` is installed and authenticated, its token is used
# automatically when GITHUB_TOKEN is not already set.

set -euo pipefail

cd "$(dirname "$0")"

validate_token() {
  local t="$1"
  curl -sf -o /dev/null -H "Authorization: Bearer $t" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/user
}

if [[ -z "${GITHUB_TOKEN:-}" ]] && command -v gh >/dev/null 2>&1; then
  if token=$(gh auth token 2>/dev/null) && [[ -n "$token" ]]; then
    if validate_token "$token"; then
      export GITHUB_TOKEN="$token"
      echo "Using token from gh auth."
    else
      echo "gh auth token rejected by GitHub API (likely expired or scope-restricted) — falling back to unauthenticated."
    fi
  fi
elif [[ -n "${GITHUB_TOKEN:-}" ]]; then
  if ! validate_token "$GITHUB_TOKEN"; then
    echo "Warning: provided GITHUB_TOKEN was rejected — unsetting and using unauthenticated requests."
    unset GITHUB_TOKEN
  fi
fi

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Note: no valid GITHUB_TOKEN — using unauthenticated requests (60/hr limit)."
fi

node scripts/fetch-stars.mjs

if git diff --quiet -- public/stars.json 2>/dev/null; then
  echo "No changes — star counts are up to date."
else
  echo "public/stars.json updated. Review with 'git diff public/stars.json' and commit when ready."
fi
