import { React, useRef } from 'react';
import { Typography, Anchor } from 'antd'
import Logo from '../../media/OSTIS-geometry.svg'
import { useNavigate } from 'react-router';
import ChatButton from '../../components/corner-chat/corner-chat-button';

const { Text } = Typography

function AnchorTitle(props) {
    return (
        <div style={{whiteSpace: 'break-spaces'}}>
            {props.children}
        </div>
    );
}

function Help() {
    const navigate = useNavigate()
    const anchorTargetContainer = useRef()

    const navigationMenuItems = [
        {
            key: '1',
            title: <AnchorTitle>1. Какие разделы есть на платформе?</AnchorTitle>,
            href: '#ref1',
        },
        {
            key: '2',
            title: <AnchorTitle>2. Какие разделы есть на платформе?</AnchorTitle>,
            href: '#ref2',
        },
        {
            key: '3',
            title: <AnchorTitle>3. Какие разделы есть на платформе?</AnchorTitle>,
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
                        style={{fontSize: '5px'}}
                    />
                </div>
            </div>
            <div className='middle-column' style={{backgroundColor: '#D7EEFF'}}>
                <div style={{width: '100%', height: '6.5%', borderBottom: '2px solid #84B7EE'}}>
                    <Text strong className='gradient-text' style={{fontSize: '36px', marginLeft: '15px'}}>Помощь(Часто задаваемые вопросы)</Text>
                </div>
                <div ref={anchorTargetContainer} style={{width: '98%', overflowY: 'scroll', display: 'flex', flexDirection: 'column', marginLeft: '30px', marginTop: '10px', scrollbarWidth: 'none'}}>
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