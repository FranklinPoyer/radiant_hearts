import data from '../data/data.json';

const WomensViolence = () => {
  const project = data.projects.find((p) => p.title === 'Ending Violence Against Women');

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
          <h2 className="text-3xl font-bold text-rh-dark-blue mb-6">Creating Safer Communities</h2>
          <p className="text-gray-600 mb-6">
            Radiant Hearts Women Group in Chuka is dedicated to ending violence against women through awareness campaigns, support services, and community engagement. This initiative supports our goal of empowering vulnerable women in Tharaka-Nithi County.
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
            Our efforts include counseling, legal support, and community dialogues to combat violence and foster safety. As a registered self-help group under the Ministry of East African Community, Labour and Social Protection, we work tirelessly to create change. Reach out at {data.organization.contacts.address} or {data.organization.contacts.phone}.
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

export default WomensViolence;