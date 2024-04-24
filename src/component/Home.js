import { useNavigate } from "react-router-dom";
import Countdown, { zeroPad } from "react-countdown";

function Home() {
  const navigate = useNavigate();
  const handleBuySolana = () => {
    navigate("/sol"); // The route you want to navigate to
  };

  const handleBuyEthereum = (event) => {
    // Optional: Prevent default if conditional logic is needed
    event.preventDefault();
    window.open("https://eth.fuzuki.io/", "_blank");
    // navigate('/eth'); // The route you want to navigate to
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

  return (
    <div className="home-wrapper">
      <header>
        <div className="container">
          <a href="https://fuzuki.io/" className="brand-logo">
            <img src="/images/fuzuki_inu_logo.png" alt="Fuzuki Inu Logo" />
          </a>
        </div>
      </header>
      <h1>Hello world</h1>
      <section className="fuziku-info">
        <div className="container">
          <div className="fuziku-info-content">
            <div className="row">
              <div className="col-md-6">
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
                    {/* <a
                      href="https://eth.fuzuki.io/"
                      className="buy-now-btn"
                      onClick={handleBuyEthereum}
                      target="_blank"
                    >
                      Buy On Ethereum
                    </a> */}
                  </div>
                </div>
                <Countdown renderer={renderer} date={"2024-04-25T09:02:09"} />,
              </div>
              <div className="col-md-6">
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
                <div className="stage-media mb-4">
                  <img
                    src="/images/Fuzuki_Inu_Launch.png"
                    alt="Fuzuki Inu Launch"
                  />
                </div>
              </div>
              <div className="col-lg-8">
                <div className="road-map-stage">
                  <h4>Launch</h4>
                  <ul>
                    <li>
                      Public sale begins first opportunity to buy Fuzuki Inu
                      coins.{" "}
                    </li>
                    <li>Creating the project idea, logo, and tokenomics. </li>
                    <li>
                      Establishing an online network through social media
                      platforms.
                    </li>
                    <li>
                      Launching marketing campaigns to attract possible
                      investors.{" "}
                    </li>
                    <li>Uniswap Launch</li>
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
                  <h4>CEX Listing</h4>
                  <ul>
                    <li>
                      CEX listing: Fuzuki Inu coins will now be offered on
                      centralized exchanges.
                    </li>
                    <li>
                      Beginning with the second stage of the marketing campaign
                      round.
                    </li>
                    <li>Partnering with other meme-based projects.</li>
                    <li>Offer new income sources for token holders.</li>
                    <li>Listing for CMC and CG. </li>
                    <li>Listing on CEX Platforms </li>
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
                  <h4>DEX Launch & New Token Launch (Skulk)</h4>
                  <ul>
                    <li>Introduction to Decentralized Exchanges.</li>
                    <li>
                      New token (Skulk) launch: Expands the Fuzuki Inu
                      ecosystem.
                    </li>
                    <li>Setting up marketing campaigns for stage 3.</li>
                    <li>
                      Established multiple collaborations to extend the
                      initiative.
                    </li>
                    <li>
                      Marketing to reach new marketplaces and groups for the
                      project.
                    </li>
                    <li>
                      Creating new revenue streams and partnerships to increase
                      project income.
                    </li>
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
      </footer>
    </div>
  );
}

export default Home;
