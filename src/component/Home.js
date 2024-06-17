import { useNavigate } from "react-router-dom";
import Countdown, { zeroPad } from "react-countdown";
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CountdownTimer from "./CountdownTimer";

function Home() {
  const navigate = useNavigate();
  const handleBuySolana = () => {
    navigate("/sol"); // The route you want to navigate to
  };

  const handleBuyEthereum = (event) => {
    // Optional: Prevent default if conditional logic is needed
    event.preventDefault();
    // window.open("https://eth.fuzuki.io/", "_blank");
    navigate("/https://app.uniswap.org"); // The route you want to navigate to
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
    navigator?.clipboard
      ?.writeText("0x63b0C0c2E4A1Ef8e2862c64ACc84e2459Dc426CD")
      .then(() => {
        toast.success("Address copied to clipboard");
      })
      .catch((error) => {
        toast.error("Failed to copy text to clipboard");
        // console.error("Clipboard copy failed:", error);
      });
  };

  // Slider Setting
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
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
          <div className="header-right ms-auto">
            <div className="more-statics d-flex align-items-center">
              <p className="text-gradient">Explore On</p>
              <a className="round-btn ms-2 ms-lg-3" href="https://www.geckoterminal.com/eth/pools/0x8e5827e417e9a24105f5c7488c8b78a445e07b46?utm_source=coingecko&utm_medium=referral&utm_campaign=searchresults" target="_blank">
                <img src="/images/icons/ic-geckoterminal.png" alt="geckoterminal" title="Gecko Terminal" />
              </a>
              <a className="round-btn ms-2 ms-lg-3" href="https://etherscan.io/token/0x63b0C0c2E4A1Ef8e2862c64ACc84e2459Dc426CD" target="_blank">
                <img src="/images/icons/ic-etherscan.png" alt="Etherscan" title="Etherscan" />
              </a>
              <a className="round-btn ms-2 ms-lg-3" href="https://www.dextools.io/app/en/ether/pair-explorer/0x8e5827e417e9a24105f5c7488c8b78a445e07b46?t=1714110291907" target="_blank">
                <img src="/images/icons/ic-dextools.png" alt="dextools" title="Dex Tools" />
              </a>
              <a className="round-btn ms-2 ms-lg-3" href="https://coinmarketcap.com/dexscan/ethereum/0x8e5827e417e9a24105f5c7488c8b78a445e07b46/" target="_blank">
                <img src="/images/icons/ic-coinmarket.png" alt="Coin Market Cap" title="Coin Market Cap" />
              </a>
            </div>
          </div>
          {/* <a className="buy-now-btn" href="https://www.dextools.io/app/en/ether/pair-explorer/0x8e5827e417e9a24105f5c7488c8b78a445e07b46?t=1714110291907" target="_blank">For more on Dextools</a> */}
        </div>
      </header>
      <section className="fuziku-info">
        <div className="container">
          <div className="fuziku-info-content">
            <div className="row align-items-center">
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
                      href="https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x63b0C0c2E4A1Ef8e2862c64ACc84e2459Dc426CD"
                      className="buy-now-btn"
                      target="_blank"
                    >
                      Buy On Uniswap
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex flex-column ps-lg-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="road-map">
        <div className="container">
          <div className="section-title">
            <h4>Road Map</h4>
          </div>

          <ul className="road-map-stages-list">
            <li className="row">
              <div className="col-lg-4">
                <div className="stage-media mb-4 mb-lg-0">
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
                      Declaration of Tokenomics: The foundational economics and
                      allocation details for the Fuzuki ecosystem will be
                      established.
                    </li>
                    <li>
                      Deployment of New Fuzuki Token Contract: A new smart
                      contract for the Fuzuki token will be deployed, ensuring
                      improved security and functionality.
                    </li>
                    <li>
                      Uniswap Listing: The Fuzuki token will be listed on the
                      decentralized exchange (DEX) Uniswap on April 25, 2024, at
                      9:15 AM GMT, facilitating initial public access and
                      trading.
                    </li>
                    <li>
                      Potential Listings on Centralized Exchanges: Efforts will
                      be made to list the Fuzuki token on multiple centralized
                      exchanges to increase liquidity and accessibility.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="row flex-lg-row-reverse">
              <div className="col-lg-4 text-lg-end">
                <div className="stage-media mb-4 mb-lg-0">
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
                      Launch of DEX: The Fuzuki ecosystem will expand by
                      launching its decentralized exchange, improving the user
                      experience and control over trading activities.
                    </li>
                    <li>
                      Introduction of New Token - Skulk: A new token, Skulk,
                      will be introduced, diversifying the ecosystem’s offerings
                      and providing new opportunities for investment and
                      utility.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="row">
              <div className="col-lg-4">
                <div className="stage-media mb-4 mb-lg-0">
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
                    <li>
                      Ecosystem Declaration: A comprehensive declaration
                      outlining the future vision, integration strategies, and
                      long-term goals of the Fuzuki ecosystem will be published,
                      setting the stage for sustained growth and innovation.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="progress-bar">
        <div className="container">
            <ul className="progress-steps">
              <li className="progress-step last-completed-step">
                <div className="shape"></div>
                <div className="content">
                  <span className="date">June 2024</span>
                  <span className="title">Polygon</span>
                </div>
              </li>
              <li className="progress-step">
                <div className="shape"></div>
                <div className="content">
                  <span className="date">July 2024</span>
                  <span className="title">Solana</span>
                </div>
              </li>
              <li className="progress-step">
                <div className="shape"></div>
                <div className="content">
                  <span className="date">August 2024</span>
                  <span className="title">Game Platform</span>
                </div>
              </li>
              <li className="progress-step">
                <div className="shape"></div>
                <div className="content">
                  <span className="date">September 2024</span>
                  <span className="title">DEX Beta</span>
                </div>
              </li>
              <li className="progress-step">
                <div className="shape"></div>
                <div className="content">
                  <span className="date">Oct 2024</span>
                  <span className="title">DEX</span>
                </div>
              </li>
              <li className="progress-step">
                <div className="shape"></div>
                <div className="content">
                  <span className="date">Dec 2024</span>
                  <span className="title">DEX Listing</span>
                </div>
              </li>
            </ul>
        </div>
      </section>

      <section className="client-testimonial">
        <div className="container">
          <div className="section-title mb-5">
            <h4>We are covered on</h4>
          </div>
          <Slider {...settings}>
            <a className="testimonial-box" href="https://www.globenewswire.com/en/search/organization/Fuzuki%2520Inu" title="Globenewswire" target="_blank">
              <div className="brand-media">
                <img src="/images/globenewswire.png" alt="globenewswire" />
              </div>
            </a>
            <a className="testimonial-box" href="https://businessheadline.in/brand-post/crypto/fuzuki-inu-the-shiba-kanji-pre-sale-success-journey/" title="Businessheadline" target="_blank">
              <div className="brand-media">
                <img src="/images/business-headline.png" alt="business-headline" />
              </div>
            </a>
            <a className="testimonial-box" href="https://beamstart.com/news/fuzuki-inu--the-shiba-17132726604820" title="Beamstart" target="_blank">
              <div className="brand-media">
                <img src="/images/beamstart.png" alt="beamstart" />
              </div>
            </a>
            <a className="testimonial-box" href="https://finance.yahoo.com/news/fuzuki-inu-shiba-kanji-pre-130000826.html" title="Yahoo Finance" target="_blank">
              <div className="brand-media">
                <img src="/images/yahoo-finance.png" alt="Yahoo Finance" />
              </div>
            </a>
            <a className="testimonial-box" href="https://www.nevadabusinessherald.com/article/695960788-fuzuki-inu-shiba-kanji-the-rising-star-of-the-blockchain" title="Nevadabusinessherald" target="_blank">
              <div className="brand-media">
                <img src="/images/nevadabusinessherald.png" alt="nevadabusinessherald" />
              </div>
            </a>
            <a className="testimonial-box" href="https://www.einnews.com/pr_news/695960788/fuzuki-inu-shiba-kanji-the-rising-star-of-the-blockchain" title="Einnews" target="_blank">
              <div className="brand-media">
                <img src="/images/einnews.png" alt="einnews" />
              </div>
            </a>
            <a className="testimonial-box" href="https://3dprinting.einnews.com/pr_news/695960788/fuzuki-inu-shiba-kanji-the-rising-star-of-the-blockchain" title="3dprinting Einnews" target="_blank">
              <div className="brand-media">
                <img src="/images/3dprinting.png" alt="3dprinting" />
              </div>
            </a>
            <a className="testimonial-box" href="https://www.einpresswire.com/article/695960788/fuzuki-inu-shiba-kanji-the-rising-star-of-the-blockchain" title="Einpresswire" target="_blank">
              <div className="brand-media">
                <img src="/images/einpresswire.png" alt="einpresswire" />
              </div>
            </a>
            <a className="testimonial-box" href="https://businessheadline.in/brand-post/technology/announcing-fuzuki-inu-the-shiba-kanji-pre-sale-dont-miss-the-opportunity-be-an-early-investor/" title="Businessheadline" target="_blank">
              <div className="brand-media">
                <img src="/images/business-headline.png" alt="business-headline" />
              </div>
            </a>
            <a className="testimonial-box" href="https://www.todayinbusiness.com/article/695960788-fuzuki-inu-shiba-kanji-the-rising-star-of-the-blockchain" title="Todayinbusiness" target="_blank">
              <div className="brand-media">
                <img src="/images/todayinbusiness.png" alt="todayinbusiness" />
              </div>
            </a>
            <a className="testimonial-box" href="https://finance.yahoo.com/news/fuzuki-inu-shiba-kanji-rising-160000678.html" title="Yahoo Finance" target="_blank">
              <div className="brand-media">
                <img src="/images/yahoo-finance.png" alt="Yahoo Finance" />
              </div>
            </a>
            <a className="testimonial-box" href="https://gdc.einnews.com/pr_news/695960788/fuzuki-inu-shiba-kanji-the-rising-star-of-the-blockchain" title="Gdc Einnews" target="_blank">
              <div className="brand-media">
                <img src="/images/gdc-einnews.png" alt="gdc-einnews" />
              </div>
            </a>
            <a className="testimonial-box" href="https://ems.einnews.com/pr_news/695960788/fuzuki-inu-shiba-kanji-the-rising-star-of-the-blockchain" title="Ems Einnews" target="_blank">
              <div className="brand-media">
                <img src="/images/ems-einnews.png" alt="ems-einnews" />
              </div>
            </a>
          </Slider>
        </div>
      </section>
      <footer>
        <div className="container">
            <div className="countdown-timer mb-4 mb-lg-5">
              {/* <h4 className="animateDownUp">We  are Live on Uniswap.</h4> */}
              {/* <Countdown renderer={renderer} date={"2024-04-25T14:45:09"} /> */}
              {/* <CountdownTimer /> */}
              <p className="contract-address d-lg-flex align-items-lg-center">
                <span className="pe-lg-2">Fuzuki Inu Contract Address :{" "}</span>
                <div className="d-flex align-items-center">
                  <span className="copy-btn">
                    0x63b0C0c2E4A1Ef8e2862c64ACc84e2459Dc426CD{" "}
                  </span>
                  <span onClick={handleClick} className="copy-code">
                    <img src="/images/icons/icCopy.png" alt="copy icon" />
                  </span>
                </div>
              </p>
            </div>
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div className="desclaimer-text">
                <p className="mb-3 mb-xl-0">
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
                    <a target="_blank" href="https://m.facebook.com/fuzuki.inu" title="Facebook">
                      <img
                        src="/images/icons/ic-facebook.svg"
                        alt="facebook icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/Fuzuki_Inu" title="Twitter">
                      <img
                        src="/images/icons/ic-twitter.svg"
                        alt="twitter icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://t.me/fuzukitoken" title="Telegram">
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
                      title="Instagram"
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
                      title="Youtube"
                    >
                      <img
                        src="/images/icons/ic-youtube.svg"
                        alt="Youtube icon"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      href=" https://discord.com/invite/VA8dtvtpce"
                      title="Discord"
                    >
                      <img
                        src="/images/icons/ic-discord.svg"
                        alt="Discord icon"
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </footer>
    </div>
  );
}

export default Home;
