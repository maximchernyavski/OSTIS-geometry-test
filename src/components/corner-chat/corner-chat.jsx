import { React, useState } from 'react'
import { UserOutlined } from '@ant-design/icons';
import { Bubble, Sender, useXAgent, useXChat } from '@ant-design/x';
import { Flex } from 'antd';
import AIImage from '../../media/ai-pic.jpeg'

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
const roles = {
  ai: {
    placement: 'start',
    avatar: {
      icon: <img src={AIImage} alt='nuclear-crocodile'></img>,
      style: {
        background: '#7B92DB',
      },
    },
    styles: {
      content : {
        color: '#ECF7FF',
        background: '#7B92DB',
      }
    },
    typing: {
      step: 5,
      interval: 20,
    },
    style: {
      maxWidth: 600,
    },
  },

  local: {
    placement: 'end',
    avatar: {
      icon: <UserOutlined />,
      style: {
        background: '#84B7EE',
      },
    },
    styles: {
      content: {
        color: '#ECF7FF',
        background: '#84B7EE',
      },
    },
  },
};
let mockSuccess = false;

function CornerChat (props) {
    const [content, setContent] = useState('');
  
    // Agent for request
    const [agent] = useXAgent({
      request: async ({ message }, { onSuccess, onError }) => {
        await sleep();
        mockSuccess = !mockSuccess;
        if (mockSuccess) {
          onSuccess(`Mock success return. You said: ${message}`);
        }
        onError(new Error('Mock request failed'));
      },
    });
  
    // Chat messages
    const { onRequest, messages } = useXChat({
      agent,
      requestPlaceholder: 'Waiting...',
      requestFallback: 'Mock failed return. Please try again later.',
    });
    return (
      <Flex vertical gap="middle" {...props}>
        <Bubble.List
          roles={roles}
          style={{
            maxHeight: 300,
          }}
          items={messages.map(({ id, message, status }) => ({
            key: id,
            loading: status === 'loading',
            role: status === 'local' ? 'local' : 'ai',
            content: message,
          }))}
        />
        <Sender
          loading={agent.isRequesting()}
          value={content}
          onChange={setContent}
          onSubmit={(nextContent) => {
            onRequest(nextContent);
            setContent('');
          }}
        />
      </Flex>
    );
};

export default CornerChat