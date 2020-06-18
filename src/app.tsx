import * as React from 'react';
import { Section } from './style';
import "./styles.scss";
import { IniButton } from 'ini-design';

export default () => {
  return (
    <Section>
      bem
      <div>
        ulala
        <IniButton theme="primary">lolox</IniButton>
      </div>
    </Section>
  );
}
