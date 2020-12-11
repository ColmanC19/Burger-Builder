import React from 'react';
import classes from './Model.module.css';

const model = (props) => (
    <div className={classes.Model}>
        {props.children}
    </div>
);

export default model