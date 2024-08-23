import useStore from "../stores/store";
import { useUserStore } from "../stores/user/user.store";

export const useValidatePrivacy = () => {
  const privacy = useStore(useUserStore, (state) => state.privacy);
  if (privacy === undefined) return false;
  if (privacy) {
    if (privacy.isAnalytics) {
      if (privacy.expiriesOn !== null) {
        const today = new Date();
        const expirationDate = new Date(privacy.expiriesOn);

        if (expirationDate >= today) {
          return true;
        } else {
          return null;
        }
      }
    }
    return false;
  }
  return null;
};
