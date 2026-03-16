const Sect_dual_mode = () => {
  return (
    <section className="dual-mode-section" style={{ padding: '80px 5%', background: '#f1f5f9' }}>
      <h2 className="section-title">One API. Two Superpowers.</h2>
      <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem', color: '#64748b' }}>
        The only CSS-in-JS library that lets you <strong>choose your runtime cost</strong> per component.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Build-time Card */}
        <div style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ background: '#1e293b', color: 'white', padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>⚡</span>
            <h3 style={{ display: 'inline', margin: 0 }}>Build-time Mode</h3>
          </div>
          <div style={{ padding: '2rem' }}>
            <div style={{ background: '#0f172a', color: '#a5f3fc', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <div>// button.jcss</div>
              <div>const button = $()</div>
              <div>&nbsp;&nbsp;.backgroundColor('#667eea')</div>
              <div>&nbsp;&nbsp;.color('white')</div>
              <div>&nbsp;&nbsp;.padding('0.75rem 1.5rem')</div>
              <div>&nbsp;&nbsp;.borderRadius('0.375rem')</div>
              <div>&nbsp;&nbsp;.block('.btn');</div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#c6f6d5', color: '#22543d', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>✅ 0 KB JavaScript</span>
              <span style={{ background: '#bee3f8', color: '#2a4365', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>📦 Compiled to CSS</span>
            </div>
            <p style={{ color: '#4a5568', marginBottom: 0 }}><strong>Perfect for:</strong> Layouts, design systems, static components</p>
          </div>
        </div>
        
        {/* Runtime Card */}
        <div style={{ background: 'white', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ background: '#667eea', color: 'white', padding: '1rem', textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', marginRight: '0.5rem' }}>🎯</span>
            <h3 style={{ display: 'inline', margin: 0 }}>Runtime Mode</h3>
          </div>
          <div style={{ padding: '2rem' }}>
            <div style={{ background: '#0f172a', color: '#a5f3fc', padding: '1rem', borderRadius: '0.5rem', fontFamily: 'monospace', fontSize: '0.9rem', marginBottom: '1rem' }}>
              <div>// Button.jsx</div>
              <div>const styles = useChainStyles({'{'}</div>
              <div>&nbsp;&nbsp;button: () =&gt; $()</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;.backgroundColor(</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;variant === 'primary' ? '#667eea' : '#48bb78'</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;)</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;.hover().transform('scale(1.05)')</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;.block()</div>
              <div>{'}'});</div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span style={{ background: '#fed7d7', color: '#742a2a', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>🔄 Fully dynamic</span>
              <span style={{ background: '#feebc8', color: '#7b341e', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.875rem' }}>🧹 Auto cleanup</span>
            </div>
            <p style={{ color: '#4a5568', marginBottom: 0 }}><strong>Perfect for:</strong> Interactive components, theme switching, A/B tests</p>
          </div>
        </div>
      </div>
      
      {/* The Killer Feature */}
      <div style={{ maxWidth: '800px', margin: '3rem auto 0', padding: '2rem', background: 'linear-gradient(135deg, #667eea, #764ba2)', borderRadius: '1rem', color: 'white', textAlign: 'center' }}>
        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>✨ Use BOTH in the Same Project ✨</h3>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          StyleX can't do this. Emotion forces runtime for everything.<br />
          <strong>Only ChainCSS lets you choose per component.</strong>
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '0.5rem', flex: 1, minWidth: '200px' }}>
            <strong>⚡ layout.jcss</strong><br />
            <span style={{ fontSize: '0.9rem' }}>Build-time: zero cost</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', padding: '1rem', borderRadius: '0.5rem', flex: 1, minWidth: '200px' }}>
            <strong>🎯 Card.jsx</strong><br />
            <span style={{ fontSize: '0.9rem' }}>Runtime: dynamic styles</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sect_dual_mode;