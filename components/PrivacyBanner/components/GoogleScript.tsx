import Script from 'next/script';

export const GoogleAnalyticsScript = () => (
  <>
    {/* {process.env.NODE_ENV === "production" && ( */}
    <>
      <Script
        async
        id="google-analytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_SIGNAL_ID}`}
      />
      <Script strategy="lazyOnload" id="google-analytics-enhanced-measurement">
        {`  window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'AW-11550321972');
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_SIGNAL_ID}', { 'debug_mode':true });`}
      </Script>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-11513086855"
      ></script>

      <Script strategy="lazyOnload" id="google-ads">
        {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11513086855');`}
      </Script>

      <Script strategy="lazyOnload" id="google-ads">
        {` (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W6GWN58V');
`}
      </Script>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W6GWN58V"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
    </>
    {/* )} */}
  </>
);
