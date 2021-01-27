import styled from 'styled-components';
import db from '../db.json';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import Footer from '../src/components/Footer';

const QuizContainer = styled.div`
    width: 100%;
    max-width: 350px;
    padding-top: 2.8rem;
    margin: auto 10%;

    @media screen and (max-width: 500px)
    {
        margin: auto;
        padding: 1rem;
    }
`;

export default function Home() {
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
                </Widget.Content>
            </Widget>
            <Widget>
                <Widget.Content>
                    <h1>Quizes da Galera</h1>
                    <p>Lorem ipsum dolor sit amet consectetur...</p>
                </Widget.Content>
            </Widget>
            <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/fabs-silva" />
    </QuizBackground>
  )
}
