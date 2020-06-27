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
            sliderData : {
                itemData : []
            },
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
                const posts = response.data.data.data_case_study.slice(0, 3);
                const story = response.data.data.data_story;
                const playground = response.data.data.data_playground;

                this.setState({ 
                    sliderData : {...this.state.sliderData, itemData : posts},
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
                {
                    this.state.sliderData.itemData.length > 0 ?
                    <SliderSection
                        url = "case-study"
                        itemData = {this.state.sliderData.itemData}/>
                : ""
                }
                {
                    this.state.newsData.itemData.length > 0 ?
                    <NewsThreeColumnSection
                        title="WE ALSO WRITE SOME"
                        highlighted="STORIES"
                        btnLabel="READ OTHERS"
                        itemData={this.state.newsData.itemData}
                        url="story"/>    
                    : ""
                }
                {
                    this.state.playGroundData.itemData.length > 0 ?
                    <NewsThreeColumnSection
                        title="WE ALSO DO"
                        highlighted="EXPERIMENT"
                        btnLabel="SEE OTHERS"
                        type="url"
                        itemData={this.state.playGroundData.itemData}
                        url="playground"/>
                    : ""
                }
                <FooterSection/>
            </div>
        )
    }
}

export default HomePage;