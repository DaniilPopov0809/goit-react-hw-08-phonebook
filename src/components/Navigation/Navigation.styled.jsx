import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkNav = styled(NavLink)`
  /* @media screen and (max-width: 767px) {
    border: 1px solid;
    padding: 4px;
  } */
&.active {
    color: blue;

  
}
`;