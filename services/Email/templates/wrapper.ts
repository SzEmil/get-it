export const wrapper = (children: string) => ` <!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    ${children}

    <div id="sig-container" style="margin-top: 15px; padding-top: 6px; border-top: 1px dashed #ddd">
      <div style="margin-top: 0px; margin-left: 74px" id="sigDetailsWrapper">
        <p
          style="
            font-family: Helvetica, sans-serif;
            font-size: 12px;
            line-height: 14px;
            color: #333;
            margin-top: 0;
            margin-left: 0;
            padding-left: 0;
          "
        >
        <br />
          <span
            ><a href="mailto:info@narevka.com" id="sigEmail" style="color: #428bca"
              >info@narevka.com</a
            ></span
          >
          <span id="sigMobile">/ +48 609-050-548</span>
        </p>
        <p
          style="
            font-family: Helvetica, sans-serif;
            font-size: 12px;
            line-height: 14px;
            color: rgb(51, 51, 51);
            margin-top: 0px;
          "
          id="sigCompanyWrapper"
        >
          <strong><span id="sigCompany">Karol Sapiołko ToKnowAI</span></strong
          ><br />
          <span
            ><a href="https://toknowai.pl" id="sigWebsite" style="color: #428bca"
              >https://toknowai.pl</a
            ></span
          >
          <br />
        </p>
        <p
          style="
            font-family: Helvetica, sans-serif;
            font-size: 12px;
            line-height: 14px;
            color: #333;
          "
        >
          <span id="facebookIcon"
            ><a href="/"
              ><img
                src="https://s3.amazonaws.com/rkjha/signature-maker/icons/facebook_circle_color-20.png"
                width="20px"
                height="20px" /></a
          ></span>
          <span id="linkedinIcon"
            ><a href="/"
              ><img
                src="https://s3.amazonaws.com/rkjha/signature-maker/icons/linkedin_circle_color-20.png"
                width="20px"
                height="20px" /></a
          ></span>
          <br />
        </p>
      </div>
    </div>
  </body>
</html>
`;
