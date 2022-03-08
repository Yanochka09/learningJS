/* helpers.js */
import translations from "./translations.js";

/**
 * @param {string} language
 */
export const getTranslation = (language) => {
    console.log (translations)
	return translations.welcome[language];
}