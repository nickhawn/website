import { ShortDateFormatter } from "./date-formatter";
import Link from "next/link";

export default function PostPreview({ title, date, slug }) {
  return (
    <>
      <div className="grid grid-cols-8 my-2">
        <div className="text-gray-500">
          <ShortDateFormatter dateString={date} />
        </div>
        <div className="col-span-4 truncate">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </div>
        <div className="col-span-2 justify-self-end">10 min read</div>
      </div>
      <div className="border-t border-accent-2" />
    </>
  );
}
