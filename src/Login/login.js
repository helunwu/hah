import React from 'react';
import {Form, Input, Icon,Button} from 'antd';
import{Link} from 'react-router-dom';
var LoginCss=require('./login.css')


export default class LoginPage extends React.Component {
    render() {
        return (
            <div> 
            <div  className={LoginCss.login}>
            Welcome to the login screen
            </div>
          
             <div className={LoginCss.a}>
             <div className={LoginCss.lll}>
            Never Give Up! Fighting！Fighting！
            </div>
                <div className={LoginCss.div}>
                <Form >
                    <Form.Item>
                        <Input prefix={<Icon type="user"></Icon>} placeholder="用户名"></Input>
                    </Form.Item>
                    <Form.Item>
                        <Input prefix={<Icon type="lock"></Icon>} placeholder="密码"></Input>
                    </Form.Item>
                    <Form.Item >
                        <Link to="/forget">忘记密码</Link>
                       <Link to=""> <Button type="primary"  className={LoginCss.btn}>登录</Button></Link>
                        <Link to="/register"><Button shape="circle" type="primary" className={LoginCss.Item}>注</Button></Link> 
                         
                    </Form.Item>
                </Form> 
                
                </div>
                <div className={LoginCss.haha}>
                    <div className={LoginCss.hhh}>
                     强大的招聘平台
                </div>
                <div className={LoginCss.kkk}>
                    收获职业机会 
                    </div>
                    <div className={LoginCss.ttt}>
                    打造职业形象
                    </div>
             <div className={LoginCss.nnn}>
                提供快捷、高效、可靠地网上招聘
               <div className={LoginCss.eee}>
                好机会主动找上你，成就职业成功
                <div className={LoginCss.ooo}>
                创建职业档案，持续展示自己的优势 
                </div>
               </div>
                </div>
               
                </div>
             </div>
            
            </div>
        
        )
    }
}
