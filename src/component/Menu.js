/**
 * Created by sora on 2017. 3. 27..
 */
import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/component/menu.css';

export default class Menu extends Component {
    render(){
        return (
            <div className="menu">
                <Link to="/" className="menu-item">성경</Link>
                <Link to="/setting" className="menu-item">설정</Link>
            </div>
        )
    }
}
