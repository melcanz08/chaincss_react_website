const sample_codes = {
    navbar: `/* Header/Navigation */ 
const navbar = $().background('rgba(255, 255, 255, 0.95)').backdropFilter('blur(10px)').padding('1rem 5%').position('fixed').width('100%').top('0').zIndex('1000').boxShadow('0 2px 20px rgba(0,0,0,0.1)').block('.navbar');

const nav_container = $().maxWidth('1200px').margin('0 auto').display('flex').justifyContent('space-between').alignItems('center').block('.nav-container');

const logo = $().fontSize('1.8rem').fontWeight('700').background('linear-gradient(135deg, #667eea, #764ba2)').backgroundClip('text').textFillColor('transparent').letterSpacing('-0.5px').block('.logo a');

const navLinks = $().display('flex').gap('2rem').alignItems('center').block('.nav-links');

const navLinks_a = $().textDecoration('none').color('#1e293b').fontWeight('500').transition('color 0.3s').block('.nav-links a');

const navLinks_aHover = $().color('#667eea').block('.nav-links a:hover');

const npm_badge = $().background('#1e293b').color('white !important').padding('0.5rem 1rem').borderRadius('20px').fontSize('0.9rem').block('.npm-badge');

const npm_badge_hover = $().background('#667eea !important').color('white !important').block('.npm-badge:hover');

module.exports = {navbar,nav_container,logo,navLinks,navLinks_a,navLinks_aHover,npm_badge,npm_badge_hover};`,
    mainjcss: `<@
    const reset =  $().margin('0').padding('0').boxSizing('border-box').block('*');
    const body =  $().fontFamily("-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif").lineHeight('1.6').color('#1e293b').bg('linear-gradient(135deg, #667eea 0%, #764ba2 100%)').block('body');
    run(reset, body);
@>

<@
    const nav = get('./src/components/nav/nav.jcss');
    const hero = get('./src/components/sect_hero/hero.jcss');
    const feature = get('./src/components/sect_feature/feature.jcss');
    const example = get('./src/components/sect_example/example.jcss');
    const gstart = get('./src/components/sect_gStart/gStart.jcss');
    const footer = get('./src/components/footer/footer.jcss');

    const merged = Object.assign({},nav,hero,feature,example,gstart,footer);

        // Overwrite your chaining file
        nav.logo.textDecoration = 'none';
        //example.css_output.overflowWrap = 'break-word';
        
    compile(merged);
@>

@keyframes fadeInUp {
<@
    const from =  $().opacity('0').transform('translateY(20px)').block('from');
    const to =  $().opacity('1').transform('translateY(0)').block('to');
    run(from,to);
@>
}

/* Responsive */
@media (max-width: 768px) {
<@
    const hero =  $().fontSize('2.5rem').block('.hero h1');
    const stats =  $().flexDirection('column').gap('1rem').block('.stats');
    const ctaButtons =  $().flexDirection('column').alignItems('center').block('.cta-buttons');
    const exampleContainer =  $().gridTemplateColumns('1fr').block('.example-container');
    const navLinks =  $().display('none').block('.nav-links');
    run(hero,stats,ctaButtons,exampleContainer,navLinks);
@>
}`,
    generatedCSS: `*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,sans-serif;line-height:1.6;color:#1e293b;bg:linear-gradient(135deg,#667eea 0%,#764ba2 100%)}.navbar{background:rgba(255,255,255,.95);backdrop-filter:blur(10px);padding:1rem 5%;position:fixed;width:100%;top:0;z-index:1000;-webkit-box-shadow:0 2px 20px rgba(0,0,0,.1);box-shadow:0 2px 20px rgba(0,0,0,.1)}.nav-container{max-width:1200px;margin:0 auto;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-between;-moz-justify-content:space-between;justify-content:space-between;-webkit-align-items:center;-moz-align-items:center;align-items:center}.logo a{font-size:1.8rem;font-weight:700;background:linear-gradient(135deg,#667eea,#764ba2);-webkit-background-clip:text;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent;text-fill-color:transparent;letter-spacing:-.5px;text-decoration:none}.nav-links{display:-webkit-flex;display:-ms-flexbox;display:flex;gap:2rem;-webkit-align-items:center;-moz-align-items:center;align-items:center}.nav-links a{text-decoration:none;color:#1e293b;font-weight:500;-webkit-transition:color .3s;transition:color .3s}.nav-links a:hover{color:#667eea}.npm-badge{background:#1e293b;color:#fff!important;padding:.5rem 1rem;-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;font-size:.9rem}.npm-badge:hover{background:#667eea!important;color:#fff!important}.hero{padding:120px 5% 80px;background:linear-gradient(135deg,#667eea 0,#764ba2 100%);color:#fff;text-align:center}.hero-content{max-width:800px;margin:0 auto}.hero h1{font-size:3.5rem;margin-bottom:1rem;-webkit-animation:fadeInUp .8s ease;animation:fadeInUp .8s ease}.hero .tagline{font-size:1.3rem;opacity:.95;margin-bottom:2rem;-webkit-animation:fadeInUp 1s ease;animation:fadeInUp 1s ease}.stats{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-moz-justify-content:center;justify-content:center;gap:3rem;margin:2rem 0;-webkit-animation:fadeInUp 1.2s ease;animation:fadeInUp 1.2s ease}.stat-item{text-align:center}.stat-number{font-size:2.5rem;font-weight:700;display:block}.stat-label{font-size:.9rem;opacity:.9;text-transform:uppercase;letter-spacing:1px}.cta-buttons{display:-webkit-flex;display:-ms-flexbox;display:flex;gap:1rem;-webkit-justify-content:center;-moz-justify-content:center;justify-content:center;-webkit-animation:fadeInUp 1.4s ease;animation:fadeInUp 1.4s ease}.cta-primary,.cta-secondary{padding:1rem 2rem;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;text-decoration:none;font-weight:600;-webkit-transition:transform .3s,box-shadow .3s;transition:transform .3s,box-shadow .3s}.cta-primary{background:#fff;color:#667eea}.cta-secondary{background:0 0;color:#fff;border:2px solid #fff}.cta-primary:hover,.cta-secondary:hover{-webkit-transform:translateY(-2px);transform:translateY(-2px);-webkit-box-shadow:0 10px 25px rgba(0,0,0,.2);box-shadow:0 10px 25px rgba(0,0,0,.2)}.features{padding:80px 5%;background:#f8fafc}.section-title{text-align:center;font-size:2.5rem;margin-bottom:3rem;color:#1e293b}.features-grid{display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem;max-width:1200px;margin:0 auto}.feature-card{background:#fff;padding:2rem;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-box-shadow:0 5px 15px rgba(0,0,0,.05);box-shadow:0 5px 15px rgba(0,0,0,.05);-webkit-transition:transform .3s;transition:transform .3s}.feature-card:hover{-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-box-shadow:0 10px 25px rgba(102,126,234,.2);box-shadow:0 10px 25px rgba(102,126,234,.2)}.feature-icon{font-size:2.5rem;margin-bottom:1rem}.feature-card h3{margin-bottom:.5rem;color:#1e293b}.feature-card p{color:#64748b}.code-example{padding:80px 5%;background:#fff}.example-container{max-width:1500px;margin:0 auto;gap:2rem;background:#1e293b;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden;-webkit-box-shadow:0 20px 30px rgba(0,0,0,.2);box-shadow:0 20px 30px rgba(0,0,0,.2)}.code-block{padding:2rem;background:#0f172a;color:#e2e8f0;font-family:'Fira Code',monospace;font-size:.9rem;line-height:1.5}.code-block pre{margin:0;white-space:pre-wrap}.output-block{padding:2rem;background:#1e293b;color:#fff}.output-block h3{color:#94a3b8;margin-bottom:1rem;text-transform:uppercase;letter-spacing:1px;font-size:.9rem}.css-output{background:#0f172a;padding:1rem;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:#a5f3fc;font-family:'Fira Code',monospace}.installation{padding:80px 5%;background:#f1f5f9;text-align:center}.install-command{background:#1e293b;color:#fff;padding:1.5rem;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;font-family:'Fira Code',monospace;font-size:1.2rem;max-width:500px;margin:2rem auto;position:relative;cursor:pointer;-webkit-transition:transform .3s;transition:transform .3s}.install-command:hover{-webkit-transform:scale(1.02);transform:scale(1.02)}.install-command::after{content:'📋';position:absolute;right:1rem;opacity:.5}.install-command:hover::after{opacity:1}.footer{background:#1e293b;color:#fff;padding:3rem 5%;text-align:center}.footer-links{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:center;-moz-justify-content:center;justify-content:center;gap:2rem;margin-bottom:2rem}.footer-links a{color:#94a3b8;text-decoration:none;-webkit-transition:color .3s;transition:color .3s}.footer-links a:hover{color:#fff}.copyright{color:#64748b;font-size:.9rem}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@media (max-width:768px){.hero h1{font-size:2.5rem}.stats{flex-direction:column;gap:1rem}.cta-buttons{flex-direction:column;-webkit-align-items:center;-moz-align-items:center;align-items:center}.example-container{grid-template-columns:1fr}.nav-links{display:none}}
/*# sourceMappingURL=global.css.map */`
}

export default sample_codes