import React, { useEffect } from 'react';
import { fetchList, setEmployees } from '../actions/list';
import { useDispatch, useSelector } from 'react-redux';

function List() {
  useEffect(() => {
    //dispatch(fetchList());
  }, []);

  const dispatch = useDispatch();
  const state = useSelector(state => state);

  return (
    <div className="App">
      <button className="btn" onClick={() => dispatch(fetchList())}>
        Fetch
      </button>
      { Object.keys(state.list).length > 0 && state.list.data.map(o => {
        return <div key={o.id}> {o.employee_name} </div>
      })}
    </div>
  );
}

export default App;
