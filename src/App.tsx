import React, { FunctionComponent } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createTheme, ThemeOptions } from '@material-ui/core';
import { I18nextProvider } from 'react-i18next';

import i18n from '@I18n/.';
import SampleComponent from '@Components/SampleComponent';
import siqTheme from '@Theme/theme';
import '@Styles/index.scss';

const App: FunctionComponent = () => {
  const theme = createTheme(siqTheme as ThemeOptions);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <I18nextProvider i18n={i18n}>
          <SampleComponent />
        </I18nextProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
