import { css } from 'styled-components';

const setTextWeight = ({ bold }) => {
  if (bold) {
    return css`
      font-weight: bold;
    `;
  }
};

export default setTextWeight;
