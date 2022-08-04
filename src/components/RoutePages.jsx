import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const RoutePages = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" exact element={<Navigate to="/search" />} />
        <Route
          exact
          path={['/search', '/images', '/news', '/videos']}
          element={<Results />}
        />
      </Routes>
    </div>
  );
};

export default RoutePages;
