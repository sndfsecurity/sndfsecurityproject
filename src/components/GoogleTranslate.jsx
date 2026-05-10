import { useEffect } from "react";

function GoogleTranslate() {

  useEffect(() => {

    if (!window.googleTranslateElementInit) {

      window.googleTranslateElementInit = () => {

        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi,mr",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };

      const script = document.createElement("script");

      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

      script.async = true;

      document.body.appendChild(script);
    }

  }, []);

  return (
    <div id="google_translate_element"></div>
  );
}

export default GoogleTranslate;