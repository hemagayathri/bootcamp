import React from 'react';
import InputComponent from './InputComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function HeaderComponent(props) {
  return(
      <header>
        <div class="navbar">
            <h3>Smart Submissions</h3>
            <nav>
                <ul>
                    <li><a>Employers</a></li>
                    <li><a>Sign Up</a></li>
                    <li><a>Login</a></li>
                </ul>
            </nav>
        </div>
    </header>
  );
}

export default HeaderComponent;