import styled from 'styled-components';

const BreadcrumbsPrimaryStyle = styled.div`
    text-align: left;
    font-size: 12px;
    color: #757575;
    text-transform: lowercase;  
    margin: 10px 0px;
    font-family: "Poppins";

    .devider{
        color: #cecece;
        margin: 0px 5px;
    }

    a{
        color: #2f2f2f;
        font-family: "Poppins";

        &:hover{
            text-decoration: none;
            color: rgba(255,0,69,1);  
        }
    }

    span.title{
        @media (max-width: 768px){
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 200px;
            display: inline-block;
            transform: translateY(5px);
        }
    }
`

export default BreadcrumbsPrimaryStyle;