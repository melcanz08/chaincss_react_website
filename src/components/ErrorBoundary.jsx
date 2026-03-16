import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#64748b' }}>
          <h3>⚠️ Runtime Demo Temporarily Unavailable</h3>
          <p>The interactive runtime example is being updated.</p>
          <p style={{ fontSize: '0.9rem' }}>Check back soon!</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;