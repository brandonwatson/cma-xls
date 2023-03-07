export const customListCmas = /* GraphQL */ `query (
    $filter: ModelCMAFilterInput
    $limit: Int
    $nextToken: String)
    {
        listCMAS (filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
                id
                client_name
                cma_label
                comparables {
                    items {
                        propertyId
                    }
                }
                listing_address {
                    total_sqft
                    list_price
                    sale_price
                    num_bath
                    num_bed
                }
            }
        }
    }`

export const customGetCma = /* GraphQL */ ` query (
    $id: ID!)
    {
        getCMA(id: $id) {
            client_name
            cma_label
            comparables
            {
                items 
                {
                    property
                    {
                        above_grade_sqft
                        finished_basement_sqft
                        id
                        list_price
                        main_sqft
                        num_bath
                        num_bed
                        sale_price
                        sk
                        total_sqft
                        unfinished_basement_sqft
                        updatedAt
                        upper_sqft
                    }
                    propertyId
                }
            }
            id
            listing_address
            {
                above_grade_sqft
                finished_basement_sqft
                id
                main_sqft
                list_price
                num_bath
                num_bed
                sale_price
                sk
                total_sqft
                unfinished_basement_sqft
                updatedAt
                upper_sqft
            }
        }
    }`