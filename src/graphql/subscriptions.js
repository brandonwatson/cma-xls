/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onCreateProperty(filter: $filter, owner: $owner) {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onUpdateProperty(filter: $filter, owner: $owner) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onDeleteProperty(filter: $filter, owner: $owner) {
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
export const onCreateCMA = /* GraphQL */ `
  subscription OnCreateCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onCreateCMA(filter: $filter, owner: $owner) {
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
export const onUpdateCMA = /* GraphQL */ `
  subscription OnUpdateCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onUpdateCMA(filter: $filter, owner: $owner) {
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
export const onDeleteCMA = /* GraphQL */ `
  subscription OnDeleteCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onDeleteCMA(filter: $filter, owner: $owner) {
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
