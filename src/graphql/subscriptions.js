/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCMA = /* GraphQL */ `
  subscription OnCreateCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onCreateCMA(filter: $filter, owner: $owner) {
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
export const onUpdateCMA = /* GraphQL */ `
  subscription OnUpdateCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onUpdateCMA(filter: $filter, owner: $owner) {
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
export const onDeleteCMA = /* GraphQL */ `
  subscription OnDeleteCMA(
    $filter: ModelSubscriptionCMAFilterInput
    $owner: String
  ) {
    onDeleteCMA(filter: $filter, owner: $owner) {
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onCreateProperty(filter: $filter, owner: $owner) {
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onUpdateProperty(filter: $filter, owner: $owner) {
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $owner: String
  ) {
    onDeleteProperty(filter: $filter, owner: $owner) {
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
export const onCreateCmaProperties = /* GraphQL */ `
  subscription OnCreateCmaProperties(
    $filter: ModelSubscriptionCmaPropertiesFilterInput
    $owner: String
  ) {
    onCreateCmaProperties(filter: $filter, owner: $owner) {
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
export const onUpdateCmaProperties = /* GraphQL */ `
  subscription OnUpdateCmaProperties(
    $filter: ModelSubscriptionCmaPropertiesFilterInput
    $owner: String
  ) {
    onUpdateCmaProperties(filter: $filter, owner: $owner) {
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
export const onDeleteCmaProperties = /* GraphQL */ `
  subscription OnDeleteCmaProperties(
    $filter: ModelSubscriptionCmaPropertiesFilterInput
    $owner: String
  ) {
    onDeleteCmaProperties(filter: $filter, owner: $owner) {
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
