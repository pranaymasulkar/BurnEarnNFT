import dynamic from "next/dynamic";
import Link from 'next/link'
import {useRouter} from 'next/router';
import {useEffect} from "react";
// import './navbar.css'
import {NavbarLogo} from '../../utils/allImgs'
import {Addshrink} from '../../utils'
// import Preloader from '../../components/Preloader'
import data from '../../data/data-layouts/data-Head.json'

const Preloader = dynamic(
  () => {
    return import('../../components/Preloader');
  },
  { ssr: false }
);

function Header({Title}){

    useEffect(() => {

        Addshrink()

    },[window.pageYOffset])

    const router = useRouter()


  return(
    <>
        <Preloader Title={Title} />
        <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">
                        <img src={NavbarLogo.src} alt="logo" />
                    </a>
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Discover">
                                <a className="nav-link">
                                Discover
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/CreateItem">
                                <a className="nav-link">
                                Create Item
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/Mynft">
                                <a className="nav-link">
                                MyNFT
                                </a>
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/Auctions">
                                <a className="nav-link">
                                Auctions
                                </a>
                            </Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link href="/ConnectWallet">
                                <a className="nav-link">
                                Connect Wallet
                                </a>
                            </Link>
                        </li> */}
                        <li className="lh-55px"><Link href="/ConnectWallet">
                            <a className="btn login-btn ml-50">
                                Connect Wallet
                            </a>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header