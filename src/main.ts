import "./index.css";
import { fileNameToTag, register } from "./customElement";
import { objectMap } from "./util";

/**
 * だいたい ↓ と等価。それを自動でやってくれるやつ。
 *
 * ```ts
 * import Avatar from './components/x-avatar.ce.vue'
 * import HelloWorld from './components/x-hello-world.ce.vue'
 *
 * register({
 *   'x-avatar': Avatar,
 *   'x-hello-world': HelloWorld,
 * })
 * ```
 */
const tagToClass = objectMap(
  /**
   * @see https://vitejs.dev/guide/features.html#glob-import
   */
  import.meta.globEager("./components/*.ce.vue"),
  (pathname, module) => {
    if (!("default" in module)) {
      throw new TypeError(
        `The file of ./components should export default Vue component`
      );
    }

    return [fileNameToTag(pathname), module.default];
  }
);

register(tagToClass);
