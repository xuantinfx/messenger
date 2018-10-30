import React, { Component } from 'react';
import '../css/loading.css'
//import PropTypes from 'prop-types';

class Loading extends Component {
    render() {
        return (
            <div className="cssload-loader-inner">
                <div className="cssload-cssload-loader-line-wrap-wrap">
                    <div className="cssload-loader-line-wrap"></div>
                </div>
                <div className="cssload-cssload-loader-line-wrap-wrap">
                    <div className="cssload-loader-line-wrap"></div>
                </div>
                <div className="cssload-cssload-loader-line-wrap-wrap">
                    <div className="cssload-loader-line-wrap"></div>
                </div>
                <div className="cssload-cssload-loader-line-wrap-wrap">
                    <div className="cssload-loader-line-wrap"></div>
                </div>
                <div className="cssload-cssload-loader-line-wrap-wrap">
                    <div className="cssload-loader-line-wrap"></div>
                </div>
            </div>
        );
    }
}

Loading.propTypes = {

};

export default Loading;