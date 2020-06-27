import styled from 'styled-components';

const LoadingPrimaryStyle = styled.div`
    height: 70vh;
    position: relative;

    img{
        width: 64px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }    
`

export default LoadingPrimaryStyle;