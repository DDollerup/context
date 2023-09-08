import "./about.scss";
import aboutImg from "./car1.jpg";
import { useThemeProvider } from "../../providers/ThemeProvider";

const About = () => {
    const { test, isDarkMode } = useThemeProvider();

    return (
        <section id="about" className={isDarkMode ? "" : "light"}>
            <div>
                <img src={aboutImg} alt="React Context" />
            </div>
            <div>
                <h2>About us {test}</h2>
                <p>
                    Vivamus finibus finibus turpis in sodales. Ut quis justo at sapien posuere hendrerit in et magna. Maecenas non erat ultricies, ullamcorper lectus in, pharetra ex. Proin felis lectus, consequat eu varius ut, dapibus nec arcu. Donec et velit non sem feugiat elementum sit amet quis eros. Vivamus interdum placerat consequat. Aenean ut dui egestas, accumsan nisl iaculis, feugiat arcu. Phasellus at convallis est. Morbi vel magna id massa lobortis sodales.
                </p>
            </div>
        </section>
    );
}

export default About;