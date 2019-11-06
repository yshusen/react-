import React,{Component} from "react";
import {SineWrap,SineItem} from "../homeStyle";
import {connect} from 'react-redux';
class Sine extends Component{
    state={
        sineList:[]
    };
    render(){
        return(
            <div>
                <SineWrap>
                    {
                        this.props.sineList.map((item,index)=>{
                            return(
                                <SineItem key={index}>
                                    <img src={item.sineUrl} alt=""/>
                                    <p>{item.title}</p>
                                </SineItem>
                            )
                        })
                    }
                </SineWrap>
            </div>
        )
    }
}

const mapState =(state)=>({
    sineList:state.home.sineList
});
export default connect(mapState,null)(Sine);
