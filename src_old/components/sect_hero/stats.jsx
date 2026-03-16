import { useState, useEffect } from 'react';

const PackageVersion = () => {
  const [version, setVersion] = useState('Loading...');

  useEffect(() => {
    async function getLatestVersion() {
      try {
        const response = await fetch('https://registry.npmjs.org/@melcanz85/chaincss/latest');
        const data = await response.json();
        setVersion(data.version);
      } catch (error) {
        console.error('Failed to fetch version:', error);
        setVersion('Unavailable');
      }
    }
    
    getLatestVersion();
  }, []);

  return version;
}


const DownloadStats = () => {
  const [totalDownloads, setTotalDownloads] = useState('Loading...');

  useEffect(() => {
    async function fetchTotalDownloads() {
      try {
        const endDate = new Date();
        const startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 18);
        
        const start = startDate.toISOString().split('T')[0];
        const end = endDate.toISOString().split('T')[0];
        
        const response = await fetch(
          `https://api.npmjs.org/downloads/range/${start}:${end}/@melcanz85/chaincss`
        );
        const data = await response.json();
        
        const total = data.downloads.reduce((sum, day) => sum + day.downloads, 0);
        setTotalDownloads(total.toLocaleString());
        
      } catch (error) {
        console.error('Failed to fetch downloads:', error);
        setTotalDownloads('Unavailable');
      }
    }
    
    fetchTotalDownloads();
  }, []);

  return totalDownloads;
}

export { PackageVersion, DownloadStats };