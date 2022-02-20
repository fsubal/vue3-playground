import "./index.css";
import { register } from "./customElement";
import HelloWorld from "./components/HelloWorld.ce.vue";

register({
  "x-hello-world": HelloWorld,
});
