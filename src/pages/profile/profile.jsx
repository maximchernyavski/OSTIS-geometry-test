import React from "react";
import './profile.css'
import Logo from '../../media/OSTIS-geometry.svg'
import { Avatar, Typography } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
const { Text } = Typography

function Profile() {
    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', overflowY: 'hidden', overflowX: 'hidden'}}>
            <div style={{maxWidth: '15%', minHeight: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <img src={Logo} alt="OSTIS-geometry logo" style={{width: '45%', marginLeft: '5%', cursor: 'pointer'}} onClick={() => {navigate('/home')}}></img>
            </div>
            <div id='profile-main'>
                <div style={{height: '19%', width: '100%', display:'flex', marginLeft: '20%', marginTop: '5%'}}>
                    <Avatar icon={<UserOutlined />} alt="User avatar" size={153.75} style={{marginRight: '10px'}} />
                    <div style={{width: '70%', height: '100%', display: 'flex', flexDirection: 'column'}}>
                        <Text strong className="plain-text" style={{fontSize: '64px', lineHeight: '50px'}}>Alica Bobovna</Text>
                        <span>
                        <Avatar size={64} icon={<MailOutlined />} style={{color: '#84B7EE', backgroundColor: 'transparent'}} />
                        <Text strong className="plain-text" style={{fontSize:'20px'}}>alicebobovna@gmail.com</Text>
                        </span>
                    </div>
                </div>
                <div style={{width: '100%', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="data-in-circle">
                            <Text strong className="plain-text" style={{fontSize: '60px'}} >52</Text>
                        </div>
                        <Text strong className="plain-text data-in-circle-under-text" >Пройдено тестов</Text>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="data-in-circle">
                            <Text strong className="plain-text" style={{fontSize: '60px'}} >69</Text>
                        </div>
                        <Text strong className="plain-text data-in-circle-under-text" >Заработано баллов</Text>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div className="data-in-circle">
                            <Text strong className="plain-text" style={{fontSize: '60px'}} >9:11</Text>
                        </div>
                        <Text strong className="plain-text data-in-circle-under-text" >Время тренировок</Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile