import React from 'react';
import InputComponent from './InputComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function SearchComponent(props) {
  return(

    <div class="jumbotron text-center">
        <h3>Tens and Thousands of jobs for your next career move. Join today!</h3>
        <form class="form-inline justify-content-center">
            <div>
            <InputComponent inputText="Keyword"></InputComponent>
            <InputComponent inputText="Location"></InputComponent>
            <button class="btn btn-primary mainBtn" type="submit" >Search</button>
            </div>
        </form>
    </div>
  );
}

export default SearchComponent;