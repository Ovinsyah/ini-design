import * as React from 'react';
import { IniButton, IniTable } from 'ini-design';
import Layout from '../../../layouts/Dashboard';
import Markdown from '../../../components/Markdown';
import { SectionButton } from './style';
import dataTable from './data.json';

const buttons = ["primary", "info", "success", "warning", "danger", "default"];
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
    <Layout title="Button" description="Ini Button">
      <Markdown className="ini-m-b-5">{`import { IniButton } from 'ini-design';`}</Markdown>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Button Default</h5>
        <SectionButton>
          {buttons.map((item, key) => <IniButton key={key} theme={item} className="ini-m-1">Button {item}</IniButton>)}
        </SectionButton>
        <Markdown language="html">{`<IniButton theme="primary">Ini Button</IniButton>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Button Large</h5>
        <SectionButton>
          {buttons.map((item, key) => <IniButton key={key} theme={item} size="large" className="ini-m-1">Button {item}</IniButton>)}
        </SectionButton>
        <Markdown language="html">{`<IniButton theme="primary" size="large">Ini Button</IniButton>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Button Outline</h5>
        <SectionButton>
          {buttons.map((item, key) => <IniButton key={key} theme={item} outline={true} className="ini-m-1">Button {item}</IniButton>)}
        </SectionButton>
        <Markdown language="html">{`<IniButton theme="primary" outline={true}>Ini Button</IniButton>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Button Rounded</h5>
        <SectionButton>
          {buttons.map((item, key) => <IniButton key={key} theme={item} rounded={true} className="ini-m-1">Button {item}</IniButton>)}
          {buttons.map((item, key) => <IniButton key={key} theme={item} outline={true} rounded={true} className="ini-m-1">Button {item}</IniButton>)}
        </SectionButton>
        <Markdown language="html">{`<IniButton theme="primary" rounded={true}>Ini Button</IniButton>
<IniButton theme="primary" rounded={true} outline={true}>Ini Button</IniButton>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Button Disabled</h5>
        <SectionButton>
          {buttons.map((item, key) => <IniButton key={key} theme={item} disabled={true} className="ini-m-1">Button {item}</IniButton>)}
        </SectionButton>
        <Markdown language="html">{`<IniButton theme="primary" disabled={true}>Ini Button</IniButton>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Button Loading</h5>
        <SectionButton>
          {buttons.map((item, key) => <IniButton key={key} theme={item} laoding={true} className="ini-m-1">Button {item}</IniButton>)}
        </SectionButton>
        <Markdown language="html">{`<IniButton theme="primary" laoding={true}>Ini Button</IniButton>`}</Markdown>
      </div>
      <div className="ini-m-b-5">
        <h5 className="ini-heading-5 ini-m-b-2">Button Link</h5>
        <SectionButton>
          {buttons.map((item, key) => <IniButton href="/" key={key} theme={item} className="ini-m-1">Button {item}</IniButton>)}
        </SectionButton>
        <Markdown language="html">{`<IniButton href="/" theme="primary" >Ini Button</IniButton>`}</Markdown>
      </div>
      <div className="ini-divider"/>
      <div>
        <h5 className="ini-heading-5 ini-m-b-2">PROPS BUTTON</h5>
        <IniTable
          headerTable={headerTable}
          formatTable={formatTable}
          dataTable={dataTable}
        />
      </div>
    </Layout>
  );
};

