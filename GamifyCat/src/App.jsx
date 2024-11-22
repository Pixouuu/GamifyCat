import "./App.css";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import PageProject from "./Components/Projects/PageProject";
import Trust from "./Components/Trust/Trust";
import Card from "./Components/ExpertiseCard/Card";
import Footer from "./Components/Footer/Footer";
import OverlayNoise from "./Components/Overlay/OverlayNoise";
import Feelings from "./Components/Feelings/Feelings";
import { ReactLenis } from "lenis/react";

function App() {
  return (
    <ReactLenis root>
      <div id="div-principale">
        <OverlayNoise />
        <Header />
        <Main />
        <PageProject />
        <Trust />
        <Card />
        <Feelings />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
