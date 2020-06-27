import * as React from 'react';
import { IniFlexbox, IniTable } from 'ini-design';
import Layout from '../../../layouts/Dashboard';
import Markdown from '../../../components/Markdown';
import dataTable from './data.json';
import { Box, Block } from './style';

const headerTable = ["Props", "Type", "Default Value", "Required", "Description"];
const formatTable = [
  { item: (object: any) => object.props },
  { item: (object: any) => object.type },
  { item: (object: any) => object.defaultValue },
  { item: (object: any) => object.required },
  { item: (object: any) => object.description }
];

export default () => {
  return (
    <Layout title="Flexbox" description="Ini Flexbox">
      <Markdown className="ini-m-b-5">{`import { IniGrids, IniGrid } from 'ini-design';`}</Markdown>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Flex Direction = column</h5>
        <Box>
          <IniFlexbox flexDirection="column">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox flexDirection="column"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Flex Direction = row</h5>
        <Box>
          <IniFlexbox flexDirection="row">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox flexDirection="row"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Flex Wrap = wrap</h5>
        <Box>
          <IniFlexbox flexWrap="wrap">
            {[...Array(20)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox flexWrap="wrap"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Justify Content = center</h5>
        <Box>
          <IniFlexbox justifyContent="center">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox justifyContent="center"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Justify Content = flex-end</h5>
        <Box>
          <IniFlexbox justifyContent="flex-end">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox justifyContent="flex-end"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Justify Content = space-around</h5>
        <Box>
          <IniFlexbox justifyContent="space-around">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox justifyContent="space-around"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Justify Content = space-between</h5>
        <Box>
          <IniFlexbox justifyContent="space-between">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox justifyContent="space-between"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Align Items = center</h5>
        <Box style={{height: "200px"}}>
          <IniFlexbox fullHeight={true} alignItems="center">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox fullHeight={true} alignItems="center"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Align Items = center, Justify Content = center</h5>
        <Box style={{height: "200px"}}>
          <IniFlexbox fullHeight={true} alignItems="center" justifyContent="center">
            {[...Array(3)].map((x, i) => <Block key={i}>BOX</Block>)}
          </IniFlexbox>
        </Box>
        <Markdown language="html" className="ini-m-b-5">{`<IniFlexbox fullHeight={true} alignItems="center" justifyContent="center"> <!--Your Code--> </IniFlexbox>`}</Markdown>
      </div>
      <div className="ini-divider"/>
      <div>
        <h5 className="ini-heading-5 ini-m-b-2">PROPS GRID</h5>
        <IniTable
          headerTable={headerTable}
          formatTable={formatTable}
          dataTable={dataTable}
        />
      </div>
    </Layout>
  );
};

