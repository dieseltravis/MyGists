//https://gist.github.com/547690

//NOTE: since the string class is sealed, and you can only override existing operators this will not compile

// coalesce strings when they're null or empty (the ?? operator just coalesces on null)

public static string operator ‽‽(string s1, string s2)
{
	return string.IsNullOrEmpty(s1) ? s2 : s1;
}

public static string operator ‽(string s1)
{
	return string.IsNullOrEmpty(s1);
}

/* 
Usage:
"" ‽‽ "two" == "two"
‽"" == true
*/

// This will compile and is functional:
public static string SS(string s1, string s2)
{
	return string.IsNullOrEmpty(s1) ? s2 : s1;
}

public static bool S(string s1)
{
	return string.IsNullOrEmpty(s1);
}

/*
Usage:
SS("", "two") == "two"
S("") == "true"
*/