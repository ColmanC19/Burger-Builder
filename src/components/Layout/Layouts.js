import React from 'react';
import Aux from '../../hoc/Aux'; 
import './Layouts.css'

const layout = ( props ) => (
    <Aux>
    <div className="Content">Toolbar, SideDrawer, Backdrop</div>
    <main>
        {props.children}
    </main>
    </Aux>
);

export default layout;