import "./nav.scss";
import { useThemeProvider } from "../../providers/ThemeProvider";

const Nav = () => {
    const { isDarkMode, handleToggleDarkmode } = useThemeProvider();

    return (
        <nav className={isDarkMode ? "" : "light"}>
            <div className="container">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <button onClick={handleToggleDarkmode}>Toggle Darkmode</button>
            </div>
        </nav>
    );
}

export default Nav;