import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="justify-center py-20 flex flex-col lg:flex-row items-center">
          <p className="mt-8 text-2xl">
        <a
          className="underline mr-3"
          href="mailto:nickhawn@hey.com">
          Email
        </a>
        {' '}
        <a
          className="underline mr-3"
          href="https://www.linkedin.com/in/nickhawn/">
          LinkedIn
        </a>
        {' '}
        <a
          className="underline mr-3"
          href="http://github.com/nickhawn">
          Github
        </a>
        </p>
        </div>
      </Container>
    </footer>
  )
}
