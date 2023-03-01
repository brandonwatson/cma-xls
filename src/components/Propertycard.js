import './Propertycard.css'

import React from 'react'

import { Card, Typography, CardActions, IconButton } from '@mui/material/'
import Grid from '@mui/material/Unstable_Grid2'

function Propertycard({ item }) {
    return (
        <>
            <Grid
                item xs={6}
            >
                <Card
                    key={item.id}
                                variant='outlined'
                                style={{backgroundColor: "lightgray"}}
                                sx={{ 
                                    // minWidth: 200,
                                    // maxWidth: 200,
                                    // maxHeight: 100,
                                    // minHeight: 200,
                                    ':hover': { boxShadow: "-1px 10px 29px 0px rgba(128,0,0,0.8)" } }}
                >
                    <Typography variant="h5">
                        Address: {item.sk}
                    </Typography>
                    <Typography variant="h6">
                        Rooms:
                        Num Bed: {item.num_bed}, Num Bath: {item.num_bath}
                    </Typography>
                    <Typography variant="h6">
                        Size:
                        Total Sqft: {item.total_sqft}<br/>
                        Above Grade: {item.above_grade}<br/>

                    </Typography>
                    <Typography variant="h6">
                        Upper: {item.upper_sqft}
                    </Typography>
                    <Typography variant="h6">
                        Main: {item.main_sqft}
                    </Typography>
                    <Typography variant="h6">
                        Finished Basement: {item.finished_basement_sqft} Unfinished Basement: {item.unfinished_basement_sqft}
                    </Typography>

                </Card>            
            </Grid>
        </>
    )
}

export default Propertycard