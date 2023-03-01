import './Cmaedit.css'

import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//will replace the ux items with material UI
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

//material UI imports
import { Typography, Button  } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import AddIcon from '@mui/icons-material/Add'
import AssessmentIcon from '@mui/icons-material/Assessment'
import Paper from '@mui/material/Paper'


//amplify imports
//import { DataStore } from 'aws-amplify'
//import { CMA } from '../models/'

//test data - REMOVE LATER
import SAMPLE_CMAS from '../dynamo/amplify_sample_cmas'

//CMA-XLS components
import Propertycard from '../components/Propertycard'

function Cmaedit({ user }) {
    //const pk = user.attributes.email 
    
    //currently passing in the ID for a unique string value on the URL. This should be sufficient
    //to look up the data from a query to DataStore
    const { id } = useParams()

    const [cma, setCma] = useState([])
    const [listing, setListing] = useState([])
    const [comparables, setComparables] = useState([])

    const testdataobject = SAMPLE_CMAS["cmas"].filter(item => item["cma"]["id"] == id)[0] //.filter(item => item["cma"]["id"] === id)
    
    useEffect(() => {
        async function getOneCma() {
            //const oneCma = await DataStore.query(CMA, {pk: pk, sk: sk })
            
            const oneCma = testdataobject["cma"]
            setCma(oneCma)

            const thelisting = testdataobject["listing"]
            setListing(thelisting)
            // const allComparables = await DataStore.query(Comparable, c => c.pk.eq(oneCma.cma_id))
            const allComparables = testdataobject["comparable_properties"]
            setComparables(allComparables)
        }

        getOneCma()
    }, []) //remember that this array are the state objects to watch to know when to rerun this

    // <Cma key={item.sk} item={item} />
    return (
        <div>
            <div>
                <Button variant="contained" startIcon={<AssessmentIcon />} sx={{float: "left", marginTop: "10px", marginLeft: "10px"}}>
                        Generate Excel CMA
                </Button>
                Listing: {cma.cma_label}, Client: {cma.client_name}, Properties: {comparables.length}
            </div>
            <div>
                Insert the NEW property FORM here
                <Button variant="contained" startIcon={<AddIcon />} sx={{float: "right", marginRight: "20px"}}>
                    Add New Property
                </Button>
            </div>
            <Grid container
                spacing={2}
                margin={2}
                sx={{border: '2px solid',
                        paddingRight: 2,
                        paddingBottom: 2,
                        marginTop: 4
                }}>

                        {comparables.map((item) => (
                            <Propertycard
                                key={item.id}
                                item={item}
                            />
                        ))}
            </Grid>
        </div>
    )
}

export default Cmaedit