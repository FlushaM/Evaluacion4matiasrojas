// src/componentes/ProgressBar.tsx
import React from 'react';
import { ProgressBar } from 'react-bootstrap';

interface ProgressProps {
  isLoading: boolean;
}

const LoadingProgressBar: React.FC<ProgressProps> = ({ isLoading }) => {
  return (
    isLoading ? (
      <div className="progress-bar-container">
        <ProgressBar animated now={100} />
      </div>
    ) : null
  );
};

export default LoadingProgressBar;
