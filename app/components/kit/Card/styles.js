import styled, { css } from 'styled-components';

// Card.defaultProps = {
//   hasShadow: true,
//   hasRadius: true,
//   hasBorder: false,
//   borderStyle: 'solid',
//   type: 'transparent',
//   sliderShadow: false,
//   borderColor: 'lighterGray',
//   radius: '15px',
//   hasAnimation: true,
// };

export const CardItemContainer = styled.section`
  background: var(--primary-light);
  font-size: 1rem;
  border-radius: 0.625em;
  padding: 0.8em;

  ${props =>
    props.width
      ? css`
          width: ${props.width};
        `
      : css`
          width: 200px;
        `}
  ${props =>
    props.height
      ? css`
          height: ${props.height};
        `
      : css`
          height: 300px;
        `}
`;
