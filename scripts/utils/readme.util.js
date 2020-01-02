const { markdownLink, markdownImage } = require('./mardown.util');

const readmeBadge = ({ link, image, alt }) => {
  const mdImg = markdownImage(alt, image);

  return markdownLink(mdImg, link);
};

module.exports = { readmeBadge };
