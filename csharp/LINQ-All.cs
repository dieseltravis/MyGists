//https://gist.github.com/1878434
public static IEnumerable<Control> All(this ControlCollection controls)
{
	foreach (Control control in controls)
	{
		foreach (Control grandChild in control.Controls.All())
			yield return grandChild;

		yield return control;
	}
}

// Example, get all the controls of a particular type on the page (in this case the type is SomeWebControlClass):
//var someWebControlClasses = this.Master.Controls.All().OfType<SomeWebControlClass>().ToList<SomeWebControlClass>();