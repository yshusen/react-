import styled from 'styled-components';
export const LoginWrap = styled.div`
position: relative;
width: 1000px;
height: 700px ;
margin: 0 auto;
`;
export const LoginItem = styled.div`
position: absolute;
top: 50%;
left: 50%;
width: 400px;
height: 250px;
background-color: #fff;
border-radius: 10px;
margin-top: -125px;
margin-left: -200px;
box-shadow: 0 0 6px rgba(0,0,0,.5);
text-align: center;
h1{
text-align: center;
}
/*.ant-input-affix-wrapper{
width: 80%;
margin: 0 10% 20px;
}
.ant-btn{
margin: 0 170px;
}*/
input{
border: 1px solid #999999;
border-radius: 3px;
width: 70%;
height: 35px;
line-height: 35px;
margin: 0 15% 20px;
padding: 0 10px;
}
`;