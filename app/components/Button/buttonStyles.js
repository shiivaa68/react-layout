import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.25em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

export default buttonStyles;



//
// this styles

// import React from 'react';
// import styled, { css } from 'styled-components';
// import { Text } from '../';
// import { colors } from '../../../styleSheet';

// type Props = {
//   type?:
//     | 'primary'
//     | 'secondary'
//     | 'primary_outline'
//     | 'secondary_outline'
//     | 'outline'
//     | 'outline_primary',
//   size: 'sm' | 'md' | 'lg',
//   disabled?: Boolean,
//   text: String,
//   textColor: String,
//   children?: Element,
//   loading?: Boolean,
// };

// const setButtonPadding = ({ size }) => {
//   if (size === 'sm') {
//     return '10px 22px';
//   }
//   if (size === 'md') {
//     return '10px 30px';
//   }
//   if (size === 'lg') {
//     return '10px 76px';
//   }
// };

// const setButtonTypeStyles = ({ type, disabled }) => {
//   if (type === 'outline') {
//     return css`
//       background-color: ${colors['whiteOpacity']};
//       border: 1px solid ${colors['lightGray']};
//       &:hover {
//         background-color: ${colors['secondary']};
//       }
//     `;
//   }
//   if (type === 'outline_primary') {
//     return css`
//       border: 1px solid ${colors['gray']};
//       background-color: ${colors['secondary']};
//       &:hover {
//         border: 1px solid ${disabled ? colors['gray'] : colors['white']};
//       }
//     `;
//   }
//   if (type === 'primary_outline') {
//     return css`
//       border: 1px solid ${disabled ? colors['lighterGray'] : colors['primary']};
//       background-color: ${colors['white']};
//       &:hover {
//         border: 1px solid
//           ${disabled ? colors['lighterGray'] : colors['primaryHover']};
//       }
//     `;
//   }
//   if (type === 'primary') {
//     return css`
//       background-color: ${disabled ? colors['lighterGray'] : colors['primary']};
//       &:hover {
//         background-color: ${disabled
//           ? colors['lighterGray']
//           : colors['primaryHover']};
//       }
//     `;
//   }
//   if (type === 'secondary') {
//     return css`
//       background-color: ${disabled
//         ? colors['lighterGray']
//         : colors['secondary']};
//       &:hover {
//         background-color: ${disabled ? colors['lighterGray'] : colors['black']};
//       }
//     `;
//   }
//   if (type === 'secondary_outline') {
//     return css`
//       border: 1px solid
//         ${disabled ? colors['lighterGray'] : colors['secondary']};
//       background-color: ${colors['white']};
//       &:hover {
//         border: 1px solid ${disabled ? colors['lighterGray'] : colors['black']};
//       }
//     `;
//   }
//   if (type === 'lighterGray') {
//     return css`
//       border: 1px solid ${colors.lighterGray};
//       background-color: ${colors.lighterGray};
//       &:hover {
//         border: 1px solid ${colors.lighterGray};
//       }
//     `;
//   }
// };

// const getTextColor = ({ type, disabled }) => {
//   if (disabled) {
//     return 'lightGray';
//   }
//   if (type === 'lightGray') {
//     return 'lightGray';
//   }
//   if (type === 'secondary_outline') {
//     return 'secondary';
//   }
//   if (type === 'primary_outline' || type === 'outline_primary') {
//     return 'primary';
//   }
//   if (type === 'outline') {
//     return 'lightGray';
//   }
//   return 'white';
// };

// const StyledButton = styled.button`
//   border: none;
//   &:active {
//     border: none;
//   }
//   ${setButtonTypeStyles};
//   outline: 0;
//   padding: ${setButtonPadding};
//   border-radius: 40px;
//   &:hover {
//     cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
//   }
// `;

// Button.defaultProps = {
//   type: 'primary',
//   disabled: false,
//   size: 'md',
//   textColor: 'white',
// };

// export default function Button(props: Props) {
//   return (
//     <StyledButton
//       {...props}
//       className={`d-flex align-items-center justify-content-center ${props.className}`}
//     >
//       <Text color={getTextColor(props)} className="w-max">
//         {props.text}
//       </Text>
//       {props.loading ? <div className="loader mx-2" /> : ''}
//       {props.children}
//     </StyledButton>
//   );
// }

