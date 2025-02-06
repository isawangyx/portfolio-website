import Cards from "./SkillsCards";

const AboutSection = () => {
  return (
    <section className="text-white" id="about">
      <div className="animate-fadeInUp">
        <h3 className="text-4xl font-bold mb-4 text-white">About Me.</h3>
        <p className="text-lg text-white ">
          I’m a Computer Science sophomore at the National University of
          Singapore with a passion for building tech that makes a difference.
        </p>
        <Cards />
      </div>
    </section>
  );
};

export default AboutSection;
