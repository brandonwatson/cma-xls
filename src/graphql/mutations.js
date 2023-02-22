/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
      owner
    }
  }
`;
export const createCMA = /* GraphQL */ `
  mutation CreateCMA(
    $input: CreateCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    createCMA(input: $input, condition: $condition) {
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
        owner
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
export const updateCMA = /* GraphQL */ `
  mutation UpdateCMA(
    $input: UpdateCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    updateCMA(input: $input, condition: $condition) {
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
        owner
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
export const deleteCMA = /* GraphQL */ `
  mutation DeleteCMA(
    $input: DeleteCMAInput!
    $condition: ModelCMAConditionInput
  ) {
    deleteCMA(input: $input, condition: $condition) {
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
        owner
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
export const createComparable = /* GraphQL */ `
  mutation CreateComparable(
    $input: CreateComparableInput!
    $condition: ModelComparableConditionInput
  ) {
    createComparable(input: $input, condition: $condition) {
      pk
      sk
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateComparable = /* GraphQL */ `
  mutation UpdateComparable(
    $input: UpdateComparableInput!
    $condition: ModelComparableConditionInput
  ) {
    updateComparable(input: $input, condition: $condition) {
      pk
      sk
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteComparable = /* GraphQL */ `
  mutation DeleteComparable(
    $input: DeleteComparableInput!
    $condition: ModelComparableConditionInput
  ) {
    deleteComparable(input: $input, condition: $condition) {
      pk
      sk
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
