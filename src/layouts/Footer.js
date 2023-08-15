import Link from "next/link";

const Footer = () => {
  return (
    <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                <img src="img/logo/logo.png" alt="aali image" />
              </div>
              <div className="social">
                <span>Connect</span>
                <ul>
                  <li>
                    <a
                      href="https://twitter.com/CDubb2019"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <i className="icon-twitter-1" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/itscwarren/"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      <i className="icon-instagram-3" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  © {new Date().getFullYear()}
                  <Link
                    className="line_anim"
                    href="https://www.chriswarren.dev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chris Warren
                  </Link>{" "}
                  | All rights reserved.
                </p>
              </div>
            </div>
            <span
              className="border moving_effect"
              data-direction="y"
              data-reverse="yes"
            />
          </div>
        </div>
        <span className="square moving_effect" data-direction="x" />
      </div>
    </div>
  );
};

export default Footer;
