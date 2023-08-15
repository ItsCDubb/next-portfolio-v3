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
              <h3>
                I&#39;m <span>Chris</span> Warren
              </h3>
              <h3>
                a <span>developer</span>
              </h3>
            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                Hi! I&#39;m a web and mobile designer & developer, a ui/ux
                designer, & very passionate about what I do.
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
