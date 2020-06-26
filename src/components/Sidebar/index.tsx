import * as React from 'react';
import { Link } from 'react-router-dom';
import { Section, Menus, TitleMenu, HeaderLogo } from './style';

import menu from './menu.json';

export default (props: {inicss?: boolean}) => {
  return (
    <Section>
      <HeaderLogo>
        <Link to="/">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="21" cy="21" r="21" fill="black"/>
            <path d="M17.0001 9.20196C17.0001 11.5226 18.8813 13.4039 21.202 13.4039C23.5227 13.4039 25.404 11.5226 25.404 9.20196C25.404 6.88128 23.5227 5 21.202 5C18.8813 5 17.0001 6.88128 17.0001 9.20196Z" fill="white"/>
            <path d="M25.404 18.3597C25.404 16.039 23.5227 14.1577 21.202 14.1577V14.1577C18.8813 14.1577 17.0001 16.039 17.0001 18.3597V32.7972C17.0001 35.1179 18.8813 36.9992 21.202 36.9992V36.9992C23.5227 36.9992 25.404 35.1179 25.404 32.7972V18.3597Z" fill="white" fill-opacity="0.6"/>
            <path d="M25.404 25.5793C25.404 23.2586 23.5227 21.3773 21.202 21.3773V21.3773C18.8813 21.3773 17 23.2586 17 25.5793V32.798C17 35.1187 18.8813 37 21.202 37V37C23.5227 37 25.404 35.1187 25.404 32.798V25.5793Z" fill="white"/>
          </svg>
        </Link>
      </HeaderLogo>
      <Menus>
        {
          menu.map((item, key) => {
            return (
              <li className="list" key={key}>
                <TitleMenu>{item.title}</TitleMenu>
                <Menus>
                  {
                    item.list.map((itemMenu, keyMenu) => {
                      return <li key={keyMenu}><Link to={(props.inicss ? '/inicss' : '/react') + itemMenu.url}>{itemMenu.title}</Link></li>;
                    })
                  }
                </Menus>
              </li>
            );
          })
        }
      </Menus>
    </Section>
  );
};
