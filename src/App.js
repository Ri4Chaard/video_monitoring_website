import { Container } from "./components/UI/container/Container";
import "./styles/App.css";
import "./styles/nullstyle.css";
import "./styles/topbar.css";
import "./styles/slider.css";
import "./styles/services.css";
import "./styles/mobile-app.css";
import "./styles/tariffs.css";
import logo from "./img/logo.png";
import { NavButton } from "./components/UI/buttons/header_buttons/nav_button/NavButton";
import { LoginButton } from "./components/UI/buttons/header_buttons/login_button/LoginButton";
import { useRef, useState } from "react";
import slide1 from "./img/slider/slide1.png";
import slide2 from "./img/slider/slide2.png";
import slide3 from "./img/slider/slide3.png";
import blur1 from "./img/slider/blur/Vector 4.png";
import blur2 from "./img/slider/blur/Vector 3.png";
import icon1 from "./img/cards/icon1.png";
import icon2 from "./img/cards/icon2.png";
import icon3 from "./img/cards/icon3.png";
import googlePlay from "./img/app-store/GooglePlay.png";
import appleStore from "./img/app-store/AppleStore.png";
import appStoreBg from "./img/app-store/app-store_bg.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { BlueButton } from "./components/UI/buttons/blue_button/BlueButton";

function App() {
    const [sliderPos, setSliderPos] = useState(0);
    const nodeRef = useRef(null);
    const slides = [
        {
            header: "Cloud video surveillance for your purposes",
            text: "Video - control on any device live. With the ability to store recordings for up to 7 days",
            slide: slide1,
        },
        {
            header: "Easy to use, broadcast always at hand",
            text: "Intuitive interface. Log in to your personal account and watch broadcasts from all cameras",
            slide: slide2,
        },
        {
            header: "View online from any device at any time",
            text: "Access from anywhere and at any time to all CCTV cameras in two clicks",
            slide: slide3,
        },
    ];

    const moveSlider = (x) => {
        setSliderPos(sliderPos + x);
    };
    return (
        <div className="App">
            <header>
                <Container>
                    <div className="topbar">
                        <div className="topbar__logo">
                            <img className="logo" src={logo} alt="logo" />
                        </div>
                        <nav className="topbar__menu">
                            <NavButton style={{ fontWeight: "500" }}>
                                Ready solutions
                            </NavButton>
                            <NavButton>Tariffs</NavButton>
                            <NavButton>News</NavButton>
                            <NavButton>Contacts</NavButton>
                        </nav>
                        <div className="topbar__login">
                            <LoginButton>Login</LoginButton>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="slider__items">
                            <div className="slider__text">
                                <div className="slider__header">
                                    <TransitionGroup component={null}>
                                        {slides.map(
                                            (slide, index) =>
                                                index == sliderPos && (
                                                    <CSSTransition
                                                        key={index}
                                                        timeout={700}
                                                        classNames="headers"
                                                        mountOnEnter
                                                        unmountOnExit
                                                    >
                                                        <h1 key={index}>
                                                            {slide.header}
                                                        </h1>
                                                    </CSSTransition>
                                                )
                                        )}
                                    </TransitionGroup>
                                </div>
                                <div className="slider__description">
                                    <div className="slider__scroll">
                                        <span>Scroll</span>
                                    </div>
                                    <div className="slider__paragraph">
                                        <div className="slider__paragraph-cell">
                                            <TransitionGroup component={null}>
                                                {slides.map(
                                                    (slide, index) =>
                                                        index == sliderPos && (
                                                            <CSSTransition
                                                                key={index}
                                                                timeout={700}
                                                                classNames="paragraph"
                                                                mountOnEnter
                                                                unmountOnExit
                                                            >
                                                                <p key={index}>
                                                                    {slide.text}
                                                                </p>
                                                            </CSSTransition>
                                                        )
                                                )}
                                            </TransitionGroup>
                                        </div>
                                        <BlueButton>
                                            Submit your application
                                        </BlueButton>
                                    </div>
                                </div>
                            </div>
                            <div className="slider__image">
                                <TransitionGroup component={null}>
                                    {slides.map(
                                        (slide, index) =>
                                            index == sliderPos && (
                                                <CSSTransition
                                                    key={index}
                                                    timeout={1000}
                                                    classNames="images"
                                                    mountOnEnter
                                                    unmountOnExit
                                                >
                                                    <img
                                                        key={index}
                                                        src={slide.slide}
                                                    />
                                                </CSSTransition>
                                            )
                                    )}
                                </TransitionGroup>
                            </div>
                        </div>
                        <CSSTransition
                            in={sliderPos == 0}
                            nodeRef={nodeRef}
                            timeout={1000}
                            classNames="blur"
                            unmountOnExit
                        >
                            <div className="slider__blur" ref={nodeRef}>
                                <img className="blur-1" src={blur1} />
                                <img className="blur-2" src={blur2} />
                            </div>
                        </CSSTransition>
                        <div className="slider__buttons">
                            <div className="slider__arrows">
                                <button
                                    disabled={sliderPos == 0}
                                    className="slider__arrow_left"
                                    onClick={() => moveSlider(-1)}
                                ></button>
                                <button
                                    disabled={sliderPos == 2}
                                    className="slider__arrow_right"
                                    onClick={() => moveSlider(1)}
                                ></button>
                            </div>
                            <div className="slider__numbers">
                                <div
                                    className="slider__number-box"
                                    style={
                                        sliderPos == 0
                                            ? { opacity: 1 }
                                            : { opacity: 0.5 }
                                    }
                                    onClick={() => setSliderPos(0)}
                                >
                                    <div className="slider__number">01</div>
                                    <div
                                        className="slider__number-line "
                                        style={
                                            sliderPos == 0
                                                ? {
                                                      borderLeft:
                                                          "1px solid #fff",
                                                      borderRight:
                                                          "1px solid #fff",
                                                      borderBottomLeftRadius:
                                                          "3px",
                                                  }
                                                : {
                                                      borderLeft:
                                                          "1px solid #fff",

                                                      borderBottomLeftRadius:
                                                          "3px",
                                                  }
                                        }
                                    ></div>
                                </div>
                                <div
                                    className="slider__number-box"
                                    style={
                                        sliderPos == 1
                                            ? { opacity: 1 }
                                            : { opacity: 0.5 }
                                    }
                                    onClick={() => setSliderPos(1)}
                                >
                                    <div className="slider__number">02</div>
                                    <div
                                        className="slider__number-line"
                                        style={
                                            sliderPos == 1
                                                ? {
                                                      borderRight:
                                                          "1px solid #fff",
                                                      borderLeft:
                                                          "1px solid #fff",
                                                  }
                                                : {
                                                      borderRight:
                                                          sliderPos == 0
                                                              ? "1px solid #fff"
                                                              : "none",
                                                      borderLeft:
                                                          sliderPos == 2
                                                              ? "1px solid #fff"
                                                              : "none",
                                                  }
                                        }
                                    ></div>
                                </div>
                                <div
                                    className="slider__number-box"
                                    style={
                                        sliderPos == 2
                                            ? { opacity: 1 }
                                            : { opacity: 0.5 }
                                    }
                                    onClick={() => setSliderPos(2)}
                                >
                                    <div className="slider__number">03</div>
                                    <div
                                        className="slider__number-line"
                                        style={
                                            sliderPos == 2
                                                ? {
                                                      borderLeft:
                                                          "1px solid #fff",
                                                      borderRight:
                                                          "1px solid #fff",
                                                      borderBottomRightRadius:
                                                          "3px",
                                                  }
                                                : {
                                                      borderRight:
                                                          "1px solid #fff",
                                                      borderBottomRightRadius:
                                                          "3px",
                                                  }
                                        }
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </header>
            <main>
                <div className="services">
                    <Container>
                        <div className="services__content">
                            <div className="services__description">
                                <div className="services__header">
                                    <h1>We provide the following services</h1>
                                </div>
                                <div className="services__text">
                                    <p>
                                        In addition, technical support will
                                        always advise you on any questions, and
                                        will also carry out remote diagnostics
                                        of your system upon request and in the
                                        shortest possible time.
                                    </p>
                                </div>
                            </div>
                            <div className="services__cards">
                                <div className="card">
                                    <div className="card__image">
                                        <img src={icon1} alt="not found" />
                                    </div>
                                    <div className="card__header">
                                        Installation
                                    </div>
                                    <div className="card__text">
                                        We will install CCTV cameras at your
                                        home, work, cottage or just in the yard
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card__image">
                                        <div className="card__image-bg">
                                            <img src={icon2} alt="not found" />
                                        </div>
                                    </div>
                                    <div className="card__header">Service</div>
                                    <div className="card__text">
                                        If you have any difficulties, we will
                                        give advice, and if necessary, we will
                                        come to your site
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card__image">
                                        <div className="card__image-bg">
                                            <img src={icon3} alt="not found" />
                                        </div>
                                    </div>
                                    <div className="card__header">
                                        Personal account
                                    </div>
                                    <div className="card__text">
                                        Watch the broadcast online, and if we
                                        don’t have time to store the recordings
                                        for 7 days, just go to the archive
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="mobile-app">
                    <Container>
                        <div className="mobile-app__content">
                            <div className="mobile-app__header">
                                <h1>
                                    Download our application in the AppStore and
                                    Google Play
                                </h1>
                            </div>
                            <div className="mobile-app__list">
                                <ul>
                                    <li>
                                        <p>
                                            watch online broadcast from your
                                            video cameras
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            securely store the archive in the
                                            cloud for 7 days or more
                                        </p>
                                    </li>
                                    <li>
                                        <p>get access to the archive online</p>
                                    </li>
                                    <li>
                                        <p>save the archive to your devices</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="mobile-app__links">
                                <a href="https://www.google.com">
                                    <img src={googlePlay} />
                                </a>
                                <a href="https://www.google.com">
                                    <img src={appleStore} />
                                </a>
                            </div>
                            <div className="mobile-app__bg">
                                <img src={appStoreBg} />
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="tariffs">
                    <Container>
                        <div className="tariffs__content">
                            <div className="tariffs__header">
                                <h1>Select tariff</h1>
                            </div>
                            <div className="tariffs__cards">
                                <div className="tariffs__card">
                                    <div className="tariffs__card_header">
                                        Standart
                                    </div>
                                    <div className="tariffs__card_price">
                                        3 $<span>/ month</span>
                                    </div>
                                    <div className="tariffs__card_description">
                                        Archive recording and storage for 7
                                        days. Connecting 1 camera. Online access
                                        to the camera
                                    </div>
                                    <BlueButton>
                                        Submit your application
                                    </BlueButton>
                                </div>
                                <div className="tariffs__card">
                                    <div className="tariffs__card_header">
                                        Optimal
                                    </div>
                                    <div className="tariffs__card_price">
                                        7 $<span>/ month</span>
                                    </div>
                                    <div className="tariffs__card_description">
                                        Archive recording and storage for 30
                                        days. Connecting 1 camera. Online access
                                        to the camera
                                    </div>
                                    <BlueButton>
                                        Submit your application
                                    </BlueButton>
                                </div>
                                <div className="tariffs__card">
                                    <div className="tariffs__card_header">
                                        Business
                                    </div>
                                    <div className="tariffs__card_price">
                                        10 $<span>/ month</span>
                                    </div>
                                    <div className="tariffs__card_description">
                                        Archive recording and storage for 60
                                        days. Connecting 1 camera. Online access
                                        to the camera
                                    </div>
                                    <BlueButton>
                                        Submit your application
                                    </BlueButton>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
            </main>
        </div>
    );
}

export default App;
