import { Element } from 'react-scroll';
import Image1 from '../assets/nubelson-fernandes-jKL2PvKN8Q0-unsplash.jpg'
import Image2 from '../assets/joan-gamell-ZS67i1HLllo-unsplash.jpg'
import Image3 from '../assets/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg'


const About = () => {
  return (
    <Element name="about">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-500 pb-20">Sobre Mim 🧑‍💻</h2>
          <div className="grid gap-8">
            <div className="flex items-center justify-center gap-12">
              <img src={Image1} alt="" className="w-1/3 h-auto mr-8 rounded-2xl" />
              <p className="text-3xl font-bold w-1/3">
                Me chamo Douglas Oliveira e sou um desenvolvedor web full-stack formado pela Trybe. Tenho um grande interesse na área de frontend e UX.
              </p>
            </div>
            <div className="flex items-center justify-center gap-12">
              <p className="text-3xl font-bold w-1/3">
                Tenho 21 anos e desde 2023 trabalho na Shift Inc, onde tenho a oportunidade de trabalhar em diversos projetos empolgantes, utilizando diferentes tecnologias como React e Vue.
              </p>
              <img src={Image2} alt="Ilustração 3" className="w-1/3 h-auto mr-8 rounded-2xl" />
            </div>
            <div className="flex items-center justify-center gap-12">
              <img src={Image3} alt="Ilustração 4" className="w-1/3 h-auto mr-8 rounded-2xl" />
              <p className="text-3xl font-bold w-1/3">
                Estou sempre em busca de novas oportunidades para aprender e crescer como desenvolvedor, com o objetivo de criar interfaces incríveis e experiências de usuário excepcionais.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default About;
