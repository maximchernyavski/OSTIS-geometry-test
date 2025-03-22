import { React, useRef } from 'react'
import { useNavigate } from 'react-router'
import { Typography, Form, Input, Switch, Tooltip, Button, Row, Col, Space} from 'antd'
import Logo from '../../media/OSTIS-geometry.svg'
import './settings.css'

const Text = Typography

function Settings() {
    const navigate = useNavigate()
    const passwordForm = useRef(null)


    const handlePasswordFormFinish = (form) => {
        if (form['new-password'] === form['old-password']) {
            passwordForm.current.setFields([
                {
                    name: 'new-password',
                    errors: ['Новый пароль не должен совпадать со старым']
                }
            ])
            return;
        }
    }

    const handleNewPasswordChange = (e) => {
        console.log(e)
        passwordForm.current.setFields([{
            name: e.target.id,
            errors: [],
        }])
    }

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', overflowY: 'hidden', overflowX: 'hidden'}}>
            <div className='side-column'>
                <div className='logo-box' style={{borderBottom: '2px solid #84B7EE'}}>
                    <img src={Logo} alt='OSTIS-geometry logo' className='header-logo' style={{cursor: 'pointer'}} onClick={() => navigate('/home')}/>
                </div>
            </div>
            <div className='middle-column' style={{backgroundColor: '#D7EEFF', borderBottom: '2px solid #84B7EE'}}>
                <div style={{width: '100%', height: '6.5%', borderBottom: '2px solid #84B7EE'}}>
                    <Text className='gradient-text' style={{fontSize: '36px', marginLeft: '15px'}}>Настройки</Text>
                </div>
                <div style={{width: '80%'}}>
                    <Text className='gradient-text section-header'>Оповещения</Text>
                    <Space direction='vertical' size='small' style={{width: '100%'}}>
                        <Row justify='end'>
                            <Col flex={2}>
                                <Text className='plain-text col-text'>Почта для оповещения</Text>
                            </Col>

                            <Col flex={3}>
                                <Tooltip title='Нажмите Enter, чтобы сохранить изменения' color='blue' trigger='focus'>
                                    <Input
                                    className='form-input-field'
                                    size='default'
                                    defaultValue={'alicebobovna@gmail.com'}
                                    onKeyUp={(e) => {
                                        if (e.key === 'Enter') {
                                            console.log(`Current email: ${e.target.value}`)
                                        }
                                    }}
                                    />
                                </Tooltip>
                            </Col>
                        </Row>
                        
                        <Row justify='end'>
                            <Col flex='auto'>
                                <Text className='plain-text col-text'>Получать оповещения о появлении новых тем, тестов, задач</Text>
                            </Col>
                            
                            <Col flex='auto' id='switch-col'>
                                <Switch disabled />
                            </Col>
                        </Row>

                        <Row justify='end'>
                            <Col flex='auto'>
                                <Text className='plain-text col-text'>Получать оповещения о появлении нового функционала</Text>
                            </Col>

                            <Col flex='auto' id='switch-col'>
                                <Switch disabled></Switch>
                            </Col>
                        </Row>
                    </Space>

                    <Text className='gradient-text section-header'>Безопасность</Text>
                    <Form ref={passwordForm} onFinish={handlePasswordFormFinish}>
                        <Form.Item
                            name='old-password'
                            label='Старый пароль'
                            className='form-item-label'
                            wrapperCol={{offset: 5}}
                        >
                            <Input.Password
                                className='form-input-field'
                                size='default'
                            />
                        </Form.Item>

                        <Form.Item
                            name='new-password'
                            label='Новый пароль'
                            className='form-item-label'
                            wrapperCol={{offset: 5}}
                            onChange={handleNewPasswordChange} 
                        >
                            <Input.Password
                                className='form-input-field'
                                size='default'
                            />
                        </Form.Item>

                        <Form.Item name='change-password'>
                            <Button htmlType='submit' className='change-password-button'>Изменить пароль</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Settings