import React from 'react';
import './App.css';
import { Title } from './components';
import { Question } from './components';
import styled from 'styled-components';

const StyledApp = styled.div`
margin:auto;
width: 50%;
`

function App() {
  const [data, setData] = React.useState(
    [
      { question: 'question 1', answer: 'answer 1', answerIsOpen: false },
      { question: 'question 2', answer: 'answer 2', answerIsOpen: false },
      { question: 'question 3', answer: 'answer 3', answerIsOpen: false },
      { question: 'question 4', answer: 'answer 4', answerIsOpen: false },
    ]
  );

  const handleClick = (id: number) => {
    let value = data[id].answerIsOpen;
    let newData: any = [...data];
    newData.map((element: any) => {
      return element.answerIsOpen = false;
    });
      newData[id].answerIsOpen = !value;
    setData(newData);
  }

  return (
    <StyledApp>
      <Title />
      {data.map((el, i) => {
        return (
          <Question key={i} data={el} id={i} onClick={handleClick} />
        )
      })}
    </StyledApp>
  );
}

export default App;
