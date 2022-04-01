import "./App.css";
import { About, Footer, Skills, Header, Testimonial, Work } from "./container";
import { Navbar } from "./components/";
import "./App.scss";
function App() {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />

            <Footer />
        </div>
    );
}

export default App;
