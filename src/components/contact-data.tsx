// app/contact/contactData.ts

type ContactFormData = {
    sendMessage: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    submitButton: string;
  };
  
  type ContactLinks = {
    phoneLink: string;
    emailLink: string;
    lineLink: string;
  };
  
  type LanguageData = {
    title: string;
    description: string;
    phone: string;
    email: string;
    line: string;
    location: string;
    address: string;
    form: ContactFormData;
    contactLinks: ContactLinks;
  };

  
  const contactData: Record<string, LanguageData> = {
    eng: {
      title: "Contact Us",
      description: "Get in touch with us through any of the options below.",
      phone: "Phone",
      email: "Email",
      line: "Line ID",
      location: "Location",
      address: "123 Business St., Suite 456\nYour City, Country",
      form: {
        sendMessage: "Send Us a Message",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        submitButton: "Submit",
      },
      contactLinks: {
        phoneLink: "tel:+123456789",
        emailLink: "mailto:contact@yourcompany.com",
        lineLink: "https://line.me/ti/p/yourLineID",
      }
    },
    th: {
      title: "ติดต่อเรา",
      description: "ติดต่อเราผ่านตัวเลือกด้านล่าง",
      phone: "โทรศัพท์",
      email: "อีเมล",
      line: "ไลน์ ไอดี",
      location: "ที่อยู่",
      address: "123 ถนนธุรกิจ, ห้อง 456\nเมืองของคุณ, ประเทศ",
      form: {
        sendMessage: "ส่งข้อความถึงเรา",
        name: "ชื่อ",
        email: "อีเมล",
        phone: "โทรศัพท์",
        message: "ข้อความ",
        submitButton: "ส่ง",
      },
      contactLinks: {
        phoneLink: "tel:+123456789",
        emailLink: "mailto:contact@yourcompany.com",
        lineLink: "https://line.me/ti/p/yourLineID",
      }
    }
  };
  
  export default contactData;
  