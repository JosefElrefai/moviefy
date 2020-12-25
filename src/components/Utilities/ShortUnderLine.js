import styled from '@emotion/styled';

export default (props) => {

    return (
        <Container>
            {props.children()}
            <UnderLine />
        </Container>

    );
}

const UnderLine = styled.div`
    background: white;
    width: 7%;
    height: 2px;
    margin: 0 auto;
    margin-top: 2rem;
    margin-bottom: 3.5rem;

`;

const Container = styled.div`
    text-align: center;
`;