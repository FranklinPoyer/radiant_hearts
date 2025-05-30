const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-rh-dark-blue to-rh-blue-2 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to Radiant Hearts Women Group</h1>
        <p className="mt-4 text-lg md:text-xl">Empowering women through economic opportunity and support.</p>
        <a
          href="#about"
          className="mt-6 inline-block bg-rh-orange-1 text-white px-6 py-3 rounded-full hover:bg-rh-orange-2 transition-colors"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;