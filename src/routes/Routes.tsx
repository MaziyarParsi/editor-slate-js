import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Dashboard,
} from './LazyRoutes';

const AllRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);

export default AllRoutes;
