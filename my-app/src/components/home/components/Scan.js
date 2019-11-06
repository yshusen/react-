import React, {Component} from "react";
import {ScanWrap, ScanItem} from "../homeStyle";
import {connect} from 'react-redux';
class Scan extends Component {
    state={
      scanList:[]
    };
    render() {
        return (
            <div>
                <ScanWrap>
                    <div>
                        <img src="http://asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848"
                             alt=""/>
                        <img src="http://asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848"
                             alt=""/>
                    </div>
                    {
                        this.props.scanList.map((item,index)=>{
                            return(
                                <ScanItem key={index}>
                                    <p>{item.txt}</p>
                                </ScanItem>
                            )
                        })
                    }
                </ScanWrap>
            </div>
        )
    }
}

const mapState =(state)=>({
    scanList:state.home.scanList
});
export default connect(mapState,null)(Scan);
