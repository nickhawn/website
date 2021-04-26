import Container from '../components/container'
import Stories from '../components/posts'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Nicholas Hawn | Software Developer Based In Grand Rapids</title>
          <meta name="description" content="Hi, I am Nicholas Hawn a Software Developer based in Grand Rapids Michigan."></meta>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <Stories posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
