import React from "react";
import Bomb from "./SubBomb/Bomb"
import Button from "./SubBomb/Button"

const MyButton = (props) => {
  return(
    <div>
      <h2>Level: { props.stage } { props.name } </h2>
      {
        props.theFlag&&props.stage===5 ? <Bomb /> : <Button mission = { props.mission } name = { props.name } > { props.children } </Button>
      }
    </div>
  )
}

export default MyButton