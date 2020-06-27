import styled from 'styled-components';

const NoDataPrimaryStyle = styled.div`
    height: 50vh;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0px;

    img{
        height: 128px;
        width: 128px;
        margin: auto;
    }

    p{
        font-family: 'Poppins';
        font-size: 16px;
        color: #757575;
        letter-spacing: .5px;
    }
`

export default NoDataPrimaryStyle;