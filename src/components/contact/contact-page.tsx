// app/contact/page.tsx
'use client';
import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import { Phone, Email, LocationOn, Chat } from '@mui/icons-material';
import contactData from '@/contact-data';

const ContactPage: React.FC = () => {
    const language = localStorage.getItem("selectedLanguage") || "eng";
    const data = contactData[language];

    const location = "17.405914,102.800196";
    const googleMapsUrl = `https://www.google.com/maps/place/${location}`;

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
                <Typography sx={{ fontSize: { xs: '2rem', sm: '2.5rem' }, color: 'orange' }} gutterBottom textAlign="center">
                    {data.title}
                </Typography>
                <Typography sx={{ fontSize: { xs: '1.2rem', sm: '1.2rem' } }} paragraph textAlign="center">
                    {data.description}
                </Typography>

                {/* Contact Information */}
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center">
                            <Phone fontSize="large" sx={{ mr: 2 }} />
                            <Typography variant="body1">
                                <Link href={data.contactLinks.phoneLink} color="inherit">
                                    {data.phone}: +1 (234) 567-89
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center">
                            <Email fontSize="large" sx={{ mr: 2 }} />
                            <Typography variant="body1">
                                <Link href={data.contactLinks.emailLink} color="inherit">
                                    {data.email}: contact@yourcompany.com
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center">
                            <Chat fontSize="large" sx={{ mr: 2 }} />
                            <Typography variant="body1">
                                <Link href={data.contactLinks.lineLink} target="_blank" color="inherit">
                                    {data.line}: yourLineID
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box display="flex" alignItems="center">
                            <LocationOn fontSize="large" sx={{ mr: 2 }} />
                            <Typography variant="body1">
                                <Link href={googleMapsUrl} target="_blank" color="inherit">
                                    {data.location}: {data.address}
                                </Link>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
};

export default ContactPage;
