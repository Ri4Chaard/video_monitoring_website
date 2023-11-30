import { Container } from "./components/UI/container/Container";
import "./styles/App.css";
import "./styles/nullstyle.css";
import "./styles/style.css";
import logo from "./img/logo.png";
import { NavButton } from "./components/UI/buttons/header_buttons/nav_button/NavButton";
import { LoginButton } from "./components/UI/buttons/header_buttons/login_button/LoginButton";

function App() {
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
                </Container>
            </header>
        </div>
    );
}

export default App;
