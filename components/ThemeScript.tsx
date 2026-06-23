// Runs before paint to set the theme class and avoid a flash of the wrong theme.
// Default = system preference; explicit user choice persists in localStorage.
const ThemeScript = () => {
  const code = `(function(){try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
};

export default ThemeScript;
