import {useRef, useCallback} from 'react';
import InputMessageComponent from '../components/InputMessageComponent';
const InputMessageContainer = ({
    setUserMessage,
    setMessages,
    messages
}) => {

    // useRef() : element 핝개를 특정하기 위해 사용
    const inputRef = useRef();

    // 보내기 버튼을 클릭하거나, 엔터키가 눌렸을 때의 작동을 하나의 함수로 작성함.
    const userProcess = () => {
        // 1.  입력창에 입력된 텍스트를 가져오기
        const sentence_q = inputRef.current.value;
        inputRef.current.value = "";

        // 메세지 리스트에 사용자가 입력한 메세지 추가
        const newMessages = messages.concat({
            text: sentence_q,
            isUser:true
        });
        // 화면에 사용자 message 반영
        setMessages(newMessages);    

        // 서버에 보낼 메세지를 셋팅;

        setUserMessage(sentence_q);        
    };

    // 버튼클릭 및 엔터키 눌렀을 때의 이벤트 작성
    const handleSendBtnClicked = useCallback(()=> {
    
        userProcess();

    },[messages]);

    const handleOnEnterKeyDown = useCallback((e) =>{
        // enter key 신호 : 13
        if(e.keyCode ===13){
            userProcess();
        }

    }, [messages])


    return (
        <InputMessageComponent 
            handleSendBtnClicked={handleSendBtnClicked}
            handleOnEnterKeyDown={handleOnEnterKeyDown}
            inputRef={inputRef}
        />
    );
};

export default InputMessageContainer;