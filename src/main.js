import { createApp } from "vue";
import App from "./App.vue";

/* Import FontAwesom */
import { useFontAwesomFun } from "./FontAwesome/FontAwesome.js";
const { FontAwesomeIcon } = useFontAwesomFun();

const app = createApp(App);

/* Use FontAwesome */
app.component("font-awesome-icon", FontAwesomeIcon);

/* Default App Mount */
app.mount("#app");
