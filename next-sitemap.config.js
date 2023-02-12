const { SITE_URL } = process.env

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: true,
  exclude: ["/blog/*", "/studio", "/sitemap-blog.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${SITE_URL}/sitemap-blog.xml`
    ]
  }
}
