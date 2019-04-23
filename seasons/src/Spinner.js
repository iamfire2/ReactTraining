import React from 'react';

const Spinner = (props) => {
    return (
    <div className='ui active dimmer'>
        <div className='ui big text loader'>{props.inputText}</div>
    </div>
    );
};

Spinner.defaultProps = {
    inputText: 'Loading'
};

export default Spinner;