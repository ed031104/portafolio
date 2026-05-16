export function getSavedLanguage() {
    return localStorage.getItem('lang') || 'es';
}


export function applyLanguage(lang: string, translations : Record<string, Record<string, string>>) {
    var t = translations[lang];    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (key && t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
}
