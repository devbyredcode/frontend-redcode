import styled from 'styled-components';

const NewsCardPrimaryStyle = styled.div`
    position: relative;
    margin-bottom: 30px;
    
    .card-primary{

        &__layer{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0);
            transition: 0.5s ease;
            z-index: 99;

            &:hover{
                background: rgba(0,0,0,0.8);
                transition: 0.5s ease;

                .btn{
                    transform: translateY(250%) scale(0.7);
                    transition: 1s ease;
                    opacity: 1;
                }
            }

            .btn{
                transition: 1s ease;
                transform: translateY(200%) scale(0.7);
                opacity: 0;
            }
        }

        &__image{
            img{
                height: 60vh;
                width: 100%;
                object-fit: cover;
                transition: 0.3s ease;

                @media (max-width: 768px){
                    height: 350px;
                }
            }
        }

        &__detail{
            text-align: left;
            font-size: 28px;
            padding: 10px 0px;
            position: absolute;
            bottom: 0px;

            &__title{
                padding: 10px 20px;

                h3{
                    font-family: 'Poppins';
                    letter-spacing: 1px;
                    text-transform: uppercase;
                    font-weight: 700;
                    color: #FFF;
                    line-height: 1.5em;
                    margin-bottom: 0px;
                    /* width: 300px;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap; */
                }
            }
        }

        &:hover{
            
        }
    }

    &:hover{
        transition: 0.5s ease;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        margin-bottom: 40px
    }
`

export default NewsCardPrimaryStyle;