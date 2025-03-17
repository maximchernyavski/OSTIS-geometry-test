import React from 'react';
import LogIn from './log-in';
import Logo from '../../media/OSTIS-geometry.svg'
import './authorization.css'
import { useState } from 'react';
import { Typography } from 'antd';
import SignUp from './sign-up';
const { Text } = Typography;

function Authorization () {
    const [currentMode, setCurrentMode] = useState(1);

    function LogInText() {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Text strong className='authorization-title'>Sign Up</Text>
                <Text strong className='plain-text' style={{marginBottom: '20px'}}>
                    Already have an account?
                    <Text strong underline className='plain-text information-text' onClick={() => {setCurrentMode(1)}}>Log In</Text>
                </Text>
            </div>
        )
    }

    function SignUpText () {
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Text strong className='authorization-title'>Log In</Text>
                <Text strong className='plain-text' style={{marginBottom: '20px'}}>
                    Don't have an account?
                    <Text strong underline className='plain-text information-text' onClick={() => {setCurrentMode(0)}}>Sign Up</Text>
                </Text>
            </div>
        )
    }

    return(
    <div style={{width:'100%', height:'100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '3%', fontFamily: 'serif'}}>
        <img src={Logo} alt='OSTIS-geometry logo' className='logo'></img>
        <div className='authorization-box'>
            {currentMode ? (<>
                <SignUpText />
                <LogIn />
            </>) : <>
                <LogInText />
                <SignUp />
            </>}
        </div>
    </div>
    )
}

export default Authorization 