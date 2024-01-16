import { Container } from "./components/UI/container/Container";
import "./styles/App.css";
import "./styles/nullstyle.css";
import "./styles/text-styles.css";
import "./styles/slider.css";
import "./styles/services.css";
import "./styles/mobile-app.css";
import "./styles/tariffs.css";
import "./styles/catalog.css";
import "./styles/news.css";
import "./styles/footer.css";
import googlePlay from "./img/app-store/GooglePlay.png";
import appleStore from "./img/app-store/AppleStore.png";
import { BlueButton } from "./components/UI/buttons/blue_button/BlueButton";
import { Topbar } from "./components/Topbar";
import { AppRouter } from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Container>
                    <Topbar />
                </Container>
            </header>
            <AppRouter />
            <footer>
                <Container>
                    <div className="footer">
                        <div className="footer__items">
                            <div className="contacts">
                                <div className="contacts__header footer__header">
                                    Contacts
                                </div>
                                <div className="contacts__number">
                                    +1234-456-67-89
                                </div>
                                <button className="contacts__download">
                                    Download details
                                </button>
                                <div className="contacts__app-stores">
                                    <a href="https://www.google.com">
                                        <img src={googlePlay} />
                                    </a>
                                    <a href="https://www.google.com">
                                        <img src={appleStore} />
                                    </a>
                                </div>
                                <div className="contacts__copyright">
                                    Copyright © 2013 - 2024 EASYCAM - cloud
                                    video surveillance
                                </div>
                            </div>
                            <div className="links">
                                <div className="links__header footer__header">
                                    Useful links
                                </div>
                                <ul className="links__items">
                                    <li>
                                        <a href="">Home</a>
                                    </li>
                                    <li>
                                        <a href="">Our services</a>
                                    </li>
                                    <li>
                                        <a href=""> Tariffs</a>
                                    </li>
                                    <li>
                                        <a href="">Ready solutions</a>
                                    </li>
                                    <li>
                                        <a href="">News</a>
                                    </li>
                                    <li>
                                        <a href="">Account</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="request">
                                <div className="request__header footer__header">
                                    Leave a request for connection
                                </div>
                                <form>
                                    <input placeholder="Your phone number" />
                                    <input placeholder="Your name" />
                                    <BlueButton type="submit">
                                        Leave a request
                                    </BlueButton>
                                </form>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </BrowserRouter>
    );
}

export default App;
