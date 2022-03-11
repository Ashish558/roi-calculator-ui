import React from 'react'
import { Box, Input, TextField } from '@mui/material'
import Inputheader from './inputHeader'
import Inputfooter from './inputFooter'

export default function Inputbar() {

    return (
        <Box mb='16px' >
            <Inputheader />

            <Box sx={{position: 'relative', mb: '10px'}} >
                <TextField fullWidth
                 type='number' 
                    variant="standard"
                    sx={{
                        py: '6px', px: '72px',
                        backgroundColor: '#f9fafb',
                        border: '1px solid #ececec', borderRadius: '10px',
                    }}
                    InputProps={{
                        inputProps: {
                            style: { textAlign: "right",  ...styles.inputText },
                        },
                        disableUnderline: true,
                        style: { fontSize: '16px' }
                    }}
                />
                <Box component='span' sx={{...styles.inputSuffix, ...styles.inputText}}>
                    CAKE
                </Box>

                <Box component='span' sx={{...styles.inputBottomText}}>
                    ~ $2.90
                </Box>
            </Box>

            <Inputfooter />
        </Box>
    )
}

const styles ={
    inputSuffix: {
        position:'absolute',
        right: '10px',
        top:'50%',
        transform:'translatey(-50%)',
    },
    inputText: {
        fontFamily: 'Poppins_bold',
        fontWeight:'bold',
        fontSize: '20px'
    },
    inputBottomText: {
        position:'absolute',
        right: '10px',
        top:'calc(100% + 10px)',
        color: 'color.gray',
        fontSize: '12px'
    }
}