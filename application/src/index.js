import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function Hello(props) {
    return <h1>Hello {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello name="World"/>);