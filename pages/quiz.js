import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Loader from '../src/components/Loader';
import GitHubCorner from '../src/components/GitHubCorner';
import Button from '../src/components/Button';

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

function QuestionWidget({
  question, questionIndex, totalQuestions, onSubmit,
}) {
  const questionId = `question__${questionIndex}`;

  const submitData = (infosDoEvento) => {
    infosDoEvento.preventDefault();
    onSubmit();
  };

  return (
    <Widget>
      <Widget.Header>
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <Image alt={question.imagedesc} src={question.image} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <form onSubmit={submitData}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId} key={alternativeId}>
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  style={{ marginRight: '.5rem' }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    return (nextQuestion < totalQuestions) ? setCurrentQuestion(nextQuestion) : setScreenState(screenStates.RESULT);
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}
        {screenState === screenStates.LOADING && <Loader />}
        {screenState === screenStates.RESULT
          && (
          <Widget>
            <Widget.Content>
              Você acertou X questões, parabéns!
            </Widget.Content>
          </Widget>
          )}
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
