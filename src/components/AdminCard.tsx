// src/components/AdminCard.tsx
import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type AdminCardProps = {
  title: string;
  link: string;
};

const AdminCard: React.FC<AdminCardProps> = ({ title, link }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 250, height: 150, boxShadow: 3 }}>
      <CardActionArea onClick={() => navigate(link)}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Manage {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AdminCard;
