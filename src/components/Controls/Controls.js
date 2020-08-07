import React from 'react'
import { Grid, Typography, IconButton } from '@material-ui/core'

import NavigateBeforeRoundedIcon from '@material-ui/icons/NavigateBeforeRounded';
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded';
import NavigateNextRoundedIcon from '@material-ui/icons/NavigateNextRounded';
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded';


export const Controls = ({ handleDecrement, handleIncrement, counter, limit, loading }) => {
    return (
        <Grid container spacing={3} direction='row' justify="space-between" alignItems="center">
            <Grid item>
                <IconButton color='primary' aria-label="decrement" onClick={() => handleDecrement(200)} disabled={counter - 200 < 0 || loading === true}>
                    <SkipPreviousRoundedIcon />
                </IconButton>
                <IconButton color='primary' aria-label="decrement" onClick={() => handleDecrement(20)} disabled={counter === 0 || loading === true}>
                    <NavigateBeforeRoundedIcon />
                </IconButton>
            </Grid>
            <Grid item>
                <Typography variant="body2" color="primary">
                    {(counter > 0) ? counter / 20 + 1 : 1} / {Math.trunc(limit / 20) + 1}
                </Typography>
            </Grid>
            <Grid item>
                <IconButton color='primary' aria-label="increment" onClick={() => handleIncrement(20)} disabled={counter + 20 > limit || loading === true}>
                    <NavigateNextRoundedIcon />
                </IconButton>
                <IconButton color='primary' aria-label="increment" onClick={() => handleIncrement(200)} disabled={counter + 200 > limit || loading === true}>
                    <SkipNextRoundedIcon />
                </IconButton>
            </Grid>
        </Grid>
    )
}
