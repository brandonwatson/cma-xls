import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

//will replace the ux items with material UI
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

//material UI imports
import { Typography, Container, Button } from '@mui/material'
import FiberNewIcon from '@mui/icons-material/FiberNew'

//amplify imports
//import { CMA, Property, CmaProperties } from '../models/' //removed Comparables
import { API, graphqlOperation } from 'aws-amplify'

import { createProperty, updateProperty } from '../graphql/mutations'
import { listProperties, getProperty } from '../graphql/queries'

import { createCMA, updateCMA } from '../graphql/mutations'
import { listCMAS, getCMA } from '../graphql/queries'

import { createCmaProperties, updateCmaProperties } from '../graphql/mutations'
import { listCmaProperties, getCmaProperties } from '../graphql/queries'

//custom graphql
import { customListCmas } from '../customgraphql/queries'

//CMA-XLS components
import Cmalist from '../components/Cmalist' 

//TEST DATA INIT
import INIT_DATA from '../dynamo/amplify_init_data'


async function insertProperty(data)
{
    try
    {
        const result = await API.graphql(graphqlOperation(createProperty, {
            input: data
        }))
        
        console.log("inserted listing property: ", result)
    }
    catch (error)
    {
        console.log("error writing listing property: ", error)
    }
}

async function insertCma(data)
{
    console.log("cma: ", data)

    try {
        const result = await API.graphql(graphqlOperation(createCMA, {
            input: data
        }))
        console.log("success inserting CMA: ", result)
    } catch (error) {
        console.log("error inserting CMA", error)
    }
}

async function insertCmaProperty(data)
{
    console.log("CmaProperty: ", data)

    try {
        const result = await API.graphql(graphqlOperation(createCmaProperties, {
            input: data
        }))
        console.log("Success inserting CmaProperty: ", result);
    } catch (error) {
        console.log("Error saving CmaProperty", error);
    }
}

async function InitData(allProperties, user)
{
    //This is sample data what will be removed
    const listingProperty = allProperties.slice(0,1)[0]
    await insertProperty(listingProperty)
    
    const comparableProperties = allProperties.slice(1)
    for (let compPropCount=0; compPropCount < comparableProperties.length; compPropCount++)
    {
        await insertProperty(comparableProperties[compPropCount])
    }

    // console.log("listingProperty:", listingProperty)
    // console.log("comparabeProperties: ", comparableProperties)

    const cma = {
            id: "64d2e1d0-ce13-43f3-9e93-bc1d7f572958",
            sk: listingProperty["sk"],
            client_name: "Jenkins",
            cma_label: listingProperty["sk"].slice(0, listingProperty["sk"].length-7),
            //properties
            propertyCmasId: listingProperty.id
        }
    await insertCma(cma)

    for (let CmaPropertyCount = 0; CmaPropertyCount < comparableProperties.length; CmaPropertyCount++)
    {
        const CmaProperty = {
            cMAId: cma.id,
            propertyId: comparableProperties[CmaPropertyCount].id
        }

        await insertCmaProperty(CmaProperty)
    }
}

function Home({ user }) {
    //I will need to use react query but for now just use fetch against the API
    const [cmalist, setCmalist] = useState([])

    useEffect(() => {
        async function getCmas() {
            const allCmas = await API.graphql(graphqlOperation(customListCmas))
            setCmalist(allCmas.data.listCMAS.items)
        }
        getCmas()
    }, []) //remember that this array are the state objects to watch to know when to rerun this

    function initDataHandler()
    {
        InitData(INIT_DATA["properties"], user)
    }

    function newCmaClickHandler()
    {
        //console.log("uuid: ", uuidv4())
        // const newCma = new CMA({
        //     sk: "123 Sample St##",
        //     client_name: "Input Client Name",
        //     cma_label: "123 Sample St",
        // })

        // console.log(`New CMA button clicked: `, newCma)
        // if (InsertCma(newCma))
        // {
        //     setCmalist([...cmalist, newCma])
        // }
        // else{
        //     console.log("something did not come back from the write to remote dba in InsertCma")
        // }
    }

    return (
        <Container>
            THIS IS COMMENTED OUT BECAUSE I DONT LIKE LOOKING AT THE BUTTON
            <div>
                <Button
                    variant='contained'
                    size='large'
                    onClick = {initDataHandler}>Initialize the App with New Data (DO NOT PUSH)
                </Button>
            </div>
            <div>
                <Typography variant='h4'>Welcome to CMA-XLS Builder</Typography>
            </div>
            <div>
                <Button
                    variant='contained'
                    size='large'
                    startIcon = {<FiberNewIcon />}
                    onClick = {newCmaClickHandler}>Create New CMA
                </Button>
                <Typography variant='h4'>{user.attributes.email}'s CMAs</Typography>
                <br/>
                <Cmalist cmalist={cmalist} setCmalist={setCmalist} />
            </div>
        </Container>
    )
}

export default Home