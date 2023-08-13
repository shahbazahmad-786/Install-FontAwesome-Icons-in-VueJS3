# [Install FontAwesome in Vue3](https://fontawesome.com)

## Install Using Commands

**Save FontAwesome**

```bash
npm i --save @fortawesome/fontawesome-svg-core
```

**Free Solid,Regular & Brands SVG Icons**

```bash
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icon
npm i --save @fortawesome/free-brands-svg-icons
```

**FontAwesome Vue3 Latest**

```bash
npm i --save @fortawesome/vue-fontawesome@latest-3
```

---

## Create a New JS File (src/FontAwesome/FontAwesome.js)

```js
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
```

---

## Change in main.js

```js
/* Import FontAwesom */
import { useFontAwesomeFun } from "./FontAwesome/FontAwesome.js";
const { FontAwesomeIcon } = useFontAwesomeFun();

/* Use FontAwesome */
app.component("font-awesome-icon", FontAwesomeIcon);
```

## Uses in Template

**Solid Icon**

```html
<!-- Solid Icon -->
<font-awesome-icon :icon="['fas', 'faUserSecret']" beat size="2xl" style="color: #0059a7" />
```

**Brands Icon**

```html
<!-- Brands Icon -->
<font-awesome-icon :icon="['fab', 'facebook']" />
```

**Regular Icon**

```html
<!-- Regular Icon -->
<font-awesome-icon :icon="['fasr', 'user']" />
```

[Search from FontAwesome Website](https://fontawesome.com/search)
