import React from 'react';
import { Typography, Button } from 'antd'
import { useNavigate } from 'react-router';
const { Text } = Typography

export function TTPTabContent (props) {
    const navigate = useNavigate();
    const gradeText = props.grade ? <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>{`Оценка:${props.grade}/10`}</Typography.Text> : <></>;
    const isElementCompleted = props.completed ? 'success-button' : 'button';

    const handleNavigateButtonClick = () => {
        props.path ? navigate(props.path) : console.warn('no path provided')
    };
    
    return (
        <div className='theory-tests-problems-tabs-content' >
            <Typography.Text strong className='plain-text' style={{marginLeft: '10px', fontSize: '20px'}} >{props.title}</Typography.Text>
            <div style={{display: 'flex', alignItems: 'center'}}>
                {gradeText}
                <Button className={isElementCompleted} style={{marginRight: '10px'}} onClick={handleNavigateButtonClick}>{props.buttonTitle || 'Press'}</Button>
            </div>
        </div>
    )
}

export function TheoryDTPABlock (props) {
    if ('definition' in props) {
        return (
            <div id={props.id || ''} className='theory-block-box theory-definition'>
                <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Определение. ' + props.children}</Text>
            </div>
        )
    }
    if ('theorem' in props) {
        return (
            <div id={props.id || ''} className='theory-block-box theory-theorem'>
                <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Теорема. ' + props.children}</Text>
            </div>
        )
    }
    if ('proof' in props) {
        return (
            <div id={props.id || ''} className='theory-block-box theory-proof'>
                <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Доказательство. ' + props.children}</Text>
            </div>
        ) 
    }
    if ('axiom' in props) {
        return (
            <div id={props.id || ''} className='theory-block-box theory-axiom'>
                <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Аксиома. ' + props.children}</Text>
            </div>
        )
    }
}