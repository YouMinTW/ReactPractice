import React from "react";
const Button = (props) => {
  return(
    <button onClick = { props.mission } >{ props.name } { props.children } </button>
  )
}
export default Button