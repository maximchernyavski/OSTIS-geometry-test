import { React } from 'react'
import { useNavigate } from 'react-router'
import { Typography, Form, Input, Switch, Tooltip, Button } from 'antd'
import Logo from '../../media/OSTIS-geometry.svg'
import './settings.css'

const Text = Typography


function InputWithTooltip ({ value, onChange, title}) {
    return (
        <Tooltip title={title} color='blue' trigger='focus'>
            <Input 
                value={value}
                onChange={onChange}
                className='form-input-field'
                size='default'
                onKeyUp={(e) => {
                    if (e.key === 'Enter') {
                        console.log(`Current email: ${e.target.value}`)
                    }
                }}
            />
        </Tooltip>
      );
}

function Settings() {
    const navigate = useNavigate()

    const handleFormFinish = (formItems) => {
        for (let key in formItems) {
            console.log(`${key} : ${formItems[key]}`)
        }
    }

    const handleChangePasswordClick = () => {}

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
                <div style={{width: '100%'}}>
                    <Form 
                        id='settings-form'
                        name='settings'
                        style={{ maxWidth: '65%' }}
                        onFinish={handleFormFinish}
                    >
                        <Text className='gradient-text form-label'>Оповещения</Text>
                        <Form.Item
                            name='email'
                            label='Почта для оповещения'
                            message='Нажмите Enter, чтобы сохранить изменения'
                            initialValue={'alicebobovna@gmail.com'}
                            rules={[{ type: 'email', message: 'Неверный адрес электронной почты' }]}
                        >
                            <InputWithTooltip title='Нажмите Enter, чтобы сохранить изменения'/>
                        </Form.Item>

                        <Form.Item name='new-content-notifications' label='Получать оповещения о появлении новых тем, тестов, задач'>
                            <Switch disabled></Switch>
                        </Form.Item>

                        <Form.Item name='new-functions-notifications' label='Получать оповещения о появлении нового функционала'>
                            <Switch disabled></Switch>
                        </Form.Item>

                        <Text className='gradient-text form-label'>Безопасность</Text>
                        <Form.Item name='old-password' label='Старый пароль'>
                            <Input.Password
                                className='form-input-field'
                                size='default'
                            />
                        </Form.Item>

                        <Form.Item name='new-password' label='Новый пароль'>
                            <Input.Password
                                className='form-input-field'
                                size='default'
                            />
                        </Form.Item>

                        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                            <Form.Item name='change-password' onClick={handleChangePasswordClick}>
                                <Button className='change-password-button'>Изменить пароль</Button>
                            </Form.Item>

                            <Form.Item name='change-settings' >
                                <Button type='primary' htmlType='submit' className='button'>Подтвердить</Button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Settings