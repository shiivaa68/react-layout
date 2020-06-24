import styled from 'styled-components';

export default styled.header`
  min-height: 80px;
  width: 100vw;
  position: fixed; /** this is why it sticked on top always, i know that you might look for it besty! */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2.25rem;
  padding-right: 2.25rem;
  background: linear-gradient(
    to bottom,
    rgba(18, 18, 18, 1),
    rgba(18, 18, 18, 0)
  );
`;
