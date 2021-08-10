import * as React from 'react';
import styled from 'styled-components';
import up from '../images/up.png'
import down from '../images/arrow-down-icon-11549436707mosicxsqad.png'

const StyledDiv = styled.div`
margin:10px;
    .question{
        background: #c5c3c3;
        padding: 10px;
    img{
        width: 10px;
        float: right;    
        margin: 0 0 0 15px;
    }
    }
    .answer{
        background: #f1e8e8;
        padding: 10px;
    }
`;

interface Data {
    question: string,
    answer: string
    answerIsOpen: boolean
}

interface Props {
    data: Data,
    onClick: Function,
    id: number
}

const Question = (props: Props) => {
    const answer = 
    props.data.answerIsOpen && <div className='answer'>{props.data.answer}</div>;

    const arrow = props.data.answerIsOpen ? up : down;


    return (
        <StyledDiv>
            <div className='question' onClick={() => props.onClick(props.id)}>
                {props.data.question}
                <img alt="arrow" src={arrow} />
            </div>
            {answer}
        </StyledDiv>
    );
}

export default Question