// import React, { Component } from 'react'

// const instanceLocator = "v1:us1:a7045c88-575d-439e-a42b-4f580240ca4d";
// const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/a7045c88-575d-439e-a42b-4f580240ca4d/token";
// const userName = "testGA";
// const roomId = "26610866"


// class ChatContainer extends Component {
//     constructor() {
//         super();
//         this.state = {
//             messages: [],
//             message: ''
//         }
//         this.sendMessage = this.sendMessage.bind(this)
//         this.handleChange = this.handleChange.bind(this)
//     }
//     componentDidMount() {
//         const chatBox = new ChatKit.ChatManager({
//             instanceLocator: instanceLocator,
//             userId: userName,
//             tokenProvider: new ChatKit.TokenProvider({
//                 url: testToken
//             })
//         })
//         chatManager.connect().then(currentUser => {
//             currentUser.subscribeToRoom({
//                 roomId: roomId,
//                 hooks: {
//                     onNewMessage: message => {
//                         this.setState({
//                             messages: [...this.state.messages, messages]
//                         })
//                     }
//                 }
//             })
//         })
//     }
//     handleChange = () => {
//         this.setState({
//             message: e.target.value
//         })
//     }
//     render() {
//         return (
//             <div className="box chat">
//                 <form>
//                     <input onChange={this.handleChange} value={this.state.value} placeholder="type your message here" type="text"></input>
//                 </form>
//             </div>
//         )
//     }
// }

// export default ChatContainer;