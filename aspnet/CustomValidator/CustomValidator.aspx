<%-- https://gist.github.com/572577 --%>
<p>
	<label for="<%= AgreeTerms.ClientID %>"><asp:CheckBox ID="AgreeTerms" runat="server" /> 
		I agree to the terms.</label> 
	<asp:CustomValidator id="AgreeTermsValidator" ClientValidationFunction="termsAgreed" CssClass="error" Display="Dynamic" EnableClientScript="true" ErrorMessage="* required" runat="server"></asp:CustomValidator>
</p>

<p><asp:Button ID="SubmitButton" runat="server" Text="Submit Order" CssClass="button" /></p>

<script type="text/javascript">//<![CDATA[
var termsAgreed = function (source, arguments) {
	arguments.IsValid = document.getElementById("<%= AgreeTerms.ClientID %>").checked;
};
//]]></script>