/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProperty = /* GraphQL */ `
  query GetProperty($pk: String!, $sk: String!) {
    getProperty(pk: $pk, sk: $sk) {
      pk
      sk
      num_bed
      num_bath
      total_sqft
      above_grade_sqft
      upper_sqft
      main_sqft
      fininshed_basement_sqft
      unfininshed_basement_sqft
      list_price
      sale_price
      property_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cMAComparable_propertiesPk
      cMAComparable_propertiesSk
      owner
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $pk: String
    $sk: ModelStringKeyConditionInput
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProperties(
      pk: $pk
      sk: $sk
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        property_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAComparable_propertiesPk
        cMAComparable_propertiesSk
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProperties = /* GraphQL */ `
  query SyncProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProperties(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        property_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAComparable_propertiesPk
        cMAComparable_propertiesSk
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCMA = /* GraphQL */ `
  query GetCMA($pk: String!, $sk: String!) {
    getCMA(pk: $pk, sk: $sk) {
      pk
      sk
      cma_label
      client_name
      listing {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        property_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAComparable_propertiesPk
        cMAComparable_propertiesSk
        owner
      }
      comparable_properties {
        items {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          property_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAComparable_propertiesPk
          cMAComparable_propertiesSk
          owner
        }
        nextToken
        startedAt
      }
      cma_id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cMAListingPk
      cMAListingSk
      owner
    }
  }
`;
export const listCMAS = /* GraphQL */ `
  query ListCMAS(
    $pk: String
    $sk: ModelStringKeyConditionInput
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCMAS(
      pk: $pk
      sk: $sk
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        pk
        sk
        cma_label
        client_name
        listing {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          property_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAComparable_propertiesPk
          cMAComparable_propertiesSk
          owner
        }
        comparable_properties {
          nextToken
          startedAt
        }
        cma_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAListingPk
        cMAListingSk
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCMAS = /* GraphQL */ `
  query SyncCMAS(
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCMAS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        pk
        sk
        cma_label
        client_name
        listing {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          property_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAComparable_propertiesPk
          cMAComparable_propertiesSk
          owner
        }
        comparable_properties {
          nextToken
          startedAt
        }
        cma_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAListingPk
        cMAListingSk
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const propertiesByTotal_sqftAndSale_priceAndNum_bedAndNum_bath = /* GraphQL */ `
  query PropertiesByTotal_sqftAndSale_priceAndNum_bedAndNum_bath(
    $total_sqft: Int!
    $sale_priceNum_bedNum_bath: ModelPropertyBySqftBySalePriceByBedByBathCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertiesByTotal_sqftAndSale_priceAndNum_bedAndNum_bath(
      total_sqft: $total_sqft
      sale_priceNum_bedNum_bath: $sale_priceNum_bedNum_bath
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        property_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAComparable_propertiesPk
        cMAComparable_propertiesSk
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const propertiesBySale_priceAndTotal_sqftAndNum_bedAndNum_bath = /* GraphQL */ `
  query PropertiesBySale_priceAndTotal_sqftAndNum_bedAndNum_bath(
    $sale_price: Int!
    $total_sqftNum_bedNum_bath: ModelPropertyBySalePriceByTotalSqftByBedByBathCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertiesBySale_priceAndTotal_sqftAndNum_bedAndNum_bath(
      sale_price: $sale_price
      total_sqftNum_bedNum_bath: $total_sqftNum_bedNum_bath
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        pk
        sk
        num_bed
        num_bath
        total_sqft
        above_grade_sqft
        upper_sqft
        main_sqft
        fininshed_basement_sqft
        unfininshed_basement_sqft
        list_price
        sale_price
        property_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAComparable_propertiesPk
        cMAComparable_propertiesSk
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const cMASByClient_nameAndSk = /* GraphQL */ `
  query CMASByClient_nameAndSk(
    $client_name: String!
    $sk: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String
  ) {
    cMASByClient_nameAndSk(
      client_name: $client_name
      sk: $sk
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        pk
        sk
        cma_label
        client_name
        listing {
          pk
          sk
          num_bed
          num_bath
          total_sqft
          above_grade_sqft
          upper_sqft
          main_sqft
          fininshed_basement_sqft
          unfininshed_basement_sqft
          list_price
          sale_price
          property_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cMAComparable_propertiesPk
          cMAComparable_propertiesSk
          owner
        }
        comparable_properties {
          nextToken
          startedAt
        }
        cma_id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cMAListingPk
        cMAListingSk
        owner
      }
      nextToken
      startedAt
    }
  }
`;
