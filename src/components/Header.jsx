export default function Header() {
  return (
    <header className="flex align-middle justify-between p-4 px-12">
      <section className="flex-col justify-center align-middle min-h-full">
        <p className="self-center text-2xl font-semibold">Douglas Oliveira</p>
        <p className="self-center text-sm font-semibold text-sky-800">Desenvolvedor Fullstack</p>
      </section>
      <section className="flex align-middle justify-center gap-4">
        <a className="self-center font-semibold" href="https://www.linkedin.com/in/douglasoliveiradev/">Linkedin</a>
        <a className="self-center font-semibold" href="https://github.com/odouglasoliveira">Github</a>
        <a className="self-center font-semibold" href="mailto:odouglasoliveira.dev@gmail.com">Email</a>
      </section>
    </header>
  )
}