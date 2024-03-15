import BrandLogo from "../assets/images/logo.png"

import FuzikuMedia from "../assets/images/media1.png"

import BtnImg from "../assets/images/buy-now.png"

import IcFacebook from "../assets/images/icons/ic-facebook.svg"
import IcTwitter from "../assets/images/icons/ic-twitter.svg"
import IcTelegram from "../assets/images/icons/ic-telegram.svg"
import IcInstagram from "../assets/images/icons/ic-instagram.svg"
import IcYoutube from "../assets/images/icons/ic-youtube.svg"
import IcReddit from "../assets/images/icons/ic-reddit.svg"


import StageImg1 from "../assets/images/stage-1.png"
import StageImg2 from "../assets/images/stage-2.png"
import StageImg3 from "../assets/images/stage-3.png"

function Home() {
    return (
        <div className="home-wrapper">
            <header>
                <div className="container">
                    <a href="javascript:;" className="brand-logo">
                        <img src={BrandLogo} alt="logo" />
                    </a>
                </div>
            </header>
            <section className="fuziku-info">
                <div className="container">
                    <div className="fuziku-info-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="fuziku-info-media">
                                    <div className="media-img">
                                        <img src={FuzikuMedia} alt="fuziku media" />
                                    </div>
                                    <a href="javacript:;" className="buy-now-btn">
                                        <img src={BtnImg} alt="button" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="fuziku-info-text">
                                    <p>Invest and develop compassion with Fuzuki Inu to ensure a brighter tomorrow. Hold with conviction, sprinting towards success with <br /> <span className="brand">Fuzuki Inu: The shiba kanji</span>
                                        <a target="_blank" href="https://fuzuki-s3.s3.amazonaws.com/fuzuki-doc/Fuzuki+Inu+(1).pdf" className="whitepaper-link">Whitepaper</a></p>
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
                                    <img src={StageImg1} alt="StageImg1" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="road-map-stage">
                                    <h4>launch</h4>
                                    <ul>
                                        <li>Public sale begins first opportunity to buy Fuzuki Inu coins. </li>
                                        <li>Creating the project idea, logo, and tokenomics. </li>
                                        <li>Establishing an online network through social media platforms.</li>
                                        <li>Launching marketing campaigns to attract possible investors. </li>
                                        <li>Uniswap Launch</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="row flex-lg-row-reverse">
                            <div className="col-lg-4 text-lg-end">
                                <div className="stage-media mb-4">
                                    <img src={StageImg2} alt="StageImg2" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="road-map-stage">
                                    <h4>CEX Listing</h4>
                                    <ul>
                                        <li>CEX listing: Fuzuki Inu coins will now be offered on centralized exchanges.</li>
                                        <li>Beginning with the second stage of the marketing campaign round.</li>
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
                                    <img src={StageImg3} alt="StageImg3" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="road-map-stage">
                                    <h4>DEX Launch & New Token Launch (Skulk)</h4>
                                    <ul>
                                        <li>Introduction to Decentralized Exchanges.</li>
                                        <li>New token (Skulk) launch: Expands the Fuzuki Inu ecosystem.</li>
                                        <li>Setting up marketing campaigns for stage 3.</li>
                                        <li>Established multiple collaborations to extend the initiative.</li>
                                        <li>Marketing to reach new marketplaces and groups for the project.</li>
                                        <li>Creating new revenue streams and partnerships to increase project income.</li>
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
                                <p className="mb-3"><span>Disclaimer:</span> The use of fox symbols alongside Fuzuki Inu represents our commitment to creativity and personalization in our blockchain project. It is important to note that there are no real, mythical, or physical foxes involved with our project. Fuzuki Inu is our platform for researching digital innovation and building a strong community spirit.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 d-flex justify-content-end">
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <a target="_blank" href="https://m.facebook.com/fuzuki.inu"><img src={IcFacebook} alt="facebook icon" /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://twitter.com/Fuzuki_Inu"><img src={IcTwitter} alt="twitter icon" /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://t.me/fuzukitoken"><img src={IcTelegram} alt="Telegram icon" /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.instagram.com/fuzukiinu5/"><img src={IcInstagram} alt="instagram icon" /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href=" https://www.youtube.com/@FuzukiArt"><img src={IcYoutube} alt="Youtube icon" /></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href=" https://www.reddit.com/user/fuzuki_Inu/"><img src={IcReddit} alt="Reddit icon" /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}


export default Home;