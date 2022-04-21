import React, {useState, useEffect, useRef} from 'react'
import { TestRadioDiv, TestCounterDiv, TestContainerSection } from './styles';
import TestUnit from '../TestUnit';

const TestList = ({selectOptionHandler, table,submitted, recount}) => {
    const tests = [
        {
            enunciado: "El conjunto de productos y servicios destinados a satisfacer las necesidades...",
            option1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            option2: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            option3: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            option4: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            answer: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        },
        {
            enunciado: "¿Cuál es el espesor máximo de un envío normalizado?",
            option1: "11111111111111111111111111111111111111111111111111111111111",
            option2: "2222222222222222222222222222222222222222222222222222222222",
            option3: "33333333333333333333333333333333333333333333333333333333333",
            option4: "33333333333333333333333333333333333333333333333333333333333",
            answer: "33333333333333333333333333333333333333333333333333333333333",
        },
        {
            enunciado: "¿Cuáles son las dimensiones mínimas y máximas de un envío normalizado?",
            option1: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            option2: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooool",
            option3: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            option4: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            answer: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        },
        {
            enunciado: "El conjunto de productos y servicios destinados a satisfacer las necesidades...",
            option1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            option2: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            option3: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            option4: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            answer: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        },
        {
            enunciado: "¿Cuál es el espesor máximo de un envío normalizado?",
            option1: "11111111111111111111111111111111111111111111111111111111111",
            option2: "2222222222222222222222222222222222222222222222222222222222",
            option3: "33333333333333333333333333333333333333333333333333333333333",
            option4: "33333333333333333333333333333333333333333333333333333333333",
            answer: "33333333333333333333333333333333333333333333333333333333333",
        },
        {
            enunciado: "¿Cuáles son las dimensiones mínimas y máximas de un envío normalizado?",
            option1: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            option2: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooool",
            option3: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            option4: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            answer: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        },
        {
            enunciado: "El conjunto de productos y servicios destinados a satisfacer las necesidades...",
            option1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            option2: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            option3: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            option4: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            answer: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        },
        {
            enunciado: "¿Cuál es el espesor máximo de un envío normalizado?",
            option1: "11111111111111111111111111111111111111111111111111111111111",
            option2: "2222222222222222222222222222222222222222222222222222222222",
            option3: "33333333333333333333333333333333333333333333333333333333333",
            option4: "33333333333333333333333333333333333333333333333333333333333",
            answer: "33333333333333333333333333333333333333333333333333333333333",
        },
        {
            enunciado: "¿Cuáles son las dimensiones mínimas y máximas de un envío normalizado?",
            option1: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            option2: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooool",
            option3: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            option4: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            answer: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        },
        {
            enunciado: "El conjunto de productos y servicios destinados a satisfacer las necesidades...",
            option1: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            option2: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            option3: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            option4: "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
            answer: "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
        },
        {
            enunciado: "¿Cuál es el espesor máximo de un envío normalizado?",
            option1: "11111111111111111111111111111111111111111111111111111111111",
            option2: "2222222222222222222222222222222222222222222222222222222222",
            option3: "33333333333333333333333333333333333333333333333333333333333",
            option4: "33333333333333333333333333333333333333333333333333333333333",
            answer: "33333333333333333333333333333333333333333333333333333333333",
        },
        {
            enunciado: "¿Cuáles son las dimensiones mínimas y máximas de un envío normalizado?",
            option1: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
            option2: "looooooooooooooooooooooooooooooooooooooooooooooooooooooooool",
            option3: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            option4: "leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeel",
            answer: "aaaaaaaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
        },
    ]





    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            {table && table.map((test,index) => <TestUnit submitted={submitted} selectOptionHandler={selectOptionHandler} option1={test.option1} option2={test.option2} option3={test.option3} option4={test.option4} enunciado={test.enunciado} answered={recount[index]} answer={test.answer} index={index} key={index}/>)}
        </div>
    )

}

export default TestList