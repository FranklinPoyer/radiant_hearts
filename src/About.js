import data from './data/data.json';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-rh-dark-blue mb-8">
          About Radiant Hearts Women Group
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div>
            <h3 className="text-xl font-semibold text-rh-blue-2">Our Mission</h3>
            <p className="text-gray-600 mt-2">{data.organization.mission}</p>
            <p className="text-gray-600 mt-2">
              We are a registered self-help group in Chuka, Tharaka-Nithi County, committed to advancing economic and social empowerment for women and the community at large. Through our programs, we address key local challenges including gender equity, food security, and health access, working with both local and international partners.
            </p>
          </div>
          {/* Contacts */}
          <div>
            <h3 className="text-xl font-semibold text-rh-blue-2">Contact Us</h3>
            <p className="text-gray-600">Address: {data.organization.contacts.address}</p>
          </div>
          {/* Partners */}
          <div>
            <h3 className="text-xl font-semibold text-rh-blue-2">Our Partners</h3>
            <p className="text-gray-600 mt-2">
              We collaborate with Tharaka Nithi County, SHARE Institute, and other local and international organizations to support our initiatives.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {data.partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
