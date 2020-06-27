import styled from 'styled-components';

const CardServicesStyle = styled.div`
    background: #FFFFFF;
    transition: 0.5s ease;
    padding: 40px 40px;

    .icon{
        display: inline-block;
        width: 90px;
        height: 90px;
        background: rgb(232,30,85, 0.5);
        /* background: blue; */
        /* background: linear-gradient(90deg, rgba(255,0,69,1) 0%, rgba(255,0,69,1) 50%); */
        border-radius: 90px;
        margin-bottom: 15px;
        transform: scale(1.1);
        position: relative;
        animation: borderScale 3s infinite;
    }

    @keyframes borderScale {
        0%   {background: rgb(232,30,85, 0)}
        10%  {background: rgb(232,30,85, 0.1)}
        20%  {background: rgb(232,30,85, 0.2)}
        30%  {background: rgb(232,30,85, 0.3)}
        40%  {background: rgb(232,30,85, 0.4)}
        50%  {background: rgb(232,30,85, 0.5)}
        60%  {background: rgb(232,30,85, 0.6)}
        70%  {background: rgb(232,30,85, 0.7)}
        80%  {background: rgb(232,30,85, 0.8)}
        90%  {background: rgb(232,30,85, 0.9)}
        100% {background: rgb(232,30,85, 1)}
    }

    img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        border-radius: 90px;
    }

    p{
        font-family: 'Gilroy';
        font-weight: 800;
        color: #1f2c35;
    }

    @media only screen and (max-width: 768px) {
        margin-bottom: 25px;
        padding: 20px 40px;
    }

    &:hover{
        cursor: pointer;
        transition: 0.5s ease;
        -webkit-box-shadow: 0px 15px 30px 0px rgba(206,206,206,0.5);
        -moz-box-shadow: 0px 15px 30px 0px rgba(206,206,206,0.5);
        box-shadow: 0px 15px 30px 0px rgba(206,206,206,0.5);
    }
`

export default CardServicesStyle;