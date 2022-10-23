import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes"
import { AuthProvider } from './contexts/auth';

import { Provider } from 'react-redux';
import { store } from './redux'

import GlobalStyle from './styles/global';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Provider store={store}>
          <Router />
        </Provider>
        <GlobalStyle />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;