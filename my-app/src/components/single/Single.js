import React, {Component} from 'react';
import {SingleWrap, SingleItem} from "./singleStyle";
import axios from 'axios';
class Single extends Component {
    state = {
        list: [],
        flag:false
    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        /*`http://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`*/
        axios.get('/data/getHomeList.json')
            .then((res)=>{
                console.log(res);
                this.setState({
                    list:res.data.data.list,
                    flag:true
                });

            })
    }

    render() {
        return (
            <div className="Single">
                <SingleWrap>
                    <SingleItem>
                        <div>{this.state.flag ? <h1>{this.state.list[this.props.match.params.id-1].txt}</h1> : ''}</div>
                        <div>{this.state.flag ? <img src={this.state.list[this.props.match.params.id-1].singleUrl} alt=""/> : ''}</div>
                        <div>{this.state.flag ? <p>{this.state.list[this.props.match.params.id-1].desc}</p> : ''}</div>
                        {/*<img src="http://asset.ibanquan.com/image/58808de93f8f9009880000ce/s.jpeg?v=1484819945" alt=""/>*/}
                        {/*<p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活。</p>*/}
                    </SingleItem>
                </SingleWrap>
            </div>
        )
    }
}

export default Single;