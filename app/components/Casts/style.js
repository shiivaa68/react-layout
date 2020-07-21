import styled from 'styled-components';

export const CastWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0 2rem;


`;

export const Container = styled.div`
  display: block;
  vertical-align: middle;
`;

export const Image = styled.div`
  margin: 0.5em;
  overflow: hidden;
  border-radius: 0.5em;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  & > img {
    width: 100px;
    border-radius: 50%;
  }
`;

export const DescriptionCast = styled.div`
  text-align: center;
  color: #aaaaaa;
  vertical-align: middle;
  display: block;
  font-size: 12px;
  cursor: pointer;
  user-select: text;
`;

export const Title = styled.h4`
  padding: 0 1rem;
`;

export const Role = styled.h3``;

export const SubTitle = styled.h3`
padding: 0 0.75rem;
width:100%;
margin:1rem 0 ;
`;