import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function InputComponent(props) {
  return(
            <input type="text" class="form-control" size="50" placeholder={props.inputText} required></input>
        );
}

export default InputComponent;