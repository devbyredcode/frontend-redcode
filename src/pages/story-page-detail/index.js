import React, { Component } from 'react'
import StoryPageDetailStyle from './index.style';
import HeaderPrimary from '../../components/header-primary';
import LoadingPrimary from '../../components/loading-primary';
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
                {this.state.isLoading ?
                <LoadingPrimary/> :
                <StoryPageDetailStyle>
                    <HeaderPrimary
                        url="/story"
                        title="STORY"/>
                    <div className="story-page">
                        <div className="container story-page__title">
                            <BreadcrumbsPrimary
                                root="/story"
                                root_name="story"
                                title={this.state.itemData.title}
                            />
                            <h1>{this.state.itemData.title}</h1>
                            <p><span className="category">{this.state.itemData.category}</span> by {this.state.itemData.author}</p>
                        </div>
                        <div className="container story-page__image">
                            <img src={`https://res.cloudinary.com/devbyredcode/image/upload/${this.state.itemData.image}`} className="img-fluid" alt={this.state.itemData.title}/>
                        </div>
                        <div className="container story-page__description">
                            <p className="" dangerouslySetInnerHTML={{__html: this.state.itemData.detail}}/>
                        </div>
                        <div className="container story-page__share">
                            <p>Kalau temen-temen merasa tulisan ini bermanfaat? silahkan bagikan melalui social media agar dapat bermanfaat untuk temen-temen lainya:</p>
                            <EmailShareButton url={`Ayo baca artikel berikut, yang berjudul ${this.textToCapitalize(this.state.itemData.title)} dengan klik link berikut ${window.location.href} dan semoga bermanfaat`}><EmailIcon size={32}/></EmailShareButton>
                            <TelegramShareButton url={`Ayo baca artikel berikut, yang berjudul ${this.textToCapitalize(this.state.itemData.title)} dengan klik link berikut : ${window.location.href} dan semoga bermanfaat`}><TelegramIcon size={32}/></TelegramShareButton>
                            <WhatsappShareButton url={`Ayo baca artikel berikut, yang berjudul ${this.textToCapitalize(this.state.itemData.title)} dengan klik link berikut : ${window.location.href} dan semoga bermanfaat`}><WhatsappIcon size={32}/></WhatsappShareButton>
                            <TwitterShareButton url={`Ayo baca artikel berikut, yang berjudul ${this.textToCapitalize(this.state.itemData.title)} dengan klik link berikut : ${window.location.href} dan semoga bermanfaat`}><TwitterIcon size={32}/></TwitterShareButton>
                            <WorkplaceShareButton url={`Ayo baca artikel berikut, yang berjudul ${this.textToCapitalize(this.state.itemData.title)} dengan klik link berikut : ${window.location.href} dan semoga bermanfaat`}><WorkplaceIcon size={32}/></WorkplaceShareButton>
                        </div>
                    </div>
                <FooterSection/>
                </StoryPageDetailStyle>
                }
            </React.Fragment>
        )
    }
}

export default StoryPageDetail;