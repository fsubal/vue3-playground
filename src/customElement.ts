import { type Component, defineCustomElement } from "vue";

export function register(components: Record<string, Component>) {
  Object.entries(components).forEach(([name, klass]) => {
    customElements.define(
      name,
      // @ts-expect-error 式は、複雑すぎて表現できない共用体型を生成します。ts(2590)
      defineCustomElement(klass)
    );
  });
}

const TAG_NAME_RULE = /^x-[a-z-]+$/;

export function fileNameToTag(pathname: string) {
  const [filename] = pathname.split("/").slice(-1);
  const tagName = filename.replace(".ce.vue", "");

  if (import.meta.env.MODE === "development") {
    if (TAG_NAME_RULE.test(tagName) === false) {
      throw new TypeError(
        `The filename of ./components should be like "x-〇〇.ce.vue". Got ${pathname}`
      );
    }
  }

  return tagName;
}
