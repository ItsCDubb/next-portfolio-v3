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
                          <p>
                            <a
                              href="https://www.figma.com/file/WZYnaj5tNoeYsBAoRMS7P5/My-Sandwich?type=design&node-id=0-1&mode=design&t=IMXAmFXJxClaStYF-0"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              My Sandwich Wireframes
                            </a>
                          </p>
                          <br />
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
                          <p>
                            <a
                              href="https://www.figma.com/proto/WZYnaj5tNoeYsBAoRMS7P5/My-Sandwich?type=design&node-id=375-888&t=7H0CeRssjzSDqTsZ-1&scaling=scale-down&page-id=375%3A856&starting-point-node-id=420%3A1918&mode=design"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              My Sandwich Hi-Fi Prototype
                            </a>
                          </p>
                          <br />
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
                                  <a href="#">Responsive Website</a>
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
                          <p>
                            <a
                              href="https://www.figma.com/file/HVbzIN37qASblk7arA7q6Z/DIY-Projects?type=design&node-id=11-1097&mode=design&t=IMXAmFXJxClaStYF-0"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              Android Digital Wireframes (Vertical)
                            </a>
                          </p>
                          <p>
                            <a
                              href="https://www.figma.com/file/HVbzIN37qASblk7arA7q6Z/DIY-Projects?type=design&node-id=142-396&mode=design&t=IMXAmFXJxClaStYF-0"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              Android Digital Wireframes (Horizonal)
                            </a>
                          </p>
                          <p>
                            <a
                              href="https://www.figma.com/file/HVbzIN37qASblk7arA7q6Z/DIY-Projects?type=design&node-id=0-1&mode=design&t=IMXAmFXJxClaStYF-0"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              Desktop Digital Wireframe
                            </a>
                          </p>
                          <br />
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
                          <p>
                            <a
                              href="https://www.figma.com/file/HVbzIN37qASblk7arA7q6Z/DIY-Projects?type=design&node-id=239-1192&mode=design&t=IMXAmFXJxClaStYF-0"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              Web Prototype
                            </a>
                          </p>
                          <br />
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
                              Give users access to information on nutritional
                              values that they might not have access to
                              normally.
                            </p>
                            <h4>Target Audience:</h4>
                            <p>
                              People aren&#39;t able to reliably find facts in a
                              fun or insightful way.
                            </p>
                            <h4>Constraints:</h4>
                            <p>
                              Honestly, for this particular project there
                              weren&#39;t any constraints or challenges for me
                              to overcome.
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
                                  <a href="#">App & Responsive Website</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>July, 2023</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <h4>Wireframes:</h4>
                          <p>
                            <a
                              href="https://www.figma.com/file/8VwcCJSGOMLB3N5vgmHFs5/Nutrion-Facts?type=design&node-id=2-5&mode=design&t=IMXAmFXJxClaStYF-0"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              Nutrion Facts App Digital Wireframes
                            </a>
                          </p>
                          <br />
                        </div>
                        <h4>User Testing (App):</h4>
                        <h5>Round 1:</h5>
                        <p>
                          Information people came to find should be easily
                          accessible.
                        </p>
                        <p>Information should be easy to find quickly.</p>
                        <p>
                          The process of searching for information should stay
                          easy.
                        </p>
                        <br />
                        <h4>Mockups (App):</h4>
                        <p>
                          <a
                            href="https://www.figma.com/proto/8VwcCJSGOMLB3N5vgmHFs5/Nutrion-Facts?type=design&node-id=21-160&t=IMXAmFXJxClaStYF-0&scaling=scale-down&page-id=21%3A159&starting-point-node-id=21%3A160"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="porfolio_popup_link"
                          >
                            Nutrion Facts App Hi-Fi Prototype
                          </a>
                        </p>
                        <br />
                        <h4>User Testing (App):</h4>
                        <h5>Round 2:</h5>
                        <p>
                          People found it upsetting that there wasn&#39;t a
                          place for them to view what was already added.
                        </p>
                        <p>People like the process as a whole.</p>
                        <p>People like how easy the app is to use.</p>
                        <br />
                        <div className="additional_images">
                          <h4>Wireframes (Website):</h4>
                          <p>
                            <a
                              href="https://www.figma.com/file/8VwcCJSGOMLB3N5vgmHFs5/Nutrion-Facts?type=design&node-id=1-27&mode=design&t=IMXAmFXJxClaStYF-0"
                              target="_blank"
                              rel="noopener noreferrer nofollow"
                              className="porfolio_popup_link"
                            >
                              Nutrion Facts Web Digital Wireframes
                            </a>
                          </p>
                        </div>
                        <h4>User Testing (Website):</h4>
                        <h5>Round 1:</h5>
                        <p>
                          Information people came to find should be easily
                          accessible.
                        </p>
                        <p>Information should be easy to find quickly.</p>
                        <p>
                          The process of searching for information should stay
                          easy.
                        </p>
                        <br />
                        <h4>Mockups (Website):</h4>
                        <h5>Desktop</h5>
                        <p>
                          <a
                            href="https://www.figma.com/proto/8VwcCJSGOMLB3N5vgmHFs5/Nutrion-Facts?type=design&node-id=152-3219&t=IMXAmFXJxClaStYF-0&scaling=scale-down&page-id=132%3A2380&starting-point-node-id=152%3A3212"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="porfolio_popup_link"
                          >
                            Hi-Fi Prototype
                          </a>
                        </p>
                        <h5>Tablet</h5>
                        <p>
                          <a
                            href="https://www.figma.com/proto/8VwcCJSGOMLB3N5vgmHFs5/Nutrion-Facts?type=design&node-id=165-3930&t=IMXAmFXJxClaStYF-0&scaling=scale-down&page-id=165%3A3910&starting-point-node-id=165%3A3930&show-proto-sidebar=1"
                            target="_blan"
                            rel="noopener noreferrer nofollow"
                            className="porfolio_popup_link"
                          >
                            Hi-Fi Prototype
                          </a>
                        </p>
                        <h5>Phone</h5>
                        <p>
                          <a
                            href="https://www.figma.com/proto/8VwcCJSGOMLB3N5vgmHFs5/Nutrion-Facts?type=design&node-id=182-4318&t=IMXAmFXJxClaStYF-0&scaling=scale-down&page-id=182%3A4317&starting-point-node-id=182%3A4318"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="porfolio_popup_link"
                          >
                            Hi-Fi Prototype
                          </a>
                        </p>
                        <br />
                        <h4>User Testing (Website):</h4>
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
                          Throughout this project I learned the value of making
                          my designs easily accessible for people to use
                          regardless of what their socio-economic level is.
                        </p>

                        <br />
                        <h5>Next steps:</h5>
                        <ul>
                          <li>
                            I would like to add a profile feature that shows a
                            user their previously researched information, in
                            order to make it easier to find that in the future.
                          </li>
                          <li>
                            I would like to add a research page so that people
                            can see what what they&#39;ve previously researched.
                          </li>
                          <li>
                            II think making all the information about the
                            nutrition facts real life would be helpful in future
                            designs.
                          </li>
                        </ul>
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
