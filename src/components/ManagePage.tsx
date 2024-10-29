// src/components/ManagePage.tsx
import React, { ReactNode } from 'react';

interface ManagePageProps {
  title: string; // Title of the page, e.g., "Manage Products"
  entity: string; // The entity type, e.g., "Product", "Customer"
  children?: ReactNode; // Content specific to the page (list, forms, etc.)
}

const ManagePage: React.FC<ManagePageProps> = ({ title, entity, children }) => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>{title}</h1>
      <p>Managing {entity}</p>
      <div>{children}</div>
    </div>
  );
};

export default ManagePage;
