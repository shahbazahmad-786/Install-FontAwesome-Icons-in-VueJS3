import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* Solid Icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
/* Brands Icons */
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";
/* Regular Icons */
import { faUser } from "@fortawesome/free-regular-svg-icons";

/* Add Icons in this Library */
library.add(faUserSecret, faTwitter, faFacebook, faUser);

export const useFontAwesomeFun = () => {
  return { FontAwesomeIcon };
};
