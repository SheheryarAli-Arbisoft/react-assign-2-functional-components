import {
  headingTextColor,
  primaryTextColor,
  secondaryTextColor,
} from './colors';
import { textSize } from './size';

export const text = {
  getDisplay(variant) {
    switch (variant) {
      case 'heading':
      case 'subtitle':
        return 'flex';
      default:
        return 'block';
    }
  },
  getColor(variant) {
    switch (variant) {
      case 'heading':
        return headingTextColor;
      case 'subtitle':
        return secondaryTextColor;
      default:
        return primaryTextColor;
    }
  },
  getSize(variant) {
    switch (variant) {
      case 'heading':
        return textSize.heading;
      case 'title':
        return textSize.title;
      case 'subtitle':
        return textSize.subtitle;
      case 'description':
        return textSize.description;
      default:
        return '0';
    }
  },
  getWeight(variant) {
    switch (variant) {
      case 'heading':
      case 'title':
        return 'bold';
      default:
        return 'none';
    }
  },
};
