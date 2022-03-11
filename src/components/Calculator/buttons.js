import { Button, Stack } from '@mui/material'
import React from 'react'

export default function Buttons() {


    return (
        <Stack direction='row' mb='20px' >
            <Button fullWidth sx={{ ...styles.btn, ...styles.applyBtn }}>
                Apply
            </Button>
            <Button fullWidth sx={{ ...styles.btn, ...styles.cancelBtn }}>
                Cancel
            </Button>
        </Stack>
    )
}


const styles = {
    btn: {
        py: '10px',

        borderRadius: '15px',
        fontSize: '13px',
        textTransform: 'capitalize',
        mr: '10px',
        '&:hover': {
            backgroundColor: '#F8F8F8',
        },
    },
    applyBtn: {
        backgroundColor: '#666666',
        color: 'white',
        '&:hover': {
            backgroundColor: '#666666',
        },
    },
    cancelBtn: {
        backgroundColor: 'transparent',
        color: '#666666',
        border: '1px solid #666666',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    }
}