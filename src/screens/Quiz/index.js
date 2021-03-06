import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import Widget from '../../components/Widget';
import BackLinkArrow from '../../components/BackLinkArrow';
import Loader from '../../components/Loader';
import AlternativesForm from '../../components/AlternativesForm';
import Results from '../../components/Results';
import Button from '../../components/Button';

const Image = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const Input = styled.input`
  margin-right: .5rem;
  margin-bottom: 0;
`;

function QuestionWidget({
  question, questionIndex, totalQuestions, addResult, onSubmit,
}) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const isCorrect = selectedAlternative + 1 === question.answer;
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const hasAlternativeSelected = selectedAlternative !== undefined;

  const submitData = (infosDoEvento) => {
    infosDoEvento.preventDefault();
    setIsQuestionSubmitted(true);
    setTimeout(() => {
      addResult(isCorrect);
      onSubmit();
      setIsQuestionSubmitted(false);
      setSelectedAlternative(undefined);
    }, 3 * 1000);
  };

  return (
    <Widget
      as={motion.section}
      transition={{ duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <Image alt={question.imagedesc} src={question.image} />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <AlternativesForm onSubmit={submitData}>
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
                as="label"
              >
                <Input
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  checked={isSelected}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>Confirmar</Button>
          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function Quiz({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = externalQuestions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const bg = externalBg;

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 2000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    return (nextQuestion < totalQuestions) ? setCurrentQuestion(nextQuestion) : setScreenState(screenStates.RESULT);
  }

  return (
    <QuizBackground backgroundImage={bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <Loader />}
        {screenState === screenStates.RESULT
          && (
            <Results results={results} />
          )}
      </QuizContainer>
    </QuizBackground>
  );
}
