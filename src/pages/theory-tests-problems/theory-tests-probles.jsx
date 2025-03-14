import React from "react";
import { Typography } from 'antd'
const { Text } = Typography
 
export function DefinitionBlock (props) {
    return (
        <div id={props.id || ''} style={{width: 'calc(100% - 40px)', padding: '10px', marginBottom: '15px', backgroundColor: '#84B7EE', borderRadius: '12px'}}>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Определение. ' + props.children}</Text>
        </div>
    )
}

export function TheoremBlock (props) {
    return (
        <div id={props.id || ''} style={{width: 'calc(100% - 40px)', padding: '10px', marginBottom: '15px', backgroundColor: '#7B92DB', borderRadius: '12px'}}>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Теорема. ' + props.children}</Text>
        </div>
    )
}

export function ProofBlock (props) {
    return (
        <div id={props.id || ''} style={{width: 'calc(100% - 40px)', padding: '10px', marginBottom: '15px', backgroundColor: '#6F60C1', borderRadius: '12px'}}>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Доказательство. ' + props.children}</Text>
        </div>
    )
}

export function AxiomBlock (props) {
    return (
        <div id={props.id || ''} style={{width: 'calc(100% - 40px)', padding: '10px', marginBottom: '15px', backgroundColor: '#9489D1', borderRadius: '12px'}}>
            <Text style={{fontSize: '16px', lineHeight: '20px', color: '#ECF7FF'}}>{'Аксиома. ' + props.children}</Text>
        </div>
    )
}
