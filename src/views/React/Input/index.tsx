import * as React from 'react';
import { IniInput, IniTable } from 'ini-design';
import Layout from '../../../layouts/Dashboard';
import Markdown from '../../../components/Markdown';
import dataTable from './data.json';

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
    <Layout title="Input" description="Ini Input">
      <Markdown className="ini-m-b-5">{`import { IniInput } from 'ini-design';`}</Markdown>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Input Default</h5>
        <div className="ini-m-b-2"><IniInput placeholder="Your Text"/></div>
        <div className="ini-m-b-2"><IniInput placeholder="Your Text" filled={true}/></div>
        <div className="ini-m-b-2"><IniInput placeholder="Your Text" error="Message error"/></div>
        <div className="ini-m-b-2"><IniInput placeholder="Your Text" full={true}/></div>
        <Markdown language="html" className="ini-m-b-5">{`<IniInput placeholder="Your Text"/>
<IniInput placeholder="Your Text" filled={true}/>
<IniInput placeholder="Your Text" error="Message error"/>
<IniInput placeholder="Your Text" full={true}/>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Input With Type</h5>
        <div className="ini-m-b-2"><IniInput placeholder="Your Text" label="Label input"/></div>
        <div className="ini-m-b-2"><IniInput placeholder="Search" type="search"/></div>
        <div className="ini-m-b-2"><IniInput placeholder="Password" defaultValue="123456" type="password"/></div>
        <Markdown language="html" className="ini-m-b-5">{`<IniInput placeholder="Your Text" label="Label input"/>
<IniInput placeholder="Search" type="search"/>
<IniInput placeholder="Password" defaultValue="123456" type="password"/>`}</Markdown>
      </div>
      <div className="ini-divider"/>
      <div>
        <h5 className="ini-heading-5 ini-m-b-2">PROPS INPUT</h5>
        <IniTable
          headerTable={headerTable}
          formatTable={formatTable}
          dataTable={dataTable}
        />
      </div>
    </Layout>
  );
};

