import styled from 'styled-components';

const Widget = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;

    h1, h2, h3 {
        font-size: 1.1rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0;
    }

    p{
        font-size: 0.9rem;
        font-weight: 400;
        line-height: 1.4;
        margin-bottom: 1.5rem;
    }
`;

Widget.Header = styled.header`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${({ theme }) => theme.colors.primary};
`;

Widget.Content = styled.div`
    padding: 1.5rem 2rem 2rem 2rem;

    & > *:first-child {
        margin-top: 0;
    }

    & > *:last-child{
        margin-bottom: 0;
    }

    ul{
        list-style: none;
        padding: 0;
    }
`;

export default Widget;
