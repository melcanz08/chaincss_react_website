
const Sect_feature = () => {
	return(
		<section id="features" className="features">
	        <h2 className="section-title">Why chaincss?</h2>           
	        <div className="features-grid">
	            <div className="feature-card">
	                <div className="feature-icon">🔗</div>
	                <h3>Fluent API</h3>
	                <p>Chain methods naturally. Write CSS properties as methods that read like sentences. It's a jquery like syntax but in a stylesheet form.</p>
	            </div>
	            <div className="feature-card">
	                <div className="feature-icon">⚡</div>
	                <h3>Lightweight</h3>
	                <p>Compile-time for blazing fast sites. Simple JavaScript to CSS transpiler without the bloat.</p>
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
	        </div>
	    </section>
	)
}

export default Sect_feature