import React from 'react'

import Message from './Message'

const MessageList = (props) => {
  return (
    <div className="MessageList" style={styles.MessageListClass}>
      {
        props.messages.map(msg => (
          <Message key={msg.id} message={msg}
          style={styles.MessageListRoomAnnouncementClass} />
        ))
      }
    </div>
  )
}

var styles = {

    //.MessageList
        MessageListClass: {
                backgroundColor: "white",
                flex: "1",
                paddingBottom: "1rem",
                overflowY: "scroll"
        },
    //.MessageList .roomAnnouncement
        MessageListRoomAnnouncementClass: {
                padding: "2rem 1rem"
        },
    //.MessageList .roomAnnouncement h3
        MessageListRoomAnnouncementh3Class: {
                fontSize: "1.5rem"
        }
    }

export default MessageList