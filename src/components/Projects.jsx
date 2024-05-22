import { Element } from 'react-scroll';
import TrybeTunesImage from '../assets/trybetunes.png'

const projects = [
  {
    id: 1,
    title: "Trybe Tunes",
    description: "Um projeto simulando uma SPA de músicas. Onde é possível pesquisar, ouvir e favoritar prévias de músicas. Construida usando a API do iTunes.",
    image: TrybeTunesImage // Substitua por URLs reais
  }
];

const Projects = () => {
  return (
    <Element name="projects">
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl text-purple-500 mb-8">Meus Projetos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <div key={project.id} className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-2xl text-purple-500 mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Projects;
