import "./services.scss";

import ServicesImage1 from "./bg1.webp";
import ServicesImage2 from "./bg2.png";
import ServicesImage3 from "./bg3.webp";

import { useThemeProvider } from "../../providers/ThemeProvider";

const Services = () => {
    const { isDarkMode } = useThemeProvider();
    return (
        <section id="services" className={isDarkMode ? "" : "light"}>
            <article>
                <img src={ServicesImage1} alt="Service 1" />
                <hr />
                <h1>Service 1</h1>
            </article>
            <article>
                <img src={ServicesImage2} alt="Service 1" />
                <hr />
                <h1>Service 1</h1>
            </article>
            <article>
                <img src={ServicesImage3} alt="Service 1" />
                <hr />
                <h1>Service 1</h1>
            </article>
        </section>
    );
}

export default Services;