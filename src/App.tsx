import Routes from './routes';
import ScrollTop from './components/ScrollTop';
import { Suspense } from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollTop>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </ScrollTop>
    </Suspense>
  )
}

export default App