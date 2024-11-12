"use client";
import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Divider, Link, IconButton } from "@mui/material";
import { FaFacebook, FaLine } from "react-icons/fa"; // Import the Facebook and Line icons from react-icons

import { FooterData } from '@/components/footer-data'; // Import the footer data

const Footer: React.FC = () => {
    const [language,setlanguage] = useState<string>('eng');
    const footerContent = FooterData[language]; // Get content based on selected language

    useEffect(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        if (storedLanguage) {
            setlanguage(storedLanguage);
        }
    })
    return (
        <Box
            sx={{
                bgcolor: "orange",
                py: 4,
                position: "relative",
                bottom: 0,
                width: "100%",
                borderTop: "40px solid #2b2b2b",
            }}
        >
            <Container maxWidth="lg">
                {/* Title */}
                <p
                    style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: "1.7rem",
                        fontWeight: 'bold',
                        fontFamily: "'Noto Sans Thai', sans-serif", // Apply font here
                    }}
                >
                    {footerContent.title}
                </p>

                <Grid container spacing={4}>
                    {/* About Us Section */}
                    <Grid item xs={12} md={4}>
                        <p
                            style={{
                                color: "black",
                                fontSize: "1.5rem",
                                textAlign: "left",
                                fontWeight: 'bold',
                                fontFamily: "'Noto Sans Thai', sans-serif",
                            }}
                        >
                            {footerContent.aboutUs.title}
                        </p>
                        <p
                            style={{
                                color: "black",
                                fontSize: "1rem",
                                textAlign: "left",
                                textAlignLast: "left",
                                justifyContent: "center",
                                display: 'flex',
                                flexDirection: 'column',
                                fontFamily: "'Noto Sans Thai', sans-serif",
                            }}
                        >
                            {footerContent.aboutUs.description}
                        </p>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} md={4}>
                        <p
                            style={{
                                color: "black",
                                fontSize: "1.5rem",
                                textAlign: "left",
                                fontWeight: 'bold',
                                fontFamily: "'Noto Sans Thai', sans-serif",
                            }}
                        >
                            {footerContent.quickLinks.title}
                        </p>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {footerContent.quickLinks.links.map((link: any, index: number) => (
                                <li key={index}>
                                    <Link
                                        href={link.url}
                                        color="inherit"
                                        style={{
                                            display: 'block',
                                            textAlign: 'left',
                                            fontSize: '1rem',
                                            fontFamily: "'Noto Sans Thai', sans-serif",
                                        }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>

                    {/* Contact Us Section */}
                    <Grid item xs={12} md={4}>
                        <p
                            style={{
                                color: "black",
                                fontSize: "1.5rem",
                                textAlign: "left",
                                fontWeight: 'bold',
                                fontFamily: "'Noto Sans Thai', sans-serif",
                            }}
                        >
                            {footerContent.contactUs.title}
                        </p>
                        <p
                            style={{
                                color: "black",
                                fontSize: "1rem",
                                textAlign: "left",
                                fontFamily: "'Noto Sans Thai', sans-serif",
                            }}
                        >
                            {footerContent.contactUs.emailLabel}: {footerContent.contactUs.email}
                        </p>
                        <p
                            style={{
                                color: "black",
                                fontSize: "1rem",
                                textAlign: "left",
                                fontFamily: "'Noto Sans Thai', sans-serif",
                            }}
                        >
                            {footerContent.contactUs.phoneLabel}: {footerContent.contactUs.phone}
                        </p>

                        {/* Social Media Icons */}
                        <div style={{ display: "flex", justifyContent: "left", gap: '10px', marginTop: '10px' }}>
                            <a
                                href="https://line.me/ti/p/%40mycompany"
                                style={{ textDecoration: 'none', color: 'black' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLine size={32} />
                            </a>

                            <a
                                href="https://www.facebook.com/mycompany"
                                style={{ textDecoration: 'none', color: 'black' }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook size={32} />
                            </a>
                        </div>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Divider sx={{ my: 4 }} />

                {/* Copyright */}
                <p
                    style={{
                        textAlign: "center",
                        color: "black",
                        fontSize: "1rem",
                        fontFamily: "'Noto Sans Thai', sans-serif",
                    }}
                >
                    {footerContent.copyright}
                </p>
            </Container>
        </Box>
    );
};

export default Footer;
