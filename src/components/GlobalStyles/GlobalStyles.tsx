import React from 'react';
import './GlobalStyles.css';

type GlobalStylesProps = {
  children: React.ReactNode;
};

const GlobalStyles = ({ children }: GlobalStylesProps) => {
  return children;
};

export default GlobalStyles;
