import { useNavigate } from "react-router-dom";
import Countdown, { zeroPad } from "react-countdown";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const navigate = useNavigate();
  const handleBuySolana = () => {
    navigate("/sol"); // The route you want to navigate to
  };

  const handleBuyEthereum = (event) => {
    // Optional: Prevent default if conditional logic is needed
    event.preventDefault();
    // window.open("https://eth.fuzuki.io/", "_blank");
    navigate('/Coming'); // The route you want to navigate to
  };
  const Completionist = () => <span>We are launched!!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="Hour">
          {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
        </div>
      );
    }
  };
  const handleClick = () => {
    navigator.clipboard
      .writeText("0x4d088920d5D4bB74F0B1626b181f22438d255c83")
      .then(() => {
        toast.success("Address copied to clipboard");
      })
      .catch((error) => {
        toast.error("Failed to copy text to clipboard");
        console.error("Clipboard copy failed:", error);
      });
  };

  // Slider Setting
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-wrapper">
      <header>
        <div className="container">
          <a href="https://fuzuki.io/" className="brand-logo">
            <img src="/images/fuzuki_inu_logo.png" alt="Fuzuki Inu Logo" />
          </a>
        </div>
      </header>
      <section className="fuziku-info">
        <div className="container">
          <div className="fuziku-info-content">
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="fuziku-info-media">
                  <div className="media-img">
                    <img src="/images/fuzuki_inu.png" alt="Fuzuki Inu" />
                  </div>
                  <div className="buy-now-btn-wrapper">
                    {/* <a
                      href="#"
                      className="buy-now-btn"
                      onClick={handleBuySolana}
                      target="_blank"
                    >
                      Buy  on Solana
                    </a> */}
                    <a
                      href="https://eth.fuzuki.io/"
                      className="buy-now-btn"
                      onClick={handleBuyEthereum}
                      target="_blank"
                    >
                      Buy On Uniswap
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-between ps-lg-4">
                <div className="fuziku-info-text">
                  <p>
                    Invest and develop compassion with Fuzuki Inu to ensure a
                    brighter tomorrow. Hold with conviction, sprinting towards
                    success with <br />{" "}
                    <span className="brand">Fuzuki Inu: The shiba kanji</span>
                    <a
                      target="_blank"
                      href="https://doc.fuzuki.io/fuzuki-inu-whitepaper.pdf"
                      className="whitepaper-link"
                    >
                      Whitepaper
                    </a>
                  </p>
                </div>

                <div className="countdown-timer">
                  <h4>Uniswap Listing in</h4>
                  <Countdown renderer={renderer} date={"2024-04-25T14:45:09"} />
                  <p className="d-none">
                    Contract Address:{" "}
                    <span className="copy-btn">
                      0x4d088920d5D4bB74F0B1626b181f22438d255c83{" "}
                    </span>
                    <span onClick={handleClick} className="copy-code">
                      <img src="/images/icons/icCopy.png" alt="copy icon" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="client-testimonial">
        <div className="container">
          <Slider {...settings}>
            <div className="testimonial-box">
              <img src="/images/testimonial-1.png" alt="customer review" />
              <img src="/images/testimonial-2.png" alt="customer review" />
            </div>
            <div className="testimonial-box">
              <img src="/images/testimonial-3.png" alt="customer review" />
              <img src="/images/testimonial-4.png" alt="customer review" />
            </div>
            <div className="testimonial-box">
              <img src="/images/testimonial-14.png" alt="customer review" />
              <img src="/images/testimonial-6.png" alt="customer review" />
            </div>
            <div className="testimonial-box">
              <img src="/images/testimonial-7.png" alt="customer review" />
              <img src="/images/testimonial-9.png" alt="customer review" />
            </div>
            <div className="testimonial-box">
              <img src="/images/testimonial-8.png" alt="customer review" />
              <img src="/images/testimonial-10.png" alt="customer review" />
            </div>
            <div className="testimonial-box">
              <img src="/images/testimonial-11.png" alt="customer review" />
              <img src="/images/testimonial-12.png" alt="customer review" />
            </div>
            <div className="testimonial-box">
              <img src="/images/testimonial-13.png" alt="customer review" />
              <img src="/images/testimonial-5.png" alt="customer review" />
            </div>
          </Slider>
        </div>
      </section>

      <section className="road-map">
        <div className="container">
          <div className="section-title">
            <h4>Road Map</h4>
            <p className="text-center">Fuzuki Inu’s journey is planned in three exciting stages to grow and expand its presence in the digital coin world.</p>
          </div>

          <ul className="road-map-stages-list">
            <li className="row">
              <div className="col-lg-4">
                <div className="stage-media mb-4">
                  <img
                    src="/images/Fuzuki_Inu_Launch.png"
                    alt="Fuzuki Inu Launch"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="road-map-stage">
                  <h4>Initial Launch and Token Deployment</h4>
                  <ul>
                    <li>
                    Declaration of Tokenomics: The foundational economics and allocation details for the Fuzuki ecosystem will be established.
                    </li>
                    <li>Deployment of New Fuzuki Token Contract: A new smart contract for the Fuzuki token will be deployed, ensuring improved security and functionality.</li>
                    <li>
                      Uniswap Listing: The Fuzuki token will be listed on the decentralized exchange (DEX) Uniswap on April 25, 2024, at 9:15 AM GMT, facilitating initial public access and trading.
                    </li>
                    <li>
                      Potential Listings on Centralized Exchanges: Efforts will be made to list the Fuzuki token on multiple centralized exchanges to increase liquidity and accessibility.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="row flex-lg-row-reverse">
              <div className="col-lg-4 text-lg-end">
                <div className="stage-media mb-4">
                  <img
                    src="/images/Fuzuki_Inu_CEX_listing.png"
                    alt="Fuzuki Inu CEX listing"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="road-map-stage">
                  <h4>Expansion of Services</h4>
                  <ul>
                    <li>
                      Launch of DEX: The Fuzuki ecosystem will expand by launching its decentralized exchange, improving the user experience and control over trading activities.
                    </li>
                    <li>
                      Introduction of New Token - Skulk: A new token, Skulk, will be introduced, diversifying the ecosystem’s offerings and providing new opportunities for investment and utility.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="row">
              <div className="col-lg-4">
                <div className="stage-media mb-4">
                  <img
                    src="/images/Fuzuki_Inu_DEX_launch.png"
                    alt="Fuzuki Inu DEX launch"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="road-map-stage">
                  <h4>Ecosystem Integration</h4>
                  <ul>
                    <li>Ecosystem Declaration: A comprehensive declaration outlining the future vision, integration strategies, and long-term goals of the Fuzuki ecosystem will be published, setting the stage for sustained growth and innovation.</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="desclaimer-text">
                <p className="mb-3">
                  <span>Disclaimer:</span> The use of fox symbols alongside
                  Fuzuki Inu represents our commitment to creativity and
                  personalization in our blockchain project. It is important to
                  note that there are no real, mythical, or physical foxes
                  involved with our project. Fuzuki Inu is our platform for
                  researching digital innovation and building a strong community
                  spirit.
                </p>
              </div>
            </div>
            <div className="col-xl-5 d-flex justify-content-end">
              <div className="footer-social">
                <ul>
                  <li>
                    <a target="_blank" href="https://m.facebook.com/fuzuki.inu">
                      <img
                        src="/images/icons/ic-facebook.svg"
                        alt="facebook icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/Fuzuki_Inu">
                      <img
                        src="/images/icons/ic-twitter.svg"
                        alt="twitter icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://t.me/fuzukitoken">
                      <img
                        src="/images/icons/ic-telegram.svg"
                        alt="Telegram icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/fuzukiinu/"
                    >
                      <img
                        src="/images/icons/ic-instagram.svg"
                        alt="instagram icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href=" https://www.youtube.com/@FuzukiArt"
                    >
                      <img
                        src="/images/icons/ic-youtube.svg"
                        alt="Youtube icon"
                      />
                    </a>
                  </li>
                  {/* <li>
                    <a
                      target="_blank"
                      href=" https://www.reddit.com/user/fuzuki_Inu/"
                    >
                      <img
                        src="/images/icons/ic-reddit.svg"
                        alt="Reddit icon"
                      />
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </footer>
    </div>
  );
}

export default Home;
