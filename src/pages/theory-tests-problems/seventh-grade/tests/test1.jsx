import React from 'react'
import { Typography, Form, Radio, Checkbox, Input, Button } from 'antd'
import Logo from '../../../../media/OSTIS-geometry.svg'
import '../../theory-tests-problems.css'
import { useNavigate } from 'react-router'
const { Text } = Typography

const question2Values = [
    {
        label:'Lr adipiscing elit, sed do ei',
        value: 1,
    },
    {
        label:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei',
        value: 2,
    },
    {
        label:'Lorem ipsum dolor sit amet, conseco ei',
        value: 3,
    },
]

function Test1 () {
    const navigate = useNavigate()

    const handleFormFinish = (values) => {
        for (let key in values) {
            console.log(`${key} : ${values[key]}\n`)
        }
        navigate('/seven-grade-tests-theory-problems')
    }

    return (
        <div style={{width: '100%', height: '100%', display: 'flex', overflowX: 'hidden'}}>
            <div className='side-column'>
                <img src={Logo} alt='OSTIS-geometry logo' className='logo' style={{cursor: 'pointer'}} onClick={() => {navigate('/home')}}></img>
                {/* <div style={{height: '70%', display: 'flex', flexDirection: 'column-reverse'}}>  
                    <Button className='button' style={{width: '90%', marginTop: '100%', fontSize: '14px'}}>Назад к выбору темы</Button>
                </div> */}
            </div>
            <div className='theory-tests-problems-main middle-column' style={{backgroundColor: '#D7EEFF'}}>
                <div className='theory-tests-problems-header' style={{borderBottom: '1px solid #84B7EE'}}>
                    <Text strong className='gradient-text' style={{fontSize: '36px', marginLeft: '15px'}}>1. Прямая, луч, отрезок. Ломанная</Text>
                </div>
                <Form
                name='test-form-checkboxes'
                layout='vertical'
                onFinish={handleFormFinish}
                scrollToFirstError={true}
                style={{width: '95%'}}
                >
                    <div className='test-question-box'>
                        <Text style={{marginLeft: '5px', fontSize: '24px', color: '#4470FB'}}>question1</Text>
                        <Form.Item
                                label='Выберите правильный вариант ответа:'
                                name='question1'
                                rules={[
                                    {required: true, message: 'Вопрос обязателен'},
                                ]}
                                >
                            <Radio.Group style={{display: 'flex', flexDirection:'column', marginLeft: '5px', marginBottom: '10px'}}>
                                <Radio value={1} className='test-question-item' >Lr adipiscing elit, sed do ei</Radio>
                                <Radio value={2} className='test-question-item' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei</Radio>
                                <Radio value={3} className='test-question-item' >Lorem ipsum dolor sit amet, conseco ei</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    
                    <div className='test-question-box'>
                        <Text style={{marginLeft: '5px', fontSize: '24px', color: '#4470FB'}}>question2</Text>
                        <Form.Item
                            label='Выберите правильные варианты ответа:'
                            name='question2'
                            rules={[
                                {required: true, message: 'Вопрос обязателен'},
                            ]}
                            >
                            <Checkbox.Group 
                                direction='vertical'
                                size='small' style={{display: 'flex', marginLeft: '5px', marginBottom: '10px'}}
                                options={question2Values}
                            />
                        </Form.Item>
                    </div>

                    <div className='test-question-box'>
                        <Text style={{marginLeft: '5px', fontSize: '24px', color: '#4470FB'}}>question3</Text>
                        <Form.Item
                            label='Напишите свой вариант ответа:'
                            name='question3'
                            rules={[
                                {required: true, message: 'Вопрос обязателен'},
                            ]}
                            >
                            <Input.TextArea label='Введите свой ответ' className='test-question-item' style={{marginLeft: '10px'}} autoSize />
                        </Form.Item>
                    </div>

                    <div className='test-question-box'>
                        <Text style={{marginLeft: '5px', fontSize: '24px', color: '#4470FB'}}>question4</Text>
                        <Form.Item
                                label='Выберите правильный вариант ответа:'
                                name='question4'
                                >
                            <Radio.Group style={{display: 'flex', flexDirection:'column', marginLeft: '5px', marginBottom: '10px'}}>
                                <Radio value={1} className='test-question-item' >Lr adipiscing elit, sed do ei</Radio>
                                <Radio value={2} className='test-question-item' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ei</Radio>
                                <Radio value={3} className='test-question-item' >Lorem ipsum dolor sit amet, conseco ei</Radio>
                            </Radio.Group>
                        </Form.Item>
                    </div>
                    
                    <div className='test-question-box'>
                        <Text style={{marginLeft: '5px', fontSize: '24px', color: '#4470FB'}}>question5</Text>
                        <Form.Item
                            label='Выберите правильные варианты ответа:'
                            name='question5'
                            >
                            <Checkbox.Group 
                                direction='vertical'
                                size='small' style={{display: 'flex', marginLeft: '5px', marginBottom: '10px'}}
                                options={question2Values}
                            />
                        </Form.Item>
                    </div>

                    <div className='test-question-box'>
                        <Text style={{marginLeft: '5px', fontSize: '24px', color: '#4470FB'}}>question6</Text>
                        <Form.Item
                            label='Напишите свой вариант ответа:'
                            name='question6'
                            >
                            <Input.TextArea label='Введите свой ответ' className='test-question-item' style={{marginLeft: '10px'}} autoSize />
                        </Form.Item>
                    </div>

                    <Form.Item label=''>
                        <Button type='primary' htmlType='Submit' className='button'>
                            Закончить
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Test1