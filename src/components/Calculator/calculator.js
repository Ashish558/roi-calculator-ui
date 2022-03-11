import { Box } from '@mui/material';
import React from 'react'
import Timeframe from './timeframe';
import Header from './header';
import Inputbar from './inputBar.js/inputBar';
import TierSelect from './tierSelect';
import ToggleAcceleratedApy from './toggleAcceleratedApy';
import Roi_Inputbar from './roi_inputbar/roi_inputBar';
import Buttons from './buttons';
import Details from './details';

export default function Calculator() {


    return (
        <Box sx={{ maxWidth: '500px', width: '100%', p: '16px', backgroundColor: 'white', borderRadius: '20px' }}>
            <Header />
            <Inputbar />
            <Timeframe />
            <ToggleAcceleratedApy />
            <TierSelect />
            <Roi_Inputbar />
            <Buttons />
            <Details />
        </Box>

    )
}
