import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: 95%;
    height: 95%;
    max-width: 1700px;
    display: flex;
`;

export const ChatContacts = styled.section`
    width: 30%;
    height: 100%;
    border-right: 1px solid var(--shape);
    background: var(--chat);
`;

export const Options = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 1rem;
    background: var(--shape);

    img {
        width: 30px;
        cursor: pointer;
    }

    div {
        display: flex;
        align-items: flex-end;
        gap: 1.5rem; 

        img {
            width: 20px;
        }
    }
`;

export const Messages = styled.div`
    display: flex;
    margin-top: 2rem;
    padding: 0 1rem;
    gap: 1rem;
    cursor: pointer;

    img {
        width: 40px;
        height: 40px;
    }

    div {
        display: flex;
        flex-direction: column;
        

        p, span {
            width: 100%;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;

        }
        span {
            font-size: 0.8rem;
            padding-top: 5px;
        }
    }
`;

export const ChatMessages = styled.section`
    flex: 1;
    display: flex;
    min-height: 100%;
    flex-direction: column;
    background: var(--chat);
`;

export const ChatInfo = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0.4rem;
    border-left: 1px solid var(--background);
    background: var(--shape);

    div:first-child {
        display: flex;
        align-items: center;

        img {
            width: 30px;
            cursor: pointer;
        }

        p {
            display: flex;
            flex-direction: column;
            margin-left: 1rem;

            span {
                font-size: 0.8rem;
              
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                text-overflow: ellipsis;
            }
        }
    }

    div:last-child {
        img {
            width: 20px;
            margin-left: 1rem;
            cursor: pointer;
        }
    }
`;

export const ChatMessagesArea = styled.div`
    height: 100%;
    padding: 1rem;
    border-right: 1px solid var(--background);
`;

export const SendMessageArea = styled.form`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0.5rem;
    padding: 1rem 0.5rem 0.5rem 0.5rem;

    background: var(--shape);

    img:last-child {
        transform: rotate(-90deg);
    }

    input {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 0.25rem;
        padding: 0 1rem;

        background: #2A3942;
        outline: none;
    }

    button {
        height: 100%;
        border: none;
        background: transparent;
    }
`;