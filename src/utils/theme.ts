export function getTheme() {
    return localStorage.getItem('theme') || 'dark';
}

export function setTheme(theme : string) {
    localStorage.setItem('theme', theme);

    var root = document.documentElement;
    var body = document.body;

    if (theme === 'light') {
        root.style.setProperty('--color-background', '#fafafa');
        root.style.setProperty('--color-foreground', '#09090b');
        root.style.setProperty('--color-border', '#e4e4e7');
        root.style.setProperty('--color-secondary', '#f4f4f5');
        root.style.setProperty('--color-muted', '#f1f1f3');
        root.style.setProperty('--color-muted-foreground', '#71717a');
        body.style.backgroundColor = '#fafafa';
        body.style.color = '#09090b';
        document.querySelectorAll('.theme-icon-sun').forEach(function (el) { el.classList.remove('hidden'); });
        document.querySelectorAll('.theme-icon-moon').forEach(function (el) { el.classList.add('hidden'); });
    } else {
        root.style.setProperty('--color-background', '#050505');
        root.style.setProperty('--color-foreground', '#ffffff');
        root.style.setProperty('--color-border', '#27272a');
        root.style.setProperty('--color-secondary', '#18181b');
        root.style.setProperty('--color-muted', '#1f1f22');
        root.style.setProperty('--color-muted-foreground', '#a1a1aa');
        body.style.backgroundColor = '#050505';
        body.style.color = '#ffffff';
        document.querySelectorAll('.theme-icon-sun').forEach(function (el) { el.classList.add('hidden'); });
        document.querySelectorAll('.theme-icon-moon').forEach(function (el) { el.classList.remove('hidden'); });
    }
}