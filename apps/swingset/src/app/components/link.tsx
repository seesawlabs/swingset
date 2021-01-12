import React from 'react';

export default ({ children, link }) => {
  return <a href={link}>{children}</a>;
};
