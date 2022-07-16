import { useSelector, useDispatch } from 'react-redux';
import { ACTIONS } from './actions/ACTIONS';

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch({ type: ACTIONS.ADD, payload: 5 })}>
        ADD 5
      </button>
      <div>
        <button
          onClick={() => dispatch({ type: ACTIONS.SUBSTRACT, payload: 5 })}
        >
          SUBSTRACT 5
        </button>
      </div>
      {isLogged ? <h2>Sensitive Information</h2> : null}
      <button onClick={() => dispatch({ type: ACTIONS.SIGN_IN })}>
        {isLogged ? 'SIGN OUT' : 'SIGN IN'}
      </button>
    </div>
  );
}

export default App;
