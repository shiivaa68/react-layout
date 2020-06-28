import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeaderLink = styled(Link)`
display:inline-flex;
text-decoration:none;
user-select:  none;
cursor: pointer;
margin:0 1em;
list-style-type: none;
color:white;
 :hover {
    color:var(--dim-blue);
} 

;
`;