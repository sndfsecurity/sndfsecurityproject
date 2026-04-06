import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: 9999,
      display: 'flex',
      gap: '10px',
      background: '#1a3a6f',
      padding: '10px 20px',
      borderRadius: '50px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
    }}>
      <button
        onClick={() => changeLanguage('en')}
        style={{
          padding: '8px 20px',
          border: 'none',
          borderRadius: '40px',
          cursor: 'pointer',
          background: currentLang === 'en' ? '#ff6b35' : 'white',
          color: currentLang === 'en' ? 'white' : '#333',
          fontWeight: 'bold',
          fontSize: '14px'
        }}
      >
        🇬🇧 English
      </button>
      <button
        onClick={() => changeLanguage('hi')}
        style={{
          padding: '8px 20px',
          border: 'none',
          borderRadius: '40px',
          cursor: 'pointer',
          background: currentLang === 'hi' ? '#ff6b35' : 'white',
          color: currentLang === 'hi' ? 'white' : '#333',
          fontWeight: 'bold',
          fontSize: '14px'
        }}
      >
        🇮🇳 हिंदी
      </button>
      <button
        onClick={() => changeLanguage('mr')}
        style={{
          padding: '8px 20px',
          border: 'none',
          borderRadius: '40px',
          cursor: 'pointer',
          background: currentLang === 'mr' ? '#ff6b35' : 'white',
          color: currentLang === 'mr' ? 'white' : '#333',
          fontWeight: 'bold',
          fontSize: '14px'
        }}
      >
        🇮🇳 मराठी
      </button>
    </div>
  );
}

export default LanguageSwitcher;