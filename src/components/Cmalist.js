import './Cmalist.css'

import React from 'react'

import { Card, Typography } from '@mui/material/'


import CardActions from '@mui/material/CardActions';

import Cma from './Cma'

function Cmalist({cmalist, setCmalist, cmaid}) {
    return (
        <div>
            <div>
                {cmalist.map((item) => (
                    <Card
                        key={Date.now()}
                        variant='outlined'
                        style={{backgroundColor: "lightgray"}}
                        sx={{ 
                            minWidth: 275,
                            maxWidth: 450,
                            padding: 2,
                            ':hover': { boxShadow: "-1px 10px 29px 0px rgba(128,0,0,0.8)" } }}>
                        <Typography variant="h4" gutterBottom>
                            CMA Created By: {item.pk}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            For: {item.client_name}<br/>
                            Listing Property: {item.cma_label}
                        </Typography>
                        <Cma key={Date.now()} item={item} />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Cmalist