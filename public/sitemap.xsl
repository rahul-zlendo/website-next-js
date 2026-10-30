<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <style type="text/css">
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #333; margin: 40px; }
          h1 { color: #00bf9a; border-bottom: 2px solid #eaeaea; padding-bottom: 10px; }
          p { margin-bottom: 24px; color: #666; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { text-align: left; padding: 12px; }
          th { background-color: #f7f8f6; font-size: 14px; font-weight: 600; color: #333; border-bottom: 1px solid #ddd; }
          td { border-bottom: 1px solid #eaeaea; font-size: 14px; }
          tr:hover { background-color: #f9f9f9; }
          a { color: #00bf9a; text-decoration: none; font-weight: 500; }
          a:hover { text-decoration: underline; color: #008f72; }
          .meta-info { font-size: 12px; color: #888; }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>
          This is an XML Sitemap, meant for consumption by search engines. 
          <br/>However, this XSLT style has been applied to make the links clickable and easily readable for humans.
        </p>

        <!-- Condition for Sitemap Index files -->
        <xsl:if test="count(sitemap:sitemapindex/sitemap:sitemap) &gt; 0">
          <table>
            <thead>
              <tr>
                <th>Sitemap URL</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:if>

        <!-- Condition for URL Set files -->
        <xsl:if test="count(sitemap:urlset/sitemap:url) &gt; 0">
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last Modified</th>
                <th>Change Frequency</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="meta-info"><xsl:value-of select="sitemap:lastmod"/></td>
                  <td class="meta-info"><xsl:value-of select="sitemap:changefreq"/></td>
                  <td class="meta-info"><xsl:value-of select="sitemap:priority"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:if>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
