const BRAND_KEY = '__insomnia__plugin__brand__';
const BRAND_VAL = 'insomnia-plugin-hide-login';

const sheet = new CSSStyleSheet();
      sheet[BRAND_KEY] = BRAND_VAL;
      sheet.replaceSync(`
          #root header div:has(
              a[href='https://github.com/Kong/insomnia/stargazers'],
              a[href='https://app.insomnia.rest/app/signup/']
          ) > :is(button, a) {
            display: none !important;
          }
      `);
      
requestAnimationFrame(function() {
    const existing = 
        document.adoptedStyleSheets?.filter(x => x[BRAND_KEY] !== BRAND_VAL) ?? [];
        
    document.adoptedStyleSheets = [
      ...existing,
      sheet
    ];
});
