import React from 'react';
import {HeadWrap, Logo, Nav, NavItem, SearchWrap, Search, SearchInfo} from "./headStyle";
import {connect} from "react-redux";
import * as headActionCreaters from './store/headActionCreates';

function showInfo(flag) {
    if (flag) {
        return (
            <SearchInfo>
                <span>欧美家具</span>
                <span>简约花瓶</span>
                <span>精品陶瓷</span>
            </SearchInfo>
        )
    } else {
        return null
    }
}

function Head(props) {
    /*constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }*/
    const {flag, inputFocus, inputBlur} = props;
    return (
        <div>
            <HeadWrap>
                <Logo/>
                <Nav>
                    <NavItem href='/home'>首页</NavItem>
                    <NavItem href='/detail'>详情页</NavItem>

                </Nav>
                {showInfo(flag)}
                <SearchWrap>
                    <Search className={flag ? 'flag' : ''}
                            onFocus={inputFocus}
                            onBlur={inputBlur}/>
                    <span className='glyphicon glyphicon-search'/>
                </SearchWrap>

            </HeadWrap>
        </div>
    )
}

//映射数据
const mapState = (state) => ({
    flag: state.head.flag
});
//派发方法
const mapDispatch = (dispatch) => ({
    inputFocus() {
        /*const action={
            type:'input_focus'
        };
        dispatch(action);*/
        dispatch(headActionCreaters.handleFocus())
    },
    inputBlur() {
        /* const action={
             type:'input_blur'
         };
         dispatch(action);*/
        dispatch(headActionCreaters.handleBlur())
    }
});


export default connect(mapState, mapDispatch)(Head);