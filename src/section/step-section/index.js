import React, { Component } from 'react';
import TwoColsPrimary from './../../components/two-cols-primary';
import StepSectionStyle from './index.style';

class StepSection extends Component{
    state = {
        steps : [
            {direction: "", position: "item-left", position2: "item-right", animate1:"animate-horizontal-near", animate2:"animate-horizontal-far", char1: "char_1", char2: "char_2", image: "background-research", title :"Research Phase", mobile_desc:"We collect all data and requirements to find best solution with you.", description: "In this phase, we will collect all the ingredients (problems, data and requirements) to find best solution. If you already know what is the ingredients, we will happy to give you some suggestions to make more mature solution"},
            {direction: "reverse", position: "item-left", position2: "item-right", animate1:"animate-horizontal-far", animate2:"animate-horizontal-near", char1: "char_4", char2: "char_2", image: "background-design", title :"Design Phase", mobile_desc:"We start make prototype and apps interface with good user experience.", description: "After having the best ingredients, we start to make a prototype and apps interface with good user experience. You can also join our creative team in this phase, to make sure the app is designed for you"},
            {direction: "", position: "item-center",  position2: "", animate1:"animate-horizontal-exfar", animate2:"animate-horizontal-far", char1: "char_3", char2: "", image: "background-build", title :"Build Phase", mobile_desc:"Take your time while our dev team start do some magic until the apps are ready to use", description: "The final step is we start to develop. No need to worry about this phase, you just need to wait and enjoy your time while our dev team start do some magic until the apps are ready to use"}
        ] 
    }

    render(){
        return(
            <StepSectionStyle>
                <div>
                    <h2 className="text--step-up-1">the way how we <span className="red">works</span></h2>
                </div>
                
                {this.state.steps.map((data, index) => {
                    return <TwoColsPrimary 
                                key={index}
                                direction={data.direction}
                                animate1={data.animate1}
                                animate2={data.animate2}
                                image={data.image}
                                position={data.position}
                                position2={data.position2}
                                char1={data.char1}
                                char2={data.char2}
                                title={data.title}
                                description={data.description}
                                mobile_desc={data.mobile_desc}/> 
                })}
            </StepSectionStyle>
        )
    }
}

export default StepSection;