import React, { useState } from "react";
import './ListItem.css'

const ListItem = (props) => {
   const [checked, setChecked] = useState(false)

  const deleteHandler = () =>{
    props.delHandler(props.id)
    
  }

  const checkHandler = () =>{
   setChecked(!checked)
   props.checkFn(props.data.id, !checked)
  }

	return (
		<div className="list-item" >
			<div className="itm">
				<input type="checkbox" name="" id="" onChange={checkHandler} checked={checked}/>
				<span onClick={checkHandler}>{props.data.todoName}</span>
			</div>
			<button className="delete">
				<img
					src="/trash.svg"
					alt=""
					onClick={deleteHandler}
				/>
			</button>
		</div>
	);
};

export default ListItem;
