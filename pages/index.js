import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  const changeData = (infosDoEvento) => {
    setName(infosDoEvento.target.value);
  };

  const submitData = (infosDoEvento) => {
    infosDoEvento.preventDefault();
    router.push(`/quiz?name=${name}`);
  };

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={submitData}>
              <Input name="nomeDoUsuario" type="text" placeholder="Digite seu nome" onChange={changeData} value={name} />
              <Button type="submit" disabled={name.length === 0}>Jogar</Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Em breve...</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl={db.github} />
    </QuizBackground>
  );
}
