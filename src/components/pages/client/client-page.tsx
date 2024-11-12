// ClientsPage.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { clientData } from '@/components/client-data'; // Adjust the import path as needed
import { Box, Container, Typography, Grid } from '@mui/material';

const ClientsPage: React.FC = () => {
    const [language, setLanguage] = useState<string>('eng');
    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage') as string;
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    })

    const content = clientData[language]; // Get content based on selected language
    const [isImageLoaded, setIsImageLoaded] = React.useState(true);

    return (
        <Box>
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
                <Typography sx={{ paddingBottom: 2, color: 'orange', fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem' } }} gutterBottom textAlign="center">
                    {content.title}
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    {content.clients.map((client, index) => (
                        <Grid item xs={6} sm={4} md={3} key={index} display="flex" flexDirection="column" alignItems="center">
                            <Box
                                component="img"
                                src={client.logo}
                                alt={`${client.name} logo`}
                                sx={{
                                    maxWidth: '70%', // Adjust width to fit more logos
                                    height: 'auto',
                                    maxHeight: '70px', // Adjust height as needed
                                    objectFit: 'contain',
                                    marginBottom: 1, // Space between logo and name
                                }}
                            />
                            <Typography variant="body2" align="center">
                                {client.name}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ClientsPage;
