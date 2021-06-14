import React from 'react'
import {
    Profile,
    sendButton
} from "../../components/AllImages"
const Chat = () => {
    const SenderMessage = {
        width: "auto",
        background:" linear-gradient(269.89deg, #2AD5C4 0%, #D6D600 100%)",
        boxShadow: "0px 0px 1.52778px rgba(0, 0, 0, 0.24), 0px 3.05556px 6.11111px rgba(0, 0, 0, 0.16), 0px -1.52778px 1.52778px rgba(0, 0, 0, 0.08)",
        borderRadius:" 0px 36.6667px 36.6667px 36.6667px"
    }
    const receiverMessage = {
       width:"auto",
       borderRadius: "36.6667px 0px 36.6667px 36.6667px",
       boxShadow:"0px 0px 1.52778px rgba(0, 0, 0, 0.24), 0px 3.05556px 6.11111px rgba(0, 0, 0, 0.16), 0px -1.52778px 1.52778px rgba(0, 0, 0, 0.08)",
       background: "#376DF9"

    }
    const chatField = {
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.25)",
        borderRadius: "55px",
        height:"45px"
    }
    return (
        <div className="main-chat-area">
            <div className="chat-box radius10 bg-light-white box-shadow overflow-hidden">
                <div className="chat-header px-3 py-3 border-bottom">
                    <h5 className="f14-size mb-0 font-bold">Chat with Client</h5>
                </div>
                <div className="chat-body p-3" style={{height:"250px",overflowY:"auto"}}>
                    <div className="sender-blade d-flex mb-3">
                        <div className="sender-avatar me-2">
                          <img src={Profile} className="rounded-circle" width="35px" height="35px" />
                        </div>
                        <div className="px-3 f12-size py-2 text-white" style={SenderMessage}>
                            Hi, how much will you charge?
                        </div>
                    </div>
                    <div className="receiver-blade d-flex mb-3 justify-content-end">
                        <div className="px-3 py-2 f12-size  me-2 text-white" style={receiverMessage}>
                           30$ only
                        </div>
                        <div className="sender-avatar">
                          <img src={Profile} className="rounded-circle" width="35px" height="35px" />
                        </div>
                    </div>
                </div>
                <div className="chat-footer px-3 pb-3">
                    <div className="d-flex">
                        <div className="flex-1">
                            <input type="text" className="f12-size text-brand-grey 
                            font-bolder border-0 bg-white px-3 w-100"
                            style={chatField} placeholder="Type Message" />
                        </div>
                        <div>
                            <button className="bg-transparent border-0" type="button">
                                <img src={sendButton} height="55px" />
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Chat