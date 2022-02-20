import "./index.css";
import { register } from "./customElement";

import HelloWorld from "./components/x-hello-world.ce.vue";
import Avatar from "./components/x-avatar.ce.vue";

register({
  "x-hello-world": HelloWorld,
  "x-avatar": Avatar,
});
