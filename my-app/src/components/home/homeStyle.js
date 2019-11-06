import styled from 'styled-components';

export const HomeWrap = styled.div`
margin: 50px auto;
width: 1000px;
height: 1500px;
`;
export const HomeLeft = styled.div`
width: 630px;
//height: 1000px;
//background: blue;
float: left;
img{
width: 630px;
}
`;
export const HomeRight = styled.div`
width: 280px;
//height: 1000px;
float: right;
`;

export const TopicWrap = styled.div`
width: 630px;
height: 120px;
margin-top: 20px;
`;

export const TopicItem = styled.div`
width: 100px;
height: 50px;
border: 1px solid #cccccc;
float: left;
margin-left: 21px;
margin-top: 6px;
img{
width: 50px;
margin: 0 10px 0 0;
}
span{
display: inline-block;
margin-top: 15px;
}
`;

export const ListWrap = styled.div`
width: 630px;
height: 600px;
margin-top: 30px;
`;

export const ListItem = styled.div`
width: 630px;
height: 190px;
border: 2px solid #cccccc;
margin-top: 30px;
a{
color: #333333;
text-decoration: none;
}
a:hover{
color: #999999;
}
img{
height: 100px;
width: 200px;
float: left;
margin: 33px 13px;
}
div{
float: right;
border-left: 2px solid #cccccc;
width: 400px;

h3{
text-align: center;
}
p{
text-indent: 2em;
padding: 0 20px;
}
}
`;

export const SineWrap = styled.div`
width: 280px;
height: 400px;
`;

export const SineItem = styled.div`
margin-bottom: 20px;
width: 280px;
height: 100px;
border: 2px solid  #cccccc;
text-align: center;
img{
width: 150px;
}
`;

export const ScanWrap = styled.div`
width: 280px;
//height: 400px;
margin-top: 80px;
`;

export const ScanItem = styled.div`
width: 280px;
height: 50px;
text-align: center;
line-height: 50px;
border-bottom: 2px solid #cccccc;
`;


