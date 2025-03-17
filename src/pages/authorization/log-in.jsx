import React from 'react'
import { Button, Switch, Form, Input, Typography } from 'antd';
import { useNavigate } from 'react-router';

function LogIn () {
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        navigate('/home')
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <Form
            name='basic'
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span:16,
                offset:4
            }}
            style={{
                width: '100%',
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
        >
            <Form.Item
                name='username'
                rules={[
                    {
                    required: true,
                    message: 'Please input your username!',
                    },
                ]}
            >
                <Input placeholder='Name' className='authorization-input plain-text'/>
            </Form.Item>

            <Form.Item
                name='password'
                rules={[
                    {
                    required: true,
                    message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password placeholder='Password' className='authorization-input plain-text'/>
            </Form.Item>

            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'baseline',}}>
                <Typography.Text className='plain-text'>Remember me</Typography.Text>
                <Form.Item name='remember' valuePropName='checked' label={null}>
                    <Switch checked={false}/>
                </Form.Item>
            </div>

            <Form.Item label={null} style={{display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}}>
                <Button type='primary' htmlType='submit' className='button' style={{marginLeft: '-16px'}}>
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LogIn