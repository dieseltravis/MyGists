//https://gist.github.com/773291
$.ajax({
	type: "POST",
	url: "SomePage.aspx/GetSomeObjects",
	//    ^Page name    ^public static function name
	contentType: "application/json; charset=utf-8",
	dataType: "json",
	data: "{'id': '" + someId.replace(/'/g, "\\'") + "'}",
	//       ^Param    ^value, escape apostrophe
	success: function(json) {
		// do something with JSON data, if necessary
		$("#success").html("json.length=" + json.length);
	},
	error: function (xhr, textStatus, errorThrown) {
		// do something with error message, if necessary
		$("#error").html(xhr.responseText);
	}
});

/* C#
// SomePage.aspx.cs (ASPX codebehind) function

[System.Web.Services.WebMethod()]
[System.Web.Script.Services.ScriptMethod()]
public static string GetSomeObjects(string id)
{
	//TODO: get stuff here
}
*/

/* VB
' SomePage.aspx.vb (ASPX codebehind) function

<System.Web.Services.WebMethod()> _
<System.Web.Script.Services.ScriptMethod()> _
Public Shared Function GetSomeObjects(ByVal id As String) As String
	'TODO: get stuff here
End Function
*/