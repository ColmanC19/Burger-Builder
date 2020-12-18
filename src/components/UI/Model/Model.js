import React, { Component } from 'react';
import classes from './Model.module.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

class Model extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show)
    }
    componentWillUpdate () {
        console.log('[Model] WillUpdate')
    }
    render () {
        return (
            <Aux>
            <Backdrop show={this.props.show} clicked={this.props.modelClosed}/>
            <div 
                className={classes.Model}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh',
                    opacity: this.props.show ? '1' : '0'
                }}>
                {this.props.children}
            </div>
        </Aux>
        )
    }
};



export default Model