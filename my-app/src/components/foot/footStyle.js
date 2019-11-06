import styled from 'styled-components';
export const FootWrap = styled.div`
overflow: hidden;
margin: 0 auto;
width: 100%;
//height: 1000px;
background-color: #EEEEEE ;
`;
export const FootInner = styled.div`
overflow: hidden;
margin: 0 auto;
width: 1000px;
.logo{
float: left;
width: 300px;
height: 180px;  
margin: 40px 0 40px;
img{
width: 110px;
}
p{
margin-top: 15px;
font-size: 12px;
color: #636363;
}
p:hover{
color: #dbb68f;
}
}
.foot_nav{
margin-top: 40px;
margin-left: 50px;
float: left;
dl{
color: #636363;
float: left;
margin: 0 25px;
dt{
font-weight: 400;
}
dt:hover{
cursor: pointer;
color: #dbb68f;
}
dd{
margin-top: 5px;
font-size: 12px;
}
dd:hover{
cursor: pointer;
color: #dbb68f;
}
}
}
.foot_QRCodes{
margin-top: 40px;
float: right;
div{
float: left;
margin-left: 50px;
img{
width: 100px;
}
}
p{
margin-top: 5px;
width: 100px;
height: 20px;
text-align: center;
}
p:hover{
color: #dbb68f;
}
}
`;