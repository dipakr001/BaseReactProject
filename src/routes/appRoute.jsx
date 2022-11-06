/* eslint-disable import/no-cycle */
import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { suspenseWrapper } from 'utils/suspenseWrapper';
import { ProductsPage } from 'pages/products';
import { productsRoute } from './productsRoute';

const ErrorPage = lazy(() => import('pages/404'));
const LoginPage = lazy(() => import('pages/auth/Login'));
const SignUpPage = lazy(() => import('pages/auth/SignUp'));
const SuccessRegistrationPage = lazy(() =>
  import('pages/auth/SignUp/SuccessRegistration'),
);

const FormBuilderPage = lazy(() => import('pages/FormBuilder'));

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: suspenseWrapper(<LoginPage />),
    errorElement: suspenseWrapper(<ErrorPage />),
  },
  {
    path: '/login',
    element: suspenseWrapper(<LoginPage />),
    errorElement: suspenseWrapper(<ErrorPage />),
  },
  {
    path: '/Sign-up',
    element: suspenseWrapper(<SignUpPage />),
  },
  {
    path: '/sign-up-success',
    element: suspenseWrapper(<SuccessRegistrationPage />),
  },
  {
    path: '/products',
    element: suspenseWrapper(<ProductsPage />),
    children: productsRoute,
  },
  {
    path: '/form-builder',
    element: suspenseWrapper(<FormBuilderPage />),
  },
]);
