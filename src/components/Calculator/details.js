import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export default function Details() {

    const [isDetailsOn, setisDetailsOn] = useState(false)

    return (
        <Box>
            <Stack direction='row' alignItems='center' justifyContent='center' >
                <Typography align='center' fontSize='13px' onClick={() => setisDetailsOn(!isDetailsOn)} >
                    {isDetailsOn ? 'Hide details' : 'Show details'}
                </Typography>

                {isDetailsOn ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}

            </Stack>
            {
                isDetailsOn && (
                    <Box pt='16px' >

                        <Stack direction='row' justifyContent='space-between' mb='25px' >
                            <Typography fontFamily='Poppins_semibold' >
                                APY
                            </Typography>
                            <Typography fontFamily='Poppins_semibold' color='background.yellow.dark' >
                                63.34%
                            </Typography>
                        </Stack>
                        <Stack spacing={2} >
                            <Stack direction='row' alignItems='flex-start' >
                                <Box component='img' src='/assets/dot.svg' />
                                <Typography color='color.gray' fontSize='14px'>
                                    Calculated based on current rates
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='flex-start' >
                            <Box component='img' src='/assets/dot.svg' />
                                <Typography color='color.gray' fontSize='14px'>
                                    All fugures are estimates provided for your convenience only,
                                    and by no means represent guaranted returns.
                                </Typography>

                            </Stack>
                        </Stack>
                    </Box>
                )
            }
        </Box>
    )
}
