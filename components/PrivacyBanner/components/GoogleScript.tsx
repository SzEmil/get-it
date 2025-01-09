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

    </>
    {/* )} */}
  </>
);
