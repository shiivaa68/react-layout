import styled from 'styled-components';

export const LoginBox = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-family: var(--primary-font);
  color: white;

  & > div {
    width: 100%;
    min-height: 75px;
    & div {
      background-color: var(--primary-light);
    }

    & input {
      direction: rtl;
      background-color: var(--primary-light);
      color: var(--dim-gray);

      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: var(--light-gray);
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: var(--light-gray);
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: var(--light-gray);
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: var(--light-gray);
      }
    }
  }

  & > button {
    width: 100%;
    position: relative;
    box-sizing: border-box;
    text-align: center;
  }
`;

export const ErrorContainer = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--primary-danger);
  padding: 1rem;
  border-radius: 5px;
`;
