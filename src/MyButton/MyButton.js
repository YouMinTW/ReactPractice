import React from "react";
const MyButton = (props) => {
  return(
    <div>
      <h2>Level: { props.stage } { props.name } </h2>
      <button onClick = { props.mission } >{ props.name } { props.children } </button>
    </div>
  )
}

export default MyButton