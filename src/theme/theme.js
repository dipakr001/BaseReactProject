/* eslint-disable object-curly-newline */
import { createTheme } from '@mui/material';
import {
  blackColor,
  darkGreyColor,
  primaryColor,
  primaryHoverColor,
  secondaryColor,
  secondaryHoverColor,
  whiteColor,
} from './colors';
import { caption } from './typography';

export const theme = createTheme({
  palette: {
    primary: { main: primaryColor },
    secondary: { main: secondaryColor },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: { '*': { fontFamily: 'Roboto, sans-serif' } },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            color: whiteColor,
            backgroundColor: primaryColor,
            textTransform: 'initial',
            '&:hover': { backgroundColor: primaryHoverColor },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            color: blackColor,
            backgroundColor: secondaryColor,
            textTransform: 'initial',
            border: `1px solid ${darkGreyColor}`,
            '&:hover': {
              backgroundColor: secondaryHoverColor,
              color: whiteColor,
              '.MuiButton-startIcon path[\'stroke-linejoin="round"\']': {
                stroke: 'red',
              },
            },
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          margin: '0px 10px',
          color: ownerState.selected ? blackColor : darkGreyColor,
          fontWeight: 'bold',
          '&.Mui-selected': {
            color: ownerState.selected ? blackColor : darkGreyColor,
          },
        }),
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: () => ({
          background: whiteColor,
          boxShadow: '0px 4px 6px #7F7E8912',
          borderRadius: '4px',
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: () => ({
          color: blackColor,
          font: 'normal normal bold 20px/26px Roboto',
        }),
      },
    },
  },
});

theme.typography.caption = caption(theme);
