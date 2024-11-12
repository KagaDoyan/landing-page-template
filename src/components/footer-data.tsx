import { Description } from "@mui/icons-material";

// footer-data.ts
export const FooterData: Record<string, any> = {
    eng: {
        title: "KOON SERVICES", // Title for the footer
        aboutUs: {
            title: "About Us", // Title for About Us
            description: "We are a company dedicated to providing the best services and products to our customers. Our mission is to improve lives through innovative solutions.",
        },
        quickLinks: {
            title: "Quick Links", // Title for Quick Links
            links: [
                { label: "Home", url: "/" },
                { label: "About", url: "/about" },
                { label: "Services", url: "/services" },
                { label: "Contact", url: "/contact" },
            ],
        },
        contactUs: {
            title: "Contact Us", // Title for Contact Us
            emailLabel: "Email",
            phoneLabel: "Phone",
            email: "support@mycompany.com",
            phone: "(123) 456-7890",
        },
        copyright: `© ${new Date().getFullYear()} My Company. All rights reserved.`,
    },
    th: {
        title: "KOON SERVICES", // Title for the footer in Thai
        aboutUs: {
            title: "เกี่ยวกับเรา", // Title for About Us in Thai
            description: "เราเป็นบริษัทที่มุ่งมั่นที่จะให้บริการและผลิตภัณฑ์ที่ดีที่สุดแก่ลูกค้าของเรา ภารกิจของเราคือการปรับปรุงชีวิตด้วยโซลูชันที่สร้างสรรค์"
        },
        quickLinks: {
            title: "ลิงค์ด่วน", // Title for Quick Links in Thai
            links: [
                { label: "หน้าแรก", url: "/" },
                { label: "เกี่ยวกับเรา", url: "/about" },
                { label: "บริการ", url: "/services" },
                { label: "ติดต่อ", url: "/contact" },
            ],
        },
        contactUs: {
            title: "ติดต่อ", // Title for Contact Us in Thai
            emailLabel: "อีเมล",
            phoneLabel: "โทรศัพท์",
            email: "support@mycompany.com",
            phone: "(123) 456-7890",
        },
        copyright: `© ${new Date().getFullYear()} บริษัทของฉัน สงวนลิขสิทธิ์`,
    },
};
