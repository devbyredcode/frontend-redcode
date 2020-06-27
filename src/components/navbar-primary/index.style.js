import styled from 'styled-components';

const NavbarPrimaryStyle = styled.div`
    .navbar-wrapper-desktop{
        position: fixed;
        top: 0;
        width: 100%;
        left: 0;
        background: transparent;
        transition: 0.3s ease;
        z-index: 9999;
        margin-bottom: 20px;
        padding: 20px;
        display: flex;

        &.active{
            background: #000;
            transition: 0.3s ease;

            .ham-menu{
                background: #FFF !important;

                &:before{
                    position: absolute;
                    transition: 0.3s ease;
                    content: '';
                    width: 40px;
                    height: 4px;
                    background: #FFF !important;
                    top: -10px;
                    left: 0px;
                }

                &:after{
                    position: absolute;
                    transition: 0.3s ease;
                    content: '';
                    width: 40px;
                    height: 4px;
                    background: #FFF !important;
                    top: 10px;
                    left: 0px;
                }

                &:hover{
                    transition: 0.3s ease;
                    background: rgb(232,30,85) !important;
                    background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);

                    &:before{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: rgb(232,30,85) !important;
                        background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);
                        top: -10px;
                        left: 0px;
                    }

                    &:after{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: rgb(232,30,85) !important;
                        background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);
                        top: 10px;
                        left: 0px;
                    }
                }
            }

            .inverse{
                background: #FFF !important;

                &:before{
                    position: absolute;
                    transition: 0.3s ease;
                    content: '';
                    width: 40px;
                    height: 4px;
                    background: #FFF !important;
                    top: -10px;
                    left: 0px;
                }

                &:after{
                    position: absolute;
                    transition: 0.3s ease;
                    content: '';
                    width: 40px;
                    height: 4px;
                    background: #FFF !important;
                    top: 10px;
                    left: 0px;
                }

                &:hover{
                    transition: 0.3s ease;
                    background: rgb(232,30,85) !important;
                    background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);

                    &:before{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: rgb(232,30,85) !important;
                        background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);
                        top: -10px;
                        left: 0px;
                    }

                    &:after{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: rgb(232,30,85) !important;
                        background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);
                        top: 10px;
                        left: 0px;
                    }
                }
            }
        }

        &__left{
            display: flex;
            width: 40%;
            justify-content: flex-start;
            z-index: 9999;
            text-align: left;

            img{
                width: 40px;
                height: 40px;
            }
        }

        &__right-mb{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            z-index: 9999;

            .ham-menu{
                width: 40px;
                height: 4px;
                background: #000;
                z-index: 9999;
                transition: 0.3s ease;

                &.inverse{
                    background: #FFF;

                    &:before{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: #FFF;
                        top: -10px;
                        left: 0px;
                    }

                    &:after{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: #FFF;
                        top: 10px;
                        left: 0px;
                    }
                }

                &:before{
                    position: absolute;
                    transition: 0.3s ease;
                    content: '';
                    width: 40px;
                    height: 4px;
                    background: #000;
                    top: -10px;
                    left: 0px;
                }

                &:after{
                    position: absolute;
                    transition: 0.3s ease;
                    content: '';
                    width: 40px;
                    height: 4px;
                    background: #000;
                    top: 10px;
                    left: 0px;
                }

                &.active{
                    background: #FFF;

                    &:before{
                        transition: 0.3s ease;
                        opacity: 0;
                    }

                    &:after{
                        transition: 0.3s ease;
                        opacity: 0;
                    }
                }
                
                &:hover{
                    transition: 0.3s ease;
                    background: rgb(232,30,85);
                    background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);

                    &:before{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: rgb(232,30,85);
                        background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);
                        top: -10px;
                        left: 0px;
                    }

                    &:after{
                        position: absolute;
                        transition: 0.3s ease;
                        content: '';
                        width: 40px;
                        height: 4px;
                        background: rgb(232,30,85);
                        background: linear-gradient(90deg,rgba(255,0,69,1) 0%,rgba(255,0,69,1) 50%);
                        top: 10px;
                        left: 0px;
                    }
                }
            }

            &:hover{
                cursor: pointer;
            }

            @media only screen and (max-width: 768px) {
                display: block;
            }
        }

        @media only screen and (max-width: 768px) {
            padding: 20px;
        }
    }

    .navbar-wrapper-mobile__overlay{
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100vh;
        width: 100vw;
        background: #000;
        transform: translateX(100%);
        transition: 0.5s ease;

        &.active{
            display: block;
            transform: translateX(0%);
            transition: 0.5s ease;
        }

        &__item{
            display: flex;
            flex-direction: column;
            height: 100vh;
            position: absolute;
            justify-content: flex-end;
            right: 50px;
            bottom: 50px;
            text-align: right;

            a{
                font-size: 4vh;
                font-family: 'Poppins';
                font-weight: 800;
                margin-top: 2vh;
                color: #FFF;
                transition: 0.3s ease;
                
                &:hover{
                    color: #e71d53;
                    transition: 0.3s ease;
                    text-decoration: none;
                }
            }

            @media (max-width: 768px){
                bottom: 100px;
            }
        }
    }
`

export default NavbarPrimaryStyle;