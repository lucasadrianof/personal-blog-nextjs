/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://lucasfadriano.dev',
  generateRobotsTxt: true,
  exclude: ["/studio"]
}