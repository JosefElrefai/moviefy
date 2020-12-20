import React from 'react';
import { connect } from 'react-redux';

import { changeSRC } from '../../actions/SRC'

class ChooseSRC extends React.Component {

    srcFrom = (source) => {
        this.props.changeSRC(source);
    };

    render(){
        const { children } = this.props;
        return children({ srcFrom: this.srcFrom });
    }
}

export default connect(null, { changeSRC })(ChooseSRC);