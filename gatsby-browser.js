
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import React from 'react';
import { ApolloProvider } from "@apollo/client";
import client from "./src/api/apolloClient";

export const wrapRootElement = ({ element, props }) => {
  return (
    <ApolloProvider client={client}>
      {element}
    </ApolloProvider>
  );
};
