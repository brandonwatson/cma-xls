import './Cma.css'

import React from 'react'

import {useState, useEffect} from 'react'

import { CardContent, Typography } from '@mui/material/'

import { DataStore } from 'aws-amplify'
import { Comparable } from '../models/'


function Cma({item}) {
    const [comparables, setComparables] = useState([])

    useEffect(() => {
        async function getComparables() {
            const allComparables = await DataStore.query(Comparable, c => c.pk.eq(item.cma_id))
            setComparables(allComparables)
        }

        getComparables()
    }, [] )

    return (
        <div>
            <CardContent>
                <Typography variant="h6">
                    Properties Included: {comparables.length}
                </Typography>
            </CardContent>
        </div>
    )
}

export default Cma