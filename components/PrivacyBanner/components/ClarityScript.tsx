import Script from 'next/script';

export const ClarityScript = () => {
  return (
    // process.env.NODE_ENV === "production" && (
    <Script type="text/javascript" strategy="lazyOnload" id="clarity-analytics">
      {` (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "ns68m0iflw");`}
    </Script>
    // )
  );
};
