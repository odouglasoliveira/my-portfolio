export default function Header() {
  return (
    <header className="flex align-middle justify-between p-4 px-12">
      <section className="flex-col justify-center align-middle min-h-full">
        <p className="self-center text-2xl font-semibold">Douglas Oliveira</p>
        <p className="self-center text-sm font-semibold text-gray-700">Desenvolvedor Fullstack</p>
      </section>
      <section className="flex align-middle justify-center gap-4">
        <a className="self-center font-semibold" target="_blank" href="https://www.linkedin.com/in/douglasoliveiradev/" rel="noreferrer">Linkedin</a>
        <a className="self-center font-semibold" target="_blank" href="https://github.com/odouglasoliveira" rel="noreferrer">Github</a>
        <a className="self-center font-semibold" target="_blank" href="mailto:odouglasoliveira.dev@gmail.com" rel="noreferrer">Email</a>
      </section>
    </header>
  )
}