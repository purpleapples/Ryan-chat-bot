import MessageComponent from '../components/MessageComponent';
import {useRef, useEffect} from 'react';


const MessageContainer = ({messages}) => {
    const messageRef = useRef();
    useEffect(() => {
        // messageRef가 지정되어있으면

        messageRef.current.scrollTop  = messageRef.current.scrollHeight;
    }, [messages]);
    return (<MessageComponent 
                messageRef={messageRef}
                messages={messages}/>);
};

export default MessageContainer;