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
import Propertycard from '../components/Propertycard'

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


    // <Cma key={item.sk} item={item} />

    return (
        <div>
            Listing: {cma.cma_label}<br/>Client: {cma.client_name}<br/>
            Properties: {comparables.length}
            <div>
                Insert the NEW property here
            </div>
            <div>
                Insert the card based info per property here<br />
                {comparables.map((item) => (
                    <Propertycard key={item.pk + item.sk} item={item}/>
                    ))}
            </div>            
        </div>
    )
}

export default Cmaedit