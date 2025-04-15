export type NavItem = {
  title       : string;
  href        : string;
  disavled?   : boolean;
};

export type MarketingConfig = {
  mainNav     : NavItem[];
}

export type SiteConfig = {
  name        : string;
  description : string;
  url         : string;
  ogIMage     : string;
  links       : {
    x : string,
    github : string
  }
}
