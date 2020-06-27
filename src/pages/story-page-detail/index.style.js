import styled from 'styled-components';

const StoryPageDetailStyle = styled.div`
    .story-page{
        margin-bottom: 70px;

        &__image{
            padding-left: 150px;
            padding-right: 150px;
            height: 350px;
            margin-bottom: 32px;

            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                object-position: center;
                margin-bottom: 32px;
            }

            @media (max-width: 768px){
                padding-left: 20px;
                padding-right: 20px;
            }
        }

        &__title{
            margin-top: 40px;
            margin-bottom: 40px;
            padding-left: 150px;
            padding-right: 150px;

            h1{
                font-family: 'Poppins';
                text-transform: uppercase;
                font-size: 32px;
                font-weight: 800;
                text-align: left;
                line-height: 1.5em;

                @media (max-width: 768px){
                    line-height: 1.3em;
                }
            }

            p{
                text-align: left;
                font-family: 'Poppins';
                color: #757575;
                font-size: 14px;

                .category{
                    text-transform: capitalize;
                }
                
                @media (max-width: 768px){
                    font-size: 14px;
                }
            }
            
            @media (max-width: 768px){
                padding-left: 20px;
                padding-right: 20px;
            }
        }

        &__description{
            font-family: 'Poppins';
            padding-left: 150px;
            padding-right: 150px;

            p{
                text-align: left;
                margin-bottom: 32px;

                p{
                    color: #757575;
                    font-size: 16px;
                    line-height: 1.5em;

                    @media (max-width: 768px){
                        line-height: 1.8em;
                    }
                }

                h2{
                    font-size: 24px;
                    font-weight: 800;
                    color: rgba(255,0,69,1);
                    margin-bottom: 16px;
                    
                    @media (max-width: 768px){
                        line-height: 1.5em;
                        margin-bottom: 10px;
                    }
                }
            }

            @media (max-width: 768px){
                padding-left: 20px;
                padding-right: 20px;
            }
        }

        &__share{
            padding-left: 150px;
            padding-right: 150px;
            text-align: left;
            color: #757575;
            font-size: 16px;
            line-height: 1.5em;
            font-family: 'Poppins';

            .share-twt{
                color: #3498db;

                &:hover{
                    text-decoration: none;
                    color: rgba(255,0,69,1);
                }
            }

            .share-wa{
                color: #2ecc71;

                .black{
                    color: #757575; 
                }

                display: none;

                @media (max-width: 768px){
                    display: block;
                }

                &:hover{
                    text-decoration: none;
                    color: rgba(255,0,69,1);
                }
            }
        }
    }
`

export default StoryPageDetailStyle;