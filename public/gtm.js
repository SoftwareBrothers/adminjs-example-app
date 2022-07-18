(function () {
  const headGtm = `
  <!-- Google Tag Manager -->
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-K6R3HZ4');
  <!-- End Google Tag Manager -->
  `;
  const bodyGtm = `
  <!-- Google Tag Manager (noscript) -->
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6R3HZ4"
  height="0" width="0" style="display:none;visibility:hidden"></iframe>
  <!-- End Google Tag Manager (noscript) -->
  `;
  const headScript = window.document.createElement('script');
  headScript.type = 'text/javascript';
  headScript.text = headGtm;
  const bodyScript = window.document.createElement('noscript');
  bodyScript.text = bodyGtm;
  
  window.document.head.appendChild(headScript);
  window.document.body.appendChild(bodyScript);
})();
