import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, Consumer } from 'reactjs-context';
import { initialState, actions, reducer } from './context';
import './index.css';

function App() {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      <div className="app">
        <Consumer>
          {({ state, dispatch }) => {
            const { increment, decrement } = actions(dispatch);
            return (
              <div>
                <h1>{state.counter}</h1>
                <div className="container">
                  <button onClick={() => decrement()}>DECREMENT</button>
                  <button onClick={() => increment()}>INCREMENT</button>
                </div>
              </div>
            );
          }}
        </Consumer>
      </div>
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
