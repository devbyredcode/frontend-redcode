import styled from 'styled-components';

const DeviderPrimaryStyle = styled.div`
    width: 100px;
    height: 10px;
    display: block;
    background: rgb(232,30,85);
    background: linear-gradient(90deg, rgba(255,0,69,1) 0%, rgba(255,0,69,1) 50%);

    @media only screen and (max-width: 768px) {
        margin: auto;
    }
`

export default DeviderPrimaryStyle;