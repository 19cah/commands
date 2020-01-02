// https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
// https://npmjs.org/build-markdown

/**
 * Generate a mardown link.
 * @param {string} title
 * @param {sgring} url
 */
const markdownLink = (title, url) => `[${title}](${url})`;

/**
 * Generate a mardown image.
 * @param {string} alt
 * @param {string} src
 */
const markdownImage = (alt, src) => `![${alt}](${src})`;

/**
 * Generates a mardown header element.
 * @param {string} n
 * @param {string} title
 */
const markdownHeader = (n, title) => `${new Array(n).fill('#').join('')} ${title}`;

/**
 * Generates a mardown list.
 * @param {array} elements
 */
const markdownList = elements =>
	elements.map(element => `- ${element}\n`).join('');

/**
 * Generates a mardown strong emphasis.
 * @param {string} str
 */
const markdownStrong = str => `*${str}*`;

/**
 * Generates a mardown italic emphasis.
 * @param {string} str
 */
const markdownItalic = str => `_${str}_`;

/**
 * Generates a mardown strikethrough emphasis.
 * @param {string} str
 */
const markdownStrikethrough = str => `~${str}~`;

/**
 * Generatess a mardown code.
 * @param {string} source
 * @param {string} language
 */
const markdownCode = (source, language = '') => `\`\`\`${language && language}\n${source}\n\`\`\``;

/**
 * Generatess a mardown code.
 * @param {string} content
 */
const markdownBlockquote = content => `> ${content}`;

module.exports = {
	markdownLink,
	markdownImage,
	markdownHeader,
	markdownList,
	markdownStrikethrough,
	markdownBlockquote,
	markdownStrong,
	markdownItalic,
	markdownCode
};
