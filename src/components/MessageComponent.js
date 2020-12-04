import styled from 'styled-components';
import RyanProfileContainer from '../containers/RyanProfileContainer';
import UserMessageContainer from  '../containers/UserMessageContainer';
const MessagePresentaionContainer = styled.div`
    overflow: scroll;
    display:flex;
    flex-direction: column;
    height:100%;
`;

// 말풍선이 여기에 추가되면서 뜰것
const MessageComponent = ({messageRef ,messages}) => {

    return( <MessagePresentaionContainer ref={messageRef}>
    {messages.map((message)=> message.isUser == true 
    ? (<UserMessageContainer  text={message.text} /> ):  (<RyanProfileContainer text={message.text}/>)  )}
    </MessagePresentaionContainer>);
};

export default MessageComponent;

