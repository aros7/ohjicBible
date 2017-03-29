/**
 * Created by sora on 2017. 3. 29..
 */
import React, { Component } from 'react';
import '../css/component/search.css';

export default class Search extends Component {
    render(){
        return (
            <div className="wrap">
                <div className="searchBar">
                    <input type="text" id="searchName" />
                </div>
                <div className="resultContent">
                    content
                </div>
            </div>
        )
    }
}