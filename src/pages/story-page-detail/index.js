import React, { Component } from 'react'
import StoryPageDetailStyle from './index.style';
import HeaderPrimary from '../../components/header-primary';
import Skeleton from 'react-loading-skeleton';
import BreadcrumbsPrimary from '../../components/breadcrumbs-primary';
import FooterSection from '../../section/footer-section';
import axios from '../../axios';
import {
    EmailShareButton,
    EmailIcon,
    WhatsappIcon,
    WhatsappShareButton,
    TelegramShareButton,
    TwitterShareButton,
    TwitterIcon,
    TelegramIcon,
    WorkplaceShareButton,
    WorkplaceIcon
} from "react-share";

class StoryPageDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading : true,
            itemData : []
        }
    }

    textToCapitalize(param){
        return param.toUpperCase()
    }

    componentDidMount(){
        window.scrollTo(0, 0);
        const { slug } = this.props.match.params
        
        axios.get(`/api/v1/story/${slug}`)
                .then(response => {
                    this.setState({...this.state, itemData: response.data.data.data_story, isLoading: false});    
                    console.log(this.state);
                });
    }


    render(){
        return(
            <React.Fragment>
                <StoryPageDetailStyle>
                    <HeaderPrimary
                        url="/story"
                        title="STORY"/>
                    <div className="story-page">
                        <div className="container story-page__title">
                            {
                                this.state.isLoading ? 
                                    <Skeleton/> :
                                    <BreadcrumbsPrimary
                                        root="/story"
                                        root_name="story"
                                        title={this.state.itemData.title}/>
                            }
                            {
                                this.state.isLoading ? 
                                    <Skeleton height={25} count={2} style={{margin: "20px 0px 0px"}}/> :
                                    <h1>{this.state.itemData.title}</h1>
                            }
                            {
                                this.state.isLoading ? 
                                    "" :
                                    <p><span className="category">{this.state.itemData.category}</span> by {this.state.itemData.author}</p>
                            }
                        </div>
                        <div className="container story-page__image">
                            {
                                this.state.isLoading ? 
                                    <Skeleton height={300}/> :
                                    <img src={`https://res.cloudinary.com/devbyredcode/image/upload/${this.state.itemData.image}`} className="img-fluid" alt={this.state.itemData.title}/>
                            }
                        </div>
                        <div className="container story-page__description">
                            {
                                this.state.isLoading ? 
                                    <Skeleton height={15} count={10} style={{marginBottom: "15px"}}/> :
                                    <p className="" dangerouslySetInnerHTML={{__html: this.state.itemData.detail}}/>
                            }
                        </div>
                        {
                            this.state.isLoading ? "" : 
                            <div className="container story-page__share">
                                <p>Kalau temen-temen merasa tulisan ini bermanfaat? silahkan bagikan melalui social media agar dapat bermanfaat untuk temen-temen lainya:</p> 
                                <EmailShareButton url={`Baca Artikel - ${this.state.itemData.title} : ${window.location.href}`}><EmailIcon size={32}/></EmailShareButton>
                                <TelegramShareButton url={`Baca Artikel - ${this.state.itemData.title} : ${window.location.href}`}><TelegramIcon size={32}/></TelegramShareButton>
                                <WhatsappShareButton url={`Baca Artikel - ${this.state.itemData.title} : ${window.location.href}`}><WhatsappIcon size={32}/></WhatsappShareButton>
                                <TwitterShareButton url={`Baca Artikel - ${this.state.itemData.title} : ${window.location.href}`}><TwitterIcon size={32}/></TwitterShareButton>
                                <WorkplaceShareButton url={`Baca Artikel - ${this.state.itemData.title} : ${window.location.href}`}><WorkplaceIcon size={32}/></WorkplaceShareButton>
                            </div>
                        }
                    </div>
                <FooterSection/>
                </StoryPageDetailStyle>
            </React.Fragment>
        )
    }
}

export default StoryPageDetail;