import Navbar from "./nav/nav";
import Sect_hero from "./sect_hero/sect_hero";
import Sect_feature from "./sect_feature/sect_feature";
import Sect_example from "./sect_example/sect_example";
import Sect_gStart from "./sect_gStart/sect_gStart";
import Footer from "./footer/footer";

function App() {
 
  return (
    <>
      <Navbar />
      <Sect_hero />
      <Sect_feature />
      <Sect_example />
      <Sect_gStart />
      <Footer />
    </>
  );
}

export default App

