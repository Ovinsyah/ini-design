import * as React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Section, Header, Button, SectionGettingStarted } from './style';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export default () => {
  const ref = useQuery().get("ref");
  const history = useHistory();
  React.useEffect(() => {
    if (ref){
      history.push(ref);
    }
  }, []);
  return (
    <Section>
      <Header>
        <svg width="53" height="201" viewBox="0 0 53 201" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-1.90735e-06 26.4715C-1.90735e-06 40.9759 11.7582 52.7341 26.2626 52.7341C40.767 52.7341 52.5252 40.9759 52.5252 26.4715C52.5252 11.967 40.767 0.208862 26.2626 0.208862C11.7582 0.208862 -1.90735e-06 11.967 -1.90735e-06 26.4715Z" fill="white"/>
          <path d="M52.5252 83.7107C52.5252 69.2063 40.767 57.4481 26.2626 57.4481V57.4481C11.7582 57.4481 -1.90735e-06 69.2063 -1.90735e-06 83.7107V173.946C-1.90735e-06 188.451 11.7582 200.209 26.2626 200.209V200.209C40.767 200.209 52.5252 188.451 52.5252 173.946V83.7107Z" fill="white" fillOpacity="0.6"/>
          <path d="M52.5252 128.828C52.5252 114.324 40.767 102.566 26.2626 102.566V102.566C11.7581 102.566 -1.71661e-05 114.324 -1.71661e-05 128.828V173.946C-1.71661e-05 188.451 11.7581 200.209 26.2626 200.209V200.209C40.767 200.209 52.5252 188.451 52.5252 173.946V128.828Z" fill="white"/>
        </svg>
        <h1>Ini Design</h1>
        <p>User interface to build your amazing website</p>
        <SectionGettingStarted>
          <Button to="/inicss/introduction">Ini Css</Button>
          <Button to="/react/introduction">React Component</Button>
        </SectionGettingStarted>
      </Header>
    </Section>
  );
};
