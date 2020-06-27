import styled from 'styled-components';

const AboutBioSectionStyle = styled.div`
    font-size: 32px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ECECEC;

    .container{
        padding-left: 150px;
        padding-right: 150px;
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
`

export default AboutBioSectionStyle;