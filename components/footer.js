import Container from "./container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="justify-center mb-10 flex flex-col lg:flex-row items-center">
          <p className="mt-8">
            <a
              className="underline mr-3"
              href="https://www.linkedin.com/in/nickhawn/"
            >
              LinkedIn
            </a>{" "}
            <a className="underline mr-3" href="http://github.com/nickhawn">
              Github
            </a>{" "}
            <a className="underline mr-3" href="mailto:nickhawn@hey.com">
              Email
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
