import "./footer.scss";
import { useThemeProvider } from "../../providers/ThemeProvider";

const Footer = () => {
    const { test, isDarkMode } = useThemeProvider();

    return (
        <footer className={isDarkMode ? "" : "light"}>
            <div>
                &copy; React Context {new Date().getFullYear()} {test}
            </div>
        </footer>
    );
}

export default Footer;