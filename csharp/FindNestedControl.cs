//https://gist.github.com/727225
public static T FindNestedControl<T>(Control controlToSearch, string id) where T: Control
{
	T foundControl = null;
	bool exceptionThrown = false;

	// look directly in the control first
	try
	{
		foundControl = (T)controlToSearch.FindControl(id);
	}
	catch (InvalidCastException)
	{
		exceptionThrown = true;
	}

	// if the control wasn't found in the root control search all sub-controls for it
	if ((foundControl == null) || exceptionThrown)
	{
		foreach (Control subControl in controlToSearch.Controls)
		{
			foundControl = FindNestedControl<T>(subControl, id);
			if (foundControl != null)
			{
				break;
			}
		}
	}

	return foundControl;
}

// FindNestedControl(ctlEmployeeInformationForm, "FirstName").Text