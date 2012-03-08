'https://gist.github.com/727225
Public Shared Function FindNestedControl(Of T As System.Web.UI.Control)(ByVal controlToSearch As System.Web.UI.Control, ByVal id As String) As T
	Dim foundControl As T = Nothing
	Dim exceptionThrown As Boolean = False

	' look directly in the control first
	Try
		foundControl = DirectCast(controlToSearch.FindControl(id), T)
	Catch generatedExceptionName As InvalidCastException
		exceptionThrown = True
	End Try

	' if the control wasn't found in the root control search all sub-controls for it
	If (foundControl Is Nothing) OrElse exceptionThrown Then
		For Each subControl As System.Web.UI.Control In controlToSearch.Controls
			foundControl = FindNestedControl(Of T)(subControl, id)
			If foundControl IsNot Nothing Then
				Exit For
			End If
		Next
	End If

	Return foundControl
End Function

' FindNestedControl(ctlEmployeeInformationForm, "FirstName").Text