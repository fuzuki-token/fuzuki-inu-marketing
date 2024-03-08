import BrandLogo from "../assets/images/logo.png"

import FuzikuMedia from "../assets/images/media1.png"

import BtnImg from "../assets/images/buy-now.png"

import IcFacebook from "../assets/images/icons/ic-facebook.svg"
import IcTwitter from "../assets/images/icons/ic-twitter.svg"
import IcLinkedin from "../assets/images/icons/ic-linkedin.svg"
import IcInstagram from "../assets/images/icons/ic-instagram.svg"

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
                            <div className="col-xl-6 ">
                                <div className="fuziku-info-media">
                                    <div className="media-img">
                                        <img src={FuzikuMedia} alt="fuziku media" />
                                    </div>
                                    <a href="javacript:;" className="buy-now-btn">
                                        <img src={BtnImg} alt="button" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="fuziku-info-text">
                                    <p>It's a guarantee that Fizuki Inu will outshine other regular coins. What's your smartest choice? Do you want to stand out in the world of coins? Take a look at our <a href="javascript:;">Fuzuki Inu, - The Shiba Kanji!</a></p>
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
                                <p className="mb-3"><span>Disclaimer:</span> The presence of fox images with Fuzuki Inu represents the creativity and customization that motivate our blockchain initiative.</p>
                                <p>There are no actual, real, or mythical foxes involved. Fuzuki Inu is our way of exploring digital innovation and building a sense of unity.</p>
                            </div>
                        </div>
                        <div className="col-xl-5 d-flex justify-content-end">
                            <div className="footer-social">
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=61556838222899&mibextid=LQQJ4d"><img src={IcFacebook} alt="facebook icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Fuzuki_Inu"><img src={IcTwitter} alt="twitter icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/company/fuzuki-inu/"><img src={IcLinkedin} alt="linkedin icon" /></a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/fuzuki.inu/"><img src={IcInstagram} alt="instagram icon" /></a>
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