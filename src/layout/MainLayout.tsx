import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// material-ui
import { Box, Container } from '@mui/material';

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
    return (
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box component="main" sx={{ width: '100%', flexGrow: 1 }}>
                <Container>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
};

export default MainLayout;
