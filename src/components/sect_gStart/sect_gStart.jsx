import useCopyToClipboard from "./copyToClipboard";

const Sect_gStart = () => {
    const { copyToClipboard } = useCopyToClipboard();
  
    const handleCopy = () => { 
        copyToClipboard('npm install @melcanz85/chaincss');
        alert('Command copied! Now paste it in your command prompt or terminal.');
    };

   return (
        <section id="get-started" className="installation">
            <h2 className="section-title">Start Using chaincss Today</h2>
            <p>Install via npm and transform how you write CSS</p>
            <div className="install-command" onClick={handleCopy}>
                npm install @melcanz85/chaincss
            </div>
            <p style={{color: "#64748b", marginTop: "1rem"}}>Then create your .jcss files and compile!</p>
        </section>
   ) 
}

export default Sect_gStart
