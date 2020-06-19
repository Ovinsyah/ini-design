import * as React from 'react';
import { IniButton } from 'ini-design';

const buttons = ["primary", "info", "success", "warning", "danger", "default"];

export default () => {
  return (
    <div className="ini-p-4">
      <div className="ini-m-b-3">
        {buttons.map((item, key) => <IniButton key={key} theme={item} className="ini-m-1">Button {item}</IniButton>)}
      </div>
      <div className="ini-m-b-3">
        {buttons.map((item, key) => <IniButton key={key} theme={item} size="large" className="ini-m-1">Button {item}</IniButton>)}
      </div>
      <div className="ini-m-b-3">
        {buttons.map((item, key) => <IniButton key={key} theme={item} outline={true} className="ini-m-1">Button {item}</IniButton>)}
      </div>
      <div className="ini-m-b-3">
        {buttons.map((item, key) => <IniButton key={key} theme={item} rounded={true} className="ini-m-1">Button {item}</IniButton>)}
      </div>
      <div className="ini-m-b-3">
        {buttons.map((item, key) => <IniButton key={key} theme={item} outline={true} rounded={true} className="ini-m-1">Button {item}</IniButton>)}
      </div>
      <div className="ini-m-b-3">
        {buttons.map((item, key) => <IniButton key={key} theme={item} disabled={true} className="ini-m-1">Button {item}</IniButton>)}
      </div>
    </div>
  )
}

