import { useQuery, gql } from '@apollo/client';
import { PageProps } from 'gatsby';
import React, { FC } from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

export type CountryPageProps = {};

const CountryPage: FC<PageProps<CountryPageProps>> = ({ location }) => {
  const params = new URLSearchParams(location.search);
  const countryCode = params.get('code');

  const {
    data: queryData,
    loading,
    error,
  } = useQuery(GET_COUNTRY_BY_NAME, {
    variables: { code: countryCode },
  });

  const data = queryData?.CountryAPI?.country;

  if (loading) {
    return (
      <Layout>
        <Seo title="Country info" />
        <div>Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Seo title="Country info" />
        <div>Error: {error.message}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Seo title={data.name} />
      <div>
        <h1>
          Info about {data.emoji} {data.name}
        </h1>
        <ul style={{ listStyle: 'none' }}>
          <li>
            Capital: <b>{data.capital}</b>
          </li>
          <li>
            Continent: <b>{data.continent?.name}</b>
          </li>
          <li>
            Native: <b>{data.native}</b>
          </li>
          <li>
            Currency: <b>{data.currency}</b>
          </li>
          <li>
            Phone: <b>{data.phone}</b>
          </li>
          <li>
            Code: <b>{data.code}</b>
          </li>
          <li>
            Languages:{' '}
            <b>{data.languages?.map(lang => lang.name)?.join(', ')}</b>
          </li>
        </ul>
      </div>
    </Layout>
  );
};

const GET_COUNTRY_BY_NAME = gql`
  query CountryInfo($code: ID!) {
    CountryAPI {
      country(code: $code) {
        code
        name
        native
        capital
        phone
        emoji
        currency
        continent {
          name
        }
        languages {
          code
          name
        }
      }
    }
  }
`;

export default CountryPage;
