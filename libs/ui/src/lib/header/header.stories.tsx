import { ,  } from '@storybook/addon-knobs';
import React from 'react';
import { Header, HeaderProps  } from './header';

export default {
  component: Header,
  title: 'Header'
};

export const primary = () => {
  
  
  const props:HeaderProps = {
    color: ('color', ),
    style: ('style', ),
  };
  

  return <Header color = {props.color} style = {props.style}  />;
};