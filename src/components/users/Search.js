import React from 'react'
import {useState} from 'react';


const Search = (props) =>{

const [text, setText] = useState("");

const onChange = (e) => {
  setText(e.target.value);
}

const onSubmit = (e) => {
  e.preventDefault();
  if(text === ""){
    props.setAlert('please enter somthing', 'light');
  }else{
    props.searchUsers(text)
    setText('');
  }
}
    const { showClear, clearUsers } = props;

    return(
      <div>
        <form action="" className="form" onSubmit={onSubmit}>
          <input type="text" name="text" placeholder="Search Users" value={text} onChange={onChange}/>
          <input type="submit" value="Search" className="btn btn-dark btn-block"/>
        </form>
        {showClear && <button onClick={clearUsers}className="btn btn-light btn-block">Clear</button>}
      </div>
   );
}

export default Search
