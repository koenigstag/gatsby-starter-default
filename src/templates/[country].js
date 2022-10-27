import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const CountryPage = (props) => {
  console.log(props.data?.CountryAPI?.country);

  const data = props.data?.CountryAPI?.country;

  return (<Layout>
    <Seo title={data.name} />
    <div style={{ marginBottom: '30px' }}>
      {window.history.length && (
        <button
          style={{
            border: '1px solid black',
            background: 'white',
            borderRadius: '5px',
            padding: '5px 15px',
            cursor: 'pointer',
          }}
          onClick={() => {
            window.history.back();
          }}
        >
          {'<'} Back
        </button>
      )}
    </div>
    <div>
      <h1>Info about {data.emoji} {data.name}</h1>
      <ul style={{ listStyle: 'none' }}>
        <li>Capital: <b>{data.capital}</b></li>
        <li>Continent: <b>{data.continent?.name}</b></li>
        <li>Native: <b>{data.native}</b></li>
        <li>Currency: <b>{data.currency}</b></li>
        <li>Phone: <b>{data.phone}</b></li>
        <li>Code: <b>{data.code}</b></li>
        <li>Languages: <b>{data.languages?.map(lang => lang.name)?.join(', ')}</b></li>
      </ul>
    </div>
  </Layout>);
};

export const query = graphql`
  query CountryInfo ($code: ID!) {
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
`

export default CountryPage;
