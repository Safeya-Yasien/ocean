export interface IClient {
  imageUrl: string;
  alt: string;
}

export interface IFeature {
  imageUrl: string;
  title: string;
  content: string;
}

export interface IFeatureBlock extends IFeature {
  isReversed?: boolean;
}

export interface IPricing {
  title: string;
  description: string;
  monthlyPrice: number;
  annuallyPrice: number;
  features: string[];
  isMostPopular?: boolean;
  glowPosition?: "right" | "left";
}

export interface ITestimonial {
  imageUrl: string;
  name: string;
  role: string;
  review: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}

export type IPricingMode = "monthly" | "annually";
