import "bootstrap/dist/css/bootstrap.min.css";
import CtaSection from "./Components/Cta/Cta";
import ContentSection from "./Components/FirstContentSection/ContentSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Section1 from "./Components/Section1/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import Section3 from "./Components/Section3/Section3";
import Section2 from "./Components/Section2/Section2";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <ContentSection
        data={{
          image: "./assets/ziraffe.png",
          title: "Section title",
          text: "In tincidunt id netus fringilla. Ac viverra accumsan dignissim tincidunt etiam. Nisl, condimentum enim consequat sagittis.",
        }}
      />
      <ContentSection
        direction="row-reverse"
        data={{
          image: "./assets/ziraffe.png",
          title: "Section title",
          text: "In tincidunt id netus fringilla. Ac viverra accumsan dignissim tincidunt etiam. Nisl, condimentum enim consequat sagittis.",
        }}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
