import React, {useState, useEffect, useRef} from 'react'
import { TestRadioDiv, TestContainerCounter, TestContainerOption } from './styles';

const TestUnit = ({selectOptionHandler,option1,option2,option3,option4,answer,enunciado, index, answered, submitted}) => {

    const [optionAnswer, setOptionAnswer] = useState("");

    useEffect(() => {
        getAnswerIndex(option1, option2, option3, option4, answer);
        //console.log(getAnswerIndex(option1, option2, option3, option4, answer))
    }, [optionAnswer])

    function getAnswerIndex(option1, option2, option3, option4, answer) {
        const arrayOptions = [option1, option2, option3, option4];
        let respuesta = ""
        arrayOptions.map((item,index) => {
            if(item && arrayOptions.length >0 && item == answer) {
                setOptionAnswer(arrayOptions[index]);
            }
        })
    }

    return (
        <div style={{display: 'flex', margin: "1rem 0"}}>
            <TestContainerCounter className="counter">
            <header className="marco superior"></header>
                <div>{index+1}</div>
            <footer className="marco inferior"></footer>
            </TestContainerCounter>
            <TestContainerOption submitted={submitted} answered={answered}>
                <header className="marco superior"></header>
                <TestRadioDiv>{enunciado}</TestRadioDiv>
                <TestRadioDiv>
                    <input onClick={(event)=>selectOptionHandler(event.target.value===optionAnswer,index)} type="radio" name={index} id="1" value={option1}/>
                    <label htmlFor="1">{option1}</label>
                </TestRadioDiv>
                <TestRadioDiv>
                    <input onClick={(event)=>selectOptionHandler(event.target.value===optionAnswer,index)} type="radio" name={index} id="2" value={option2}/>
                    <label htmlFor="2">{option2}</label>
                </TestRadioDiv>
                <TestRadioDiv>
                    <input onClick={(event)=>selectOptionHandler(event.target.value===optionAnswer,index)} type="radio" name={index} id="3" value={option3}/>
                    <label htmlFor="3">{option3}</label>
                </TestRadioDiv>
                <TestRadioDiv>
                    <input onClick={(event)=>selectOptionHandler(event.target.value===optionAnswer,index)} type="radio" name={index} id="4" value={option4}/>
                    <label htmlFor="4">{option4}</label>
                </TestRadioDiv> 
                <footer className="marco inferior"></footer>
            </TestContainerOption>
        </div>
    )

}

export default TestUnit