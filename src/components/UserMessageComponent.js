import styled from 'styled-components';

const UserMessageContainer = styled.div`
    border-radius: 10px;
    width: 300px;
    background: rgba(248, 218, 74, 1);
    color:black;
    display:flex;
    padding: 0.5rem;
    margin-top: 1.5rem;
    align-self: flex-end;
`;

const UserMessageComponent = ({text}) => {    
    return (<UserMessageContainer>
        {text}
    </UserMessageContainer>);
}

export default UserMessageComponent;
