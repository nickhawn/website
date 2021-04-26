import PostPreview from './post-preview'

export default function Posts({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-2xl md:text-2xl font-bold tracking-tighter leading-tight">
        My Writing
      </h2>
      {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
    </section>
  )
}
