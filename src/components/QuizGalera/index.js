import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget';
import Link from '../Link';

const LinkList = styled.ul`
  .ver-mais{
    background-color: transparent;
    text-align: right;
    margin-top: 1.25rem;

    a{
      text-decoration: underline;
      transition: .3s;
      color: ${({ theme }) => theme.colors.contrastText};

      &:hover, &:focus{
        opacity: .5;
      }
    }
  }
}
`;

export default function QuizGalera({ links }) {
  return (
    <LinkList>
      {links.map((linkExterno) => {
        const [projectName, githubUser] = linkExterno
          .replace(/\//g, '')
          .replace('https:', '')
          .replace('.vercel.app', '')
          .split('.');

        return (
          <li key={linkExterno}>
            <Widget.Topic as={Link} href={`/quiz/${projectName}__${githubUser}`}>
              {`${githubUser}/${projectName}`}
            </Widget.Topic>
          </li>
        );
      })}
      <li className="ver-mais">
        <a href="https://aluraquiz-base.alura-challenges.vercel.app/contribuidores">
          Veja outros quizes...
        </a>
      </li>
    </LinkList>
  );
}
