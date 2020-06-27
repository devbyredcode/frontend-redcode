import React, { Component } from 'react';
import { Container } from 'reactstrap';
import SliderBigPrimary from '../../components/slider-big-primary';
import ButtonPrimary from '../../components/button-primary';
import SliderSectionStyle from './index.style';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

class SliderSection extends Component{
    
    state = {
        sliderItem : [
            // this.props.itemData
        ]
    }

    componentDidMount(){
        // console.log('ega',this.props.itemData);
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
                    <Slider {...settings}>
                        {this.props.itemData.map((data, index) => {
                            return <SliderBigPrimary 
                                        key={index}
                                        title={data.title}
                                        detail={data.subtitle}
                                        slug={data.slug}
                                        thumbnail={`https://res.cloudinary.com/devbyredcode/image/upload/${data.image}`}/>
                        })}
                    </Slider>
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