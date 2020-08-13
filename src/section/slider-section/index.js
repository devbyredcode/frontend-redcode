import React, { Component } from 'react';
import axios from '../../axios';
import { Container } from 'reactstrap';
import SliderBigPrimary from '../../components/slider-big-primary';
import ButtonPrimary from '../../components/button-primary';
import SliderSectionStyle from './index.style';
import Slider from 'react-slick';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

class SliderSection extends Component{
    constructor(props){
        super(props);
        this.state = {
            slider_item : []
        }
    }
    componentDidMount(){
        axios.get('/api/v1/landing-page')
            .then(response => {
                const data = response.data.data.data_case_study.slice(0, 3);
                this.setState({ ...this.state, slider_item : data});
            })
            .catch(error => {
                console.error(error); 
            })
    }

    render(){
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
        }

        return(
            <SliderSectionStyle>
                <Container className="slider-wrapper" fluid={true}>
                    <div className="slider-wrapper__item">
                        {this.state.slider_item.length < 1 ? 
                            <Skeleton duration={2} height={500}/> :
                            <Slider {...settings}>
                                {this.state.slider_item.map((data, index) => {
                                    return <SliderBigPrimary 
                                                key={index}
                                                title={data.title}
                                                detail={data.subtitle}
                                                slug={data.slug}
                                                thumbnail={`https://res.cloudinary.com/devbyredcode/image/upload/${data.image}`}/>
                                })}
                            </Slider>
                        }
                    </div>
                    <div className="slider-wrapper__action">
                        <h2 className="text--step-up-1 mb-4">explore <span className="red">other</span> study case</h2>
                        <Link to={this.props.url}>
                        <ButtonPrimary 
                            label="EXPLORE OTHERS" 
                            class="btn--theme-red"/>
                        </Link>
                    </div>
                </Container>
            </SliderSectionStyle>
        )
    }
}

export default SliderSection;