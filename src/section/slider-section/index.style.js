import styled from 'styled-components';

const SliderSectionStyle = styled.section`
    .container-fluid{
        background: #F2F2F2;
        font-size: 32px;
        position: relative;
        padding: 40px 0px;

        h2{
            font-family: 'Bebas Neue';
            font-weight: 800;
            color: #2F2F2F;
            letter-spacing: 2px;
            margin: 0px;
        }

        .slider-wrapper{

            &__item{
                min-height: 500px;
            }

            &__action{
                padding: 40px 0px;
            }
        }

        @media only screen and (max-width: 768px) {
            font-size: 26px;
        }
    }
`

export default SliderSectionStyle;