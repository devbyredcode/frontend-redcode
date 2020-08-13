import React, { Component } from 'react';
import axios from '../../axios';
import HeroSection from '../../section/hero-section';
import ServiceSection from '../../section/service-section';
import SliderSection from '../../section/slider-section';
import NewsThreeColumnSection from '../../section/news-three-column-section';
import FooterSection from '../../section/footer-section';

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            newsData : {
                itemData : []
            },
            playGroundData : {
                itemData : []
            },
            items : []
        }
    }   

    componentDidMount(){
        window.scrollTo(0, 0);
        const hamMenu = document.querySelector('.ham-menu ');
        hamMenu.classList.add('inverse');

        axios.get('/api/v1/landing-page')
            .then(response => {
                const story = response.data.data.data_story;
                const playground = response.data.data.data_playground;

                this.setState({ 
                    newsData : {...this.state.newsData, itemData : story, isLoading: false},
                    playGroundData: {...this.state.playGroundData, itemData : playground, isLoading: false}
                });
            })
            .catch(error => {
                console.error(error); 
                this.setState({ sliderData : {...this.state.sliderData, itemData : 'ERROR'} });
            })

            console.log(this.state.playGroundData.itemData.length);
    }

    componentWillUnmount(){
        const hamMenu = document.querySelector(".ham-menu");
        hamMenu.classList.remove('inverse');
    }

    render(){
        return(
            <div>
                <HeroSection/>
                <ServiceSection/>
                <SliderSection/>
                <NewsThreeColumnSection
                    title="I ALSO WRITE SOME"
                    highlighted="STORIES"
                    btnLabel="READ OTHERS"
                    url="story"/>
                <FooterSection/>
            </div>
        )
    }
}

export default HomePage;