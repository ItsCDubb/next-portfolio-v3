import { useEffect } from "react";
import { edu, exp } from "../svgImage";
import { jarallaxContent } from "../utilits";

const Resume = () => {
  useEffect(() => {
    jarallaxContent();
  }, []);
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_resume">
        <div className="content">
          <div className="container">
            <div className="resume_in">
              <div
                className="aali_tm_main_title"
                data-text-align="left"
                data-color="dark"
              >
                <h3>More info</h3>
                <p>
                  I've been a software engineer & UI/UX designer for a long time
                  now. I've developed for desktop, web, & mobile in my career,
                  which gives me a unique perspective in order to make your
                  project a successful one.
                </p>
              </div>
              <div className="content_inner">
                <ul>
                  <li className="wow fadeInLeft" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Education</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Google UX Design Professional</h3>
                              <span>Coursera</span>
                            </div>
                            <div className="right">
                              <span>2023</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              This is your path to a career in UX design. In
                              this program, you&lsquo;ll learn in-demand skills.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Full-Stack Web Developer</h3>
                              <span>Kenzie Academy</span>
                            </div>
                            <div className="right">
                              <span>2019 - 2020</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              The full-stack program prepares web developers who
                              are experts in frontend and backend systems.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Master of Science</h3>
                              <span>San Diego State University</span>
                            </div>
                            <div className="right">
                              <span>2003 - 2006</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              The Master of Science degree program in Computer
                              Science offers software, systems, architecture,
                              artificial intelligence, and computer science
                              theory courses. A master’s degree in Computer
                              Science provides education and creative experience
                              to prepare graduates for advanced professional
                              employment in industry, government, or
                              college-level teaching.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{edu}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Bachelor of Science</h3>
                              <span>San Diego State University</span>
                            </div>
                            <div className="right">
                              <span>2000 - 2003</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Gain a broad background in computer science theory
                              and state-of-the-practice experiences that will
                              enable you to pursue high technology careers and
                              higher-level education goals. You'll also gain
                              analytical and problem-solving skills, software
                              design and programming skills, as well as
                              effective writing and presentation skills needed
                              to work in a collaborative computer science
                              environment.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="wow fadeInRight" data-wow-duration="1s">
                    <h3 className="main_title">
                      <span>Experience</span>
                    </h3>
                    <ul className="list">
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Software Engineer</h3>
                              <span>CW Technologies, LLC</span>
                            </div>
                            <div className="right">
                              <span>2007 - present</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Reviewed project specifications & designed
                              technology solutions, helped clients build apps &
                              websites in React & React Native, Integrate
                              Facebook's best practices for interface design
                              thus saving clients (on average $3k a month) or
                              time (about 15 hours a week), which has allowed me
                              to help companies move into different positions
                              than they were in previously. Upgraded
                              technologies, Helped or created best practices for
                              design which lead directly to my clients saving
                              money
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>React Native Developer</h3>
                              <span>SwagCheck, Inc.</span>
                            </div>
                            <div className="right">
                              <span>2021 - 2022</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Built the app in React Native & was instrumental
                              in developing the ability to add a signature to
                              newly minted NFT.
                            </p>
                            <p>
                              Updated the code base from React Native 0.64 to
                              React Native 0.67, Helped install a payment
                              gateway for people to purchase an NFT after it was
                              minted.
                            </p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="list_inner">
                          <span className="icon">{exp}</span>
                          <div className="info">
                            <div className="left">
                              <h3>Full-Stack Developer</h3>
                              <span>Avaaz Media, Inc.</span>
                            </div>
                            <div className="right">
                              <span>2020 - 2021</span>
                            </div>
                          </div>
                          <div className="text">
                            <p>
                              Started the conversion of the Brown Geeks website
                              from WordPress to React, reviewed code for The
                              Brown Geeks website, & corrected coding issues &
                              debugged problems.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
