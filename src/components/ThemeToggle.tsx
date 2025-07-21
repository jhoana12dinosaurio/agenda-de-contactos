import { useState, useEffect } from 'react';
import solimg from '../sol.png'; 
import lunaimg from '../luna.png'; 


function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = sessionStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Efecto para aplicar el tema al cargar el componente
  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-theme' : 'light-theme';
  }, [isDarkMode]);

  const handleToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    sessionStorage.setItem('theme', newTheme ? 'dark' : 'light');
    
    document.body.className = newTheme ? 'dark-theme' : 'light-theme';
  };

  return (
    <button onClick={handleToggle} className="theme-toggle">
  {isDarkMode
    ? <img src={lunaimg} alt="Luna" style={{ width: 24, height: 24, verticalAlign: 'middle' }} />
    : <img src={solimg} alt="Sol" style={{ width: 24, height: 24, verticalAlign: 'middle' }} />}
</button>
  );
}

export default ThemeToggle