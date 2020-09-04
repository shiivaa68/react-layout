import styled from 'styled-components';
import Modal from 'styled-react-modal'

export const ModalHeader = styled.h3`
display: flex;
justify-content: center;
align-item:center;
font-size:1.5rem;
color:black;
`;

 export const ModalContainer = Modal.styled`
 z-index: 100;
 background: white;
 position: relative;
 margin: 1.75rem auto;
 border-radius: 5px;
 max-width: 500px;
 padding: 2rem;
 color:black;
 width: 90%;
`;
 export const ModalCloseButton = styled.button`
 font-size: 2rem;
 font-weight: 900;
 line-height: 1;
 color: black;
 opacity: .3;
 cursor: pointer;
 border: none;
`;


export const WrapperTitle =styled.div`
background-color: var(--gray-light);
border-radius:5px;
padding:1rem 1rem;
margin:5px;


`;
