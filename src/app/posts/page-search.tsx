'use client'

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
    post => searchTag.size === 0 || post.tags.some(tag => searchTag.has(tag))
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
          placeholder="Search Title ..." onChange={handleSearchChange} />
      </div>
      <div className="flex flex-wrap gap-2">
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

    {filteredPosts.map((props, index) => <PostEntry key={index} {...props} />)}
  </div>
}
