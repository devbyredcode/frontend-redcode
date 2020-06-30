import React, { Component } from 'react'
import StoryPageDetailStyle from './index.style';
import HeaderPrimary from '../../components/header-primary';
import LoadingPrimary from '../../components/loading-primary';
import BreadcrumbsPrimary from '../../components/breadcrumbs-primary';
import FooterSection from '../../section/footer-section';
import axios from '../../axios';

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
                            <p>Kalau temen-temen merasa tulisan ini bermanfaat? silahkan bagikan melalui social media supaya bisa bermanfaat untuk temen-temen lainya dengan cara klik  
                                <a className="share-twt" href={`https://twitter.com/intent/tweet?text=Ayo baca artikel berjudul: ${this.textToCapitalize(this.state.itemData.title)}, silahkan klik ${window.location.origin}/#/story/${this.state.itemData.slug}. Semoga bermanfaat`}> Bagikan melalui Twitter</a>
                                <a className="share-wa" href={`whatsapp://send?text=Ayo baca artikel berjudul: ${this.textToCapitalize(this.state.itemData.title)}. Silahkan klik ${window.location.origin}/#/story/${this.state.itemData.slug}. Semoga bermanfaat`}><span className="black"> atau</span> Bagikan melalui Whatsapp</a> 
                            </p>
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