import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Services from "./components/services/Services";

const App = () => {
  return (
    <Layout>
      <About />
      <Services />
    </Layout>
  );
}

export default App;