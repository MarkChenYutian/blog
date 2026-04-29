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
        <input className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-400 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
          placeholder="Search Title ..." value={searchString} onChange={handleSearchChange} />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1 text-sm text-slate-500 mr-1">
          <FilterIcon className="w-4 h-4" aria-hidden />
          Filter
        </span>
        {
          allTags.map((tag, index) =>
            <button key={index}
              className={"text-sm text-slate-700 px-2 py-1 rounded-full hover:bg-primary-300" + (searchTag.has(tag) ? " bg-primary-400" : " bg-slate-100")}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </button>)
        }
      </div>
    </div>

    {filteredPosts.length === 0 ? (
      <div className="flex flex-col items-center justify-center text-center py-24 text-slate-400">
        <SearchXIcon size={56} strokeWidth={1.25} aria-hidden />
        <p className="mt-4 text-lg font-medium text-slate-500">No posts match your filters</p>
        <p className="mt-1 text-sm">Try a different search term or remove some tags.</p>
        {(searchString || searchTag.size > 0) && (
          <button
            onClick={() => { setSearchString(""); setSearchTag(new Set()); }}
            className="mt-6 text-sm text-primary-700 hover:text-primary-900 underline-offset-4 hover:underline"
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
