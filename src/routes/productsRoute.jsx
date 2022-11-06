import React, { lazy } from 'react';
import { suspenseWrapper } from 'utils/suspenseWrapper';

const ProductsPage = lazy(() => import('pages/products/All/Products'));
const ApplicationsPage = lazy(() =>
  import('pages/products/Applications/Applications'),
);
const AuthorizedAgenciesPage = lazy(() =>
  import('pages/products/AuthorizedAgencies/AuthorizedAgencies'),
);
const AuthorizedMgaPage = lazy(() =>
  import('pages/products/AuthorizedMga/AuthorizedMga'),
);
const ProposalsPage = lazy(() => import('pages/products/Proposals/Proposals'));
const CommissionsPage = lazy(() =>
  import('pages/products/Commissions/Commissions'),
);

export const productsRoute = [
  {
    path: '',
    element: suspenseWrapper(<ProductsPage />),
  },
  {
    path: 'applications',
    element: suspenseWrapper(<ApplicationsPage />),
  },
  {
    path: 'authorized-agencies',
    element: suspenseWrapper(<AuthorizedAgenciesPage />),
  },
  {
    path: 'authorized-mga',
    element: suspenseWrapper(<AuthorizedMgaPage />),
  },
  {
    path: 'commissions',
    element: suspenseWrapper(<CommissionsPage />),
  },
  {
    path: 'proposals',
    element: suspenseWrapper(<ProposalsPage />),
  },
];
