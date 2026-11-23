/**
 * "/" has no content of its own: it sends visitors to /ar/ (default), or to the
 * language they picked before. Works on a static host: a JS redirect that honours the
 * saved choice, with a meta refresh and a plain link as fallbacks.
 */
const redirect = `(function(){var l='ar';try{var s=localStorage.getItem('lang');if(s==='en'||s==='ar')l=s;}catch(e){}location.replace('/'+l+'/'+location.hash);})();`;

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="1; url=/ar/" />
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: tiny static redirect */}
      <script dangerouslySetInnerHTML={{ __html: redirect }} />
      <p style={{ fontFamily: "system-ui", padding: 24 }}>
        <a href="/ar/">العربية</a> · <a href="/en/">English</a>
      </p>
    </>
  );
}
