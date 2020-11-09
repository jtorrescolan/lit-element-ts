//info here https://stackoverflow.com/questions/56563243/how-to-import-a-scss-file-into-a-typescript-file

declare module "*.scss" {
  import { css, CSSResult } from 'lit-element';
  const scss: (params: { css: typeof css}) => CSSResult;
  export default scss;
}

declare module '*.css' {
  import { CSSResult } from 'lit-element';
  const css: CSSResult;
  export default css;
}