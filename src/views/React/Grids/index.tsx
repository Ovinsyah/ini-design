import * as React from 'react';
import { IniGrids, IniGrid, IniTable } from 'ini-design';
import Layout from '../../../layouts/Dashboard';
import Markdown from '../../../components/Markdown';
import dataTable from './data.json';
import { Block } from './style';

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
    <Layout title="Grids" description="Ini Grids">
      <Markdown className="ini-m-b-5">{`import { IniGrids, IniGrid } from 'ini-design';`}</Markdown>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Grids Auto</h5>
        <IniGrids>
          <IniGrid><Block gray={true}>Auto</Block></IniGrid>
          <IniGrid><Block gray={true}>Auto</Block></IniGrid>
          <IniGrid><Block gray={true}>Auto</Block></IniGrid>
          <IniGrid><Block gray={true}>Auto</Block></IniGrid>
        </IniGrids>
        <Markdown language="html" className="ini-m-b-5">{`<IniGrids>
  <IniGrid><div>Auto</div></IniGrid>
  <IniGrid><div>Auto</div></IniGrid>
  <IniGrid><div>Auto</div></IniGrid>
  <IniGrid><div>Auto</div></IniGrid>
</IniGrids>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Grids Size</h5>
        <IniGrids className="ini-m-b-3">
          <IniGrid width={2}><Block>Size 2</Block></IniGrid>
          <IniGrid width={8}><Block>Size 8</Block></IniGrid>
          <IniGrid width={2}><Block>Size 2</Block></IniGrid>
        </IniGrids>
        <IniGrids>
          <IniGrid width={2}><Block>Size 2</Block></IniGrid>
          <IniGrid width={2}><Block>Size 2</Block></IniGrid>
          <IniGrid width={2}><Block>Size 2</Block></IniGrid>
          <IniGrid><Block gray={true}>Auto</Block></IniGrid>
        </IniGrids>
        <Markdown language="html" className="ini-m-b-5">{`<IniGrids>
  <IniGrid width={2}><div>Size 2</div></IniGrid>
  <IniGrid width={8}><div>Size 8</div></IniGrid>
  <IniGrid width={2}><div>Size 2</div></IniGrid>
</IniGrids>
<IniGrids>
  <IniGrid width={2}><div>Size 2</div></IniGrid>
  <IniGrid width={2}><div>Size 2</div></IniGrid>
  <IniGrid width={2}><div>Size 2</div></IniGrid>
  <IniGrid><div>Auto</div></IniGrid>
</IniGrids>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Grids Responsive</h5>
        <IniGrids className="ini-m-b-3">
          <IniGrid xSmallWidth={12} smallWidth={10}><Block>xSmallWidth=12 smallWidth=10</Block></IniGrid>
        </IniGrids>
        <IniGrids>
          <IniGrid mediumWidth={12} largeWidth={8} xLargeWidth={6}><Block>mediumWidth=12 largeWidth=8 xLargeWidth=6</Block></IniGrid>
        </IniGrids>
        <Markdown language="html" className="ini-m-b-5">{`<IniGrids>
  <IniGrid xSmallWidth={12} smallWidth={10}><div>xSmallWidth=12 smallWidth=10</div></IniGrid>
</IniGrids>
<IniGrids>
  <IniGrid mediumWidth={12} largeWidth={8} xLargeWidth={6}><div>mediumWidth=12 largeWidth=8 xLargeWidth=6</div></IniGrid>
</IniGrids>`}</Markdown>
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

