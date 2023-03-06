import './Cmalist.css'

import React from 'react'

import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

//material UI imports
import { Card, Typography, CardActions, IconButton } from '@mui/material/'
import Grid from '@mui/material/Unstable_Grid2'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'

//amplify imports
import { DataStore } from 'aws-amplify'
//import { CMA } from '../models/'

import Cma from './Cma'

async function DeleteCma(pksk, setCmalist)
{
    // const toDelete = await DataStore.query(CMA, {pk: pksk.pk, sk: pksk.sk})

    // console.log("pksk toDelete: ", toDelete)
    // try {
    //     DataStore.delete(toDelete)
    //     const reducedCmaList = await DataStore.query(CMA)
    //     console.log("reducedCmaList: ", reducedCmaList)
    //     setCmalist(reducedCmaList)
    // }
    // catch (error)
    // {
    //     console.log("deleting toDelete in Cmalist broke")
    //     return false
    // }
}

function Cmalist({ cmalist, setCmalist }) {
    //const [propertyCount, setPropertyCount] = useState([])

    //const cmaidlist = cmalist.map(item => [item.cma_id])
    //let tmpval

    // const tmpval = cmaidlist.reduce((c, id) => c.id('eq', id))
    // console.log(tmpval)
    
    useEffect(() => {
        async function getPropertyCount() {
            // const propertyresults = DataStore.query(Comparable, (c) => 
            //     c.or((c) => 
            //         [c.pk.eq(cmaidlist[0]),
            //             c.pk.eq(cmaidlist[1])]
            //     ))



            //return propertyresults
            //setPropertyCount(propertyresults)
        }

        getPropertyCount()
    }, [] )

    function onDeleteHandler(e, pksk)
    {
        console.log("delete clicked: {", pksk.pk, ":", pksk.sk, "}" )
        DeleteCma(pksk, setCmalist)
    }

    return (
        <div>
            {/* Property Count Vat: {propertyCount.length} */}
            <Grid container spacing={2}>
                {cmalist.map((item) => (
                    <Grid xs={4} key={Date.now()}>
                        <Card
                            key={item.id}
                            variant='outlined'
                            style={{backgroundColor: "lightgray"}}
                            sx={{ 
                                minWidth: 275,
                                maxWidth: 450,
                                padding: 2,
                                ':hover': { boxShadow: "-1px 10px 29px 0px rgba(128,0,0,0.8)" } }}>
                            {/* <Typography variant="h4" gutterBottom>
                                CMA Created By: {item.pk}
                            </Typography> */}
                            <Typography variant="h6" gutterBottom>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <PersonIcon fontSize='large' sx={{ align: 'center'}}/><span>: {item.client_name}</span>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                }}>
                                    <HomeIcon fontSize='large'/><span>: {item.cma_label}</span>
                                </div>
                                <div>
                                    Properties Included: 6
                                </div>
                            </Typography>
                            <Cma key={item.id} item={item} />
                            <CardActions disableSpacing>
                                <IconButton
                                    aria-label="delete"
                                    size="large"
                                    color="error"
                                    style={{marginLeft: "auto"}}
                                    onClick={(e) => onDeleteHandler(e, {pk: item.pk, sk: item.sk})}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton
                                    arial-label="edit"
                                    size="large"
                                    color="success"
                                    //style={{marginLeft: "auto"}}
                                    onClick={() => {
                                        //setOpenStorycardEdit(true)
                                    }}
                                >
                                    <Link to={`/cmaedit/${item.id}`} style={{ textDecoration: 'none',color: 'inherit' }}>
                                        <EditIcon />
                                    </Link>
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cmalist