import {useState} from 'react';

import classes from './Counter.module.css';

export default function Counter(){
 const [count,setCount] = useState(0);

  function incrementCount(){
  setCount(count + 1 );
  }

  function decrementCount(){
  if (count>0) setCount(count - 1 );
  }

    return (
    <div>
        <h1 className={classes.counterText}>Count:{count}</h1>
        <div className={classes.btmContainer}>
        <button onClick={incrementCount}>Increment</button>
        {/* {count>0?<button onClick={decrementCount}>Decrement</button>:<></>}*/}
        {count>0 &&<button onClick={decrementCount}>Decrement</button>:<></>}
    </div>
    </div>
    );
}