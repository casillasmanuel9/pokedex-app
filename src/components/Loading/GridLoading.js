import React from 'react';

import { Grid, CircularProgress } from '@material-ui/core';

export const GridLoading = () => {
    return (
        <Grid container direction='row' justify="center" className='loading'>
            <Grid item>
                <CircularProgress color='primary' />
            </Grid>
        </Grid>
    )
}
