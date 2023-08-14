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
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/mySandwich/MySandwich.webp"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>My Sandwich</span>
                          <h3>Google UX Design Professional</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              This is the case study for My Sandwich, a product
                              that allows people to order healthy sandwich
                              choices for them or their family.
                            </p>
                            <h3>My Role:</h3>
                            <ul>
                              <li>Idea</li>
                              <li>Wireframes</li>
                              <li>Prototypes</li>
                              <li>Reasearch</li>
                              <li>Development</li>
                              <li>Experience</li>
                            </ul>
                            <h3>Project Goal:</h3>
                            <p>
                              To allow busy people to order new & great tasting
                              foods.
                            </p>
                            <h3>Target Audience</h3>
                            <p>
                              Busy people that want to order something quick &
                              healthy.
                            </p>
                            <h3>Constraints:</h3>
                            <p>
                              Anyone that orders sandwiches at least once a
                              week.
                            </p>
                            <p>Must reside in a city or a town.</p>
                            <p>
                              Must have a fairly even distribution of genders,
                              one user of ATs, one user with a visual
                              impairment, two users who aren&#39;t fluent in
                              English, one user who is a young professional, &
                              one user who is an advanced professional
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
                                <span>April, 2023</span>
                              </li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
                          <h3>Wireframes:</h3>
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
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/diyProjects/DIYProjects.webp"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>DIY Projects</span>
                          <h3>Google UX Design Professional</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when {`you're`} trying
                              to figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              will represent the target product.
                            </p>
                          </div>
                          <div className="detailbox">
                            <ul>
                              <li>
                                <span className="first">Client</span>
                                <span>Alvaro Morata</span>
                              </li>
                              <li>
                                <span className="first">Category</span>
                                <span>
                                  <a href="#">Detail</a>
                                </span>
                              </li>
                              <li>
                                <span className="first">Date</span>
                                <span>March 07, 2021</span>
                              </li>
                              <li>
                                <span className="first">Share</span>
                                <ul className="share">
                                  <li>
                                    <a href="#">{fb}</a>
                                  </li>
                                  <li>
                                    <a href="#">{twitter}</a>
                                  </li>
                                  <li>
                                    <a href="#">{insta}</a>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
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
                                    data-img-url="img/portfolio/1.jpg"
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
                          <img src="img/thumbs/4-2.jpg" alt="" />
                          <div
                            className="main"
                            data-img-url="img/portfolio/nutritionFacts/NutrionFacts.webp"
                          ></div>
                        </div>
                        <div className="portfolio_main_title">
                          <span>Nutrition Facts</span>
                          <h3>Google UX Design Professional</h3>
                          <div></div>
                        </div>
                        <div className="main_details">
                          <div className="textbox">
                            <p>
                              We live in a world where we need to move quickly
                              and iterate on our ideas as flexibly as possible.
                              Building mockups strikes the ideal balance ease of
                              modification.
                            </p>
                            <p>
                              Mockups are useful both for the creative phase of
                              the project - for instance when {`you're`} trying
                              to figure out your user flows or the proper visual
                              hierarchy - and the production phase when they
                              will represent the target product.
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
                                <span>April, 2023</span>
                              </li>
                              <li></li>
                            </ul>
                          </div>
                        </div>
                        <div className="additional_images">
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
