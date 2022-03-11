import React from 'react'
import { Stack, Typography } from '@mui/material'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

export default function Header() {


    return (
        <Stack direction='row' justifyContent='space-between' mb='10px' >
            <Typography variant='h3' fontSize='23px' fontWeight='bold' > Calculator </Typography>
            <CloseRoundedIcon />
        </Stack>
    )
}
