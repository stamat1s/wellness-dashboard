// src/App.jsx
import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import './index.css'; 


function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

export default function App() {
  return <AppRoutes />;
}

