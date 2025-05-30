import data from '../data/data.json';

const FamilyPlanning = () => {
  const project = data.projects.find((p) => p.title === 'Family Planning Initiative');

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
          <h2 className="text-3xl font-bold text-rh-dark-blue mb-6">Empowering Women Through Family Planning</h2>
          <p className="text-gray-600 mb-6">
            At Radiant Hearts Women Group, based in Chuka, Tharaka-Nithi County, we are committed to empowering women through access to family planning resources. Our initiative provides education, counseling, and access to reproductive health services, aligning with our mission to support vulnerable women and promote community empowerment.
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
            Our Family Planning Initiative has reached hundreds of women in Tharaka-Nithi, providing them with the knowledge and resources to make informed choices. This program supports our goal of economic empowerment by enabling women to plan their families and pursue opportunities for growth. Contact us at {data.organization.contacts.phone} or visit us at {data.organization.contacts.address} to learn how you can support this cause.
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

export default FamilyPlanning;