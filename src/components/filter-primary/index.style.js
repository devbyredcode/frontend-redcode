import styled from 'styled-components';

const FilterPrimaryStyle = styled.section`
    .filter-primary-wrapper{
        margin-top: 5rem;
        padding: 30px 0px;

        &__item{
            display: flex;
            justify-content: center;
        
            span{
                display: inline-block;
                font-family: "Poppins";
                font-weight: 600;
                font-size: 14px;
                letter-spacing: 1px;
                margin: 0px 20px;
                transition: 0.3s ease;
                width: max-content;
                min-width: max-content;

                &:hover{
                    cursor: pointer;
                    color: rgb(232,30,85);
                    transition: 0.3s ease;
                }
            }

            @media (max-width: 768px){
                overflow-x: scroll;
            }
        }

        @media (max-width: 768px){
            margin-top: 0;
        }
    }
`

export default FilterPrimaryStyle;