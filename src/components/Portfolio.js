import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";
import { fb, insta, soundcloud, text, twitter } from "../svgImage";
import { aTagClick, dataImage } from "../utilits";
import ModalBox from "./ModalBox";
import Popup from "./Popup";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
      });
    }, 300);
    return () => isotope.current.destroy();
  }, []);
  useEffect(() => {
    dataImage();
    aTagClick();
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  // popup
  const [video, setVideo] = useState(false);
  const [videoContent, setVideoContent] = useState({ name: "", src: "" });
  const showPopup = (name, src) => {
    setVideo(true);
    setVideoContent({ name, src });
  };
  // Model Box
  const [modal, setModal] = useState(0);
  return (
    <div className="aali_tm_section help" id="portfolio">
      {video && <Popup close={setVideo} content={videoContent} />}
      <div className="aali_tm_portfolio wow fadeInUp" data-wow-duration="1s">
        <div className="container">
          <div
            className="aali_tm_main_title"
            data-text-align="center"
            data-color="light"
          >
            <h3>My portfolio</h3>
          </div>
          <div className="portfolio_filter">
            <ul>
              <li>
                <a onClick={handleFilterKeyChange("*")} className="current">
                  All
                </a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("react")}>React</a>
              </li>
              <li>
                <a onClick={handleFilterKeyChange("next")}>Next</a>
              </li>
              {/* <li>
                <a onClick={handleFilterKeyChange("reactNative")}>
                  React Native
                </a>
              </li> */}
              <li>
                <a onClick={handleFilterKeyChange("design")}>Design</a>
              </li>
            </ul>
          </div>
          <div className="portfolio_list">
            <ul className="gallery_zoom">
              <li className="filter-item react">
                <div className="list_inner">
                  <a
                    href="https://clone-ce73b.web.app/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <div className="image">
                      <img
                        src="img/portfolio/react/amazon/amazon-thumb.png"
                        alt="Amazon Logo"
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/react/amazon/amazon-thumb.png"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>Amazon (Look-alike)</span>
                      <h3>eCommerce Platform</h3>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-item react">
                <div className="list_inner">
                  <a
                    href="https://netflix-clone-fe7b3.web.app/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <div className="image">
                      <img
                        src="img/portfolio/react/netflix/netflix-thumb.png"
                        alt="Netflix Logo"
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/react/netflix/netflix-thumb.png"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>Netflix (Look-alike)</span>
                      <h3>Streaming Platform</h3>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-item react">
                <div className="list_inner">
                  <a
                    href="https://slack-look-a-like.web.app/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <div className="image">
                      <img
                        src="img/portfolio/react/slack/slack-thumb.png"
                        alt="aali image"
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/react/slack/slack-thumb.png"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>Slack (Look-alike)</span>
                      <h3>Communication Platform</h3>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-item react">
                <div className="list_inner">
                  <a
                    href="https://twitter-look-a-like.web.app/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <div className="image">
                      <img
                        src="img/portfolio/react/twitter/twitter-thumb.png"
                        alt="Twitter Logo"
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/react/twitter/twitter-thumb.png"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>Twitter (Look-alike)</span>
                      <h3>Social Networking Platform</h3>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-item react">
                <div className="list_inner">
                  <a
                    href="https://cwtechnologies.co/"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <div className="image">
                      <img
                        src="img/portfolio/react/cwtechnologies/CWTechnologies-thumb.png"
                        alt="CW Technologies Logo"
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/react/cwtechnologies/CWTechnologies-thumb.png"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>CW Technologies, LLC</span>
                      <h3>My Company</h3>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-item next">
                <div className="list_inner">
                  <a
                    href="https://www.chriswarren.dev"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                  >
                    <div className="image">
                      <img
                        src="img/portfolio/next/chriswarren-thumb.png"
                        alt="aali image"
                      />
                      <div
                        className="main"
                        data-img-url="img/portfolio/next/chriswarren-thumb.png"
                      />
                    </div>
                    <div className="overlay" />
                    <div className="details">
                      <span>Chris Warren</span>
                      <h3>This Website</h3>
                    </div>
                  </a>
                </div>
              </li>
              <li className="filter-item design">
                <div className="list_inner">
                  <div className="image">
                    <img
                      src="img/portfolio/mySandwich/thumb/MySandwich-thumb.png"
                      alt="My Sandwich"
                    />
                    <div
                      className="main"
                      data-img-url="img/portfolio/mySandwich/thumb/MySandwich-thumb.png"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Google UX Design Professional</span>
                    <h3>My Sandwich</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(1)}
                  />
                  <div className={modal === 1 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="My Sandwich" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/mySandwich/mySandwich-header.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>My Sandwich</span>
                          <h3>Google UX Design Professional</h3>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              This is the case study for My Sandwich, a product
                              that allows people to order healthy sandwich
                              choices for them or their family.
                            </p>
                            <h4>My Roles:</h4>
                            <p>Idea</p>
                            <p>Wireframes</p>
                            <p>Prototypes</p>
                            <p>Reasearch</p>
                            <p>Development</p>
                            <p>Experience</p>
                            <h4>The Goal:</h4>
                            <p>
                              To allow busy people to order new & great tasting
                              foods.
                            </p>
                            <h4>Target Audience:</h4>
                            <p>
                              Busy people that want to order something quick &
                              healthy.
                            </p>
                            <h4>Constraints:</h4>
                            <p>
                              Honestly, for this particular project there
                              weren't any constraints or challenges for me to
                              overcome.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Certificate</span>
                                <span>Google UX Design Professional</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">App</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>April - June, 2023</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <h4>Wireframes:</h4>
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 1"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes1.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 2"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 3"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes3.png"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <h4>User Testing:</h4>
                          <h5>Round 1:</h5>
                          <p>
                            People found it difficult to navigate to the add
                            ingredient screen.
                          </p>
                          <p>People like the ordering process.</p>
                          <p>People like being able to track their order.</p>
                          <br />
                          <h4>Mockups:</h4>
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/mySandwich/mockups/mySandwich-mockups1.png"
                                    alt="My Sandwich Mockups"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/mockups/mySandwich-mockups1.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/mySandwich/mockups/mySandwich-mockups2.png"
                                    alt="My Sandwich Mockups"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/mockups/mySandwich-mockups2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/mySandwich/mockups/mySandwich-mockups3.png"
                                    alt="My Sandwich Mockups"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/mockups/mySandwich-mockups3.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/portfolio/mySandwich/mockups/mySandwich-mockups4.png"
                                    alt="My Sandwich Mockups"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/mockups/mySandwich-mockups4.png"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <h4>User Testing:</h4>
                          <h5>Round 2:</h5>
                          <p>
                            People found it upsetting that there wasn&#39;t a
                            place for them to view what was already added.
                          </p>
                          <p>People like the process as a whole.</p>
                          <p>People like how easy the app is to use.</p>
                          <br />
                          <h5>Impact:</h5>
                          <p>
                            The impact of my designs really wasn&#39;t about the
                            project itself, but opening up avenues that people
                            didn&#39;t even know were possible was.
                          </p>
                          <p>
                            "This was an easy task" was something that I really
                            liked hearing & made an impact on me.
                          </p>
                          <br />
                          <h5>What I learned:</h5>
                          <p>
                            Throughout this project I learned the value of
                            making my designs easily accessible for people to
                            use regardless of what their ability level is.
                          </p>
                          <br />
                          <h5>Next steps:</h5>
                          <ul>
                            <li>
                              I would like to add a feature that shows a user
                              their previously favorited items, in order to make
                              it easier to find & order in the future.
                            </li>
                            <li>
                              I would like to add an order page so that people
                              can know what they&#39;ve previously ordered & go
                              through the process of ordering their food.
                            </li>
                            <li>
                              I think making all the ingredients & signatures
                              real life pictures would be helpful in future
                              designs
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item design">
                <div className="list_inner">
                  <div className="image">
                    <img
                      src="img/portfolio/diyProjects/thumb/DIYProjects-thumb.png"
                      alt="DIY Projects"
                    />
                    <div
                      className="main"
                      data-img-url="img/portfolio/diyProjects/thumb/DIYProjects-thumb.png"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Google UX Design Professional</span>
                    <h3>DIY Projects</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(2)}
                  />
                  <div className={modal === 2 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="My Sandwich" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/diyProjects/diyProjects-header.png"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>DIY Projects</span>
                          <h3>Google UX Design Professional</h3>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              This is the case study for DIY Projects, a product
                              that allows people to find diy projects to work
                              on.
                            </p>
                            <h4>My Roles:</h4>
                            <p>Idea</p>
                            <p>Wireframes</p>
                            <p>Prototypes</p>
                            <p>Reasearch</p>
                            <p>Development</p>
                            <p>Creating the Experience</p>
                            <h4>The Goal:</h4>
                            <p>To allow people to find a project to work on.</p>
                            <h4>Target Audience:</h4>
                            <p>
                              People who can&#39;t find a project to work on
                              without being overwhelmed.
                            </p>
                            <h4>Constraints:</h4>
                            <p>
                              Honestly, for this particular project there
                              weren't any constraints or challenges for me to
                              overcome.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Certificate</span>
                                <span>Google UX Design Professional</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Website</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>June - July, 2023</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <h4>Wireframes:</h4>
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 1"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes1.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 2"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 3"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes3.png"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <h4>User Testing:</h4>
                          <h5>Round 1:</h5>
                          <p>
                            People found it easy to navigate to the different
                            projects.
                          </p>
                          <p>
                            People like finding projects that they can do in a
                            weekend.
                          </p>
                          <p>
                            Users like being able to search for various
                            projects.
                          </p>
                          <br />
                          <h4>Mockups:</h4>
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="DIY Projects Digital Wireframe"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/MySandwich.webp"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="DIY Projects Digital Wireframe"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="DIY Projects Digital Wireframe"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <h4>User Testing:</h4>
                          <h5>Round 2:</h5>
                          <p>
                            People found it upsetting that there wasn&#39;t a
                            place for them to view what projects they had
                            already worked on.
                          </p>
                          <p>People like the site as a whole.</p>
                          <p>
                            People like how easy the site is to use as a whole.
                          </p>
                          <br />
                          <h5>Impact:</h5>
                          <p>
                            The impact of my designs really wasn&#39;t about the
                            project itself, but opening up avenues for users to
                            find projects they could do themselves.
                          </p>
                          <p>
                            “That was a fun experience.” really impacted me.
                          </p>
                          <br />
                          <h5>What I learned:</h5>
                          <p>
                            I learned how to make my websites responsive &
                            another tool to use in my tool box
                          </p>
                          <br />
                          <h5>Next steps:</h5>
                          <ul>
                            <li>
                              Conduct more usability testing on the new website.
                            </li>
                            <li>
                              Build more of the website & make it functional.
                            </li>
                            <li>
                              Identify any other areas that cause problems for
                              users & ideate on how to fix them creatively.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
              <li className="filter-item design">
                <div className="list_inner">
                  <div className="image">
                    <img
                      src="img/portfolio/nutritionFacts/thumb/nutrionfacts-thumb.png"
                      alt="My Sandwich"
                    />
                    <div
                      className="main"
                      data-img-url="img/portfolio/nutritionFacts/thumb/nutrionfacts-thumb.png"
                    />
                  </div>
                  <div className="overlay" />
                  {text}
                  <div className="details">
                    <span>Google UX Design Professional</span>
                    <h3>Nutrition Facts</h3>
                  </div>
                  <a
                    className="aali_tm_full_link portfolio_popup"
                    href="#"
                    onClick={() => setModal(3)}
                  />
                  <div className={modal === 3 ? "" : "hidden_content"}>
                    <ModalBox close={setModal}>
                      <div className="popup_details">
                        <div className="top_image">
                          <img src="img/thumbs/4-2.jpg" alt="My Sandwich" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/nutritionFacts/NutrionFacts.webp"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Nutriton Facts</span>
                          <h3>Google UX Design Professional</h3>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              This is the case study for nutrition facts, a
                              product that allows people to find nutrition
                              information on different ingredients.
                            </p>
                            <h4>My Roles:</h4>
                            <p>Idea</p>
                            <p>Wireframes</p>
                            <p>Prototypes</p>
                            <p>Reasearch</p>
                            <p>Development</p>
                            <p>Experience</p>
                            <h4>The Goal:</h4>
                            <p>
                              To allow busy people to order new & great tasting
                              foods.
                            </p>
                            <h4>Target Audience:</h4>
                            <p>
                              Busy people that want to order something quick &
                              healthy.
                            </p>
                            <h4>Constraints:</h4>
                            <p>
                              Honestly, for this particular project there
                              weren't any constraints or challenges for me to
                              overcome.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Certificate</span>
                                <span>Google UX Design Professional</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">App & Website</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>May, 2023</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <h4>Wireframes:</h4>
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 1"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes1.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 2"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes2.png"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="My Sandwich Wireframes 3"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/wireframes/mySandwich-wireframes3.png"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <h4>User Testing:</h4>
                          <h5>Round 1:</h5>
                          <p>
                            People found it difficult to navigate to the add
                            ingredient screen.
                          </p>
                          <p>People like the ordering process.</p>
                          <p>People like being able to track their order.</p>
                          <br />
                          <h4>Mockups:</h4>
                          <ul>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/mySandwich/MySandwich.webp"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/2.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="my_image">
                                  <img
                                    src="img/thumbs/4-2.jpg"
                                    alt="aali image"
                                  />
                                  <div
                                    className="main"
                                    data-img-url="img/portfolio/3.jpg"
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                          <h4>User Testing:</h4>
                          <h5>Round 2:</h5>
                          <p>
                            People found it upsetting that there wasn&#39;t a
                            place for them to view what was already added.
                          </p>
                          <p>People like the process as a whole.</p>
                          <p>People like how easy the app is to use.</p>
                          <br />
                          <h5>Impact:</h5>
                          <p>
                            The impact of my designs really wasn&#39;t about the
                            project itself, but openin up avenues that people
                            didn&#39;t even know were possible was.
                          </p>
                          <p>
                            "This was an easy task" was something that I really
                            liked hearing & made an impact on me.
                          </p>
                          <br />
                          <h5>What I learned:</h5>
                          <p>
                            Throughout this project I learned the value of
                            making my designs easily accessible for people to
                            use regardless of what their ability level is.
                          </p>
                          <br />
                          <h5>Next steps:</h5>
                          <ul>
                            <li>
                              I would like to add a feature that shows a user
                              their previously favorited items, in order to make
                              it easier to find & order in the future.
                            </li>
                            <li>
                              I would like to add an order page so that people
                              can know what they&#39;ve previously ordered & go
                              through the process of ordering their food.
                            </li>
                            <li>
                              I think making all the ingredients & signatures
                              real life pictures would be helpful in future
                              designs
                            </li>
                          </ul>
                        </div>
                      </div>
                    </ModalBox>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
