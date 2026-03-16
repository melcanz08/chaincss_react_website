import { useChainStyles, $ } from '@melcanz85/chaincss/react';
import { useState } from 'react';

const Sect_runtime_demo = () => {
  const [variant, setVariant] = useState('primary');
  const [isHovered, setIsHovered] = useState(false);
  
  // Runtime styles that change based on state/props!
  const styles = useChainStyles(() => ({
    demoContainer: $()
      .padding('4rem 2rem')
      .backgroundColor('#f8fafc')
      .borderRadius('1rem')
      .textAlign('center')
      .block(),

    dynamicButton: $()
      .backgroundColor(
        variant === 'primary' ? '#667eea' : 
        variant === 'success' ? '#48bb78' : '#f56565'
      )
      .color('white')
      .padding('1rem 2rem')
      .borderRadius('0.5rem')
      .border('none')
      .fontSize('1.1rem')
      .fontWeight('600')
      .cursor('pointer')
      .transform(isHovered ? 'scale(1.05)' : 'scale(1)')
      .transition('all 0.2s ease')
      .boxShadow(isHovered ? '0 10px 15px -3px rgba(0,0,0,0.2)' : '0 4px 6px -1px rgba(0,0,0,0.1)')
      .block(),
    
    badge: $()
      .display('inline-block')
      .backgroundColor('#1e293b')
      .color('white')
      .padding('0.25rem 1rem')
      .borderRadius('9999px')
      .fontSize('0.875rem')
      .marginBottom('1rem')
      .block(),
    
    buttonGroup: $()
      .display('flex')
      .gap('1rem')
      .justifyContent('center')
      .marginTop('2rem')
      .flexWrap('wrap')
      .block(),
    
    variantButton: $()
      .padding('0.5rem 1rem')
      .backgroundColor('#e2e8f0')
      .border('none')
      .borderRadius('0.375rem')
      .cursor('pointer')
      .fontWeight('500')
      .transition('all 0.2s')
      .hover()
        .backgroundColor('#cbd5e0')
      .block()
    }),[variant]
  );

  return (
    <section className="runtime-demo-section" style={{ padding: '80px 5%', background: 'white' }}>
      <h2 className="section-title">🎯 Runtime Mode in Action</h2>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: '#64748b' }}>
        These styles are generated at runtime using <code>useChainStyles()</code> hook. 
        Click the buttons to see dynamic updates!
      </p>
      
      <div className={styles.demoContainer}>
        <span className={styles.badge}>⚡ Fully Dynamic</span>
        
        <h3 style={{ marginBottom: '1rem' }}>Interactive Button Demo</h3>
        
        <button 
          className={styles.dynamicButton}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => alert('Button clicked!')}
        >
          {variant === 'primary' && 'Primary Button'}
          {variant === 'success' && 'Success Button'}
          {variant === 'danger' && 'Danger Button'}
        </button>
        
        <div className={styles.buttonGroup}>
          <button 
            className={styles.variantButton}
            onClick={() => setVariant('primary')}
            style={{ background: variant === 'primary' ? '#667eea' : '#e2e8f0', color: variant === 'primary' ? 'white' : '#1e293b' }}
          >
            Primary
          </button>
          <button 
            className={styles.variantButton}
            onClick={() => setVariant('success')}
            style={{ background: variant === 'success' ? '#48bb78' : '#e2e8f0', color: variant === 'success' ? 'white' : '#1e293b' }}
          >
            Success
          </button>
          <button 
            className={styles.variantButton}
            onClick={() => setVariant('danger')}
            style={{ background: variant === 'danger' ? '#f56565' : '#e2e8f0', color: variant === 'danger' ? 'white' : '#1e293b' }}
          >
            Danger
          </button>
        </div>
        
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f1f5f9', borderRadius: '0.5rem', textAlign: 'left' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
            <strong>Current styles:</strong><br />
            background-color: {variant === 'primary' ? '#667eea' : variant === 'success' ? '#48bb78' : '#f56565'}<br />
            transform: {isHovered ? 'scale(1.05)' : 'scale(1)'}<br />
            box-shadow: {isHovered ? '0 10px 15px -3px rgba(0,0,0,0.2)' : '0 4px 6px -1px rgba(0,0,0,0.1)'}
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h4>How it works:</h4>
        <pre style={{ background: '#1e293b', color: '#a5f3fc', padding: '1rem', borderRadius: '0.5rem', maxWidth: '600px', margin: '1rem auto', textAlign: 'left', overflow: 'auto' }}>
{`const styles = useChainStyles({
  button: () => $()
    .backgroundColor(
      variant === 'primary' ? '#667eea' : 
      variant === 'success' ? '#48bb78' : '#f56565'
    )
    .transform(isHovered ? 'scale(1.05)' : 'scale(1)')
    .hover()
      .transform('scale(1.05)')
    .block()
});`}
        </pre>
        <p style={{ color: '#64748b' }}>
          ✅ Styles update instantly when state changes<br />
          ✅ Automatic cleanup on unmount<br />
          ✅ Same fluent API as build-time mode
        </p>
      </div>
    </section>
  );
};

export default Sect_runtime_demo;