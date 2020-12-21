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
    width: 2.5rem;
    height: 2px;
    margin: 0 auto;
    margin-top: 1.2rem;

`;

const Container = styled.div`
    text-align: center;
`;