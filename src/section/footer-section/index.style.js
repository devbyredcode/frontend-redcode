import styled from 'styled-components';

const FooterSectionStyle = styled.section`
    .footer-wrapper{
        background: #000;
        padding: 20px 80px 0px;
        margin-top: 40px;
        
        &__menu{
            font-family: 'Bebas Neue';
            padding: 15px 0px;

            a{
                color: #FFF;
                letter-spacing: 2px;
                font-size: 18px;
                margin: 0px 20px;
                transition: 0.3s ease;
            
                &:hover{
                    text-decoration: none;
                    color: rgba(255,0,69,1);
                    transition: 0.3s ease;
                }

                @media only screen and (max-width: 768px) {
                    min-width: max-content;
                    font-size: 18px;
                    margin: 0px 10px;
                    
                }
            }

            @media only screen and (max-width: 768px) {
                overflow-x: scroll;
                padding: 15px 20px;
                -ms-overflow-style: none;
            }

            &::-webkit-scrollbar {
                display: none;
            }
        }

        &__logo{           
            padding: 0px;
            
            a{
                width: 100%;
                font-family: 'Bebas Neue';
                font-size: 100px;
                padding: 100px 0px;
                display: block;
                text-decoration: none;
                color: #FFF;
                background: #070707;
            
                &:hover{
                    color: rgba(255,0,69,1);
                    background: #000;
                }
            }
        }

        &__content{
            padding: 20px 0px;

            p{
                font-family: 'Poppins';
                color: #FFF;
                letter-spacing: 1px;
                font-size: 12px;
                font-weight: 300;
                text-transform: uppercase;
                margin: 0px;
            }
        }
        
        @media only screen and (max-width: 768px) {
            padding: 20px 0px 5px;
        }

        @media only screen and (min-width: 1367px) {
            padding: 20px 300px 0px;
        }
    }
`

export default FooterSectionStyle;   