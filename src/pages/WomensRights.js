import data from '../data/data.json';

const WomensRights = () => {
  const project = data.projects.find((p) => p.title === 'Women’s Rights Advocacy');

  return (
    <div className="bg-gray-100">
      <section className="relative">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-rh-dark-blue bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            {project.title}
          </h1>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-rh-dark-blue mb-6">Advocating for Gender Equality</h2>
          <p className="text-gray-600 mb-6">
            Radiant Hearts Women Group, based in Chuka, Tharaka-Nithi, champions women’s rights through education and advocacy. Our workshops and community programs empower women to understand and assert their rights, aligning with our mission to support vulnerable women.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-6">
            {project.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">{image.alt}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600">
            Our advocacy efforts have sparked meaningful change, empowering women to take leadership roles and challenge inequality. Guided by our management committee, we continue to drive impact. Contact us at {data.organization.contacts.phone} to join our mission.
          </p>
          <a
            href="#about"
            className="mt-6 inline-block bg-rh-orange-1 text-white px-6 py-3 rounded-full hover:bg-rh-orange-2 transition-colors"
          >
            Learn More About Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default WomensRights;