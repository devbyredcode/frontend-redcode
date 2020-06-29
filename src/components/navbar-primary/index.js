import React, { Component } from 'react';
import NavbarPrimaryStyle from './index.style';
import { Link } from "react-router-dom";
class NavbarPrimary extends Component{
    componentDidMount(){
        const navbar = document.querySelector('.navbar-wrapper-desktop');
        window.addEventListener("scroll", function(){
            window.scrollY > 100 ? navbar.classList.add('active') : navbar.classList.remove('active');
        });
    }

    toggleNavbar = () => {
        const navbarOverlay = document.querySelector('.navbar-wrapper-mobile__overlay');
        const hamMenu = document.querySelector('.ham-menu');

        if(hamMenu.classList.contains('active')){
            hamMenu.classList.remove('active');
            navbarOverlay.classList.remove('active');
        }else{
            hamMenu.classList.add('active');
            navbarOverlay.classList.add('active');
        }
    }    

    render(){
        const dataRoute = [
            { url: '/', title: 'HOME' },
            { url: '/case-study', title: 'CASE STUDY' },
            { url: '/playground', title: 'PLAYGROUND' },
            { url: '/story', title: 'STORY' },
            { url: '/about', title: 'ABOUT'}
        ];

        return(
            <NavbarPrimaryStyle>
                <div className="navbar-wrapper-desktop">
                    <div className="navbar-wrapper-desktop__left">
                        <Link to="/">
                            <img src="./../../image/logo/main-logo-redcode.png" className="img-fluid" draggable="false" alt=""/>
                        </Link>
                    </div>
                    <div className="navbar-wrapper-desktop__title">
                        <p>{this.props.activeMenu}</p>
                    </div>
                    <div className="navbar-wrapper-desktop__right-mb">
                        <div className="ham-menu" onClick={this.toggleNavbar}></div>
                    </div>
                    <div className="navbar-wrapper-mobile__overlay">
                        <div className="navbar-wrapper-mobile__overlay__item">
                        {dataRoute.map((data, index) => {
                            return <Link to={data.url} key={index} 
                                        onClick={this.toggleNavbar}>{data.title}</Link>
                        })}
                        </div>
                    </div>
                </div>
            </NavbarPrimaryStyle>
        )
    }
}

export default NavbarPrimary;
