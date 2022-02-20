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
