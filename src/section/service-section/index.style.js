import styled from 'styled-components';

const ServiceSectionStyle = styled.section`
    background: #F2F2F2;
    font-size: 32px;
    position: relative;
    padding: 40px 0px;

    h2{
        font-family: 'Bebas Neue';
        font-weight: 800;
        color: #2F2F2F;
        letter-spacing: 2px;
        margin: 0px;
    }

    .service-section{
        &__left{
            text-align: left;

            @media only screen and (max-width: 768px) {
               text-align: center;
               margin-bottom: 20px;
            }
        }

        &__right{
            color: #686868;
            display: flex;
            flex-direction: row;
            font-family: 'Bebas Neue';
            justify-content: flex-end;

            p{
                margin-left: 20px;
                margin-bottom: 0px;

                br{
                    display: none;

                    @media only screen and (max-width: 768px) {
                        display: block;
                    }
                }

                @media only screen and (max-width: 768px) {
                    margin-left: 0px;
                }
            }

            @media only screen and (max-width: 768px) {
                justify-content: space-between;
            }
        }

    }

    @media only screen and (max-width: 768px) {
        padding: 30px 10px 30px; 
        font-size: 26px;
    }
/*     
    @media only screen and (min-width: 1367px) {
        padding: 80px 300px;
    } */

`

export default ServiceSectionStyle;