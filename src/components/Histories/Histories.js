import React, { Component } from 'react';
import History from './History'
import SearchHistory from './SearchHistory'
import '../../css/histories.css'
//import PropTypes from 'prop-types';

class Histories extends Component {
    render() {
        return (
            <div className="histories-container">
                <div className="histories-search">
                    <SearchHistory/>
                </div>
                <div className="histories-content">
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                    <History/>
                </div>
            </div>
        );
    }
}

Histories.propTypes = {

};

export default Histories;