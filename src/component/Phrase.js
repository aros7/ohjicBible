/**
 * Created by sora on 2017. 3. 27..
 */
import React, { Component } from 'react';
import Header from './phrase/Header';
import Content from './phrase/Content';
import Menu from './Menu';

export default class Phrase extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Content/>
                <Menu/>
            </div>
        )
    }

}