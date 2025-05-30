import { Link } from 'react-router-dom';
import data from './data/data.json';

const Projects = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-rh-dark-blue mb-8">Our Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {data.projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-rh-blue-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;