import { PackageVersion, DownloadStats } from "./stats";

const Sect_hero = () => {
	return(
		<section className="hero">
	        <div className="hero-content">
	            <h1>Write CSS with JavaScript</h1>
	            <p className="tagline">chaincss - A simple, elegant JavaScript to CSS transpiler with fluent API</p>
	            <p className="tagline">The performance of vanilla CSS with the power of JS</p>
	            <div className="stats">
	                <div className="stat-item">
	                    <span id="downloads" className="stat-number">
	                    	<DownloadStats />
	                   	</span>
	                    <span className="stat-label">Downloads</span>
	                </div>
	                <div className="stat-item">
	                    <span id="version" className="stat-number">
	                    	<PackageVersion />
	                    </span>
	                    <span className="stat-label">Current Version</span>
	                </div>
	                <div className="stat-item">
	                    <span className="stat-number">100%</span>
	                    <span className="stat-label">JavaScript</span>
	                </div>
	            </div>

	            <div className="cta-buttons">
	                <a href="#get-started" className="cta-primary">Get Started</a>
	                <a target="_blank" href="https://github.com/melcanz08/chaincss" className="cta-secondary">GitHub</a>
	            </div>
	        </div>
	    </section>
	)
}

export default Sect_hero