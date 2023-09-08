import "./layout.scss";

import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
    return (
        <div id="layout">
            <Nav />
            <main className="container">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout;