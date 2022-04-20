import React, {useState, useEffect, useRef} from 'react'
import TestList from '../TestList'
import { TestContainer, TestContainerGlobal, TestContainerRecount } from './styles'

const TestRecount = ({recount}) => {

    useEffect(() => {
        console.log(recount)
    },[])

    return (
        <TestContainerRecount>
            {recount.map((item,index) => {
                return (
                    <div key={index} item={item}>{item}</div>
                )
                
            })}
        </TestContainerRecount>
    )
}

const Test = () => {

    //const [selectedOption, setSelectedOption] = useState("aa");
    const [arrayAnswers, setArrayAnswers] = useState([1,2,3]);
    const [arrayBoolAnswers, setArrayBoolAnswers] = useState([...arrayAnswers]);



    const selectOptionHandler = (bool, index) => {
        //setSelectedOption(selected);
        console.log(index,bool);

        let recount = [...arrayBoolAnswers];
        
        recount.splice(index,1,bool.toString());
        setArrayBoolAnswers(recount);

        //setArrayAnswers(arrayAnswers.splice(index,1,bool))

    }

    useEffect(() => {
        console.log(arrayBoolAnswers)
        setArrayAnswers(arrayBoolAnswers)
    },[arrayBoolAnswers])

    useEffect(() => {
        console.log(arrayAnswers);
    },[arrayAnswers])
    


    return (
        <TestContainerGlobal>
            <TestRecount recount={arrayAnswers}></TestRecount>
            <TestContainer>
                <TestList selectOptionHandler={selectOptionHandler}></TestList>
            </TestContainer>
        </TestContainerGlobal>
    )

}

export default Test