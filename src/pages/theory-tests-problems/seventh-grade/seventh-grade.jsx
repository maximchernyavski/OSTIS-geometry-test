import React from 'react';
import Logo from '../../../media/OSTIS-geometry.svg';
import '../theory-tests-problems.css';
import { Tabs ,Typography } from 'antd';
import { theory, tests, problems } from './seventh-grade-data';
import { useNavigate } from 'react-router';
const { Text } = Typography

const tabsItems = [
    {
        key: '1',
        label: <Text strong className='gradient-text theory-tests-problems-tab-names' >Теория</Text>,
        children : theory,
    },
    {
        key: '2',
        label : <Text strong className='gradient-text theory-tests-problems-tab-names' >Тесты</Text>,
        children: tests,
    },
    {
        key: '3',
        label : <Text strong className='gradient-text theory-tests-problems-tab-names' >Задачи</Text>,
        children: problems,
    },
];

function SeventhGradeTTP () {
    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', overflowX: 'hidden'}}>
            <div className='side-column'>
                <img src={Logo} alt='OSTIS-geometry logo' className='logo' style={{cursor: 'pointer'}} onClick={() => {navigate('/home')}}></img>
            </div>
            <div className='theory-tests-problems-main middle-column'>
                <div className='theory-tests-problems-header' style={{width: 'auto'}}>
                    <Tabs items={tabsItems} ></Tabs>
                </div>
            </div>
        </div>
    )
}

export default SeventhGradeTTP;