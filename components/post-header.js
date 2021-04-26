import { LongDateFormatter } from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <LongDateFormatter dateString={date} />
        </div>
        <PostTitle>{title}</PostTitle>
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={155} width={310} />
      </div>
    </>
  )
}
