import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '900px'}}>
            {props.children}
        </div>
    )
};

export default Scroll;

// component 1 ku ko nout component 1 ku ka wrap pee lote loh ya del
// every props object has children which means props.children