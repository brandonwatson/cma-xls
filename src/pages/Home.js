import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

//will replace the ux items with material UI
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

//material UI imports
import { Typography, Container, Button } from '@mui/material'
import FiberNewIcon from '@mui/icons-material/FiberNew'

//amplify imports
import { DataStore } from 'aws-amplify'
import { CMA, Property, Comparable } from '../models/'

//CMA-XLS components
import Cmalist from '../components/Cmalist' 

//TEST DATA INIT
import INIT_DATA from '../dynamo/amplify_init_data'

async function InsertCma(cma)
{
    try {
        await DataStore.save(cma)
        // console.log(cma.comparables)
        console.log("success inserting CMA")
    } catch (error) {
        console.log("error inserting CMA", error)
    }

    return true
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
    await InsertCma(cma)
    // try {
    //     await DataStore.save(cma)
    //     // console.log(cma.comparables)
    //     console.log("success inserting CMA")
    // } catch (error) {
    //     console.log("error inserting CMA", error)
    // }


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
    const [cmalist, setCmalist] = useState([])

    useEffect(() => {
        async function getCmas() {
            const allCmas = await DataStore.query(CMA)
            setCmalist(allCmas)
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
        const newCma = new CMA({
            pk: user.attributes.email,
            sk: new Date().toISOString(),
            client_name: "Ripley",
            cma_label: "This could be an address",
            cma_id: uuidv4()
            //no added target listing property at this time
        })

        console.log(`New CMA button clicked: `, newCma)
        if (InsertCma(newCma))
        {
            setCmalist([...cmalist, newCma])
        }
        else{
            console.log("something did not come back from the write to remote dba in InsertCma")
        }
    }

    return (
        <Container>
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