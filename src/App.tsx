import Routes from './routes';
import ScrollTop from './components/ScrollTop';
import { Suspense } from 'react';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollTop>
          <Routes />
      </ScrollTop>
    </Suspense>
  )
}

export default App