import styled from 'styled-components';

const NewsThreeColumnSectionStyle = styled.div`
    padding: 40px 0px;

    .container-fluid{
        font-size: 32px;
        padding-left: 0px;
        padding-right: 0px;
        padding: 40px 50px;
        background: #FFF;

        h2{
            font-family: 'Bebas Neue';
            letter-spacing: 2px;
            font-weight: 800;
            color: #1f2c35;
            margin-bottom: 50px;
        }

        .mt-4{
            @media only screen and (max-width: 768px) {
                margin-top: 0px !important;
            }
        }

        @media only screen and (max-width: 768px) {
            font-size: 26px;
            padding: 50px 20px;
        }
        
        @media only screen and (min-width: 1367px) {
            padding: 80px 300px;
        }
    }
`

export default NewsThreeColumnSectionStyle;