import React,{Component} from 'react'
import {FootWrap,FootInner} from "./footStyle";
import axios from  'axios';
import {connect} from 'react-redux';

class Foot extends Component{
    state={
        list:[]
    };
    render() {
        return(
            <div>
                <FootWrap>
                    <FootInner>
                        <div className='logo'>
                            <a href=""><img src="http://asset.ibanquan.com/s/30611/727/logo?v=1568268246_1572510848" alt=""/></a>
                            <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>
                        </div>
                        <div className='foot_nav'>
                            <dl>
                                <dt>关于我们</dt>
                                <dd>关于我们</dd>
                                <dd>关于我们</dd>
                                <dd>关于我们</dd>
                                <dd>关于我们</dd>
                            </dl>
                            <dl>
                                <dt>支付方式</dt>
                                <dd>支付方式</dd>
                                <dd>支付方式</dd>
                                <dd>支付方式</dd>
                                <dd>支付方式</dd>
                            </dl>
                            <dl>
                                <dt>相关服务</dt>
                                <dd>相关服务</dd>
                                <dd>相关服务</dd>
                                <dd>相关服务</dd>
                                <dd>相关服务</dd>
                            </dl>
                        </div>
                        <div className="foot_QRCodes">
                            <div>
                                <img src="http://asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                                <p className='wx'>微信公众号</p>
                            </div>
                            <div>
                                <img src="http://asset.ibanquan.com/s/30611/727/footerImgShow_1?v=1568268246_1572510848" alt=""/>
                                <p className='wx'>微信公众号</p>
                            </div>
                        </div>
                    </FootInner>
                </FootWrap>
            </div>

        )
    }
}

export default Foot;