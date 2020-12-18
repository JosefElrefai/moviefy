import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { changeSRC } from '../../actions/SRC'

class ChooseSRC extends React.Component {

    srcFrom(SRC){
        const { changeSRC } = this.props;
        changeSRC(SRC);
    }

    render(){
        const { children } = this.props;
        return (
            <Fragment>
                {children({
                    srcFrom: this.srcFrom    
                })}
            </Fragment>
        );
    }
}

export default connect(null, { changeSRC })(ChooseSRC);