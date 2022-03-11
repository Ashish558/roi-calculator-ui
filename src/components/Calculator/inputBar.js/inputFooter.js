import React from 'react'
import { Button, Stack } from '@mui/material'

export default function Inputfooter() {
    
    return (
     <Stack direction = 'row'>
         <Button sx={{...styles.btn, ...styles.activeBtn}}>
             Use Balance
         </Button>
         <Button sx={{...styles.btn}}>
             $ 1000
         </Button>
         <Button sx={{...styles.btn}}>
             $ 1000
         </Button>
     </Stack>
    )
}

const styles ={
    btn: {
        backgroundColor: '#F8F8F8',
        color: '#000000',
        fontFamily: 'Poppins_semibold',
        borderRadius: '10px',
        fontSize: '12px',
        textTransform: 'capitalize',
        mr: '10px',
        '&:hover': {
            backgroundColor: '#F8F8F8',
        },
    },
    activeBtn: {
        backgroundColor: 'background.yellow.light',
        '&:hover': {
            backgroundColor: 'background.yellow.light',
        },
    }
}
