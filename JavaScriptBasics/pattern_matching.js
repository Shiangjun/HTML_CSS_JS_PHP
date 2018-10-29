// Pattern matching by using regular expressions

// Most characters are normal, which means that, in a pattern,
// they match themselves. The position of the first character
// in the string is 0. As an example, consider the following statments:
var str = "Rabbits are funny";
var position = str.search(/bits/);
if (position >= 0)
	document.write("'bits' appears in postion ", position, 
                   "<br />");
else
	document.write("'bits' does not appear in str <br />");

// The statements produce the following output:
'bits' appears in position 3

// The following are the pattern metacharacters:
\ | ( ) [ ] { } ^ $ * + ? .

So the following pattern matches "snowy", "snowe" and "snowd", among others:
/snow./

// To match a period in a string, the period must be preceded by a backlash
// in the pattern.
For example, the pattern /3\.4/ matches 3.4
The pattern /3.4/ matches 3.4 and 374, among others

// Dashes can appear in character class definitions, making it easy
// to specify sequences of characters.
For example, the following character class matches 'a','b', or 'c'
[abc]
The following character class matches any lowercase letter from 'a' to 'h':
[a-h]

// If a circumflex character(^) is the first character in a class, it inverts the
// specified set. For example, the following character class matches any character 
// except nthe letters 'a', 'e', 'i', 'o' and 'u':
[^aeiou]

Table: Predefined character classes
Name      Equivalent_Pattern     Matches
\d         [0-9]                  A digit
\D         [^0-9]                 Not a digit
\w         [A-Za-z_0-9]           A word character (alphanumeric)
\W         [^A-Za-z_0-9]          Not a word character
\s         [ \r\t\n\f]            A white-space character
\S         [^ \r\t\n\f]           Not a white-space character

// The following examples show patterns that use predefined character classes:
/\d\.\d\d/ // Matches a digit, followed by a period,
           // followed by two digits
/\D\d\D/   // Matches a single digit
/\w\w\w/   // Matches three adjacent word characters

For example, the following pattern matches xyyyyz:
/xy{4}z/

There are also three symbolic quantifiers, asterisk(*), plus(+) and question mark(?).
*: zero or more repetitions
+: one or more repetitions
?: one or none

For example, the following pattern matches strings that
begins with any number of x's(including zero), followed by one or 
more y's, possibly followed by z:
/x*y+z?/

The quantifiers are often used with the predefined character-class names, as
in the following pattern, which matches a string of
one or more digits followed by a decimal point and possbly more digits
/\d+\.\d*/
As another example, the pattern matches the identifiers(a letter, followed
by zero or more letters, digits or underscores)
/[A-Za-z]\w*/

There is one additional named pattern that is often useful: \b(boundary),
which matches the boundary position between a wrod character(\w) and a
non-word character(\W), in either order. For example, the following pattern
matches "A tulip is a flower" but not "A frog isn't":
/bis\b/
The pattern doesn't match the second string because the "is" is followed by
another word character(n).

%Anchors:

It can be specified to match only at the beginning of the string by preceding it with
a circumflex(^) anchor. For example, the following pattern matches "pearls are pretty"
but does not match "My pearls are pretty":
/^pearl/

A pattern can specified to match at the end of a string only by following the pattern
with a dollar sign anchor. For example, the following pattern matches "I like gold" but 
does not match "golden":
/gold$/

Anchor characters are like boundary-named patterns.

%Pattern Modifiers
For example, /Apple/i matches "APPLE', 'apple','APPle' and any other combiantion
of uppercase and lowercase spellings of the word "apple"

The x modifier allows white space to appear in the pattern. Because comments are
considered white spaces, this provides a way to include explanatory comments in
the pattern. Foe example, the pattern
/\d+          # The streeet number
\s            # The space before the street name
[A-Z][a-z]+   # The street name
/x

is equivalent to /\d+\s[A-Z][a-z]+/

%Other Pattern-Matching Methods of string

var str = "Fred, Freddie, and Frederica were siblings";
str.replace(/Fre/g, "Boy");
// In this example, str is et to "Boyd, Boyddie, and Boyderica were siblings",
and $1, $2, and $3 are all set to "Fre".

var str = 
    "Having 4 apples is better than having 3 oranges";
var matches = str.match(/\d/g);
// In this example, matches is set to [4, 3].

var str = "I have 428 dollars, but I need 500";
var matches = str.match(/(\d+)([^\d]+)(\d+)/);
document.write(matches, "<br />");
// The following is the value of the matches array after this code is interpreted:
// ["428 dollars, but I need 500", "428", " dollars, but I need ", "500"]

var str = "grapes:apples:oranges";
var fruit = str.split(":");
// In this example, furit is set to [grapes, apples, oranges].

