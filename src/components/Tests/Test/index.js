import React, {useState, useEffect, useRef} from 'react'
import TestList from '../TestList'
import { TestContainer, TestContainerGlobal, TestContainerRecount, Recount } from './styles'

//import NewPost from '../tasks/post/NewPost'
import { connect } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'


const TestRecount = ({table,recount,submitted}) => {

    useEffect(() => {
        console.log(recount[1])
    },[])
    console.log(recount[1])

    return (
        <TestContainerRecount>
            {table.map((item,index) => {
                return (
                   /*  <Recount submitted={submitted} answer={typeof(recount[index])!=='number' ? recount[index] : undefined} key={index} item={item}>{item}</Recount> */
                    <Recount submitted={submitted} answer={recount[index]} key={index} item={item}>{item}</Recount>
                )
                
            })}
        </TestContainerRecount>
    )
}



/*     return (
        (!isLoaded(props.state.firestore.ordered.tasks))?(
            <div className="text-center">
                <div className="spinner-grow text-primary" style={{width: "7rem", height: "7rem"}} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ): (
        <div>
            <NewPost/>
            <div className=""><TaskList tasks={values.tasks}/></div>
        </div>
        )

    ) */




const Test = (props) => {
    const [arrayAnswers, setArrayAnswers] = useState([1,2,3,4,5,6,7,8,9,10,11,12]);
    const [table, setTable] = useState([]);
    const [tableRecount, setTableRecount] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    useFirestoreConnect({collection: 'tests'});

    useEffect(() => {
        console.log(props.tests)
        setTable(props.tests)
        setTableRecount(createRecountArray(props.tests.length))
        setArrayAnswers(createRecountArray(props.tests.length))
    },[props.state])

    const createRecountArray = (length) => {
        const arr = [];
        for (let i=1; i<=length; i++) {
            arr.push(i)
        }
        return arr
    }

    const selectOptionHandler = (bool, index) => {
        console.log(index+1,bool);

        let recount = [...arrayAnswers];
        
        recount.splice(index,1,bool.toString());
        setArrayAnswers(recount);

    }
    const submit = () => {
        setSubmitted(true)
    }


    return (
        <>
            <TestContainerGlobal>
            <TestRecount submitted={submitted} table={tableRecount} recount={arrayAnswers}></TestRecount>
            <TestContainer>
                <TestList submitted={submitted} table={table} selectOptionHandler={selectOptionHandler}></TestList>
            </TestContainer>
            </TestContainerGlobal>
            <div style={{display: "flex", justifyContent: "center"}}><button onClick={submit}>Submit</button></div>
        </>
    )

}

const mapStateToProps = state => {
    console.log(state)
    return {
        tests: state.firestore.ordered.tests,
        auth: state.auth,
        state: state
    }
}

export default connect(mapStateToProps)(Test)
