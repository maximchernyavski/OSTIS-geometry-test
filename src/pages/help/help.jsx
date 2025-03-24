import { React, useRef } from 'react';
import { Typography, Anchor } from 'antd'
import Logo from '../../media/OSTIS-geometry.svg'
import { useNavigate } from 'react-router';
import ChatButton from '../../components/corner-chat/corner-chat-button';

const { Text } = Typography

function Help() {
    const navigate = useNavigate()
    const anchorTargetContainer = useRef()

    const navigationMenuItems = [
        {
            key: '1',
            title: '1. Какие разделы есть на платформе?',
            href: '#ref1',
        },
        {
            key: '2',
            title: '2. Какие разделы есть на платформе?',
            href: '#ref2',
        },
        {
            key: '3',
            title: '3. Какие разделы есть на платформе?',
            href: '#ref3',
        },
    ];

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', overflowY: 'hidden', overflowX: 'hidden'}}>
            <div className='side-column'>
                <div className='logo-box' style={{borderBottom: '2px solid #84B7EE'}}>
                    <img src={Logo} alt='OSTIS-geometry' className='header-logo' style={{cursor: 'pointer'}} onClick={() => {navigate('/home')}} />
                </div>
                <div style={{width: '100%', marginLeft: '5px'}}>
                <Anchor
                        affix={false}
                        items={navigationMenuItems}
                        getContainer={ () => anchorTargetContainer.current }
                    />
                </div>
            </div>
            <div className='middle-column' style={{backgroundColor: '#D7EEFF'}}>
                <div style={{width: '100%', height: '6.5%', borderBottom: '2px solid #84B7EE'}}>
                    <Text strong className='gradient-text' style={{fontSize: '36px', marginLeft: '15px'}}>Помощь(Часто задаваемые вопросы)</Text>
                </div>
                <div ref={anchorTargetContainer} style={{width: '100%', overflowY: 'scroll', display: 'flex', flexDirection: 'column', marginLeft: '30px', marginTop: '10px'}}>
                    <div id='ref1'>
                        <Text strong className='gradient-text' style={{whiteSpace: 'break-spaces', fontSize: '24px'}}>
                            {'1. Какие разделы есть на сайте?\n'}
                        </Text>
                        <Text className='plain-text' style={{whiteSpace: 'break-spaces', fontSize: '20px', lineHeight: '22px'}}>
                            {`На платформе есть следующие разделы для обучения геометрии:\n∘ Теория: здесь пользователь может изучить темы (7-11 классов), а также проверить свои знания с помощью тестов и задач.\n∘ Холст: выполняет функции чертёжника, чтобы пользователь мог построить свой собсвенный чертёж для некоторой задачи.`}
                        </Text>
                    </div>

                    <div id='ref2'>
                        <Text strong className='gradient-text' style={{whiteSpace: 'break-spaces', fontSize: '24px'}}>
                            {'2. Какие разделы есть на сайте?\n'}
                        </Text>
                        <Text className='plain-text' style={{whiteSpace: 'break-spaces', fontSize: '20px', lineHeight: '22px'}}>
                            {`На платформе есть следующие разделы для обучения геометрии:\n∘ Теория: здесь пользователь может изучить темы (7-11 классов), а также проверить свои знания с помощью тестов и задач.\n∘ Холст: выполняет функции чертёжника, чтобы пользователь мог построить свой собсвенный чертёж для некоторой задачи.`}
                        </Text>
                    </div>

                    <div id='ref3'>
                        <Text strong className='gradient-text' style={{whiteSpace: 'break-spaces', fontSize: '24px'}}>
                            {'3. Какие разделы есть на сайте?\n'}
                        </Text>
                        <Text className='plain-text' style={{whiteSpace: 'break-spaces', fontSize: '20px', lineHeight: '22px'}}>
                            {`На платформе есть следующие разделы для обучения геометрии:\n∘ Теория: здесь пользователь может изучить темы (7-11 классов), а также проверить свои знания с помощью тестов и задач.\n∘ Холст: выполняет функции чертёжника, чтобы пользователь мог построить свой собсвенный чертёж для некоторой задачи.`}
                        </Text>
                    </div>
                </div> 
            </div>
            <ChatButton />
        </div>
    )
}

export default Help