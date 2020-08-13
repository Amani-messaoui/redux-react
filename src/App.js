import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions'
import './App.css';
function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
const dispatch = useDispatch()
  return (
    <div className="App">
       <h2>Counter</h2>
       <div className="cont">
       <button  className="prev" onClick={() =>dispatch(decrement())}>-</button>
       
       <span className="counter">{counter.count}</span>
       
      <button className="next" onClick={() =>dispatch(increment())}>+</button>
      
       </div>
       

       {isLogged ? <h3> information </h3> : ''} 
    </div>
  );
}

export default App;
