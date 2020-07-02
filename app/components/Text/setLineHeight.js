import { css } from 'styled-components';

const setLineHeight = ({ lineHeight }) => {
  if (lineHeight) {
    return css`
      line-height: ${lineHeight};
    `;
  }
};

export default setLineHeight;
