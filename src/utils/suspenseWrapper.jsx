import React, { Suspense } from 'react';
import { PageLoader } from '../components';

export const suspenseWrapper = (component) => (
  <Suspense fallback={<PageLoader />}>{component}</Suspense>
);
