import { Element } from 'react-scroll';
import Image1 from '../assets/nubelson-fernandes-jKL2PvKN8Q0-unsplash.jpg'
import Image2 from '../assets/joan-gamell-ZS67i1HLllo-unsplash.jpg'
import Image3 from '../assets/nubelson-fernandes--Xqckh_XVU4-unsplash.jpg'
import './About.css';

const About = () => {
  
  return (
    <Element name="about">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid gap-8">
            <div className="flex items-center justify-center max-md:flex-col gap-12">
              <img loading='lazy' src={Image1} alt="" className="w-1/3 max-md:w-full h-auto rounded-2xl border-2 border-[#E8EDDF]" />
              <p className="text-3xl text-[#E8EDDF] font-bold w-1/3 max-md:w-full max-md:text-lg">
                Olá, sou Douglas Oliveira e sou um desenvolvedor web full-stack formado pela Trybe. <br/> Seja bem vindo(a) ao meu portfólio.
              </p>
            </div>
            <div className="flex items-center justify-center max-md:flex-col-reverse gap-12">
              <p className="text-3xl text-[#E8EDDF] font-bold w-1/3 max-md:w-full max-md:text-lg">
                Tenho 21 anos e desde 2023 trabalho na Shift Inc, onde tenho a oportunidade de trabalhar em diversos projetos empolgantes, utilizando diferentes tecnologias como React e Vue.
              </p>
              <img loading='lazy' src={Image2} alt="" className="w-1/3 max-md:w-full h-auto rounded-2xl border-2 border-[#E8EDDF]" />
            </div>
            <div className="flex items-center justify-center max-md:flex-col gap-12">
              <img loading='lazy' src={Image3} alt="" className="w-1/3 max-md:w-full h-auto rounded-2xl border-2" />
              <p className="text-3xl text-[#E8EDDF] font-bold w-1/3 max-md:w-full max-md:text-lg border-[#E8EDDF]">
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
