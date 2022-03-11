import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

export default function TierSelect() {

    return (
        <Box mb='8px' >
            <Typography fontFamily='Poppins_semibold' mb='13px' fontSize='14px' color='color.gray'>
                Select tier
            </Typography>
            <Stack direction='row' flexWrap='wrap' >

                <Button sx={{ ...styles.btn, ...styles.activeBtn }}>
                    Tier 1
                </Button>
                <Button sx={{ ...styles.btn }}>
                    Tier 2
                </Button>
                <Button sx={{ ...styles.btn }}>
                    Tier 3
                </Button>
                <Button sx={{ ...styles.btn }}>
                    Tier 4
                </Button>
                <Button sx={{ ...styles.btn }}>
                    Tier 5
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
        mb: '6px',
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
