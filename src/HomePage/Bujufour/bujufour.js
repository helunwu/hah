import React from 'react';
import {Icon} from 'antd';
import {Link} from 'react-router-dom';
import { Row, Col } from 'antd';
var BujufourPageCss =require('./bujufour.css')
export default class BujufourPage extends React.Component{
    render(){
        return(
            <div className={BujufourPageCss.bujufour}>
               <Row>
      <Col span={12}><div className={BujufourPageCss.aa}>欢迎来到二手网</div></Col>
      <Col span={12}>
          <div className={BujufourPageCss.bb}>
          <div><Icon type="user" /><Link to="/login">登</Link> </div>
                      <span>/</span>
                      <div><Link to="/register">注册</Link></div>

                      <div className={BujufourPageCss.cc}><Link>个人中心</Link></div>
                      </div>
      </Col>
    </Row>
            </div>
        )
    }
}