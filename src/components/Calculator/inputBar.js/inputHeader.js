import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Inputheader(prps) {


    return (
        <Stack direction='row' justifyContent='flex-end' mb='8px' >
            <Box sx={{ display: 'flex', alignItems: 'center' ,mr:'12px' }} >
                <Box component='img' src='/assets/cake.png' />
                <Typography color='#808080' ml='6px' fontSize='14px' >Cake</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Box component='img' src='/assets/switch_on.svg' />
                <Typography color='#808080' ml='6px' fontSize='14px'  >USD</Typography>
            </Box>
        </Stack>
    )
}
