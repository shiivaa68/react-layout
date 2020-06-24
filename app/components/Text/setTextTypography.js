import { css } from 'styled-components';

const setTextTypography = ({ size = 'plg' }) => {
  return css`
    font-size: ${props.fontSize};
    font-weight: ${props.fontWeight};
  `;
};

export default setTextTypography;
