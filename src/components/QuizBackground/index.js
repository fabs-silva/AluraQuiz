import styled from 'styled-components';

const QuizBackground = styled.div`
    width: 100%;
    background: url(${({ backgroundImage }) => backgroundImage}) ${({ theme }) => theme.colors.mainBg} center no-repeat;
    background-size: cover;
    flex: 1;

    @media screen and (max-width: 500px){
        background-image: none;
        &:after{
            content: "";
            background-size: cover;
            background: linear-gradinet(transparent, ${({ theme }) => theme.colors.mainBg}), url(${({ backgroundImage }) => backgroundImage}) center no-repeat;
            display: block;
            width: 100%;
            height: 210px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1;
        }
        *:first-child{
            position: relative;
            z-index: 10;
        }
    }
`;

export default QuizBackground;