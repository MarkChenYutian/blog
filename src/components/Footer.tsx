import UnderlineLink from "@/components/links/UnderlineLink"

export default function Footer() {
  return <div>
    <footer className='min-h-24 items-center justify-center py-12 text-center border-t border-slate-200 dark:border-neutral-800 font-mono text-sm text-neutral-500 dark:text-neutral-400'>
      © {new Date().getFullYear()} By{' '}<UnderlineLink href="https://www.yutianchen.blog/">Yutian Chen</UnderlineLink>
    </footer>
  </div>
}
