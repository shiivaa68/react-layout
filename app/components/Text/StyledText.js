import React from 'react';
import styled from 'styled-components';
import setTextColor from './setTextColor';
import setTextTypography from './setTextTypography';
import setTextWeight from './setTextWeight';
import setLineHeight from './setLineHeight';


const Text = () => {

  const {children, type = 'span',color,
    ...restProps} = props;
  return React.createElement(type, { ...restProps });
};

const StyledText = styled(Text)`
  color: ${setTextColor};
  ${setTextTypography};
  margin: 0;
  ${setTextWeight};
  transition: ${props => (props.animation ? 'all .3s' : 'none')};
  ${setLineHeight};
`;

// StyledText.propTypes = {
//   children:PropTypes.String,
//   bold:PropTypes.Boolean,
//   optionalEnum: PropTypes.oneOf(['News', 'Photos']),
//   color:PropTypes.oneOf(['black', 'gray','lightGray','disabled','white','primary','secondary']),
//   type: PropTypes.String,
//   size: PropTypes.oneOf(['lg', 'md','sm','plg']),
//   direction: PropTypes.String,
//   animation: PropTypes.Boolean,
//   lineHeight: PropTypes.String,
// };

export default StyledText;

