import classes from '*.module.css';
import React from 'react';



const burgerIngredient = ( props ) => {
    let ingredient = null;

    switch (props.type) {
        case ('bread-bottom'):
            ingredients = <div className={classes.BreadBottom}></div>;
            break;
        case ('bread-top'):
            ingredient = (
                <div className={classses.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case ('meat'):
            ingredient = <div className={classes.Meat}></div>;
            break;
        
        case ('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;

        case ('salad'):
            ingredient = <div className={classes.Salad}></div>
            break;

        case ('bacon'):
            ingredient = <div className={classes.Bacon}></div>
            break;
        
        default:
            ingredient = null;
    }
    return ingredient;

};

export default burgerIngredient;