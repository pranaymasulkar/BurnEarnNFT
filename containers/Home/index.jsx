import data from '../../data/data-containers/data-Home'
import Link from 'next/link'
import Home from 'pages/Home';
// import '../../assets/css/home.css'

const HomeContainer = () => {

  console.log("data" , data)

  return (
      <Home/>
  );
}

export default HomeContainer;