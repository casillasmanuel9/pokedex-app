import React from 'react'
import { Grid, Button, Typography } from '@material-ui/core'

export const Controls = ({ handleDecrement, handleIncrement, counter, limit, loading }) => {
    return (
        <Grid container spacing={3} direction='row' justify="space-between" alignItems="center">
            <Grid item>
                <Button color="secondary" onClick={handleDecrement} disabled={counter === 0 || loading === true}> Atras </Button>
            </Grid>
            <Grid item>
                <Typography variant="body2" color="textSecondary">
                    {(counter > 0) ? counter / 20 + 1 : 1} / {Math.trunc(limit / 20) + 1}
                </Typography>
            </Grid>
            <Grid item>
                <Button color="secondary" onClick={handleIncrement} disabled={counter + 20 > limit || loading === true}> Siguiente </Button>
            </Grid>
        </Grid>
    )
}
