'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Box, Button, Grid, Paper, TextField, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, Divider } from '@mui/material';
import locales from '@/home-data';
import { ExpandMore } from '@mui/icons-material';
import { text } from 'stream/consumers';

const HomePage: React.FC = () => {
    const [language, setLanguage] = useState<string>(localStorage.getItem('selectedLanguage') || 'eng'); // Default language
    const [isImageLoaded, setIsImageLoaded] = useState(true);
    const imageRef = useRef<HTMLDivElement | null>(null);
    const [isAboutVisible, setIsAboutVisible] = useState(false);
    const aboutRef = useRef<HTMLDivElement | null>(null); // Ref for About section
    const [isFeatureVisible, setIsFeatureVisible] = useState(false);
    const featureRef = useRef<HTMLDivElement | null>(null); // Ref for Feature section
    const [isClientVisible, setIsClientVisible] = useState(false);
    const clientRef = useRef<HTMLDivElement | null>(null); // Ref for Client section
    const [isContactVisible, setIsContactVisible] = useState(false);
    const contactRef = useRef<HTMLDivElement | null>(null); // Ref for Contact section


    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage') as string;
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.target === imageRef.current) {
                    setIsImageLoaded(true); // Set the visibility to true to trigger the animation
                    observer.unobserve(entry.target);
                }
                if (entry.target === aboutRef.current) {
                    setIsAboutVisible(true); // Set the visibility to true to trigger the animation
                    observer.unobserve(entry.target);
                }

                if (entry.target === featureRef.current) {
                    setIsFeatureVisible(true); // Set the visibility to true to trigger the animation
                    observer.unobserve(entry.target);
                }

                if (entry.target === clientRef.current) {
                    setIsClientVisible(true); // Set the visibility to true to trigger the animation
                    observer.unobserve(entry.target);
                }

            },
            { threshold: 0.6 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        if (featureRef.current) {
            observer.observe(featureRef.current);
        }

        if (clientRef.current) {
            observer.observe(clientRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    const texts = locales[language];

    return (
        <div>
            {/* Hero Section */}
            <Box
                ref={imageRef}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
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
                {/* Content */}
                <Box sx={{ position: 'relative', zIndex: 2, padding: { xs: 2, sm: 4 }, textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                    <p style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                        {texts.hero.title}
                    </p>
                    <p style={{ fontSize: '1.5rem' }}>
                        {texts.hero.subtitle}
                    </p>
                    <Button
                        variant="outlined"
                        size="large"
                        sx={{ mt: 2, color: "orange", borderColor: "white", bgcolor: "white", textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}
                        onClick={() => {
                            if (aboutRef.current) {
                                const offset = 70; // Adjust this value as needed
                                const aboutSectionTop = aboutRef.current.getBoundingClientRect().top + window.scrollY - offset;
                                window.scrollTo({ top: aboutSectionTop, behavior: 'smooth' });
                            }
                        }}
                    >
                        {texts.hero.button}
                    </Button>
                </Box>
            </Box>

            {/* About Section */}
            <Box
                id="about"
                component="section"
                ref={aboutRef}
                sx={{
                    my: 8,
                    minHeight: '50vh',
                    textAlign: 'left',
                    opacity: isAboutVisible ? 1 : 0,
                    transform: isAboutVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                }}
            >
                <Grid container spacing={2} alignItems="center" sx={{ padding: 5 }}>
                    {/* Image Grid */}
                    <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
                        <img
                            src="https://www.akkodis.com/-/media/project/akkodis/akkodis/images/resources/network-engineer-career-guide.png?h=630&iar=0&w=1200&hash=A24F5592981759700F86C5C317C9E1DD"
                            alt="About Image"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: 2,
                            }}
                        />
                    </Grid>

                    {/* Text Grid */}
                    <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
                        <p

                            style={{
                                paddingBottom: 2,
                                color: 'orange',
                                fontSize: '2.5rem',
                            }}
                        >
                            {texts.about.title}
                        </p>
                        <p
                            style={{
                                textAlign: 'left',
                                fontSize: '1.1rem',
                                lineHeight: 1.6,
                            }}
                            dangerouslySetInnerHTML={{
                                __html: texts.about.description.replace(/\n/g, '<br />'),
                            }}
                        />
                        <p

                            style={{
                                textAlign: 'left',
                                paddingTop: 3,
                                fontSize: '1.1rem',
                                color: 'orange',
                                lineHeight: 1.6,
                            }}
                        >
                            <a href="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
                                {texts.about.button}
                            </a>
                        </p>
                    </Grid>
                </Grid>
            </Box>



            {/* Features Section */}
            <Divider sx={{ my: 4 }} />
            <Box
                ref={featureRef}
                sx={{
                    my: 4,
                    opacity: isFeatureVisible ? 1 : 0,
                    transform: isFeatureVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    padding: { xs: 5, sm: 10, md: 20 },
                }}
            >
                <p
                    style={{
                        paddingBottom: 2,
                        color: 'orange',
                        fontSize: '2.5rem',
                        textAlign: 'center',
                    }}
                >
                    {texts.features.title}
                </p>

                <Grid container spacing={5} sx={{ justifyContent: 'center' }}>
                    {texts.features.data.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Paper elevation={1} sx={{ padding: 4, textAlign: 'center', borderRadius: 3 }}>
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }} >
                                    {feature.title}
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, textAlign: 'left' }}>
                                    {feature.description}
                                </p>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>


            {/* client section */}
            <Divider sx={{ my: 4 }} />
            <Box ref={clientRef}

                sx={{
                    my: 8,
                    opacity: isClientVisible ? 1 : 0,
                    transform: isClientVisible ? 'translateY(0)' : 'translateY(50px)',
                    transition: 'opacity 0.8s ease, transform 0.8s ease',
                    padding: { xs: 5, sm: 10, md: 20 },
                }}>
                <p
                    style={{
                        paddingBottom: 2,
                        color: 'orange',
                        fontSize: '2.5rem',
                        textAlign: 'center',
                    }}>
                    {texts.clients.title}
                </p>
                <Grid
                    container
                    spacing={3}  // Smaller gap between cards
                    justifyContent="center"  // Center the grid items horizontally
                    alignItems="flex-start"  // Align grid items to the top
                >
                    {texts.clients.data.map((client, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                            <Card
                                sx={{
                                    padding: 2,
                                    textAlign: 'center',
                                    borderRadius: 3,
                                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '50px',
                                }}
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    style={{
                                        width: '80%',
                                        height: 'auto',
                                        maxWidth: '80px',
                                        objectFit: 'contain',
                                    }}
                                />
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>



            {/* Pricing Section */}
            <Divider sx={{ my: 4 }} />
            <Box sx={{ padding: { xs: 5, sm: 10, md: 20 } }}>
                <p style={{ color: 'orange', fontSize: '2.5rem', paddingBottom: 2, textAlign: 'center' }}>
                    {texts.pricing.title}
                </p>
                <Grid container spacing={4} justifyContent="center" >
                    {texts.pricing.data.map((plan, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Paper elevation={3} sx={{ padding: 4, textAlign: 'center' }}>
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    {plan.plan}
                                </p>
                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                    {plan.price}
                                </p>
                                <Button variant="contained" sx={{ mt: 2 }}>
                                    Sign Up
                                </Button>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* FAQ Section */}
            <Divider sx={{ my: 4 }} />
            <Box sx={{ my: 8, textAlign: 'center', padding: { xs: 5, sm: 10, md: 20 } }}>
                <p style={{ textAlign: 'center', color: 'orange', fontSize: '2.5rem', paddingBottom: 2 }} >
                    {texts.faq.title}
                </p>
                {texts.faq.data.map((question, index) => (
                    <Accordion key={index} sx={{ my: 2 }}>
                        <AccordionSummary expandIcon={<ExpandMore />}>
                            <p style={{ fontSize: '1.5rem' }}>{question.question}</p>
                        </AccordionSummary>
                        <AccordionDetails>
                            <p style={{ textAlign: 'left' }}>{question.answer}</p>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </div >
    );
};

export default HomePage;
