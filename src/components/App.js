import GlobalStyles from './GlobalStyles';
import styled from 'styled-components';
import MessageContainer from '../containers/MessageContainer';
import InputMessageContainer from '../containers/InputMessageContainer';
import {useState, useEffect} from 'react';
import {chatAPI} from "../api";

const MainContainer = styled.div`
  margin:auto; // 전후좌우 최대의 마진을 가지겠다는 의미
  max-width: 640px;
  height: 80vh;
  display:flex;
  flex-direction:column;
`;

function App() {
  // 1. 채팅방에 띄워줄 메세지의 목록
  const [messages, setMessages] = useState([
    {
      text:"안녕하세요 라이언벅스입니다.",
      isUser:false
    }
  ]);

  // 2. 사용자가 입력할 내용을 관리할 state
  const [userMessage, setUserMessage] = useState("");

  useEffect(()=>{
    // 1. 비동기 함수 만들기    
    const sendMessage = async () => {
      try {
        if (userMessage !== ""){
          
            const returnMessage = await chatAPI.sendMessage(userMessage);                  
            const newMessages = messages.concat({
              text: returnMessage,
              isUser: false,
            });
    
            setMessages(newMessages);
        }
  
      } catch (error) {
        alert(error)
      }
      // 입력할 내용이 있으면 전송
    }
    sendMessage();
  },[userMessage]);
  return (
    <>
    <GlobalStyles />
    <MainContainer>
      <MessageContainer messages={messages}>      
      </MessageContainer>
      <InputMessageContainer 
        setUserMessage={setUserMessage}
        setMessages={setMessages}
        messages={messages}
      />
    </MainContainer>    
    </>
  );
}

export default App;
