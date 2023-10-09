import React from 'react';
type ErrorBlockProps = {
  title: string;
  message: string;
};

const ErrorBlock = ({ message, title }: ErrorBlockProps) => {
  return (
    <div className="error-block">
      <div className="error-block-icon">!</div>
      <div className="error-block-text">
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ErrorBlock;
