// locales.ts
type LocaleStrings = {
    hero: {
        title: string;
        subtitle: string;
        button: string;
    };
    about: {
        title: string;
        description: string;
        button: string;
    };
    features: {
        title: string;
        data: Array<{
            title: string;
            description: string;
            image: string;
        }>;
    };
    clients: {
        title: string;
        data: Array<{
            name: string;
            logo: string;
        }>;
    };
    pricing: {
        title: string;
        data: Array<{
            plan: string;
            price: string;
        }>;
    };
    contact: {
        title: string;
    };
    faq: {
        title: string;
        data: Array<{
            question: string;
            answer: string;
        }>;
    }
};

const locales: Record<string, LocaleStrings> = {
    eng: {
        hero: {
            title: "Hardware You Rely On, Engineering You Trust.",
            subtitle: "Dependable Hardware, Expert Engineering – Delivered to Empower Your Operations and Built to Endure. \nDiscover our services and take the first step towards transforming your business.",
            button: "Get Started",
        },
        about: {
            title: "Our Vision",
            description: `At [Your Company Name], we are dedicated to providing top-quality hardware solutions and expert engineering support that empower businesses to excel. \n\nWith years of experience and a team of skilled engineers, we deliver dependable products and tailored solutions designed to meet the demands of today’s fast-paced industries. \n\n[Your Company Name] is here to deliver the reliability and expertise you need.`,
            button: "Learn More",
        },
        features: {
            title: "Why Choose Us",
            data: [
                {
                    title: "Speed",
                    description: "Our quick and efficient solutions empower you to grow your business effortlessly and without delays.",
                    image: "https://st4.depositphotos.com/1008239/38547/i/450/depositphotos_385477390-stock-photo-network-engineer-working-in-server.jpg",
                },
                {
                    title: "Trustworthy",
                    description: "Our dependable solutions give you the peace of mind to focus on scaling your business, knowing we're always here for you.",
                    image: "https://cdn.thelabrepair.com/wp-content/uploads/computer-repair-960x640.jpg.webp",
                },
                {
                    title: "Protection",
                    description: "Our secure services ensure your business and data are fully protected, allowing you to grow with confidence and peace of mind.",
                    image: "https://static.archerdxp.io/cms/70599ae5-b2f3-4361-92e6-8f7231ac271d.jpg"
                },
            ]
        },

        clients: {
            title: "Our Clients",
            data: [
                {
                    name: "Subaru",
                    logo: "https://pngimg.com/uploads/car_logo/car_logo_PNG1669.png", // Replace with actual logo URL
                },
                {
                    name: "McLaren Automotive",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUPG9ElBxlGQKZJHD5rBijNrPEyaPIHMHPOirwm6fFhG1y8ukZ1RPp9SI63mq5m5NXEE&usqp=CAU", // Replace with actual logo URL
                },
                {
                    name: "Ford",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png", // Replace with actual logo URL
                },
                {
                    name:"Audi",
                    logo:"https://freelogopng.com/images/all_img/1686496798audi-car-logo.png"
                }
                // Add more clients as needed
            ],
        },
        pricing: {
            title: "Pricing",
            data: [
                {
                    plan: "Basic",
                    price: "$19.99",
                },
                {
                    plan: "Premium",
                    price: "$29.99",
                },
                {
                    plan: "Business",
                    price: "$39.99",
                },
            ],
        },
        contact: {
            title: "Contact Us",
        },
        faq: {
            title: "FAQ",
            data: [
                {
                    question: "What services do you offer?",
                    answer: "We offer a wide range of services to help you succeed.",
                },
                {
                    question: "How can I get in touch with you?",
                    answer: "You can reach us through email, phone, or our contact form.",
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept various payment methods, including credit cards, PayPal, and bank transfers.",
                }
            ]
        }
    },
    th: {
        hero: {
            title: "อุปกรณ์ที่คุณต้องการ, ช่างที่คุณไว้วางใจ.",
            subtitle: "ฮาร์ดแวร์ที่เชื่อถือได้ ช่างที่เชี่ยวชาญ – ส่งมอบเพื่อเสริมศักยภาพการทำงานของคุณ",
            button: "เริ่มต้น",
        },
        about: {
            title: "วิสัยทัศน์ของเรา",
            description: `ที่ [ชื่อบริษัทของคุณ] เรามุ่งมั่นที่จะนำเสนอโซลูชั่นฮาร์ดแวร์คุณภาพสูงและบริการด้านวิศวกรรมที่เชี่ยวชาญเพื่อเสริมศักยภาพให้ธุรกิจของคุณ ด้วยประสบการณ์ที่ยาวนานและทีมงานวิศวกรมืออาชีพ \n\nเราจัดหาผลิตภัณฑ์ที่เชื่อถือได้และโซลูชั่นที่ปรับให้เหมาะกับความต้องการของอุตสาหกรรมในปัจจุบัน \n\n [ชื่อบริษัทของคุณ] พร้อมที่จะให้ความเชี่ยวชาญและความเชื่อถือได้ที่คุณต้องการ`,
            button: "เรียนรู้เพิ่มเติม",
        },
        features: {
            title: "ทำไมต้องเลือกเรา",
            data: [
                {
                    title: "รวดเร็ว",
                    description: "โซลูชันที่รวดเร็วของเราช่วยให้คุณสามารถมุ่งเน้นในการขยายธุรกิจของคุณโดยไม่ต้องกังวลเรื่องใดๆ.",
                    image: "https://st4.depositphotos.com/1008239/38547/i/450/depositphotos_385477390-stock-photo-network-engineer-working-in-server.jpg",
                },
                {
                    title: "เชื่อถือได้",
                    description: "โซลูชันที่เชื่อถือได้ของเราช่วยให้คุณสามารถมุ่งเน้นในการขยายธุรกิจของคุณโดยไม่ต้องกังวลเรื่องใดๆ.",
                    image: "https://cdn.thelabrepair.com/wp-content/uploads/computer-repair-960x640.jpg.webp",
                },
                {
                    title: "ปลอดภัย",
                    description: "โซลูชันที่ปลอดภัยของเราช่วยให้คุณสามารถมุ่งเน้นในการขยายธุรกิจของคุณโดยไม่ต้องกังวลเรื่องใดๆ.",
                    image: "https://static.archerdxp.io/cms/70599ae5-b2f3-4361-92e6-8f7231ac271d.jpg"
                },
            ]
        },

        clients: {
            title: "ลูกค้าของเรา",
            data: [
                {
                    name: "Subaru",
                    logo: "https://pngimg.com/uploads/car_logo/car_logo_PNG1669.png", // Replace with actual logo URL
                },
                {
                    name: "McLaren Automotive",
                    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFUPG9ElBxlGQKZJHD5rBijNrPEyaPIHMHPOirwm6fFhG1y8ukZ1RPp9SI63mq5m5NXEE&usqp=CAU", // Replace with actual logo URL
                },
                {
                    name: "Ford",
                    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png", // Replace with actual logo URL
                },
                {
                    name:"Audi",
                    logo:"https://freelogopng.com/images/all_img/1686496798audi-car-logo.png"
                }
                // Add more clients as needed
            ]
        },
        pricing: {
            title: "แผนราคา",
            data: [
                {
                    plan: "แผนพื้นฐาน",
                    price: "49 ดอลลาร์/เดือน",
                },
                {
                    plan: "แผนมืออาชีพ",
                    price: "99 ดอลลาร์/เดือน",
                },
                {
                    plan: "แผนองค์กร",
                    price: "149 ดอลลาร์/เดือน",
                },
            ]
        },
        contact: {
            title: "ติดต่อเรา",
        },
        faq: {
            title: "คําถามที่พบบ่อย",
            data: [
                {
                    question: "คุณมีโซลูชันอะไรบ้าง?",
                    answer: "โซลูชันที่รวดเร็ว และเชื่อถือได้",
                },
                {
                    question: "ฉันจะติดต่อคุณได้ยังไง?",
                    answer: "ติดต่อได้ผ่านลาย อีเมล หรือโทรศัพท์",
                },
                {
                    question: "ฉันจะจ่ายเงินให้คุณได้ยังไง?",
                    answer: "จ่ายผ่านบัตรเครดิต หรือบัตรเดบิต",
                },
            ]
        },
    },
};

export default locales;
