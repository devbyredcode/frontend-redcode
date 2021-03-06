import styled from 'styled-components';

const AboutHeroSectionStyle = styled.section`
    .hero-section{
        height: 100vh;
        font-size: 48px;
        padding: 0px 0px;
        min-height: 512px;
        background-image: url('../../../image/background/background-desktop-about.jpg');
        background-size: cover;
        background-position: center;
        position: relative;

        &__title{
            position: absolute;
            top: 40%;
            left: 50%;
            width: 100%;
            transform: translate(-50%, -50%);

            h1{
                font-family: "Bebas Neue";
                font-size: 6.5vw;
                color: #FFF;
                letter-spacing: 2px;

                @media only screen and (max-width: 768px) {
                    font-size: 12.5vw;
                }
            }
        }

        &__action{
            position: absolute;
            top: 65%;
            left: 50%;
            transform: translate(-50%, -50%);

            .btn{
                @media only screen and (max-width: 768px) {
                    min-width: 200px;
                }
            }
        }

        &__download{
            position: absolute;
            bottom: 10px;
            right: 20px;

            span{
                font-size: 20px;
                font-weight: bold;
            }

            a{
                font-family: "Bebas Neue";
                letter-spacing: 2px;
                color: #CECECE;
                transition: 0.3s ease;
                font-size: 18px;

                &:hover{
                    text-decoration: none;
                    cursor: pointer;
                    transition: 0.3s ease;
                    color: rgba(255,0,69,1);
                }
            }

            @media only screen and (max-width: 768px){
                left: 50%;
                transform: translateX(-50%);
                width: 100%;
            }
        }

        @media only screen and (max-width: 768px) {
            height: calc(80vh + 7vw);
        }
    }
`

export default AboutHeroSectionStyle;