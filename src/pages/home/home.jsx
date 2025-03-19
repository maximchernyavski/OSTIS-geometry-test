import { cloneElement, React } from 'react';
import Logo from '../../media/OSTIS-geometry.svg'
import GeometryPicture from '../../media/OSTIS-geometry-placeholder.png'
import './home.css'
import { Avatar, Button, Dropdown, Typography, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
const { Text, Paragraph } = Typography

function Home () {
  const navigate = useNavigate()

  const profileDropdownItems = [
      {
        key: '1',
        label: (
          <div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onClick={(e) => e?.stopPropagation()} >
                  <Avatar icon={<UserOutlined />} alt='User avatar' size={91}></Avatar>
                  <Text strong className='plain-text' style={{fontSize: '16px'}}>Alica Bobovna</Text>
              </div>
          </div>
        ),
      },
      {
        key: '2',
        label: (
          <Text strong className='plain-text' style={{fontSize: '16px'}}>Профиль</Text>
        ),
        onClick: () => {navigate('/profile')},
      },
      {
          key: '3',
          label: (
            <Text strong className='plain-text' style={{fontSize: '16px'}}>Баланс остиков</Text>
          ),
      },
      {
          key: '4',
          label: (
            <Text strong className='plain-text' style={{fontSize: '16px'}}>Настройки</Text>
          ),
      },
      {
          key: '5',
          label: (
            <Text strong className='plain-text' style={{fontSize: '16px'}}>Помощь</Text>
          ),
          onClick: () => {navigate('/help')},
      },
      {
          key: '6',
          label: (
              <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Button className='button' style={{borderColor: 'transparent'}} onClick={() => {navigate('/')}}>
                    <Text strong style={{color: '#ECF7FF', fontSize: '16px'}}>Выйти</Text>
                  </Button>
              </div>
          ),
      },
  ];

  const theoryDropdownItems = [
      {
        key: '1',
        label: (
          <div style={{width: '100%'}}>
              <Text strong style={{fontSize: '18px', color: '#7B92DB'}} onClick={() => {navigate('/seven-grade-tests-theory-problems')}}>7 класс</Text>
              <Divider style={{color: '#84B7EE', margin: '0px'}} />
          </div>
        ),
      },
      {
        key: '2',
        label: (
          <div style={{width: '100%'}}>
              <Text strong style={{fontSize: '18px', color: '#7B92DB'}}>8 класс</Text>    
              <Divider style={{color: '#84B7EE', margin: '0px'}} />
          </div>
        ),
      },
      {
        key: '3',
        label: (
          <div style={{width: '100%'}}>
              <Text strong style={{fontSize: '18px', color: '#7B92DB'}}>9 класс</Text>    
              <Divider style={{color: '#84B7EE', margin: '0px'}} />
          </div>
        ),
      },
      {
        key: '4',
        label: (
          <div style={{width: '100%'}}>
              <Text strong style={{fontSize: '18px', color: '#7B92DB'}}>10 класс</Text>    
              <Divider style={{color: '#84B7EE', margin: '0px'}} />
          </div>
        ),
      },
      {
        key: '5',
        label: (
          <div style={{width: '100%'}}>
              <Text strong style={{fontSize: '18px', color: '#7B92DB'}}>11 класс</Text>    
              <Divider style={{color: '#84B7EE', margin: '0px'}} />
          </div>
        ),
      },
  ];

    return (
        <div style={{width: '100%', height: '100%', overflowY: 'hidden', overflowX: 'hidden'}}>
            <div id='home-header'>
                <div className='header-half'>
                    <img src={Logo} className='header-logo' alt='OSTIS-geometry logo'></img>
                    <Dropdown
                        menu={{items: theoryDropdownItems}}
                        placement='bottom'
                        dropdownRender={(menu) => (
                          <div style={{width: '8vw'}}>
                                {cloneElement(menu, {
                                    className: 'home-dropdown-menu',
                                })}
                          </div>  
                        )}>
                        <Button className='button header-button'><Text strong style={{color: '#ECF7FF', fontSize: '16px'}}>Теория</Text></Button>
                    </Dropdown>
                    <Button className='button header-button'><Text strong style={{color: '#ECF7FF', fontSize: '16px'}}>Холст</Text></Button>
                </div>
                <div className='header-half' style={{flexDirection: 'row-reverse', marginRight: '15px'}} >
                        <Dropdown
                            menu={{ items: profileDropdownItems }}
                            placement='bottom'
                            dropdownRender={(menu) => (
                                <div style={{width: '20vw', height: '20vh', marginTop: '10px'}}>
                                    {cloneElement(menu, {
                                        className: 'home-dropdown-menu',
                                        style: {border: '1px solid #7B92DB', alignItems: 'normal'},
                                    })}
                                </div>)}
                            trigger={['click']}
                        >
                            <Avatar icon={<UserOutlined />} alt='User avatar' size={'large'} style={{cursor: 'pointer'}}></Avatar>
                        </Dropdown>
                </div>
            </div>
            <div id='home-main'>
                <div style={{maxWidth: '60%', display: 'flex', flexDirection: 'column'}}>
                    <Text strong className='gradient-text' style={{fontSize: '50px'}}>
                        Добро пожаловать на OSTIS geometry
                    </Text>
                    <Text strong className='plain-text' style={{ fontSize: '36px', lineHeight: '40px', whiteSpace: 'pre-line'}}>
                        {`интеллектуальная платформа\nдля обучения`}
                    </Text>
                    <Paragraph strong ellipsis={{rows:4, defaultExpanded: true}} style={{width: '70%', marginTop: '10px', color: '#7B92DB', fontSize: '20px', lineHeight: '20px'}}>
                      Интеллектуальная диалоговая система 
                      помогает пользователю в изучении отдельных 
                      тем по геометрии, в рамках учебной 
                      программы РБ по геометрии
                    </Paragraph>
                </div>
                <img src={GeometryPicture} alt='OSTIS geometry placeholder' style={{width: '30%', marginRight: '15px'}}></img>
            </div>
        </div>
    )
}

export default Home