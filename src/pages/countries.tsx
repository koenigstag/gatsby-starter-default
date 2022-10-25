import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import CountriesList from '../components/CountriesList';

const CountriesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <CountriesList />
    </Layout>
  );
};

export const Head = () => <Seo title="Countries" />;

export default CountriesPage;
