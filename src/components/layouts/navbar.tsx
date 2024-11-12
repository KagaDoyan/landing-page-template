"use client";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Button,
    Menu,
    MenuItem,
    useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { navItemsByLanguage } from "@/components/nav-tem";
import { Language } from "@mui/icons-material";
import { Noto_Sans_Thai } from '@next/font/google';
import getInitialLanguage from "../utilities/LanguageSelected";

const notoSansThai = Noto_Sans_Thai({
    subsets: ['thai'],
    weight: ['200', '700'], // Define the weights you want
});

interface NavItem {
    title: string;
    href: string;
    description: string;
}

const LanguageOption = [
    { code: "eng", label: "English", icon: <Language /> },
    { code: "th", label: "ไทย", icon: <Language /> },
];

const navItems: Record<string, NavItem[]> = navItemsByLanguage;

const Navbar: React.FC = ({}) => {
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [currentLanguage, setCurrentLanguage] = useState<string>("eng");
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [appBarBgColor, setAppBarBgColor] = useState<string>("transparent");

    // States to control menu text colors
    var MemuColor = "black";
    var DefaultColor = "white";
    const [defaultTextColor, setDefaultTextColor] = useState<string>(DefaultColor); // Default text color

    const [isLanguageLoaded, setIsLanguageLoaded] = useState<boolean>(false);
    useEffect(() => {
        if (typeof window !== "undefined") { // Check if running in the browser
            const storedLanguage = localStorage.getItem('selectedLanguage');
            if (storedLanguage) {
                setCurrentLanguage(storedLanguage);
            }
            setIsLanguageLoaded(true); // Set to true after retrieving language
        }
    }, []); // Run once after component mounts

    useEffect(() => {
        const handleScroll = () => {
            setAppBarBgColor(window.scrollY > 50 ? "rgb(255, 255, 255)" : "transparent");
            setDefaultTextColor(window.scrollY > 50 ? MemuColor : DefaultColor);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isLanguageLoaded) return null;

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleLanguageChange = async (language: string) => {
        setCurrentLanguage(language);
        await localStorage.setItem("selectedLanguage", language);
        setAnchorEl(null);
        window.location.reload();
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const currentNavItems = navItems[currentLanguage];



    return (
        <div className={notoSansThai.className}>
            <AppBar position="fixed" sx={{ boxShadow: "none", bgcolor: appBarBgColor, color: "black", width: "100%", transition: "background-color 0.3s ease" }}>
                <Toolbar>
                    <p style={{ flexGrow: 1, color: defaultTextColor, fontSize: "1.5rem" }}>
                        KOON SERVICES
                    </p>

                    <div>
                        <Button
                            color="inherit"
                            onClick={handleMenuClick}
                            sx={{
                                mx: 1,
                                color: defaultTextColor,
                                "&:hover": {
                                    bgcolor: "rgba(255, 255, 255, 0.1)",
                                },
                            }}
                        >
                            {LanguageOption.find((lang) => lang.code === currentLanguage)?.label} {LanguageOption.find((lang) => lang.code === currentLanguage)?.icon}
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {LanguageOption.map((lang) => (
                                <MenuItem
                                    key={lang.code}
                                    onClick={() => handleLanguageChange(lang.code)}
                                    sx={{
                                        color: 'black',
                                        fontWeight: currentLanguage === lang.code ? "bold" : "normal",
                                    }}
                                >
                                    <p>{lang.label}</p>
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>

                    {isMobile ? (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ color: defaultTextColor }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="left"
                                open={drawerOpen}
                                onClose={toggleDrawer(false)}
                            >
                                <List>
                                    {currentNavItems.map((item, index) => (
                                        <ListItem key={index} disablePadding>
                                            <ListItemButton component="a" href={item.href}>
                                                <p style={{ color: MemuColor }}>{item.title}</p>
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </>
                    ) : (
                        <List sx={{ display: "flex" }}>
                            {currentNavItems.map((item, index) => (
                                <ListItem key={index} disablePadding sx={{ width: "auto" }}>
                                    <ListItemButton
                                        component="a"
                                        href={item.href}
                                        sx={{
                                            color: defaultTextColor,
                                            textShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                                            textDecoration: "none",
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                                borderBottom: "2px solid",
                                                borderBottomColor: "currentColor",
                                            },
                                        }}
                                    >
                                        <h5>{item.title}</h5>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
