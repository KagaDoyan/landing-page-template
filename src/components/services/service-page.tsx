"use client";
import React from 'react';
import { Box, Container, Typography, List, ListItem, Grid, Button } from '@mui/material';
import { ServicesData } from '@/service-data'; // Import your language data file
import { orange } from '@mui/material/colors';

const ServicesPage: React.FC = () => {
    const language = localStorage.getItem('selectedLanguage') || 'eng';
    const services = ServicesData[language]; // Access the services based on selected language
    const [isImageLoaded, setIsImageLoaded] = React.useState(true);

    return (
        <Box sx={{ minWidth: '100vh', minHeight: '100vh' }}>
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
            <Container maxWidth="lg" sx={{ padding: { xs: 2, md: 4 } }}>
                <Typography sx={{ color: 'orange', paddingBottom: 2, fontSize: { xs: '2rem', sm: '2.5rem', md: '2.5rem' } }} gutterBottom align="center">
                    {services.title}
                </Typography>
                <Grid container spacing={4}>
                    {services.items.map((service: any, index: number) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Box sx={{ border: '1px solid #e0e0e0', borderRadius: 2, padding: 2 }}>
                                <Typography variant="h5" gutterBottom>
                                    {service.title}
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    {service.description}
                                </Typography>
                                <Typography variant="h6" gutterBottom>
                                    {services.featuresTitle}
                                </Typography>
                                <List>
                                    {service.features.map((feature: any, index: number) => (
                                        <ListItem key={index}>
                                            {feature}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesPage;
