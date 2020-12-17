import React from 'react';
import classes from './Button';

const button = (props) => (
    <button 
        className={[classes.Button, classes[props.btnType]].join('')}
        onCLick={props.clicked}>{props.children}
    </button>
);

export defualt button;