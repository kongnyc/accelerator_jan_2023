import React from 'react';

function Container({children}) {
    console.log('Container rendered '); 

    return (
        <div>
            {children}
        </div>
    );
}

export default Container;