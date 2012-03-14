<!-- https://gist.github.com/360186 -->

<!-- Splitting XML/XHTML on a node (HR in this case) -->

<xsl:for-each select="./hr">
	<xsl:variable name="currentPosition" select="position()" />
	<div>
		<xsl:if test="$currentPosition = 1">
			<!-- first group of elements -->
			<xsl:apply-templates select="preceding-sibling::*" />
		</xsl:if>
		<xsl:if test="$currentPosition != 1">
			<!-- all middle groups of elements -->
			<xsl:apply-templates select="preceding-sibling::*[preceding::hr[$currentPosition - 1]]" />
		</xsl:if>
	</div>
	<xsl:if test="$currentPosition = last()">
	<div>
		<!-- last group of elements -->
		<xsl:apply-templates select="following-sibling::*" />
	</div>
	</xsl:if>
</xsl:for-each>

<!-- Example XHTML -->

<!-- before:
<div class="multiColumn">
	<p>column 1, row 1</p>
	<p>column 1, row 2</p>
	<hr />
	<p>column 2, row 1</p>
	<p>column 2, row 2</p>
	<hr />
	<p>column 3, row 1</p>
	<p>column 3, row 2</p>
	<hr />
	<p>column 4, row 1</p>
	<p>column 4, row 2</p>
</div>
 -->
 
<!-- after:
<div class="multiColumn">
	<div>
		<p>column 1, row 1</p>
		<p>column 1, row 2</p>
	</div>
	<div>
		<p>column 2, row 1</p>
		<p>column 2, row 2</p>
	</div>
	<div>
		<p>column 3, row 1</p>
		<p>column 3, row 2</p>
	</div>
	<div>
		<p>column 4, row 1</p>
		<p>column 4, row 2</p>
	</div>
</div>
 -->