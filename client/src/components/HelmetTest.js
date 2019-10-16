import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetTest = () => {
  return (
    <div>
      <Helmet>
        <script src="/file2.js"></script>
      </Helmet>
      <p>Hi!</p>
    </div>
  );
};

export default HelmetTest;
