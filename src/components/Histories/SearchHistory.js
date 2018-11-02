import React, { Component } from 'react';
import {Input} from 'reactstrap'
import PropTypes from 'prop-types';

class SearchHistory extends Component {
    render() {
        return (
            <div>
                <Input onChange={e => this.props.onChange(e.target.value)} placeholder={"Search ..."}/>
            </div>
        );
    }
}

SearchHistory.propTypes = {
    onChange: PropTypes.func
};

export default SearchHistory;