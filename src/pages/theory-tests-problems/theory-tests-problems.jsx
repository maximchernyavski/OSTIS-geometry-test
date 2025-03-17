import React from 'react';
import { Typography } from 'antd'
const { Text } = Typography
 
export function DefinitionBlock (props) {
    return (
        <div id={props.id || ''} className='theory-block-box theory-definition'>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Определение. ' + props.children}</Text>
        </div>
    )
}

export function TheoremBlock (props) {
    return (
        <div id={props.id || ''} className='theory-block-box theory-theorem'>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Теорема. ' + props.children}</Text>
        </div>
    )
}

export function ProofBlock (props) {
    return (
        <div id={props.id || ''} className='theory-block-box theory-proof'>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Доказательство. ' + props.children}</Text>
        </div>
    )
}

export function AxiomBlock (props) {
    return (
        <div id={props.id || ''} className='theory-block-box theory-axiom'>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Аксиома. ' + props.children}</Text>
        </div>
    )
}
