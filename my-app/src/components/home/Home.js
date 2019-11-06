import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from "./homeStyle";
import axios from  'axios';
import {connect} from 'react-redux';
import List from './components/List';
import Topic from './components/Topic';
import Scan from './components/Scan';
import Sine from './components/Sine';


class Home extends Component{
    render() {
        return(
            <div>
                <HomeWrap>
                    <HomeLeft>
                        <img src="http://asset.ibanquan.com/s/30611/727/index_global3_pic_3?v=1568268246_1572510848" alt=""/>
                        <Topic/>
                        <List/>
                    </HomeLeft>
                    <HomeRight>
                        <Sine/>
                        <Scan/>
                    </HomeRight>
                </HomeWrap>
            </div>
        )
    }
    componentDidMount() {
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                console.log(res.data);
                const data = res.data.data;
                const action = {
                    type:'init_home_data',
                    data
                };
                this.props.changeHomeData(action);
            })
    }

}
const mapDispatch = (dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
});
export default connect(null,mapDispatch)(Home);