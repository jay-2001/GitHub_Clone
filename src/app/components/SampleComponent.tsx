import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

function SampleComponent() {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
        Learn React
      </a>
      <h1>{t('welcome.title', { framework: 'React' })}</h1>
      <Button onClick={() => i18n.changeLanguage('en')}>en</Button>
      <Button onClick={() => i18n.changeLanguage('es')}>es</Button>
      <FontAwesomeIcon icon={faCoffee} size='xs' />
      <FontAwesomeIcon icon={faCoffee} size='sm' />
      <FontAwesomeIcon icon={faCoffee} size='lg' />
      {process.env.REACT_APP_BASE_API_URL}
      <Button variant='contained' color='primary'>
        hi
      </Button>
    </div>
  );
}

export default SampleComponent;
