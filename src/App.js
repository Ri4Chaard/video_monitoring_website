import { Container } from "./components/UI/container/Container";
import "./styles/App.css";
import "./styles/nullstyle.css";
import "./styles/style.css";
import logo from "./img/logo.png";
import { NavButton } from "./components/UI/buttons/header_buttons/nav_button/NavButton";
import { LoginButton } from "./components/UI/buttons/header_buttons/login_button/LoginButton";
import { useEffect, useRef, useState } from "react";
import slide1 from "./img/slider/slide1.png";
import slide2 from "./img/slider/slide2.png";
import slide3 from "./img/slider/slide3.png";
import blur1 from "./img/slider/blur/Vector 4.png";
import blur2 from "./img/slider/blur/Vector 3.png";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
                                        <button className="slider__button">
                                            Submit your application
                                        </button>
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
        </div>
    );
}

export default App;
