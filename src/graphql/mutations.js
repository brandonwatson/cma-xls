/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCMA = /* GraphQL */ `
  mutation CreateCMA(
    $input: CreateCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    createCMA(input: $input, condition: $condition) {
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
export const updateCMA = /* GraphQL */ `
  mutation UpdateCMA(
    $input: UpdateCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    updateCMA(input: $input, condition: $condition) {
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
export const deleteCMA = /* GraphQL */ `
  mutation DeleteCMA(
    $input: DeleteCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    deleteCMA(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
export const createCmaProperties = /* GraphQL */ `
  mutation CreateCmaProperties(
    $input: CreateCmaPropertiesInput!
    $condition: ModelCmaPropertiesConditionInput
  ) {
    createCmaProperties(input: $input, condition: $condition) {
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
export const updateCmaProperties = /* GraphQL */ `
  mutation UpdateCmaProperties(
    $input: UpdateCmaPropertiesInput!
    $condition: ModelCmaPropertiesConditionInput
  ) {
    updateCmaProperties(input: $input, condition: $condition) {
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
export const deleteCmaProperties = /* GraphQL */ `
  mutation DeleteCmaProperties(
    $input: DeleteCmaPropertiesInput!
    $condition: ModelCmaPropertiesConditionInput
  ) {
    deleteCmaProperties(input: $input, condition: $condition) {
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
