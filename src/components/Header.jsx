import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-purple-700 py-6">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <ul className="flex space-x-4">
          <li>
            <Link 
              to="home" 
              smooth={true} 
              duration={800} 
              className="text-white py-2 px-4 rounded hover:bg-purple-900 transition cursor-pointer"
            >
              Início
            </Link>
          </li>
          <li>
            <Link 
              to="about" 
              smooth={true} 
              duration={800} 
              className="text-white py-2 px-4 rounded hover:bg-purple-900 transition cursor-pointer"
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link 
              to="projects" 
              smooth={true} 
              duration={800} 
              className="text-white py-2 px-4 rounded hover:bg-purple-900 transition cursor-pointer"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              className="text-white py-2 px-4 rounded hover:bg-purple-900 transition cursor-pointer"
            >
              Contato
            </Link>
          </li>
        </ul>
      </nav>
      <div className="text-center mt-10" id="home">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Douglas Oliveira.</h1>
        <p className="text-xl md:text-2xl mt-4">Desenvolvedor Front-End 💻</p>
      </div>
    </header>
  );
}

export default Header;
