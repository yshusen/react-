//当有许多组件要使用 reducer共有数据时，应该把主的 reducer进行拆
//把处理数据的内容让各个组件分的 reducer去承担，主 reducer只承担
//引入分 reducer的作用，最后通过 store把数据映射到所有组件中

import {combineReducers} from "redux";//负责拆分reducer
import headReducer from './../components/head/store/headReducer';
import homereducer from './../components/home/store/homeReducer';

export default combineReducers({
    head:headReducer,
    home:homereducer
})