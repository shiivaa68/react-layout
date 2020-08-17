import React from 'react';
import loadable from 'utils/loadable';
import LoadingIndicator from 'components/LoadingIndicator';

export default loadable(() => import('./PackageDetails'), {
  fallback: <LoadingIndicator />,
});
