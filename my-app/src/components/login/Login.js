import React, {Component} from 'react';
import {LoginWrap,LoginItem} from './loginStyle';
import { Button } from 'antd';
import axios from 'axios'
class Login extends Component{
    axiosPost(){
        axios.post('/',{
            user:this.user.value,
            pass:this.pass.value
        }).then((res)=>{
            console.log(res);
        }).catch(()=>{
            console.log('数据提交失败!!')
        })
    }
    render() {
        return(
            <div className="Login">
                <LoginWrap>
                    <LoginItem>
                        <h1>登录</h1>
                        {/*<Input placeholder="请输入用户名"
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               ref={(ref)=>this.user=ref}/>
                        <Input.Password placeholder="请输入密码"
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        ref={(ref)=>this.pass=ref}/>*/}
                        <input type="text" placeholder="请输入用户名" ref={(ref)=>this.user=ref} /><br/>
                        <input type="password" placeholder="请输入密码" ref={(ref)=>this.pass=ref} /><br/>
                        <Button type = "primary" icon = "login" onClick ={this.axiosPost.bind(this)}>登录</Button>
                    </LoginItem>
                </LoginWrap>
            </div>
        )
    }
}
export default Login;

