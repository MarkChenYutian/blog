'use client'

import { FilterIcon, SearchXIcon } from "lucide-react";
import React from "react";

import PostEntry, { PostPageProps } from "@/app/posts/post-entry"


export default function AllPosts({ posts }: { posts: PostPageProps[] }) {
  const [searchString, setSearchString] = React.useState<string>("");
  const [searchTag, setSearchTag] = React.useState<Set<string>>(new Set());
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };
  const filteredPosts = posts.filter(
    post => post.title.toLowerCase().includes(searchString.toLowerCase())
  ).filter(
    post => searchTag.size === 0 || Array.from(searchTag).every(tag => post.tags.includes(tag))
  );

  const allTags = React.useMemo(() => {
    return Array.from(new Set(posts.flatMap(post => post.tags)))
  }, [posts])
  const toggleTag = (tag: string) => {
    setSearchTag((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    })
  };


  return <div className="layout">
    <div>
      <div className="flex-grow min-w-[200px] py-4">
        <input className="w-full bg-transparent placeholder:text-slate-400 dark:placeholder:text-neutral-500 text-slate-700 dark:text-neutral-300 text-sm border border-slate-400 dark:border-neutral-600 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 dark:focus:border-neutral-500 hover:border-slate-300 dark:hover:border-neutral-500 shadow-sm focus:shadow"
          placeholder="Search Title ..." value={searchString} onChange={handleSearchChange} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-neutral-400 mr-1">
          <FilterIcon className="w-4 h-4" aria-hidden />
          Filter
        </span>
        {
          allTags.map((tag, index) =>
            <button key={index}
              className={"font-mono text-xs uppercase tracking-wider px-2 py-1 border transition-colors" + (searchTag.has(tag) ? " border-primary-800 bg-primary-800 text-white" : " border-slate-300 text-slate-700 dark:border-neutral-700 dark:text-neutral-300 hover:border-primary-800 hover:text-primary-800 dark:hover:border-primary-300 dark:hover:text-primary-300")}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>)
        }
      </div>
    </div>

    {filteredPosts.length === 0 ? (
      <div className="flex flex-col items-center justify-center text-center py-24 text-slate-400 dark:text-neutral-500">
        <SearchXIcon size={56} strokeWidth={1.25} aria-hidden />
        <p className="mt-4 text-lg font-medium text-slate-500 dark:text-neutral-400">No posts match your filters</p>
        <p className="mt-1 text-sm">Try a different search term or remove some tags.</p>
        {(searchString || searchTag.size > 0) && (
          <button
            onClick={() => { setSearchString(""); setSearchTag(new Set()); }}
            className="mt-6 text-sm text-primary-700 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300 underline-offset-4 hover:underline"
          >
            Clear all filters
          </button>
        )}
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 pb-12">
        {filteredPosts.map((props, index) => <PostEntry key={index} {...props} />)}
      </div>
    )}
  </div>
}
