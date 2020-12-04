import styled from 'styled-components';


const ProfileContainer = styled.div`
    border-radius: 10px;
    width: 300px;
    background-color:#ffffff;
    color: gray;
    display: flex;
    padding: 0.2rem;
    margin-top: 1rem;
`;

const ProfileImage = styled.img`
    border-radius: 10px;
    min-height:65px;
    max-height:65px;
    min-width:50px;
    background-size: cover;
    background-repeat: no-repeat;
    background:url("profile_img.png");
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;    
`;

const ProfileName = styled.h1`
    margin-top: 0.1rem;
    color: black;
    font-size:1rem;
`;

const RyanMessage = styled.div`
    margin-top: 0.5em;
`;

const RyanProfileComponent = ({text}) => {
    return (
        <ProfileContainer>
            <ProfileImage/>
            <TextContainer>
                <ProfileName>알바하는 라이언</ProfileName>
                <RyanMessage>{text} </RyanMessage>
            </TextContainer>            
        </ProfileContainer>
    );
};
// assets 사용하려면 패스를 따로 뽑아라
export default RyanProfileComponent;