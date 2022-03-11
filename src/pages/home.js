import { Box } from '@mui/material'
import React from 'react'
import Calculator from '../components/Calculator/calculator'

export default function Home() {


    return (
        <Box
            sx={{
                display: 'flex', justifyContent: 'center',
                alignItems: 'center', minHeight: '100vh',
                backgroundColor: '#f3f3f3'
            }} >
            <Calculator />
        </Box>
    )
}
