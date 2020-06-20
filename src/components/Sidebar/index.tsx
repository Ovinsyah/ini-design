import * as React from 'react';
import { Menus, TitleMenu } from './style';
import { Link } from 'react-router-dom';

import menu from './menu.json';

export default (props: {inicss?: boolean}) => {
  return (
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
  );
};
