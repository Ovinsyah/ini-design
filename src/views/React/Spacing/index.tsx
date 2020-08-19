import * as React from 'react';
import Layout from '../../../layouts/Dashboard';
import { Box, Item, BoxContent, Title, Desc } from './style';
import Markdown from '../../../components/Markdown';
import { IniFlexbox, IniList } from 'ini-design';

const list = ["Padding = p", "Margin = m", "Left = l", "Right = r", "Top = t", "Bottom = b"];

export default () => {
  return (
    <Layout title="Spacing" description="Ini Spacing">
      <IniFlexbox>
        {[...Array(5)].map((x, i) => {
          return(
            <BoxContent key={i}>
              <Box className={"ini-p-" + (i + 1)}><Item/></Box>
              <Title>Size: {i + 1}</Title>
              <Desc>{(i + 1) * 8}px</Desc>
            </BoxContent>
          );
        })}
      </IniFlexbox>
      <Markdown language="html">{`/*Padding, Position = (Top, Right, Bottom, Left), Size = 2*/
<div className="ini-p-2"> <!--Your Code--> </div>
/*Padding, Position = (Top), Size = 4*/
<div className="ini-p-t-4"> <!--Your Code--> </div>
/*Margin, Position = (Top, Bottom), Size = 3*/
<div className="ini-m-t-b-3"> <!--Your Code--> </div>`}</Markdown>
      <IniList className="ini-m-t-3" list={list} />
    </Layout>
  );
};

