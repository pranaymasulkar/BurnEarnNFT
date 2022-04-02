import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import DiscoverContainer from '../containers/Discover';
import Footer from '../layouts/Footer';

const Mynft = () => {

  return (
    <>
      <Header Title='MyNFT' />
      <DiscoverContainer />
      <Footer />
    </>
  );
}

export default Mynft;