/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCMA = /* GraphQL */ `
  query GetCMA($id: ID!) {
    getCMA(id: $id) {
      id
      sk
      client_name
      cma_label
      comparables {
        items {
          id
          cMAId
          propertyId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      listing_address {
        id
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        finished_basement_sqft
        unfinished_basement_sqft
        list_price
        sale_price
        cma_reports {
          nextToken
        }
        cmas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      propertyCmasId
      owner
    }
  }
`;
export const listCMAS = /* GraphQL */ `
  query ListCMAS(
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCMAS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sk
        client_name
        cma_label
        comparables {
          nextToken
        }
        listing_address {
          id
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          finished_basement_sqft
          unfinished_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        propertyCmasId
        owner
      }
      nextToken
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      sk
      num_bed
      num_bath
      total_sqft
      above_grade_sqft
      upper_sqft
      main_sqft
      finished_basement_sqft
      unfinished_basement_sqft
      list_price
      sale_price
      cma_reports {
        items {
          id
          cMAId
          propertyId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      cmas {
        items {
          id
          sk
          client_name
          cma_label
          createdAt
          updatedAt
          propertyCmasId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        finished_basement_sqft
        unfinished_basement_sqft
        list_price
        sale_price
        cma_reports {
          nextToken
        }
        cmas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getCmaProperties = /* GraphQL */ `
  query GetCmaProperties($id: ID!) {
    getCmaProperties(id: $id) {
      id
      cMAId
      propertyId
      cMA {
        id
        sk
        client_name
        cma_label
        comparables {
          nextToken
        }
        listing_address {
          id
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          finished_basement_sqft
          unfinished_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        propertyCmasId
        owner
      }
      property {
        id
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        finished_basement_sqft
        unfinished_basement_sqft
        list_price
        sale_price
        cma_reports {
          nextToken
        }
        cmas {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listCmaProperties = /* GraphQL */ `
  query ListCmaProperties(
    $filter: ModelCmaPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCmaProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cMAId
        propertyId
        cMA {
          id
          sk
          client_name
          cma_label
          createdAt
          updatedAt
          propertyCmasId
          owner
        }
        property {
          id
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          finished_basement_sqft
          unfinished_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const cmaPropertiesByCMAId = /* GraphQL */ `
  query CmaPropertiesByCMAId(
    $cMAId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCmaPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cmaPropertiesByCMAId(
      cMAId: $cMAId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cMAId
        propertyId
        cMA {
          id
          sk
          client_name
          cma_label
          createdAt
          updatedAt
          propertyCmasId
          owner
        }
        property {
          id
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          finished_basement_sqft
          unfinished_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const cmaPropertiesByPropertyId = /* GraphQL */ `
  query CmaPropertiesByPropertyId(
    $propertyId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCmaPropertiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cmaPropertiesByPropertyId(
      propertyId: $propertyId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cMAId
        propertyId
        cMA {
          id
          sk
          client_name
          cma_label
          createdAt
          updatedAt
          propertyCmasId
          owner
        }
        property {
          id
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          finished_basement_sqft
          unfinished_basement_sqft
          list_price
          sale_price
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
