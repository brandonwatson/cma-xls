import React from 'react'
import { useState, useEffect } from 'react'

//will replace the ux items with material UI
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

//material UI imports
import { Typography, Container, Button, Stack } from '@mui/material'
// import { Container } from '@mui/material'
// import { Button } from '@mui/material'

//amplify imports
import { DataStore } from 'aws-amplify'
import { CMA, Property, Comparable } from '../models/'

//TEST DATA INIT
import INIT_DATA from '../dynamo/amplify_init_data'

async function CreateNewCma(cma)
{
    // await DataStore.save(
    //     new CMA ({})
    //     )
}

async function InitData(allProperties, user)
{
    //This is sample data what will be removed
    let comparableProperties = []
    const compPropSet = allProperties.slice(1)
    
    const listingProperty = new Property (allProperties.slice(0,1)[0])
    console.log("listingProperty:", listingProperty)
    
    try
    {
        await DataStore.save(listingProperty)
        console.log("inserted listing property: ", listingProperty)
    }
    catch (error)
    {
        console.log("error writing listing property: ", error)
    }


    for (let compPropCount=0; compPropCount < compPropSet.length; compPropCount++)
    {
        comparableProperties.push(new Property (compPropSet[compPropCount]))
        console.log("compProperties: ", comparableProperties[compPropCount])
        try {
            await DataStore.save(comparableProperties[compPropCount])
            console.log("Success inserting property: ", comparableProperties[compPropCount]);
        } catch (error) {
            console.log("Error saving property", error);
        }
    }

    const cma = new CMA (
        {
            pk: user.attributes.email,
            sk: new Date().toISOString(),
            cma_label: listingProperty["pk"].slice(0, listingProperty["pk"].length-1),
            client_name: "Jenkins",
            listing: listingProperty,
            cma_id: "b0dd4366-ccb4-47f3-a22e-56fdb4f7feb4"
        }
    )
    console.log("CMA: ", cma)
    
    try {
        await DataStore.save(cma)
        // console.log(cma.comparables)
        console.log("success inserting CMA")
    } catch (error) {
        console.log("error inserting CMA", error)
    }


    console.log("comparableProperties: ", comparableProperties.length)
    for (let propCmaCount=0; propCmaCount < comparableProperties.length; propCmaCount++)
    {     
        //I gave up on many to many relationships and DataStore
        //Will maintain my own mapping table of properties included in a CMA
        const comparable = new Comparable({
                pk: cma.cma_id,
                sk: comparableProperties[propCmaCount].property_id
        })
        console.log("comparable: ", comparable)

        try {
            await DataStore.save(comparable)
            console.log("success inserting Comparable")
        } catch (error) {
            console.log("error inserting Comparable", error)
        }
    }
}

function Home({signOut, user}) {
    //I will need to use react query but for now just use fetch against the API
    const [cmaList, setCmaList] = useState()

    function initDataHandler()
    {
        InitData(INIT_DATA["properties"], user)
    }

    function newCmaClickHandler()
    {
        console.log(`New CMA button clicked`)
    }
    
    return (
    <Container>
        <div>
            <Typography variant='h4'>Hello, {user.attributes.email}  - Welcome to CMA-XLS Builder</Typography>
        </div>
        <div>
            <Stack direction="row" spacing={2}>
                <Button
                    variant='contained'
                    onClick = {initDataHandler}>Initialize
                </Button>
                <Button
                    variant='contained'
                    onClick = {newCmaClickHandler}>Create New CMA
                </Button>
            </Stack>
        </div>
        <div>
            <Typography variant='h4'>Created CMAs</Typography>
        </div>
    </Container>
    )
}

export default Home