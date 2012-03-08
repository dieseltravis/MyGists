//https://gist.github.com/853152
private static bool HeaderLinkExists(Page page, string path)
{
	path = path.ToLowerInvariant();
	foreach (Control c in page.Header.Controls)
	{
		if (c is HtmlLink)
		{
			// stylesheet (or other links), check href
			HtmlLink link = (HtmlLink)c;
			if (link.Href.ToLowerInvariant().Contains(path))
			{
				return true;
			}
		}
		else if (c is HtmlGenericControl)
		{
			// any generic html tag, check for src or href
			HtmlGenericControl hgc = (HtmlGenericControl)c;
			if ((!string.IsNullOrEmpty(hgc.Attributes["src"]) && hgc.Attributes["src"].ToLowerInvariant().Contains(path)) || (!string.IsNullOrEmpty(hgc.Attributes["href"]) && hgc.Attributes["href"].ToLowerInvariant().Contains(path)))
			{
				return true;
			}
		}
		else if (c is LiteralControl)
		{
			// scripts or other html literal controls, use regex to look for src or hrefs and check each one
			LiteralControl lit = (LiteralControl)c;
			if (MatchLiteralText(lit.Text, path))
			{
				return true;
			}
		}
		else if (c is Literal)
		{
			// similar to above, use regex to look for src or hrefs and check each one
			Literal lit = (Literal)c;
			if (MatchLiteralText(lit.Text, path))
			{
				return true;
			}
		}
	}
	return false;
}

private static readonly Regex linkMatcher = new Regex(@"(?:src|href)\s*=\s*([""']?)(?<LinkValue>[^\1]+?)[\1>]", RegexOptions.Compiled);

private static bool MatchLiteralText(string text, string path)
{
	if (!string.IsNullOrEmpty(text))
	{
		text = text.ToLowerInvariant()
		foreach (Match m in linkMatcher.Matches(text))
		{
			if (m.Groups["LinkValue"].Value.Contains(path))
			{
				return true;
			}
		}
	}
	return false;
}


// usage:
if (!HeaderLinkExists(page, "/css/controlstyles.css"))
{
	HtmlHeadUtility.RegisterStylesheetInHeader(page, "~/css/controlstyles.css");
}
if (!HeaderLinkExists(page, "/js/controlscript.js"))
{
	HtmlHeadUtility.RegisterClientScriptIncludeInHeader(page, "~/js/controlscript.js");
}
