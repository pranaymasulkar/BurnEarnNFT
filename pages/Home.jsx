import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import HomeContainer from '../containers/Home';
import Footer from '../layouts/Footer';
import HomeDemo2 from "./HomeDemo2";

// import '../assets/css/home.css'
// import './home.css'

const Home = () => {

  return (
  	<>
	    {/* <HomeContainer /> */}
      <HomeDemo2/>

    </>
  );
}

export default Home;

