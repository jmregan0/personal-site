import React from 'react'
import ReactDOM from 'react-dom'
import App from './src/index';

class Main extends React.Component {
  render () {
    return (
      <div>
        <App />
      </div>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Main />, app);
