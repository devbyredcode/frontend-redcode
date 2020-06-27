import styled from 'styled-components';

const SliderBigPrimaryStyle = styled.div`
    height: 90vh;
    position: relative;
    font-size: 40px;

    .overlay{
        opacity: 0;
        position: absolute;
        background: rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 100%;
        transition: 0.7s ease;

        &__text{
            position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, 0);
            text-align: center;

            h3{
                color: #FFFFFF;
                font-family: 'Bebas Neue';
                opacity: 0;
                letter-spacing: 2px;
                transform: translateY(-20px);
            }

            p{
                font-family: 'Poppins';
                color: #FFFFFF;
                opacity: 0;
                transform: translateY(-20px);
                letter-spacing: 1px;
                font-size: 1rem;
                text-transform: uppercase;
                font-weight: 300;

                @media only screen and (max-width: 768px) {
                    font-size: 2vh !important;
                }
            }

            @media only screen and (max-width: 768px) {
                padding: 0px 20px;
            }
        }
    }

    &:hover{
        .overlay{
            opacity: 1;
            transition: 0.7s ease;

            &__text{

                h3{
                    transition: 0.8s ease;
                    opacity: 1;
                    font-family: 'Bebas Neue';
                    transform: translateY(0px);
                }

                p{
                    transition: 1s ease;
                    opacity: 1;
                    transform: translateY(0px);
                }

                @media only screen and (max-width: 768px) {
                    top: 50%;
                    text-align: center;
                    left: 50%;
                    width: 100%;
                    transform: translate(-50%, -50%);
                }
            }
        }

        cursor: pointer;
    }
    
    img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    
    @media only screen and (max-width: 768px) {
        height: calc(85vh + 7vw);
    }
`

export default SliderBigPrimaryStyle;