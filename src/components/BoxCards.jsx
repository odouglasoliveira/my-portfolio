import Card from './Card'
import trybetunesImage from '../assets/trybetunes.png'

export default function BoxCards() {
  return (
    <>
      <section>
        <h3 className='text-center font-bold font-sans text-2xl'>Projetos</h3>
        <section className='flex justify-evenly flex-wrap px-12 gap-12'>
          <Card title="Trybetunes" description="Projeto frontend simulando uma aplicação de músicas. Onde é possível buscar por artistas, acessar albuns, ouvir prévias e favoritar músicas." image={trybetunesImage} repo_url="https://github.com/odouglasoliveira/trybetunes" deploy_url="https://trybetunes-zeta-one.vercel.app/" />
        </section>
      </section>
    </>
  )
}
