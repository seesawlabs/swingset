import React from 'react';
import { Footer, FooterProps } from './footer';

export default {
  component: Footer,
  title: 'Footer',
};

export const color = () => {
  /* eslint-disable-next-line */
  const props: FooterProps = {
    color: 'primary',
  };

  return <Footer {...props} />;
};

/**
 * Showing default font size
 * @param props FooterProps
 */
export const fontSizeDefault = () => {
  /* eslint-disable-next-line */
  const props: FooterProps = {
    color: 'primary',
  };

  return <Footer {...props} />;
};

export const fontSize10 = () => {
  /* eslint-disable-next-line */
  const props: FooterProps = {
    color: 'primary',
    fontSize: 10,
  };

  return <Footer {...props} />;
};
