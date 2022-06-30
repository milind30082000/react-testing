import React, { useState } from 'react'
import {Link} from 'react-router-dom';


function App() {

  const [val,setVal] = useState(undefined);
  let link = `/post/${val}`;

  const handleChange = (event) => {
      setVal(event.target.value);
  }

  return (
    <div>
      <h2>Welcome..</h2>
      <h4>Search by ID</h4>
      <label htmlFor='userid'>ID</label>
      <input id = "userid" type="text" placeholder="Search" name="search" value = {val} onChange={handleChange}/>
      <button type="submit"><Link to = {link}>Submit</Link></button>
    </div>
  );
}

export default App;
