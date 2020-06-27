import React, { Component } from 'react';
import { Container } from 'reactstrap';
import FilterPrimaryStyle from './index.style';

class FilterPrimary extends Component{
    render(){
        return(
            <FilterPrimaryStyle>
                <Container className="filter-primary-wrapper">
                    <div className="filter-primary-wrapper__item">
                        <span id="0">ALL</span>
                        <span id="1">WEB APPS</span>
                        <span id="2">MOBILE APPS</span>
                        <span id="3">UI UX DESIGN</span>
                    </div>
                </Container>
            </FilterPrimaryStyle>
        )
    }
}

export default FilterPrimary;