
const Sect_feature = () => {
	return(
		<section id="features" className="features">
	        <h2 className="section-title">Why chaincss?</h2>
	        <p className="tagline" style={{textAlign: "center"}}>In 2025, the web development community is moving away from runtime CSS-in-JS due to performance costs.</p>
			<p className="tagline" style={{textAlign: "center"}}>Chaincss was built different - we process your styles at **compile time**, so browsers only see optimized, pure CSS.</p> 
			<p className="tagline" style={{textAlign: "center", paddingBottom: "50px"}}>Zero runtime, no overhead, no compromises.</p>
	            
	        <div className="features-grid">
	            <div className="feature-card">
	                <div className="feature-icon">🔗</div>
	                <h3>Fluent API</h3>
	                <p>Chain methods naturally. Write CSS properties as methods that read like sentences.</p>
	            </div>
	            <div className="feature-card">
	                <div className="feature-icon">⚡</div>
	                <h3>Lightweight</h3>
	                <p>Compile-time for blazing fast sites. Simple JavaScript to CSS transpiler without the bloat.</p>
	            </div>
	            <div className="feature-card">
	                <div className="feature-icon">🎨</div>
	                <h3>Intuitive Syntax</h3>
	                <p>CSS properties become chain methods. End with .block() to define your selector.</p>
	            </div>
	            <div className="feature-card">
	                <div className="feature-icon">🔄</div>
	                <h3>compile() & run()</h3>
	                <p>Simple compilation process. Transform your JavaScript styles into clean CSS.</p>
	            </div>
	            <div className="feature-card">
	                <div className="feature-icon">🔄</div>
	                <h3>Auto Prefixing</h3>
	                <p>Automatic vendor prefixing for cross-browser compatibility. No more -webkit- headaches!</p>
	            </div>
	            <div className="feature-card">
	                    <div className="feature-icon">🗺️</div>
	                    <h3>Source Maps</h3>
	                    <p>Debug your original .jcss files directly in browser DevTools.</p>
	            </div>
	            <div className="feature-card">
	                <div className="feature-icon">🔄</div>
	                <h3>.jcss Files</h3>
	                <p>Write JavaScript + CSS together in .jcss files. Compile to clean CSS.</p>
	            </div>
	        </div>
	    </section>
	)
}

export default Sect_feature