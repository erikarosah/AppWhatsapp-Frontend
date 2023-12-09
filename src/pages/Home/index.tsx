import { Container, 
  Content, 
  ChatContacts, 
  Options, 
  Messages, 
  ChatMessages,
  ChatInfo,
  ChatMessagesArea,
  SendMessageArea
} from "./styles";
import userImg from '../../assets/user.jpg';
import arrowImg from '../../assets/arrow.svg';
import editImg from '../../assets/edit.svg';
import videoImg from '../../assets/video.svg';
import callImg from '../../assets/call.svg';
import smileImg from '../../assets/smile.svg';

export function Home() {
  return (
    <Container>
      <Content>
        <ChatContacts>
          <Options>
            <img src={userImg} alt="Foto do usuário"/>
            <div>
              <img src={editImg} alt="Escrever mensagem"/>
              <img src={arrowImg} alt="Mais opções"/>
            </div>
          </Options>
          <Messages>
            <img src={userImg} alt="Foto do usuário"/>
            <div>
              <p>NetWorking Profissão Programador</p>
              <span>Érika: Bom dia</span>
            </div>
          </Messages>
        </ChatContacts>

        <ChatMessages>
          <ChatInfo>
            <div>
              <img src={userImg} alt="Foto do usuário"/>
              <p>Profissão programador
                <span>Érika</span>
              </p>
            </div>
            <div>
              <img src={videoImg} alt="Iniciar vídeo chamada"/>
              <img src={callImg} alt="Iniciar ligação de voz"/>
            </div>
          </ChatInfo>

          <ChatMessagesArea>
     
          </ChatMessagesArea>

          <SendMessageArea>
            <img src={smileImg} alt="Emoji"/>
            <input
              placeholder="Digite uma mensagem"
            />
            <button
              type="submit"
            >
              <img src={arrowImg} alt="Enviar mensagem"/>
            </button>
          </SendMessageArea>
        </ChatMessages>
      </Content>
    </Container>
  );
}