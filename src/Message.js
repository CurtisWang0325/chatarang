import React from 'react'

const Message = (props) => {
  return (
    <div className="Message" style={styles}>
      {props.message.userName}: {props.message.body}
    </div>
  )
}

const styles = {

        display: "flex",
        marginTop: "1rem",
        padding: "0 1rem"

    }

export default Message