import React from 'react';
import { Helmet } from 'react-helmet-async';

const MetaDecorator = ({ title, content }) => (
  <Helmet>
    <title>{title}</title>
    <meta name='description' content={content} />
  </Helmet>
);

export default MetaDecorator;
