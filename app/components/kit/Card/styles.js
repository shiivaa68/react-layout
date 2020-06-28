import styled ,{css} from 'styled-components';


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

const styledCard = styled.div`
${props => props.width?css`
width:${props.width};
`:null
};

${props =>
    props.height
      ? css`
          height: ${props.height};
        `
      : null};
      ${props =>
    props.hasShadow
      ? css`
          box-shadow: ${props =>
            props.sliderShadow ? red : blue};
        `
      : null};
  border-radius: ${props => (props.hasRadius ? props.radius : 0)};
  ${props =>
    props.hasAnimation
      ? css`
          transition: all 0.5s;
        `
      : null};

  background-color: red;
  ${props =>
    props.hasBorder
      ? css`
          border: 1px ${props.borderStyle} ${color};
        `
      : null};

  &:hover {
    ${props =>
      props.hasShadow
        ? css`
            box-shadow: ${props =>
              props.sliderShadow
                ? orange
                : purple};
          `
        : null};
    ${props =>
      props.hoverType
        ? css`
            background-color: ${color};
          `
        : null};
  }
`;

export default styledCard;
