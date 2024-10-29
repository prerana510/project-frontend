// src/App.tsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import CustomersPage from './pages/CustomersPage';
import OrdersPage from './pages/OrdersPage';
import ProductsPage from './pages/ProductsPage';

const App: React.FC = () => (
  <Routes>
    <Route path="/retail/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/retail/admin/customers" element={<CustomersPage />} />
    <Route path="/retail/admin/orders" element={<OrdersPage />} />
    <Route path="/retail/admin/products" element={<ProductsPage />} />
  </Routes>
);

export default App;
