#!/usr/bin/env node
// Fetch GitHub star counts for repos listed in tracked_repos.txt and write the
// result to public/stars.json (and docs/stars.json if a built export exists,
// so deployed pages pick up the new values without a rebuild).

import fs from 'node:fs';
import path from 'node:path';

const REPOS_FILE = 'tracked_repos.txt';
const OUT_FILES = ['public/stars.json', 'docs/stars.json'];

const repos = fs
  .readFileSync(REPOS_FILE, 'utf8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l && !l.startsWith('#'));

const token = process.env.GITHUB_TOKEN;
const headers = {
  'Accept': 'application/vnd.github+json',
  'X-GitHub-Api-Version': '2022-11-28',
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

const out = {};

for (const repo of repos) {
  try {
    const r = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!r.ok) {
      console.error(`✗ ${repo} → HTTP ${r.status}`);
      continue;
    }
    const d = await r.json();
    if (typeof d.stargazers_count !== 'number') {
      console.error(`✗ ${repo} → missing stargazers_count`);
      continue;
    }
    out[repo] = d.stargazers_count;
    console.log(`✓ ${repo} → ${d.stargazers_count}`);
  } catch (err) {
    console.error(`✗ ${repo} → ${err.message}`);
  }
}

const payload = {
  updatedAt: new Date().toISOString(),
  repos: out,
};
const json = JSON.stringify(payload, null, 2) + '\n';

for (const file of OUT_FILES) {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) continue;
  fs.writeFileSync(file, json);
  console.log(`wrote ${file}`);
}
