import dynamic from "next/dynamic";
const Header = dynamic(
  () => {
    return import('../layouts/Header');
  },
  { ssr: false }
);
import Blog2Container from '../containers/Blog';
import Footer from '../layouts/Footer';

const Blog = () => {

  return (
    <>
		<Header Title='Blog' />
		<Blog2Container />
		<Footer />
    </>
  );
}

export default Blog;

