import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    request: 'not set!',
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Welcome one and all!</h2>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png'} `}
            style={{ width: '200px', height: 'auto', borderRadius: '9999px' }}
            alt="DianaBook"
          />
        </header>

        <div className="App-Section" style={{ marginTop: '100px' }}>
          <h2 style={{ color: 'white' }}> Is this thing on? </h2>
          <button className="get-btn">
            GET
            <br />
            <code>/</code>
          </button>
          <button className="post-btn">POST</button>
          <button className="put-btn">PUT</button>
          <button className="delete-btn">DELETE</button>
        </div>

        <div
          style={{
            textAlign: 'left',
            backgroundColor: 'white',
            height: 'auto',
            padding: '50px',
            fontSize: '1.5em',
            paddingBottom: '50px',
          }}
        >
          <h3 style={{ color: 'green' }}>Response{this.state.isLoading && ' Loading'}</h3>
          <hr style={{ borderBottom: '1px solid green' }} />
          Responses will show here, once you've made a request.
          <div style={{ width: 'inherit', marginTop: '2em' }}>
            <h3 style={{ color: 'red' }}>Errors</h3>
            <hr style={{ borderBottom: '1px solid red' }} />
            {this.state.errors ? (
              <code style={{ fontSize: '14px' }}>{JSON.stringify(this.state.errors)}</code>
            ) : (
              <span style={{ color: 'gray' }}>"No errors...yet"</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
