//https://gist.github.com/521736

// There's a RadEditor in there somewhere...
using Telerik.Web.UI;

private RadEditor GetRadEditor(Control c)
{
    RadEditor re = null;
    try
    {
        re = (RadEditor)c;
    }
    catch (InvalidCastException)
    {
        foreach (Control subc in c.Controls)
        {
            re = GetRadEditor(subc);
            if (re != null) break;
        }
    }

    return re;
}

// example:
protected void Page_Load(object sender, EventArgs e)
{
    RadEditor re = GetRadEditor(ControlEditor1);
    re.CssFiles.Clear();
    re.CssFiles.Add("~/Sitefinity/ControlTemplates/EditorContentArea.css");
}
