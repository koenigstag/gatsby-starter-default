import * as React from 'react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';
import CountriesList from '../components/CountriesList';
import SearchInput from '../components/SearchInput';
import { countriesStore } from '../stores';

const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query AllCountriesQuery {
      CountryAPI {
        countries {
          name
          native
          capital
          emoji
          currency
          languages {
            code
            name
          }
        }
      }
    }
  `);

  React.useEffect(() => {
    countriesStore.set(data.CountryAPI.countries);
  }, []);

  return (
    <Layout>
      <Seo title="Countries" />
      <SearchInput
        placeholder="Search country..."
        filterField="name"
        autocompliteList={data.CountryAPI.countries}
      />
      <CountriesList list={data.CountryAPI.countries} />
    </Layout>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
