import Container from "../components/container";
import Stories from "../components/posts/posts";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>404 Not Found | Nicholas Hawn</title>
          <meta
            name="description"
            content="Hi, I am Nicholas Hawn a Software Developer based in Grand Rapids Michigan."
          ></meta>
        </Head>
        <Container>
          <Intro />
          <div className="text-center align-middle">
            <h1 className="mb-8 text-4xl md:text-4xl font-bold tracking-tighter leading-tight">
              Not Found
            </h1>
            <hdir />
            <p>
              Ooops! Looks like nothing was found.
              <br />
              Try going back to the{" "}
              <a href="/" className="underline">
                homepage
              </a>
              .
            </p>
          </div>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
