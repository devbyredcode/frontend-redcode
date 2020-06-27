import styled from 'styled-components';

const ClientSectionStyle = styled.section`
    background: #FFFFFF;
    font-size: 32px;
    padding: 75px 50px;

    h2{
        font-family: 'Gilroy';
        font-weight: 800;
        color: #1f2c35;
        margin-bottom: 50px;
    }

    @media only screen and (max-width: 768px) {
        padding: 50px 25px; 
        font-size: 26px;
    }

    @media only screen and (min-width: 1367px) {
        padding: 80px 300px;
    }
`

export default ClientSectionStyle;