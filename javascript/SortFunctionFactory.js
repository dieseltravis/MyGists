//https://gist.github.com/1072537
var getSortAttrFn = function(attrName, isNumeric, direction) {
	var isAsc = ((direction + "").toUpperCase() !== "DESC");
	return (isNumeric) ? function(a, b) {
		return (isAsc) ? a[attrName] - b[attrName] : b[attrName] - a[attrName];
	} : function (a, b) {
		var aAttrVal = a[attrName].toLowerCase(),
			bAttrVal = b[attrName].toLowerCase();
		if (aAttrVal < bAttrVal) return (isAsc) ? -1 : 1;
		if (aAttrVal > bAttrVal) return (isAsc) ? 1 : -1;
		return 0;
	};
};

/* example:
<select class="mod-multiselect-destination">
	<option data-gmt-offset="1" value="London|60">London (GMT +1)</option>
	<option data-gmt-offset="-4" value="New York|-240">New York (GMT -4)</option>
	<option data-gmt-offset="-5" value="Houston|-300">Houston (GMT -5)</option>
	<option data-gmt-offset="-7" value="San Ramon|-420">San Ramon (GMT -7)</option>
</select>
<label class="mod-multiselect-sort-alpha">Alphabetical order</label>
<label class="mod-multiselect-sort-data" data-sort-attr="data-gmt-offset" data-sort-numeric="true" data-sort-dir="DESC">Chronological order</label>
*/
var sortSelect = function ($select, sortFunc) {
		$select.each(function () {
			var $thisSelect = $(this),
				$options = $thisSelect.children("option");
			if (typeof sortFunc === "function") {
				$options.sort(sortFunc);
			} else {
				// not sure what this will default to, but it won't break
				$options.sort();
			}
			$thisSelect.empty().append($options);
		});
	},
	$destination = $("select.mod-multiselect-destination"),
	$alphaSortButton = $(".mod-multiselect-sort-alpha"),
	$dataSortButtons = $(".mod-multiselect-sort-data");

$alphaSortButton.unbind("click").bind("click", function () {
	// sort the options alphabetically by their text values
	sortSelect($destination, getSortAttrFn("text"));
	return false;
});

$dataSortButtons.unbind("click").bind("click", function () {
	// sort the options by the values specified in this buttons data-* attributes
	var $thisButton = $(this),
		dataSortAttr = $thisButton.attr("data-sort-attr") || "text",  // the attribute to sort the options on, defaulting to text
		dataIsNumeric = ($thisButton.attr("data-sort-numeric") == "true"),    // whether to sort numerically, "true" or "false", defaulting to "false"
		dataDirection = $thisButton.attr("data-sort-dir");  // direction to sort, "ASC" or "DESC", "ASC" is implied
	sortSelect($destination, getSortAttrFn(dataSortAttr, dataIsNumeric, dataDirection));
	return false;
});