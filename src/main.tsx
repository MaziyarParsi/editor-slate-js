import GlobalStyle from 'config/GlobalStyle';
import ReactDOM from 'react-dom/client';
import AllRoutes from 'routes/Routes';
import './config/tailwind.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <>
    <AllRoutes />
    <GlobalStyle />
  </>,
);
