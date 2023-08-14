import { download } from "../svgImage";
import Resume from "../components/Resume";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="Chris Warren" />
              <div className="main" data-img-url="img/about/selfie.png" />
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Me</span>
              <h3>
                {`I'm`} <span>Chris</span>
              </h3>
              <h3>
                front-end <span>developer</span>
              </h3>
              <span className="subtitle">Based in the United States</span>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                Hi! My name is Chris Warren. I am a web designer & developer, a
                mobile designer & developer, a UI/UX designer, and {`I'm`} very
                passionate and dedicated to my work.
              </p>
              <p>
                I've been a software engineer & UI/UX designer for a long time.
                I've developed for desktop, web, & mobile in my career, which
                gives me a unique perspective in order to make your project a
                successful one.
              </p>
            </div>
            <div
              className="aali_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a href="/chris_warren.pdf" download>
                <span>My Resume {download}</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="aali image" />
              <div className="main" data-img-url="img/about/selfie2.png" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
      <Resume />
    </div>
  );
};

export default About;
