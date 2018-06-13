import React from 'react'

const ChatHeader = () => {
  return (
    <div className="ChatHeader" style={styles.ChatHeaderClass}>
      <div className="roomInfo">
        <h2  style={styles.ChatHeaderRoomInfoh2Class}>
        #general</h2>
        <p style={styles.ChatHeaderRoomInfopClass}>
        Announcements and general chat</p>
      </div>
    </div>
  )
}

var styles = {

    //.ChatHeader
        ChatHeaderClass: {
                backgroundColor: "#f3f3f3",
                borderBottom: "1px solid #ccc",
                height: "3rem",
                padding: "0 1rem",
                display: "flex",
                alignItems: "center"
        },
    //.ChatHeader .roomInfo h2
        ChatHeaderRoomInfoh2Class: {
                fontSize: "1.1rem",
                margin: "0"
        },
    //.ChatHeader .roomInfo p
        ChatHeaderRoomInfopClass: {
                color: "#999",
                margin: "0",
                fontSize: "0.8rem"
        }
    }


export default ChatHeader