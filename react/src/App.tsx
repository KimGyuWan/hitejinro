import Header from "./layout/Header";
import Mainbanner from "./components/contents/Mainbanner";
import Hash from "./components/contents/Hash";
import Mainswiper from "./components/contents/Mainswiper";
import Appbanner from "./components/contents/Appbanner";
import Eventswiper from "./components/contents/Eventswiper";
import Eventbanner from "./components/contents/Eventbanner";
import Footer from "./layout/Footer";


function App() {
  return (
    <>
      <Header></Header>
      <Mainbanner></Mainbanner>
      <Hash></Hash>
      <Mainswiper></Mainswiper>
      <Appbanner></Appbanner>
      <Eventswiper></Eventswiper>
      <Eventbanner></Eventbanner>
      <Footer></Footer>
    </>
  );
}

export default App;
