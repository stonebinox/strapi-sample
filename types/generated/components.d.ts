import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCtaCallout extends Struct.ComponentSchema {
  collectionName: 'components_common_cta_callouts';
  info: {
    displayName: 'CTA Callout';
    icon: 'cursor';
  };
  attributes: {
    ctaID: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaUrl: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
    richDescription: Schema.Attribute.RichText & Schema.Attribute.Required;
    secondaryCtaID: Schema.Attribute.String;
    secondaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaUrl: Schema.Attribute.String;
  };
}

export interface CommonCtaCalloutStudio extends Struct.ComponentSchema {
  collectionName: 'components_common_cta_callout_studios';
  info: {
    displayName: 'CTA Callout Studio';
    icon: 'bulletList';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    primaryCta: Schema.Attribute.Component<'common.links', false> &
      Schema.Attribute.Required;
    secondaryCta: Schema.Attribute.Component<'common.links', false>;
    subtitle: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface CommonDomainSuffix extends Struct.ComponentSchema {
  collectionName: 'components_common_domain_suffixes';
  info: {
    displayName: 'Domain Suffix';
    icon: 'connector';
  };
  attributes: {
    suffix: Schema.Attribute.Enumeration<['au', 'nz']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'au'>;
  };
}

export interface CommonExplainerWithTestimonials
  extends Struct.ComponentSchema {
  collectionName: 'components_common_explainer_with_testimonials';
  info: {
    displayName: 'Explainer With Testimonials';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    list: Schema.Attribute.Component<'common.text-list', false> &
      Schema.Attribute.Required;
    primaryCta: Schema.Attribute.Component<'common.links', false> &
      Schema.Attribute.Required;
    testimonials: Schema.Attribute.Component<
      'shared.testimonial-group',
      false
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.Component<'common.heading', false>;
  };
}

export interface CommonFaqBanner extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_banners';
  info: {
    displayName: 'FAQ Banner';
    icon: 'pin';
  };
  attributes: {
    faqBlock: Schema.Attribute.Component<'common.faq-block', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Component<'common.heading', false>;
  };
}

export interface CommonFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_blocks';
  info: {
    displayName: 'FAQ Block';
    icon: 'server';
  };
  attributes: {
    faqEntry: Schema.Attribute.Component<'common.faq-entry', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFaqEntry extends Struct.ComponentSchema {
  collectionName: 'components_common_faq_entries';
  info: {
    displayName: 'FAQ Entry';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFeatureBannerVerticalSplit
  extends Struct.ComponentSchema {
  collectionName: 'components_common_feature_banner_vertical_splits';
  info: {
    displayName: 'Feature Banner Vertical Split';
    icon: 'bulletList';
  };
  attributes: {
    bannerImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaLink: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.RichText & Schema.Attribute.Required;
    title: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface CommonFeaturedBanner extends Struct.ComponentSchema {
  collectionName: 'components_common_featured_banners';
  info: {
    displayName: 'Featured Banner';
    icon: 'earth';
  };
  attributes: {
    logos: Schema.Attribute.Media<'images' | 'files', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface CommonFeaturedBannerSplit extends Struct.ComponentSchema {
  collectionName: 'components_common_featured_banner_splits';
  info: {
    displayName: 'Featured Banner Split';
    icon: 'bulletList';
  };
  attributes: {
    ctaID: Schema.Attribute.String;
    ctaLabel: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    description: Schema.Attribute.Component<'common.text-list', true> &
      Schema.Attribute.Required;
    featuredImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    footerText: Schema.Attribute.RichText & Schema.Attribute.Required;
    hasCta: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface CommonFooter extends Struct.ComponentSchema {
  collectionName: 'components_common_footers';
  info: {
    displayName: 'Footer';
    icon: 'pin';
  };
  attributes: {
    androidStoreLink: Schema.Attribute.String;
    appleStoreLink: Schema.Attribute.String;
    appSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    contactSectionTitle: Schema.Attribute.String & Schema.Attribute.Required;
    copyrightLink: Schema.Attribute.String & Schema.Attribute.Required;
    facebookLink: Schema.Attribute.String;
    instagramLink: Schema.Attribute.String;
    legalLink: Schema.Attribute.String & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'common.links', true> &
      Schema.Attribute.Required;
    phone: Schema.Attribute.String & Schema.Attribute.Required;
    privacyLink: Schema.Attribute.String & Schema.Attribute.Required;
    sitemapLink: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFreeBlock extends Struct.ComponentSchema {
  collectionName: 'components_common_free_blocks';
  info: {
    displayName: 'Free Block';
    icon: 'command';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface CommonHeading extends Struct.ComponentSchema {
  collectionName: 'components_common_headings';
  info: {
    displayName: 'Heading';
    icon: 'bold';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface CommonHeroWithTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_common_hero_with_testimonials';
  info: {
    displayName: 'HeroWithTestimonial';
    icon: 'monitor';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    shortDescription: Schema.Attribute.RichText & Schema.Attribute.Required;
    testimonial: Schema.Attribute.Component<'shared.testimonial', false>;
    title: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface CommonLinks extends Struct.ComponentSchema {
  collectionName: 'components_common_links';
  info: {
    displayName: 'Links';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    linkLabel: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonMap extends Struct.ComponentSchema {
  collectionName: 'components_common_maps';
  info: {
    displayName: 'Map';
    icon: 'earth';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    latitude: Schema.Attribute.Decimal & Schema.Attribute.Required;
    longitude: Schema.Attribute.Decimal & Schema.Attribute.Required;
    studioHoursText: Schema.Attribute.String & Schema.Attribute.Required;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    zoomLevel: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
  };
}

export interface CommonMapStudio extends Struct.ComponentSchema {
  collectionName: 'components_common_map_studios';
  info: {
    displayName: 'Map + Studio';
    icon: 'clock';
  };
  attributes: {
    contactTitle: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
    locationTitle: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
    studioTitle: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface CommonMetadata extends Struct.ComponentSchema {
  collectionName: 'components_common_metadata';
  info: {
    displayName: 'metadata';
    icon: 'apps';
  };
  attributes: {
    keywords: Schema.Attribute.Text & Schema.Attribute.Required;
    pageTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonNavigator extends Struct.ComponentSchema {
  collectionName: 'components_common_navigators';
  info: {
    displayName: 'Navigator';
    icon: 'hashtag';
  };
  attributes: {
    menuItem: Schema.Attribute.Component<'common.navigator-option', true> &
      Schema.Attribute.Required;
  };
}

export interface CommonNavigatorOption extends Struct.ComponentSchema {
  collectionName: 'components_common_navigator_options';
  info: {
    displayName: 'Navigator Option';
    icon: 'pencil';
  };
  attributes: {
    hasSubMenu: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    subMenu: Schema.Attribute.Component<'common.navigator-option-item', true>;
  };
}

export interface CommonNavigatorOptionItem extends Struct.ComponentSchema {
  collectionName: 'components_common_navigator_option_items';
  info: {
    displayName: 'Navigator Option Item';
    icon: 'bulletList';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonPricingBanner extends Struct.ComponentSchema {
  collectionName: 'components_common_pricing_banners';
  info: {
    displayName: 'Pricing Banner';
    icon: 'database';
  };
  attributes: {
    heading: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
    pricingSubtitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonProvince extends Struct.ComponentSchema {
  collectionName: 'components_common_provinces';
  info: {
    displayName: 'Province';
    icon: 'earth';
  };
  attributes: {
    domainSuffix: Schema.Attribute.Component<'common.domain-suffix', false>;
    fullName: Schema.Attribute.String & Schema.Attribute.Required;
    latitude: Schema.Attribute.String & Schema.Attribute.Required;
    longitude: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    studios: Schema.Attribute.Component<'common.studio', true> &
      Schema.Attribute.Required;
    zoomLevel: Schema.Attribute.Decimal &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      >;
  };
}

export interface CommonProvinceMap extends Struct.ComponentSchema {
  collectionName: 'components_common_province_maps';
  info: {
    displayName: 'Province Map';
    icon: 'globe';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonSimpleFooter extends Struct.ComponentSchema {
  collectionName: 'components_common_simple_footers';
  info: {
    displayName: 'Simple Footer';
    icon: 'layer';
  };
  attributes: {
    links: Schema.Attribute.Component<'common.links', true> &
      Schema.Attribute.Required;
  };
}

export interface CommonStudio extends Struct.ComponentSchema {
  collectionName: 'components_common_studios';
  info: {
    displayName: 'Studio';
    icon: 'store';
  };
  attributes: {
    address: Schema.Attribute.Text & Schema.Attribute.Required;
    customStatus: Schema.Attribute.String;
    domainSuffix: Schema.Attribute.Component<'common.domain-suffix', false>;
    hasOnSiteParking: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    landmark: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    numberOfReformers: Schema.Attribute.Integer & Schema.Attribute.Required;
    phoneNumber: Schema.Attribute.String & Schema.Attribute.Required;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonTestimonialBanner extends Struct.ComponentSchema {
  collectionName: 'components_common_testimonial_banners';
  info: {
    displayName: 'Testimonial Banner';
    icon: 'heart';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<
      'shared.testimonial-group',
      false
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonTextList extends Struct.ComponentSchema {
  collectionName: 'components_common_text_lists';
  info: {
    displayName: 'Text List';
    icon: 'layer';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
    icon: 'monitor';
  };
  attributes: {
    heroMedia: Schema.Attribute.Media<'images' | 'files' | 'videos'> &
      Schema.Attribute.Required;
    subtitle: Schema.Attribute.Component<'common.heading', false>;
    title: Schema.Attribute.Component<'common.heading', false> &
      Schema.Attribute.Required;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'earth';
  };
  attributes: {
    content: Schema.Attribute.RichText & Schema.Attribute.Required;
    hasRating: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    rating: Schema.Attribute.Integer &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 1;
        },
        number
      >;
    timeOfReview: Schema.Attribute.String;
  };
}

export interface SharedTestimonialGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_testimonial_groups';
  info: {
    displayName: 'Testimonial Group';
    icon: 'globe';
  };
  attributes: {
    testimonials: Schema.Attribute.Component<'shared.testimonial', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 2;
        },
        number
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.cta-callout': CommonCtaCallout;
      'common.cta-callout-studio': CommonCtaCalloutStudio;
      'common.domain-suffix': CommonDomainSuffix;
      'common.explainer-with-testimonials': CommonExplainerWithTestimonials;
      'common.faq-banner': CommonFaqBanner;
      'common.faq-block': CommonFaqBlock;
      'common.faq-entry': CommonFaqEntry;
      'common.feature-banner-vertical-split': CommonFeatureBannerVerticalSplit;
      'common.featured-banner': CommonFeaturedBanner;
      'common.featured-banner-split': CommonFeaturedBannerSplit;
      'common.footer': CommonFooter;
      'common.free-block': CommonFreeBlock;
      'common.heading': CommonHeading;
      'common.hero-with-testimonial': CommonHeroWithTestimonial;
      'common.links': CommonLinks;
      'common.map': CommonMap;
      'common.map-studio': CommonMapStudio;
      'common.metadata': CommonMetadata;
      'common.navigator': CommonNavigator;
      'common.navigator-option': CommonNavigatorOption;
      'common.navigator-option-item': CommonNavigatorOptionItem;
      'common.pricing-banner': CommonPricingBanner;
      'common.province': CommonProvince;
      'common.province-map': CommonProvinceMap;
      'common.simple-footer': CommonSimpleFooter;
      'common.studio': CommonStudio;
      'common.testimonial-banner': CommonTestimonialBanner;
      'common.text-list': CommonTextList;
      'shared.hero-section': SharedHeroSection;
      'shared.quote': SharedQuote;
      'shared.testimonial': SharedTestimonial;
      'shared.testimonial-group': SharedTestimonialGroup;
    }
  }
}
