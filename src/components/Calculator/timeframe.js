import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function Timeframe() {

    return (
        <Box mb='8px' >
            <Typography fontFamily='Poppins_semibold' mb='13px' fontSize ='14px' >
                Timeframe
            </Typography>
        <Stack direction='row' flexWrap='wrap' >

            <Button sx={{ ...styles.btn, ...styles.activeBtn }}>
                1 Day
            </Button>
            <Button sx={{ ...styles.btn }}>
                7 Days
            </Button>
            <Button sx={{ ...styles.btn }}>
                30 Days
            </Button>
            <Button sx={{ ...styles.btn }}>
                1 Year
            </Button>
            <Button sx={{ ...styles.btn }}>
                5 Year
            </Button>
        </Stack>
        </Box>
    )
}

const styles = {
    btn: {
        backgroundColor: '#F8F8F8',
        color: '#A2A2A2',
        px: '10px',
        fontFamily: 'Poppins_semibold',
        borderRadius: '30px',
        fontSize: '12px',
        textTransform: 'capitalize',
        mr: '10px',
        mb:'6px',
        '&:hover': {
            backgroundColor: '#F8F8F8',
        },
    },
    activeBtn: {
        backgroundColor: 'background.yellow.light',
        color: '#000',
        border: '1px solid #FED700',
        '&:hover': {
            backgroundColor: 'background.yellow.light',
        },
    }
}
