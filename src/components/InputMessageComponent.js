import React from 'react';
import styled from 'styled-components';

const InputTextArea = styled.input`
    padding:0.5rem;
    resize:none;
    border:none;
    border-radius: 5px 0px 0px 5px; // 시계방향
    width:100%;
    height:100%;
    :focus
    {
        outline: 0;
     }
`;

const MessageSendButton = styled.div`
    display:flex;
    width:150px;
    border-radius: 0px 5px 5px 0px;
    height: 100%;
    cursor: pointer;
    background-color:gray;
    justify-content:center;
    align-items:center;
`;

const InputBoxContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items:center;
    height:24px;
    margin-top: 0.8rem;
`;


const InputMessageComponent = ({
    handleSendBtnClicked,
    handleOnEnterKeyDown,
    inputRef
}) => {
    return (
        <InputBoxContainer>
            <InputTextArea ref={inputRef} onKeyDown={handleOnEnterKeyDown}/>
            <MessageSendButton onClick={handleSendBtnClicked}> 보내기
            </ MessageSendButton >
        </InputBoxContainer>
    );
};

export default InputMessageComponent;