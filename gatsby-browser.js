/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import objectFitImages from "object-fit-images";

exports.onClientEntry = () => {
  objectFitImages();
};

exports.shouldUpdateScroll = (prevRouterProps, pathname) => {
  window.scrollTo(0, 0);
  return false;
};
