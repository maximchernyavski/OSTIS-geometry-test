import { React } from 'react'
import './corner-chat.css' 
import { MessageFilled } from '@ant-design/icons'
import { Popover } from 'antd'
import CornerChat from './corner-chat'

function ChatButton () {
    return (
        <Popover
            placement='topRight'
            trigger='click'
            content={<CornerChat style={{maxWidth: '20vw'}} />}
        >
            <div className='corner-chat-button'>
                <MessageFilled style={{fontSize: '3.3vh', color: '#ECF7FF'}}/>
            </div>
        </Popover>
    )
}

export default ChatButton