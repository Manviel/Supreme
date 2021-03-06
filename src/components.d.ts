/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppBag {}
  interface AppBanner {}
  interface AppCard {
    'price': string;
    'src': string;
    'status': string;
    'title': string;
  }
  interface AppCatalog {}
  interface AppDetail {}
  interface AppFooter {}
  interface AppHeader {}
  interface AppHome {}
  interface AppLinks {}
  interface AppProfile {}
  interface AppRoot {}
}

declare global {


  interface HTMLAppBagElement extends Components.AppBag, HTMLStencilElement {}
  var HTMLAppBagElement: {
    prototype: HTMLAppBagElement;
    new (): HTMLAppBagElement;
  };

  interface HTMLAppBannerElement extends Components.AppBanner, HTMLStencilElement {}
  var HTMLAppBannerElement: {
    prototype: HTMLAppBannerElement;
    new (): HTMLAppBannerElement;
  };

  interface HTMLAppCardElement extends Components.AppCard, HTMLStencilElement {}
  var HTMLAppCardElement: {
    prototype: HTMLAppCardElement;
    new (): HTMLAppCardElement;
  };

  interface HTMLAppCatalogElement extends Components.AppCatalog, HTMLStencilElement {}
  var HTMLAppCatalogElement: {
    prototype: HTMLAppCatalogElement;
    new (): HTMLAppCatalogElement;
  };

  interface HTMLAppDetailElement extends Components.AppDetail, HTMLStencilElement {}
  var HTMLAppDetailElement: {
    prototype: HTMLAppDetailElement;
    new (): HTMLAppDetailElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppLinksElement extends Components.AppLinks, HTMLStencilElement {}
  var HTMLAppLinksElement: {
    prototype: HTMLAppLinksElement;
    new (): HTMLAppLinksElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-bag': HTMLAppBagElement;
    'app-banner': HTMLAppBannerElement;
    'app-card': HTMLAppCardElement;
    'app-catalog': HTMLAppCatalogElement;
    'app-detail': HTMLAppDetailElement;
    'app-footer': HTMLAppFooterElement;
    'app-header': HTMLAppHeaderElement;
    'app-home': HTMLAppHomeElement;
    'app-links': HTMLAppLinksElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }
}

declare namespace LocalJSX {
  interface AppBag {}
  interface AppBanner {}
  interface AppCard {
    'price'?: string;
    'src'?: string;
    'status'?: string;
    'title'?: string;
  }
  interface AppCatalog {}
  interface AppDetail {}
  interface AppFooter {}
  interface AppHeader {}
  interface AppHome {}
  interface AppLinks {}
  interface AppProfile {}
  interface AppRoot {}

  interface IntrinsicElements {
    'app-bag': AppBag;
    'app-banner': AppBanner;
    'app-card': AppCard;
    'app-catalog': AppCatalog;
    'app-detail': AppDetail;
    'app-footer': AppFooter;
    'app-header': AppHeader;
    'app-home': AppHome;
    'app-links': AppLinks;
    'app-profile': AppProfile;
    'app-root': AppRoot;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-bag': LocalJSX.AppBag & JSXBase.HTMLAttributes<HTMLAppBagElement>;
      'app-banner': LocalJSX.AppBanner & JSXBase.HTMLAttributes<HTMLAppBannerElement>;
      'app-card': LocalJSX.AppCard & JSXBase.HTMLAttributes<HTMLAppCardElement>;
      'app-catalog': LocalJSX.AppCatalog & JSXBase.HTMLAttributes<HTMLAppCatalogElement>;
      'app-detail': LocalJSX.AppDetail & JSXBase.HTMLAttributes<HTMLAppDetailElement>;
      'app-footer': LocalJSX.AppFooter & JSXBase.HTMLAttributes<HTMLAppFooterElement>;
      'app-header': LocalJSX.AppHeader & JSXBase.HTMLAttributes<HTMLAppHeaderElement>;
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-links': LocalJSX.AppLinks & JSXBase.HTMLAttributes<HTMLAppLinksElement>;
      'app-profile': LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
    }
  }
}


