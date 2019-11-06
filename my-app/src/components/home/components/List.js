import React,{Component} from 'react';
import {ListWrap,ListItem} from './../homeStyle';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
class List extends Component{
    state={
        list:[]
    };
    render(){
        return(
            <div>
                <ListWrap>
                    {
                        this.props.list.map((item,index)=>{
                            return(
                                <ListItem key={index}>
                                    <Link to={`/single/${item.id}`}>
                                    <img src={item.listUrl} alt=""/>
                                    <div>
                                        <h3>{item.txt}</h3>
                                        <p>{item.desc}</p>
                                    </div>
                                    </Link>
                                </ListItem>
                            )
                        })
                    }
                </ListWrap>
            </div>
        )
    }
}

const mapState =(state)=>({
    list:state.home.list
});
export default connect(mapState,null)(List);