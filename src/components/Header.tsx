import routes from '@/router/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SCxHeader = styled.header`
  color: #fff;
  padding: 10px;
`;

const SCxNavList = styled.nav`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const SCxNavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e9ecef;
  }
`;

function Header() {
  return (
    <SCxHeader>
      <nav>
        <SCxNavList>
          {routes[0].routes.map((r) => (
            <li key={r.name}>
              <SCxNavLink to={r.path}>{r.name}</SCxNavLink>
            </li>
          ))}
        </SCxNavList>
      </nav>
    </SCxHeader>
  );
}

export default Header;
