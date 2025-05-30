import Hero from '../Hero';
import About from '../About';
import Projects from '../Projects';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Hero />
      <Projects />
      <About />
    </div>
  );
};

export default Home;