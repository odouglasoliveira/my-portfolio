import { Link } from 'react-scroll';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import './Scroll.css';



const Header = () => {
  
  useEffect(() => {
    ScrollReveal({ reset: false, distance: '400px' }).reveal('.scroll-header', { duration: 2000, origin: 'top', easing: 'ease'})
  }, [])

  return (
    <header className="bg-[#CFDBD5] scroll-header py-6">
      <nav className="container mx-auto flex justify-between items-center px-6 max-md:hidden">
        <ul className="flex space-x-4 max-md:flex-col">
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={800} 
              className="text-[#242423] py-2 px-4 rounded-xl hover:bg-[#B9CAC2] transition cursor-pointer"
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={800} 
              className="text-[#242423]  py-2 px-4 rounded-xl hover:bg-[#B9CAC2] transition cursor-pointer"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={800} 
              className="text-[#242423]  py-2 px-4 rounded-xl hover:bg-[#B9CAC2] transition cursor-pointer"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              className="text-[#242423]  py-2 px-4 rounded-xl hover:bg-[#B9CAC2] transition cursor-pointer"
            >
              Contato
            </Link>
          </li>
        </ul>
        <ul className="flex space-x-4">
          <li className="text-[#242423]  py-2 px-4 rounded-xl hover:bg-[#B9CAC2] transition cursor-pointer">
            <a href="https://www.linkedin.com/in/douglasoliveiradev/" target='_blank' rel="noreferrer">LinkedIn</a>
          </li>
        </ul>
      </nav>
      <div className="text-center mt-10" id="home">
        <h1 className="text-4xl text-[#242423] md:text-5xl lg:text-6xl font-bold">Douglas Oliveira.</h1>
        <p className="text-xl text-[#242423] md:text-2xl mt-4">Desenvolvedor Front-End 💻</p>
      </div>
    </header>
  );
}

export default Header;
