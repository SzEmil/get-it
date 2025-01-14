
// import { useUserStore } from "../../stores/user/user.store";
// import { AnalyticsEvent, EventParams } from "./types";

// export const GoogleAnalyticsClient = (action: AnalyticsEvent, params: EventParams) => {
//   const privacy = useUserStore.getState().privacy;
//   if (privacy) {
//     try {
//       if (privacy.isAnalytics && privacy.expiriesOn) {
//         const today = new Date();
//         const expirationDate = new Date(privacy.expiriesOn);
//         if (expirationDate >= today) window.gtag("event", action, params);
//       }
//     } catch (e) {
//       console.log("Google Analytics event does not work because you are in development mode");
//     }
//   }
// };
