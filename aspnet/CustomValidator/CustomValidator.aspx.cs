//https://gist.github.com/572577
/* assuming:
protected CheckBox AgreeTerms;
protected AgreeTermsValidator;

this.AgreeTermsValidator.ServerValidate += new ServerValidateEventHandler(AgreeTermsValidator_ServerValidate);
*/

private void AgreeTermsValidator_ServerValidate(object source, ServerValidateEventArgs args)
{
	args.IsValid = AgreeTerms.Checked;
}