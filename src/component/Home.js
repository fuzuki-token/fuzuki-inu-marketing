import BrandLogo from "../assets/images/logo.png"

import FuzikuMedia from "../assets/images/media1.png"

import BtnImg from "../assets/images/buy-now.png"

import IcFacebook from "../assets/images/icons/ic-facebook.svg"
import IcTwitter from "../assets/images/icons/ic-twitter.svg"
import IcTelegram from "../assets/images/icons/ic-telegram.svg"
import IcInstagram from "../assets/images/icons/ic-instagram.svg"
import IcYoutube from "../assets/images/icons/ic-youtube.svg"
import IcReddit from "../assets/images/icons/ic-reddit.svg"

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
                                    <p>Invest and develop compassion with Fuzuki Inu to ensure a brighter tomorrow. Hold with conviction, sprinting towards success with <br/> <span className="brand">Fuzuki Inu: The shiba kanji</span>
                                    <a href="https://fuzuki-s3.s3.amazonaws.com/fuzuki-doc/Fuzuki+Inu+(1).pdf" className="whitepaper-link">Whitepaper</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        <a href="https://m.facebook.com/fuzuki.inu"><img src={IcFacebook} alt="facebook icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Fuzuki_Inu"><img src={IcTwitter} alt="twitter icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/fuzukitoken"><img src={IcTelegram} alt="Telegram icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/fuzukiinu5/"><img src={IcInstagram} alt="instagram icon" /></a>
                                    </li>
                                    <li>
                                        <a href=" https://www.youtube.com/@FuzukiArt"><img src={IcYoutube} alt="Youtube icon" /></a>
                                    </li>
                                    <li>
                                        <a href=" https://www.reddit.com/user/fuzuki_Inu/"><img src={IcReddit} alt="Reddit icon" /></a>
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