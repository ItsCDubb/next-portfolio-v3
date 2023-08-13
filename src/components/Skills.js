import { useEffect } from "react";
import { activeSkillProgress } from "../utilits";

const Skills = () => {
  useEffect(() => {
    window.addEventListener("scroll", activeSkillProgress);
  });
  return (
    <div className="aali_tm_section" id="portfolio">
      <div className="aali_tm_skills">
        <div className="container">
          <div className="skills_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="light"
              >
                <span>My Skills</span>
                <h3>
                  If you can imagine it
                  <br /> I can build it!
                </h3>
                <p>
                  As a designer & developer, I have acquired the skills &
                  knowledge necessary to make your project a success.
                </p>
              </div>
            </div>
            <div className="right wow fadeInRight" data-wow-duration="1s">
              <div className="dodo_progress">
                <div className="progress_inner skillsInner___" data-value={86}>
                  <span>
                    <span className="label">React</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={90}>
                  <span>
                    <span className="label">React Native</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
                <div className="progress_inner skillsInner___" data-value={66}>
                  <span>
                    <span className="label">HTML/CSS/JavaSricpt</span>
                  </span>
                  <div className="background">
                    <div className="bar">
                      <div className="bar_in" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span
          className="border moving_effect"
          data-direction="x"
          data-reverse="yes"
        />
      </div>
    </div>
  );
};

export default Skills;
