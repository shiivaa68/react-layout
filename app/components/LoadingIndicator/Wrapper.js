import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2em auto;
  width: 65px;
  height: 65px;
  position: relative;
  margin-top: ${props => props.marginTop ? props.marginTop : '20rem'};
`;

export default Wrapper;
