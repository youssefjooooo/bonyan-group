// Utility functions for the Bonyan Group application

/**
 * Combines class names conditionally
 * @param  {...any} classes - Class names to combine
 * @returns {string} Combined class names
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Format phone number for display
 * @param {string} phone - Phone number
 * @returns {string} Formatted phone number
 */
export function formatPhone(phone) {
  return phone.replace(/(\+\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}

/**
 * Get direction based on locale
 * @param {string} locale - Current locale (en, ar)
 * @returns {string} Direction (ltr or rtl)
 */
export function getDirection(locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

/**
 * Truncate text to specified length
 * @param {string} text - Text to truncate
 * @param {number} length - Maximum length
 * @returns {string} Truncated text
 */
export function truncate(text, length = 100) {
  if (text.length <= length) return text;
  return text.slice(0, length) + "...";
}
