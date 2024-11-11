// AboutPage.tsx
"use client";
import React from 'react';
import { AboutData } from '@/about-data';
import { Box, Typography, List, ListItem, Container } from '@mui/material';

const AboutPage: React.FC = () => {
    const language = localStorage.getItem('selectedLanguage') || 'eng';
    const content = AboutData[language];
    const [isImageLoaded, setIsImageLoaded] = React.useState(true);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '50vh',
                    textAlign: 'center',
                    position: 'relative',
                    color: 'white',
                    backgroundImage: isImageLoaded
                        ? 'url(https://img.freepik.com/free-photo/expert-server-hub-management_482257-85918.jpg?t=st=1730344872~exp=1730348472~hmac=0f65ca20dfedca9d7089c9a5604b5e617df4bb6dd01ae678bcff676e526008b9&w=1800)'
                        : 'none', // Loads the image only when in view
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Orange Overlay */}
                {isImageLoaded && (
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(255, 165, 0, 0.6)', // grey overlay
                            zIndex: 1,
                        }}
                    />
                )}
            </Box>
            <Container sx={{ minWidth: '100vh', minHeight: '100vh', padding: { xs: 2, sm: 4, md: 6 } }}>
                <Box sx={{ padding: 4, textAlign: 'center' }}>
                    <Typography sx={{ paddingBottom: 2, color: 'orange', fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem' } }} gutterBottom>
                        {content.title}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' }}}>
                        {content.description}
                    </Typography>
                </Box>

                <Box sx={{ padding: 4, textAlign: 'center', borderBottom: '1px solid #ccc', mb: 4 }}>
                    <Typography sx={{ paddingBottom: 2, color: 'orange', fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem' } }} gutterBottom>
                        {content.mission.title}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' }}}>
                        {content.mission.description}
                    </Typography>
                </Box>

                <Box sx={{ padding: 4, textAlign: 'center', borderBottom: '1px solid #ccc', mb: 4 }}>
                    <Typography sx={{ paddingBottom: 2, color: 'orange', fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem' } }} gutterBottom>
                        {content.vision.title}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{fontSize: { xs: '1rem', sm: '1.5rem', md: '1.5rem' }}}>
                        {content.vision.description}
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default AboutPage;
