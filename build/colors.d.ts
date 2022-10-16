/**
 * Do not edit directly
 * Generated on Sun, 16 Oct 2022 01:13:36 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "tokenSetOrder": {
    "0": DesignToken
  },
  "primitive": {
    "blue": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "700": DesignToken
    },
    "green": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "700": DesignToken
    },
    "red": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "700": DesignToken
    },
    "yellow": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "700": DesignToken
    },
    "brown": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "700": DesignToken
    },
    "gray": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "700": DesignToken
    },
    "black": {
      "100": DesignToken,
      "200": DesignToken,
      "400": DesignToken,
      "500": DesignToken,
      "700": DesignToken
    }
  },
  "semantic": {
    "primary": {
      "light": DesignToken,
      "main": DesignToken,
      "dark": DesignToken
    },
    "secondary": {
      "light": DesignToken,
      "main": DesignToken,
      "dark": DesignToken
    },
    "tertiary": {
      "light": DesignToken,
      "main": DesignToken,
      "dark": DesignToken
    }
  }
}