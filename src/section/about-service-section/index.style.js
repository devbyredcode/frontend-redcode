import styled from 'styled-components';

const AboutServiceSectionStyle = styled.div`
    font-size: 32px;

    .container{
        padding-left: 150px;
        padding-right: 150px;
        min-height: 75vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid #ececec;

        &:nth-last-child(1){
            border-bottom: none;
        }
    }

    h2{
        font-family: "Bebas Neue";
    }

    p{
        font-family: "Poppins";
        line-height: 1.7em;
        font-size: 17px;
        letter-spacing: .5px;
        color: #606060;
    }

    ul{
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        li{
            border: 1px solid #CECECE;
            padding: 10px 15px;
            font-family: "Poppins";
            margin: 5px;
            font-size: 14px;
            color: #757575;
            transition: 0.3s ease;

            &:hover{
                cursor: pointer;
                border: 1px solid rgba(255,0,69,1);
                background-color: rgba(255,0,69,1);
                color: #FFF;
                transition: 0.3s ease;
            }
        }
    }
`

export default AboutServiceSectionStyle;