import './Cmalist.css'

import React from 'react'
import { Link } from 'react-router-dom'

//material UI imports
import { Card, Typography, CardActions, IconButton } from '@mui/material/'
import Grid from '@mui/material/Unstable_Grid2'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

//amplify imports
import { DataStore } from 'aws-amplify'
import { CMA, Comparable } from '../models/'

import Cma from './Cma'
import { red } from '@mui/material/colors'

async function DeleteCma(pksk, setCmalist)
{
    const toDelete = await DataStore.query(CMA, {pk: pksk.pk, sk: pksk.sk})

    console.log("pksk toDelete: ", toDelete)
    try {
        DataStore.delete(toDelete)
        const reducedCmaList = await DataStore.query(CMA)
        console.log("reducedCmaList: ", reducedCmaList)
        setCmalist(reducedCmaList)
    }
    catch (error)
    {
        console.log("deleting toDelete in Cmalist broke")
        return false
    }

}

function Cmalist({ cmalist, setCmalist }) {
    function onDeleteHandler(e, pksk)
    {
        console.log("delete clicked: {", pksk.pk, ":", pksk.sk, "}" )
        DeleteCma(pksk, setCmalist)
    }

    return (
        <div>
            <Grid container spacing={2}>
                {cmalist.map((item) => (
                    <Grid xs={4} key={item.cma_id}>
                        <Card
                            key={item.cma_id}
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
                            <Typography variant="h5" gutterBottom>
                                For: {item.client_name}<br/>
                                Listing Property: {item.cma_label}
                            </Typography>
                            <Cma key={item.sk} item={item} />
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
                                    <Link to={`/cmaedit/${item.sk}`} style={{ textDecoration: 'none',color: 'inherit' }}>
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