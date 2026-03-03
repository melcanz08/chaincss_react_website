
const Sect_example = () => {
    const code_example = `<@
const chain = get('./chaincss/chain.jcss');

    // Overwrite your chaining file
    chain.logo.textDecoration = 'none';

compile(chain);
@>


@keyframes fadeInUp {
<@
    run(
        chain.opacity('0').transform('translateY(20px)')
        .block('from'),
        chain.opacity('1').transform('translateY(0)')
        .block('to'),
    );
@>
}

/* Responsive */
@media (max-width: 768px) {
<@
    run(
        chain.fontSize('2.5rem').block('.hero h1'),
        chain.flexDirection('column').gap('1rem')
        .block('.stats'),
        chain.flexDirection('column').alignItems('center')
        .block('.cta-buttons'),
        chain.gridTemplateColumns('1fr').block('.example-container'),
        chain.display('none').block('.nav-links')
    );
@>
}

// Note: Above is your main.jcss code you have to make a separate file that contains your chaining code.

// Example code in your separate chain.jcss: 

const nav_container = chain
    .maxWidth('1200px')
    .margin('0 auto')
    .display('flex')
    .justifyContent('space-between')
    .alignItems('center')
    .block('.nav-container');

const logo = chain
    .fontSize('1.8rem')
    .fontWeight('700')
    .bg('linear-gradient(135deg, #667eea, #764ba2)')
    .backgroundClip('text')
    .textFillColor('transparent')
    .letterSpacing('-0.5px')
    .block('.logo a');`;
    const code_example2 = `.nav-container {
   max-width: 1200px;
   margin: 0 auto;
   display: -webkit-flex;
   display: -ms-flexbox;
   display: flex;
   -webkit-justify-content: space-between;
   -moz-justify-content: space-between;
   justify-content: space-between;
   -webkit-align-items: center;
   -moz-align-items: center;
   align-items: center;
 }
 .logo {
   font-size: 1.8rem;
   font-weight: 700;
   background: linear-gradient(135deg, #667eea, #764ba2);
   -webkit-background-clip: text;
   -webkit-background-clip: text;
   background-clip: text;
   -webkit-text-fill-color: transparent;
   -moz-text-fill-color: transparent;
   text-fill-color: transparent;
   letter-spacing: -0.5px;
   text-decoration: none; // this is the overwritten code inserted
}

@keyframes fadeInUp {
     from {
        opacity: 0;
        -webkit-transform: translateY(20px);
        transform: translateY(20px);
     }
     
     to {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
     }
 }
 
 /* Responsive */
 @media (max-width: 768px) {
     .hero h1 {
        font-size: 2.5rem;
     }
     
     .stats {
        flex-direction: column;
        gap: 1rem;
     }
     
     .cta-buttons {
        flex-direction: column;
        -webkit-align-items: center;
        -moz-align-items: center;
        align-items: center;
     }
     
     .example-container {
        grid-template-columns: 1fr;
     }
     
     .nav-links {
        display: none;
     }
 }`;
	return (
		<section id="examples" className="code-example">
            <h2 className="section-title">See it in Action</h2>
            <div className="example-container">
                <div className="code-block">
                    <pre>
                        {code_example}
                    </pre>
                </div>
                <div className="output-block">
                    <h3>Generated CSS</h3>
                    <div className="css-output">
                        <pre>
                            {code_example}
                        </pre>
                    </div>
                </div>
            </div>
        </section>
	)
}

export default Sect_example