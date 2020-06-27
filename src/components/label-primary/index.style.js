import styled from 'styled-components';

const LabelPrimaryStyle = styled.span`
        border: 1px solid #CECECE;
        padding: 10px 15px;
        font-family: "Poppins";
        margin: 5px;
        font-size: 14px;
        color: #757575;
        transition: 0.3s ease;
        display: flex;

        .circle{
            display: inline;
            width: 10px;
            height: 10px;
            background: #ECECEC;
            border-radius: 90px;
            margin-right: 10px;
            transform: translateY(5px);
        }

        &:hover{
            cursor: pointer;
            border: 1px solid rgba(255,0,69,1);
            background-color: rgba(255,0,69,1);
            color: #FFF;
            transition: 0.3s ease;
        }
        
        @media (max-width: 768px){
            padding: 10px;
        }
`

export default LabelPrimaryStyle;