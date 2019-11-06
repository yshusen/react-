import styled from 'styled-components';
import logo from './../../static/logo.jpg';

export const HeadWrap = styled.div`
height: 60px;
background: #cccccc;
`;
export const Logo = styled.a`
float: left;
height: 60px;
width: 100px;
display: block;
background: url(${logo});
background-size: contain;
margin-left: 50px;
`;
export const Nav = styled.div`
width: 300px;
height: 60px;
float: left;
//background: #096;
margin-left: 100px;
`;
export const NavItem = styled.a`
font-size: 26px;
line-height: 60px;
margin-left: 50px;
cursor:pointer;
`;
export const SearchWrap = styled.div`
width: 300px;
height: 60px;
//background-color: #096;
float: right;
position: relative;
span{
position: absolute;
top: 24px;
right: 135px;
pointer-events:none;
}
`;
export const Search = styled.input.attrs({placeholder: "请输入内容"})`
width: 75px;
height: 40px;
border:none;
float: right;
outline: none;
box-sizing: border-box;
border-radius: 30px;
margin-top: 10px;
margin-right: 105px;
overflow: hidden;
padding: 0 55px 0 20px;
transition: 300ms;
&.flag{
width: 280px;
transition: 300ms;
}
`;
export const SearchInfo = styled.div`
width: 300px;
height: 60px;
float: left;
margin-left: 120px;
span{
font-size: 16px;
margin-left: 30px;
line-height: 60px;
}
`;








