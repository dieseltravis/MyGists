'https://gist.github.com/521736

Private Function GetRadEditor(c As Control) As RadEditor
	Dim re As RadEditor = Nothing
	Try
		re = DirectCast(c, RadEditor)
	Catch ex As InvalidCastException
		For Each subc As Control In c.Controls
			re = GetRadEditor(subc)
			If re IsNot Nothing Then
				Exit For
			End If
		Next
	End Try

	Return re
End Function