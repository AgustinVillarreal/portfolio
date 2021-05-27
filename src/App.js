import AboutSection from "./components/layouts/AboutSection";
import ContactSection from "./components/layouts/ContactSection";
import Footer from "./components/layouts/Footer";
import Masthead from "./components/layouts/Masthead";
import Navigation from "./components/layouts/Navigation";
import PorfolioSection from "./components/layouts/PortfolioSection";
import SkillsSection from "./components/layouts/SkillsSection";
import Modal from "./components/modals/Modal";

function App() {
  return (
    <>
      <Navigation />
      <Masthead />
      <PorfolioSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
      <Modal
        title="CRUD Redux"
        id="portfolioModal1"
        img="cabin.png"
        urlPage= "https://redux-crud-agus.netlify.app/"
        urlGit="https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/crudredux"
        description="Product Manager. Proyect CRUD made with React Redux, REST API in json-server & Axios. Bootstrap to CSS"
      />
      <Modal
        title="Mern Tasks"
        id="portfolioModal2"
        img="cake.png"
        urlGit="https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/MernTask"
        urlPage="https://merntask-agus.netlify.app/"
        description="Task Manager. Front-end built with React. Back-End: NodeJS and MongoDB to authentications and database"
      />
      <Modal
        title="Product Hunt Clone"
        id="portfolioModal3"
        img="circus.png"
        urlPage="https://producthunt-agus.netlify.app/"
        urlGit="https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/produnthuntnext"
        description="Project that pretends to be Product Hunt. Front-end made with React and NextJs, using Firebase to authentications and Firestore Database"
      />
      <Modal
        title="Cryptocurrency Quotes"
        id="portfolioModal4"
        img="game.png"
        urlPage="https://cotizatucripto.netlify.app/"
        urlGit="https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/criptomonedas"
        description="Cryptocurrency quote. Project made in React, consulting CryptoCompare API "
      />

      <Modal
        title="My Bar"
        id="portfolioModal5"
        img="safe.png"
        urlPage="https://mybar-agus.netlify.app/"
        urlGit="https://github.com/AgustinVillarreal/portfolio-proyects/tree/main/portfolio-proyects/bebidas"
        description="Cocktail Search engine. Project made in React, consulting TheCocktailDB."
      />
    </>
  );
}

export default App;
