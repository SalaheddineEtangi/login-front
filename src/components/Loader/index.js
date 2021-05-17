import React from 'react';
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
    <div>
        <img 
            src={loaderSrc} 
            alt="Chargement..."
            style={{width:70}}    
        />
    </div>
)

export default Loader;