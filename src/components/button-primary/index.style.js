import styled from 'styled-components';

const ButtonPrimaryStyle = styled.button`
    &.btn{
        min-width: 160px;
        border: 0px;
        color: #2F2F2F;
        padding: 18px 32px;
        letter-spacing: 1.5px;
        text-transform: uppercase;
        border-radius: 0px;
        font-family: 'Poppins';
        font-weight: 700;
        margin: 5px;
        transition: 0.3s ease;
        display: inline-block;
        
        /* Button Event */
        &:hover{
            cursor: pointer;
        }

        &:active{
            outline: none;
        }

        &:focus{
            outline: none;
        }

        /* Button Theme */
        &--theme-red{
            color: #FFFFFF;
            background: rgb(232,30,85);
            background: linear-gradient(90deg, rgba(232,30,85,1) 0%, rgba(255,0,69,1) 50%);

            /* Button Event */
            &:hover{
                transition: 0.3s ease;
                transform: translateY(-2px);
                background: rgb(232,30,85);
                background: linear-gradient(90deg, rgba(255,0,69,1) 0%, rgba(255,0,69,1) 50%);
            }
        }

        &--theme-red-outlined{
            color: rgba(255,0,69,1);
            padding: 13px 27px;
            background: #FFFFFF;
            border: 5px solid rgba(255,0,69,1);
            
            &:hover{
                transition: 0.3s ease;
                transform: translateY(-2px);
                background: #F2F2F2;
                background: linear-gradient(90deg, #FFFFFF 0%, #F2F2F2 50%);
                -webkit-box-shadow: 0px 15px 30px 0px rgba(206,206,206,0.5);
                -moz-box-shadow: 0px 15px 30px 0px rgba(206,206,206,0.5);
                box-shadow: 0px 15px 30px 0px rgba(206,206,206,0.5);
            }

            @media only screen and (max-width: 768px){
                padding: 13px 0px !important;
            }
        }

        &--no-theme{
            color: rgba(255,0,69,1);

            &:hover{
                opacity: 0.6;
            }
        }

        &--sm{
            transform: scale(0.6);

            &:hover{
                transform: scale(0.6);
            }
        }

        @media only screen and (max-width: 768px){
            padding: 18px 24px;
            margin: 0px;
            transform: scale(0.7);
        }

        &:focus{
            border: none;
            box-shadow: none;
            outline: none;
        }
    }
`
export default ButtonPrimaryStyle;