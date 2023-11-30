import { Container } from "./components/UI/container/Container";
import "./styles/App.css";
import "./styles/nullstyle.css";

function App() {
    return (
        <div className="App">
            <header>
                <Container>
                    <button>logo</button>
                    <button>Ready solutions</button>
                    <button>Tariffs</button>
                    <button>News</button>
                    <button>Contacts</button>
                    <button>Login</button>
                </Container>
            </header>
        </div>
    );
}

export default App;
