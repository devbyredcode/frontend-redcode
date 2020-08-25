import styled from 'styled-components';

const CaseStudyPageDetailStyle = styled.div`
    font-size: 64px;

    .case-study-page{
        &__title{
            position: relative;
            min-height: 100vh;

            img{
                width: 100%;

                @media (max-width: 768px){
                    height: 70vh;
                    min-height: 450px;
                    object-fit: cover;
                }
            }

            .action{
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                font-size: 24px;
                letter-spacing: 1px;
                font-family: "Bebas Neue";
                text-transform: uppercase;
                z-index: 999;

                a{
                    color: #2F2F2F;
                    transition: 0.3s ease;  

                    &:hover{
                        color: rgba(255,0,69,1);
                        transition: 0.3s ease;
                        text-decoration: none;
                    }
                }
            }

            .layer{
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgb(57,57,57);
                background: linear-gradient(180deg, rgba(57,57,57,0.7) 0%, rgba(0,0,0,1) 100%);
            }

            &__content{
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 100%;

                span{
                    font-family: "Bebas Neue";
                    font-size: 0.4em;
                    color: #FFF;
                    letter-spacing: 1px;

                    @media (max-width: 768px){
                        font-size: 0.3em;
                    }
                }

                .devider{
                    width: 50px;
                    height: 5px;
                    background-color: rgba(255,0,69,1);
                    margin: auto;
                }

                h1{
                    font-family: "Bebas Neue";
                    font-size: 1.7em;
                    letter-spacing: 1px;
                    color: #FFF;

                    @media (max-width: 768px){
                        font-size: 0.8em;
                    }
                }
            }

            @media (max-width: 768px){
                min-height: auto;
            }
        }

        &__description{
            padding: 50px 25px;
            width: 80%;

            &__detail{
                margin-bottom: 50px;
                padding-bottom: 50px;
                border-bottom: 1px solid #ECECEC;

                h2{
                    font-family: "Bebas Neue";
                    font-size: .6em;
                }

                p{
                    font-family: "Poppins";
                    font-size: .5em;
                    line-height: 1.5em;
                    text-align: center;
                    color: #2F2F2F;

                    @media (max-width: 768px){
                        line-height: 1.7em;
                    }
                }
                
                img{
                    width: 100% !important;
                    height: auto !important;
                    margin: auto !important;
                }

                @media (max-width: 768px){
                    margin-bottom: 30px;
                    padding-bottom: 20px;
                }

                &:nth-last-child(1){
                    border-bottom: none;
                }
            }

            @media (max-width: 768px){
                padding: 50px 0px 0px !important;
                width: 90%;
            }
        }
    }
`

export default CaseStudyPageDetailStyle;