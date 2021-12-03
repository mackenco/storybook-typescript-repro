import React from 'react';
import { addParameters } from '@storybook/react';
import { create as createTheme } from '@storybook/theming';
import { configureActions } from '@storybook/addon-actions';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  Props,
} from '@storybook/addon-docs/blocks';

configureActions({ depth: 2 });

export const parameters = {
  controls: { expanded: true },
};

addParameters({
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <Props />
      </>
    ),
  },
  options: {
    panelPosition: 'bottom',
    showNav: true,
    showPanel: true,
    storySort: (a, b) => a[0] > b[0], // alphabetical
    theme: createTheme({
      base: 'light',
    }),
  },
});
