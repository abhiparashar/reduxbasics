import "./App.css";
import {useSelector,useDispatch} from 'react-redux'
import {IncrementNum,DecrementNum} from './actions/index'

const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch()
  return (
    <div className="app">
      <div className="h1">Increment and Decrement</div>
      <div className="p">Using React and Redux</div>
      <div className="blocks">
        <div className="block" onClick={()=>dispatch(DecrementNum())}>
          <i className="fas fa-minus"></i>
        </div>
        <div className="block">
          <div className="state">{myState}</div>
        </div>
        <div className="block" onClick={()=>dispatch(IncrementNum(5))}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
