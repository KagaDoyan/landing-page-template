export default function getInitialLanguage() {
    return localStorage.getItem('selectedLanguage') || 'eng';
}