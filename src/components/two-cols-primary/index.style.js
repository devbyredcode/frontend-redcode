import styled from 'styled-components';

const TwoColsPrimaryStyle = styled.section`
    .two-cols-primary-wrapper{
        padding: 50px 0px;
        font-size: 32px;

        .row{   
            .two-cols-primary-wrapper{
                &__text{
                    text-align: left;
                    position: relative;

                    &__content{
                        position: absolute;
                        top: 50%;
                        left: 50px;
                        width: 90%;
                        transform: translateY(-50%);

                        @media only screen and (max-width: 768px) {
                            position: inherit;
                            margin-top: 20px;
                            top: 0%;
                            left: 0px;
                            width: 100% !important;
                            text-align: center;
                            transform: translateY(0%);
                        }

                        .large{
                            display: block;

                            @media only screen and (max-width: 768px) {
                                display: none;
                            }
                        }

                        .small{
                            display: none;

                            @media only screen and (max-width: 768px) {
                                display: block;
                            }
                        }
                    }
                    
                    h3{
                        font-family: 'Gilroy';
                        font-weight: 800;
                        color: #1f2c35;
                    }

                    p{
                        color: #787878;
                    }
                }

                &__image{
                    position: relative;

                    img{

                        &.character{
                            position: absolute;
                            bottom: 0px;
                        }

                        &.item-left{
                            left: 20px;

                            @media only screen and (max-width: 768px) {
                                left: 0px;  
                                z-index: 999;  
                            }
                        }

                        &.item-right{
                            right: 100px;

                            @media only screen and (max-width: 768px) {
                                right: 0px;    
                            }
                        }

                        &.item-center{
                            right: 50%;
                            transform: translateY(-50%);
                            
                            @media only screen and (max-width: 768px) {
                                right: 55%;
                                z-index: 999;    
                            }
                        }

                        &.animate-horizontal-far{
                            animation: animateHorizontalFar 3s infinite;

                            @media only screen and (max-width: 768px) {
                                animation: animateHorizontalFarMob 5s infinite;
                            }
                        }

                        &.animate-horizontal-near{
                            animation: animateHorizontalNear 2s infinite;

                            @media only screen and (max-width: 768px) {
                                animation: animateHorizontalNearMob 4s infinite;
                            }
                        }

                        &.animate-horizontal-exfar{
                            animation: animateHorizontalExFar 8s infinite;

                            @media only screen and (max-width: 768px) {
                                animation: animateHorizontalExFarMob 8s infinite;
                            }
                        }

                        @media only screen and (max-width: 768px) {
                            animation: none;
                            transform: translateY(-25px)
                        }
                    }

                    @keyframes animateHorizontalFar {
                        0%   {transform: translateX(0px)}
                        50%  {transform: translateX(45px)}
                        100% {transform: translateX(0px)}
                    }
                    
                    @keyframes animateHorizontalFarMob {
                        0%   {transform: translateX(0px)}
                        50%  {transform: translateX(7px)}
                        100% {transform: translateX(0px)}
                    }

                    @keyframes animateHorizontalNear {
                        0%   {transform: translateX(0px)}
                        50%  {transform: translateX(15px)}
                        100% {transform: translateX(0px)}
                    }

                    @keyframes animateHorizontalNearMob {
                        0%   {transform: translateX(0px)}
                        50%  {transform: translateX(7px)}
                        100% {transform: translateX(0px)}
                    }

                    @keyframes animateHorizontalExFar {
                        0%   {transform: translateX(0px) scaleX(1)}
                        25%  {transform: translateX(200px)}
                        50%  {transform: translateX(200px) scaleX(-1)}
                        75% {transform: translateX(0px) scaleX(-1)}
                        100% {transform: translateX(0px)}
                    }

                    @keyframes animateHorizontalExFarMob {
                        0%   {transform: translateX(0px) scaleX(1)}
                        25%  {transform: translateX(180px)}
                        50%  {transform: translateX(180px) scaleX(-1)}
                        75% {transform: translateX(0px) scaleX(-1)}
                        100% {transform: translateX(0px)}
                    }
                }
            }

            &.reverse{
                flex-direction: row-reverse;

                .two-cols-primary-wrapper{
                    &__text{
                        text-align: right;
                        position: relative;

                        &__content{
                            position: absolute;
                            top: 50%;
                            right: 50px;
                            width: 90%;
                            transform: translateY(-50%);

                            @media only screen and (max-width: 768px) {
                                margin-top: 20px;
                                position: inherit;
                                top: 0%;
                                left: 0px;
                                width: 100% !important;
                                text-align: center;
                                transform: translateY(0%);
                            }
                        }
                        
                        h3{
                            font-family: 'Gilroy';
                            font-weight: 800;
                            color: #1f2c35;
                        }

                        p{
                            color: #787878;
                        }
                    }
                }
            }
        }
    }
`

export default TwoColsPrimaryStyle;