import React from 'react';
import InputComponent from './InputComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function SearchComponent(props) {
  return(
    <div>
      <header>
        <div class="navbar">
            <h4>Smart Submissions</h4>
            <nav>
                <ul>
                    <li><a>Employers</a></li>
                    <li><a>Sign Up</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </div>
    </header>
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
    </div>
  );
}

export default SearchComponent;