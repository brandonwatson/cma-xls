import React from 'react'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//will replace the ux items with material UI
//import { withAuthenticator, Button, Heading } from '@aws-amplify/ui-react'

//material UI imports
import { Typography, Container, Button } from '@mui/material'

//amplify imports
import { DataStore } from 'aws-amplify'
import { CMA, Property, Comparable } from '../models/'

//CMA-XLS components

function Cmaedit({ user }) {
    const pk = user.attributes.email 
    const { sk } = useParams()

    const [cma, setCma] = useState([])
    const [comparables, setComparables] = useState([])


    useEffect(() => {
        async function getOneCma() {
            const oneCma = await DataStore.query(CMA, {pk: pk, sk: sk })
            setCma(oneCma)
            
            const allComparables = await DataStore.query(Comparable, c => c.pk.eq(oneCma.cma_id))
            setComparables(allComparables)
        }

        getOneCma()
    }, []) //remember that this array are the state objects to watch to know when to rerun this


    return (
        <div>
            {cma.cma_label}<br/>{cma.client_name}<br/>{comparables.length}
        </div>
    )
}

export default Cmaedit