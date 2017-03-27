/**
 * Created by sora on 2017. 3. 27..
 */
import React, { Component } from 'react';
import Menu from './Menu';
import UserSetting from './setting/UserSetting'

export default class extends Component {
    render(){
        return (
            <div>
                <UserSetting/>
                <Menu/>
            </div>
        )
    }

}