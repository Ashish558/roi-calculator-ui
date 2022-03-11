import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function ToggleAcceleratedApy() {
    

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='center' mb='13px' >
            <Typography fontFamily='Poppins_semibold'  fontSize ='14px'>
            Enable Accelerated APY
            </Typography>
            <Box component='img' src='/assets/switch_off.svg' >
                
            </Box>
        </Stack>
    )
}
