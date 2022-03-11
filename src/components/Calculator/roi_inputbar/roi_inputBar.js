import React, { useState } from 'react'
import { Box, TextField } from '@mui/material'
import Inputheader from './inputHeader'

export default function Roi_Inputbar() {

    const [isClicked, setIsClicked] = useState(false)

    return (
        <Box mb='40px' >
            <Inputheader />

            <Box sx={{ position: 'relative', mb: '10px' }} >
                <TextField fullWidth
                    type='number'
                    variant="standard"
                    sx={{
                        py: '6px', px: '60px',
                        backgroundColor: '#f9fafb',
                        border: isClicked ? '2px solid #FDE100' : '1px solid #ececec',
                        borderRadius: '10px',
                    }}
                    InputProps={{
                        inputProps: {
                            style: { textAlign: "right", ...styles.inputText },
                        },
                        disableUnderline: true,
                        style: { fontSize: '16px' }
                    }}
                />
                <Box component='span' sx={{ ...styles.inputSuffix, ...styles.inputText }}>
                    USD
                </Box>
                {isClicked ?
                    <Box component='img' src='/assets/clicked.svg' sx={styles.pencil} onClick={() => setIsClicked(false)} />
                    :
                    <Box component='img' src='/assets/pencil.svg' sx={styles.pencil} onClick={() => setIsClicked(true)} />
                }

                <Box component='span' sx={styles.inputBottomText}>
                    ~ 3CAKE + 10 DON
                </Box>
            </Box>

        </Box>
    )
}

const styles = {
    inputSuffix: {
        position: 'absolute',
        right: '10px',
        top: '50%',
        transform: 'translatey(-50%)',
    },
    inputText: {
        fontFamily: 'Poppins_bold',
        fontWeight: 'bold',
        fontSize: '20px'
    },
    inputBottomText: {
        position: 'absolute',
        right: '10px',
        top: 'calc(100% + 10px)',
        color: 'color.gray',
        fontSize: '12px',
    },
    pencil: {
        position: 'absolute',
        left: '20px',
        top: '50%',
        transform: 'translatey(-50%)',
    },
}