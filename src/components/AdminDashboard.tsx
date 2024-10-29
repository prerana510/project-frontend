// src/components/AdminDashboard.tsx
import React from 'react';
import { Box, Grid } from '@mui/material';
import AdminCard from './AdminCard';

const AdminDashboard: React.FC = () => (
  <Box sx={{ flexGrow: 1, padding: 4 }}>
    <Grid container spacing={3} justifyContent="center">
      <Grid item>
        <AdminCard title="Customers" link="/retail/admin/customers" />
      </Grid>
      <Grid item>
        <AdminCard title="Orders" link="/retail/admin/orders" />
      </Grid>
      <Grid item>
        <AdminCard title="Products" link="/retail/admin/products" />
      </Grid>
    </Grid>
  </Box>
);

export default AdminDashboard;
