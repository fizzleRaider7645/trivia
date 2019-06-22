import React, { Component } from 'react'
// import { Sidebar } from './containers/Sidebar'
// import { MessagesList } from './containers/MessagesList'
// import { Sidebar } from './containers/Sidebar'

class Chat extends Component {
    render() {
        return (
            <div id="container">
                <aside id="sidebar">Users</aside>
                <section id="main">
                    <section id="messages-list">Messages</section>
                    <section id="new-message">New Message</section>
                </section>
            </div>
        )
    }
}

export default Chat