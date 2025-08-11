import type { Schema, Struct } from '@strapi/strapi';

export interface CommonCtaCallout extends Struct.ComponentSchema {
  collectionName: 'components_common_cta_callouts';
  info: {
    displayName: 'CTA Callout';
    icon: 'cursor';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    ctaUrl: Schema.Attribute.String & Schema.Attribute.Required;
    richDescription: Schema.Attribute.RichText & Schema.Attribute.Required;
    secondaryCtaLabel: Schema.Attribute.String & Schema.Attribute.Required;
    secondaryCtaUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CommonFeaturedBannerSplit extends Struct.ComponentSchema {
  collectionName: 'components_common_featured_banner_splits';
  info: {
    displayName: 'Featured Banner Split';
    icon: 'bulletList';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    description: Schema.Attribute.Component<'common.text-list', true> &
      Schema.Attribute.Required;
    featuredImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    footerText: Schema.Attribute.Text;
    hasCta: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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

export interface CommonHeroWithTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_common_hero_with_testimonials';
  info: {
    displayName: 'HeroWithTestimonial';
    icon: 'monitor';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    shortDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    testimonial: Schema.Attribute.Component<'shared.testimonial', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    text: Schema.Attribute.Text & Schema.Attribute.Required;
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
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
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
    content: Schema.Attribute.Text & Schema.Attribute.Required;
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
      'common.feature-banner-vertical-split': CommonFeatureBannerVerticalSplit;
      'common.featured-banner': CommonFeaturedBanner;
      'common.featured-banner-split': CommonFeaturedBannerSplit;
      'common.footer': CommonFooter;
      'common.hero-with-testimonial': CommonHeroWithTestimonial;
      'common.links': CommonLinks;
      'common.map': CommonMap;
      'common.metadata': CommonMetadata;
      'common.navigator': CommonNavigator;
      'common.navigator-option': CommonNavigatorOption;
      'common.navigator-option-item': CommonNavigatorOptionItem;
      'common.testimonial-banner': CommonTestimonialBanner;
      'common.text-list': CommonTextList;
      'shared.hero-section': SharedHeroSection;
      'shared.quote': SharedQuote;
      'shared.testimonial': SharedTestimonial;
      'shared.testimonial-group': SharedTestimonialGroup;
    }
  }
}
