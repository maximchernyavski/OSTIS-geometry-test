import React from "react";
import { Button, Typography } from 'antd'
import { useNavigate } from "react-router";

function Theme1Link () {
    const navigate = useNavigate()

    return (
        <div className="theory-tests-problems-tabs-content" >
            <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}} onClick={() => {navigate('theme1')}}>Изучить</Button>
        </div>
    )
}

function Test1Link () {
    const navigate = useNavigate()

    return (
        <div className="theory-tests-problems-tabs-content" >
            <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
                <Button className="button" style={{marginRight: '10px'}} onClick={() => {navigate('test1')}}>Сдать</Button>
            </div>
        </div>
    )
}

export const theory = [
    (
        <Theme1Link />
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <Button className="button" style={{marginRight: '10px'}}>Изучить</Button>
    </div>
    ),
]

////////////////////////////////////////////////////////////////////////////////////////////

export const tests = [
    (
        <Test1Link />
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:10/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:10/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:10/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:10/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:10/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:10/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:10/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:*/10</Typography.Text>
            <Button className="button" style={{marginRight: '10px'}}>Сдать</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Typography.Text strong className='plain-text ' style={{marginRight: '10px'}}>Оценка:7/10</Typography.Text>
            <Button className="success-button" style={{marginRight: '10px'}}>Сдано</Button>
        </div>
    </div>
    ),
]

////////////////////////////////////////////////////////////////////////////////////////////

export const problems = [
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button className="button" style={{marginRight: '10px'}}>Решить</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button className="success-button" style={{marginRight: '10px'}}>Решено</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button className="button" style={{marginRight: '10px'}}>Решить</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button className="success-button" style={{marginRight: '10px'}}>Решено</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button className="success-button" style={{marginRight: '10px'}}>Решено</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button className="button" style={{marginRight: '10px'}}>Решить</Button>
        </div>
    </div>
    ),
    (<div className="theory-tests-problems-tabs-content" >
        <Typography.Text strong className="plain-text" style={{marginLeft: '10px', fontSize: '20px'}} >1. Прямая, луч, отрезок. Ломанная.</Typography.Text>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <Button className="button" style={{marginRight: '10px'}}>Решить</Button>
        </div>
    </div>
    ),
]