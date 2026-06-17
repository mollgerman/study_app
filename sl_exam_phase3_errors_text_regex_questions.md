# Phase 3 — Errors, encodings, JSON, and regular expressions — question bank

Total questions: 106

All questions are single-choice. Correct answers are included for study mode.

## P3Q001 — Logging recap

Which statement about Python logging matches the lecture recap?

- A. Logging is mainly used to change the control flow of a program.
- B. Logging can show program state without changing execution flow.
- C. Logging messages must be removed before production code.
- D. Logging works only inside except blocks.

**Correct answer:** B. Logging can show program state without changing execution flow.
**Explanation:** Logging is used to show information about the program state, does not change flow of execution, and may remain in the code.
**Source:** L06 slides 4

## P3Q002 — Assertions

What happens when an assert expression is false during normal Python execution?

- A. Python silently ignores it.
- B. Python raises AssertionError.
- C. Python raises ValueError.
- D. The expression becomes False and execution always continues.

**Correct answer:** B. Python raises AssertionError.
**Explanation:** A failed assert raises AssertionError unless assertions are disabled with optimization.
**Source:** L06 slide 5

## P3Q003 — Assertions

What is the purpose of the second expression in assert condition, message?

- A. It is the value returned when the assertion is true.
- B. It is used as a description/message for the AssertionError.
- C. It changes AssertionError into ValueError.
- D. It disables the assertion in optimized mode.

**Correct answer:** B. It is used as a description/message for the AssertionError.
**Explanation:** The optional expression after the comma becomes the explanation carried by the AssertionError.
**Source:** L06 slide 6

## P3Q004 — Assertions

Which statement is correct about assert in Python?

- A. assert is intended for debugging, not for normal error handling.
- B. assert should be used to validate all user input.
- C. assert always runs even with python -O.
- D. assert catches exceptions automatically.

**Correct answer:** A. assert is intended for debugging, not for normal error handling.
**Explanation:** The lecture says assert is for debugging and is not for error handling.
**Source:** L06 slide 7

## P3Q005 — Assertions

What can happen to assertions when Python code is run with the -O optimization option?

- A. They become warnings.
- B. They are ignored.
- C. They become ValueError exceptions.
- D. They are executed twice.

**Correct answer:** B. They are ignored.
**Explanation:** Python can ignore assertions during optimized execution with -O.
**Source:** L06 slide 8

## P3Q006 — Assertions

In Python, assert x > 0 is best interpreted as:

- A. a permanent runtime validation for user input
- B. a debugging check/invariant that should normally be true
- C. a replacement for try-except
- D. a way to log an error message

**Correct answer:** B. a debugging check/invariant that should normally be true
**Explanation:** Assertions are used to ascertain that an expected expression/invariant is true.
**Source:** L06 slide 8

## P3Q007 — Exceptions

Given try: c = 1/0 except ZeroDivisionError: print("bad"), what happens?

- A. The ZeroDivisionError is handled and execution continues after the try-except block.
- B. The program always stops after printing bad.
- C. The except block is ignored.
- D. Python raises SyntaxError because division is inside try.

**Correct answer:** A. The ZeroDivisionError is handled and execution continues after the try-except block.
**Explanation:** If the error matches an except clause, the except block is executed and execution resumes after the try-except.
**Source:** L06 slide 13

## P3Q008 — Exceptions

If an exception occurs in a try block and no except clause matches it, what does Python do?

- A. It converts it to AssertionError.
- B. It searches for an outer try-except block; if none handles it, the program stops with traceback.
- C. It always ignores the exception.
- D. It executes the else block.

**Correct answer:** B. It searches for an outer try-except block; if none handles it, the program stops with traceback.
**Explanation:** Unmatched exceptions propagate outward. If still unhandled, execution stops and traceback information is displayed.
**Source:** L06 slide 13

## P3Q009 — Exceptions

In a try-except statement, when is the else block executed?

- A. Always, after finally.
- B. Only if the try block completed successfully without an exception.
- C. Only if an exception was caught.
- D. Only when there is no finally block.

**Correct answer:** B. Only if the try block completed successfully without an exception.
**Explanation:** The else clause runs only when the try block succeeds without triggering an exception handled by except.
**Source:** L06 slide 17

## P3Q010 — Exceptions

Which except clause handles both OSError and ValueError in one block?

- A. except OSError, ValueError:
- B. except [OSError, ValueError]:
- C. except (OSError, ValueError):
- D. except OSError or ValueError:

**Correct answer:** C. except (OSError, ValueError):
**Explanation:** Python catches multiple exception types in one except by using a tuple of exception classes.
**Source:** L06 slide 15

## P3Q011 — Exceptions

Why is bare except: usually discouraged?

- A. It cannot catch any exception.
- B. It may catch things like KeyboardInterrupt and hide important control signals.
- C. It works only in Python 2.
- D. It always raises SyntaxError.

**Correct answer:** B. It may catch things like KeyboardInterrupt and hide important control signals.
**Explanation:** The lecture notes that bare except is better avoided because it catches exceptions such as KeyboardInterrupt.
**Source:** L06 slide 16

## P3Q012 — Exceptions

What does except Exception as e allow you to do?

- A. Access the exception object through variable e.
- B. Disable the exception.
- C. Convert every exception to OSError.
- D. Run the else block manually.

**Correct answer:** A. Access the exception object through variable e.
**Explanation:** The exception object can be bound to a variable and inspected or printed.
**Source:** L06 slides 16, 18

## P3Q013 — Exceptions

For OSError, which attributes are mentioned as examples of useful information in the exception object?

- A. filename and strerror
- B. line and column
- C. host and port
- D. start and end

**Correct answer:** A. filename and strerror
**Explanation:** The lecture mentions filename and strerror for OSError objects.
**Source:** L06 slide 18

## P3Q014 — Exceptions

What is the main purpose of finally in try-except-finally?

- A. It runs only when no error happened.
- B. It is usually used for cleanup actions and always executes after try/except handling.
- C. It catches all exceptions.
- D. It replaces the else block.

**Correct answer:** B. It is usually used for cleanup actions and always executes after try/except handling.
**Explanation:** finally executes regardless of success or failure and is usually used for cleanup, like closing files or disconnecting.
**Source:** L06 slide 19

## P3Q015 — Exceptions

What is dangerous about using return inside finally?

- A. It is ignored by Python.
- B. It can override returns from try or except.
- C. It creates a syntax error.
- D. It automatically re-raises the exception.

**Correct answer:** B. It can override returns from try or except.
**Explanation:** A return in finally is the last one, so it can replace return values from try or except.
**Source:** L06 slide 20

## P3Q016 — Exceptions

What happens after try/except/finally execution if the exception was handled?

- A. Execution resumes after the statement.
- B. The program always exits.
- C. The else block always repeats.
- D. All variables are deleted.

**Correct answer:** A. Execution resumes after the statement.
**Explanation:** The lecture summary says execution resumes after try/except/finally when the exception is handled.
**Source:** L06 slide 21

## P3Q017 — Exceptions

Which statement is correct about surrounding a huge block of code in one try block?

- A. It is impossible in Python.
- B. Python allows it, but it may make precise error handling less clear.
- C. It prevents all exceptions from occurring.
- D. It forces finally to be skipped.

**Correct answer:** B. Python allows it, but it may make precise error handling less clear.
**Explanation:** The lecture says you can surround a huge block in one try block; from Python semantics, smaller try blocks usually make causes clearer.
**Source:** L06 slide 21

## P3Q018 — Encoding

What does an encoding define?

- A. How characters are stored in text files.
- B. How Python sorts lists.
- C. How exceptions are matched.
- D. How functions are called.

**Correct answer:** A. How characters are stored in text files.
**Explanation:** Encoding defines the way characters are stored in text files.
**Source:** L06 slide 30

## P3Q019 — Encoding

Which encoding family supports international characters in one standard?

- A. ASCII only
- B. Extended ASCII only
- C. Unicode
- D. CSV

**Correct answer:** C. Unicode
**Explanation:** Unicode supports all international characters in one standard.
**Source:** L06 slide 23

## P3Q020 — Encoding

How many characters are available in 7-bit ASCII according to the lecture?

- A. 64
- B. 95
- C. 128
- D. 256

**Correct answer:** C. 128
**Explanation:** The lecture says ASCII is 7-bit and has 128 available characters, 95 printable.
**Source:** L06 slide 23

## P3Q021 — Encoding

Which statement about extended ASCII is correct?

- A. It is 7-bit and has 128 characters.
- B. It is 8-bit and has 256 characters.
- C. It is the same as UTF-32.
- D. It cannot contain national characters.

**Correct answer:** B. It is 8-bit and has 256 characters.
**Explanation:** Extended ASCII is 8-bit and has 256 characters.
**Source:** L06 slide 23

## P3Q022 — Encoding

Which file encoding is Python 3 source code interpreted as by default if not declared otherwise?

- A. ASCII
- B. UTF-8
- C. UTF-32
- D. Windows CP1250

**Correct answer:** B. UTF-8
**Explanation:** Python 3 uses UTF-8 source encoding by default if no encoding is declared.
**Source:** L06 slide 26

## P3Q023 — Encoding

What does Python 3 use internally for strings?

- A. ASCII byte arrays only
- B. Unicode text objects
- C. CSV rows
- D. JSON objects

**Correct answer:** B. Unicode text objects
**Explanation:** Python 3 stores strings as Unicode text objects.
**Source:** L06 slide 25

## P3Q024 — Encoding

What exception is raised by default when Python cannot decode a file with the selected encoding?

- A. UnicodeDecodeError
- B. FileNotFoundError
- C. AssertionError
- D. StopIteration

**Correct answer:** A. UnicodeDecodeError
**Explanation:** By default, undecodable byte sequences raise UnicodeDecodeError.
**Source:** L06 slide 29

## P3Q025 — Encoding

In open(..., errors="replace"), what happens to unknown characters during decoding?

- A. They are silently omitted.
- B. They are replaced with the replacement character �.
- C. They are converted to digits.
- D. They raise SyntaxError.

**Correct answer:** B. They are replaced with the replacement character �.
**Explanation:** errors="replace" replaces unknown characters with U+FFFD, displayed as �.
**Source:** L06 slide 29

## P3Q026 — Encoding

Which errors option omits unknown characters during decoding?

- A. strict
- B. ignore
- C. replace
- D. unicode

**Correct answer:** B. ignore
**Explanation:** errors="ignore" omits unknown characters.
**Source:** L06 slide 29

## P3Q027 — Encoding

Which errors option corresponds to the default behavior when decoding text?

- A. replace
- B. ignore
- C. strict
- D. append

**Correct answer:** C. strict
**Explanation:** strict is the same as None/default behavior and raises an error.
**Source:** L06 slide 29

## P3Q028 — Encoding

What is the safest rule for reading a text file with non-ASCII characters?

- A. Read it with the same encoding used to write it.
- B. Always use ASCII.
- C. Open it in binary mode and call json.loads.
- D. Use errors="ignore" always.

**Correct answer:** A. Read it with the same encoding used to write it.
**Explanation:** The lecture summary says a file should be read in the same encoding as it was written.
**Source:** L06 slide 30

## P3Q029 — Encoding

What does locale.getpreferredencoding() return information about?

- A. The preferred system encoding according to locale settings.
- B. The current Python version.
- C. The current regex flags.
- D. The default JSON indentation.

**Correct answer:** A. The preferred system encoding according to locale settings.
**Explanation:** The locale module can be used to check the system-preferred encoding.
**Source:** L06 slide 27

## P3Q030 — Encoding

What is the meaning of # -*- coding: utf-8 -*- near the top of a Python file?

- A. It declares the source file encoding.
- B. It imports the encoding module.
- C. It converts all strings to bytes.
- D. It disables Unicode.

**Correct answer:** A. It declares the source file encoding.
**Explanation:** A coding declaration in the first or second line can declare source code encoding.
**Source:** L06 slide 26

## P3Q031 — JSON

What is JSON mainly used for?

- A. Data exchange between applications.
- B. Defining Python classes.
- C. Replacing try-except.
- D. Compiling regex patterns.

**Correct answer:** A. Data exchange between applications.
**Explanation:** The lecture describes JSON as a text format used for data exchange between applications.
**Source:** L06 slide 32

## P3Q032 — JSON

Which Python module is used in the lecture to work with JSON?

- A. re
- B. json
- C. locale
- D. logging

**Correct answer:** B. json
**Explanation:** The standard json module provides dump, dumps, load, and loads.
**Source:** L06 slides 33-36

## P3Q033 — JSON

Which function stores JSON data directly into a file object?

- A. json.dump
- B. json.dumps
- C. json.load
- D. json.loads

**Correct answer:** A. json.dump
**Explanation:** dump writes/stores data to a file object.
**Source:** L06 slide 34

## P3Q034 — JSON

Which function converts a Python object to a JSON string?

- A. json.dump
- B. json.dumps
- C. json.load
- D. json.loads

**Correct answer:** B. json.dumps
**Explanation:** dumps serializes Python data into a JSON string.
**Source:** L06 slide 34

## P3Q035 — JSON

Which function retrieves JSON data from a file object?

- A. json.dump
- B. json.dumps
- C. json.load
- D. json.loads

**Correct answer:** C. json.load
**Explanation:** load reads/retrieves data from a file object.
**Source:** L06 slide 35

## P3Q036 — JSON

Which function retrieves JSON data from a string?

- A. json.dump
- B. json.dumps
- C. json.load
- D. json.loads

**Correct answer:** D. json.loads
**Explanation:** loads parses a JSON string into Python data.
**Source:** L06 slide 35

## P3Q037 — JSON

In JSON syntax, the boolean literal for true is:

- A. True
- B. TRUE
- C. true
- D. 1 only

**Correct answer:** C. true
**Explanation:** JSON uses lowercase true and false, unlike Python True and False.
**Source:** L06 slide 33

## P3Q038 — JSON

What does json.dumps(data, indent=4) mainly change?

- A. It changes the data type to tuple.
- B. It pretty-prints the JSON string with indentation.
- C. It writes to a file named indent.
- D. It disables Unicode.

**Correct answer:** B. It pretty-prints the JSON string with indentation.
**Explanation:** The indent parameter formats output with indentation, making it easier to read.
**Source:** L06 slide 34

## P3Q039 — JSON

Which Python data structure is naturally represented by a JSON object?

- A. dict
- B. set
- C. function
- D. exception class

**Correct answer:** A. dict
**Explanation:** JSON objects map naturally to Python dictionaries.
**Source:** L06 slides 33-36

## P3Q040 — JSON

Which statement is correct about JSON?

- A. It is a binary-only format.
- B. It is a text format and is multiplatform.
- C. It can store every Python object without conversion.
- D. It is used only by JavaScript programs.

**Correct answer:** B. It is a text format and is multiplatform.
**Explanation:** The lecture describes JSON as a convenient multiplatform text format for data exchange.
**Source:** L06 slides 32, 37

## P3Q041 — Raising exceptions

Which keyword is used to raise an exception manually in Python?

- A. throw
- B. raise
- C. except
- D. assertion

**Correct answer:** B. raise
**Explanation:** Python uses raise to raise exceptions manually.
**Source:** L07 slide 6

## P3Q042 — Raising exceptions

Which statement correctly raises ValueError with an explanatory message?

- A. throw ValueError("bad")
- B. raise ValueError("bad")
- C. except ValueError("bad")
- D. ValueError.raise("bad")

**Correct answer:** B. raise ValueError("bad")
**Explanation:** The lecture shows raise ValueError("I must be positive").
**Source:** L07 slide 7

## P3Q043 — Raising exceptions

If you catch an exception but cannot resolve the problem, what should you do according to the lecture?

- A. Silently ignore it.
- B. Re-raise it.
- C. Always return None.
- D. Convert it to a string.

**Correct answer:** B. Re-raise it.
**Explanation:** If the problem is not resolved, you should raise the exception again.
**Source:** L07 slides 9-10

## P3Q044 — Raising exceptions

What does raise ValueError from e express?

- A. It raises a new ValueError while preserving exception chaining from e.
- B. It ignores e completely.
- C. It converts e into a string.
- D. It disables traceback information.

**Correct answer:** A. It raises a new ValueError while preserving exception chaining from e.
**Explanation:** raise ... from e chains the new exception to the original exception.
**Source:** L07 slide 10

## P3Q045 — Raising exceptions

What does raise ValueError("Wrong filename") from None do?

- A. It raises ValueError and suppresses explicit exception chaining.
- B. It raises None.
- C. It returns None.
- D. It catches FileNotFoundError automatically.

**Correct answer:** A. It raises ValueError and suppresses explicit exception chaining.
**Explanation:** from None suppresses the displayed cause/context for the new exception.
**Source:** L07 slide 11

## P3Q046 — Exceptions vs if

According to the lecture, if a condition is obvious, what should you use?

- A. try instead of if
- B. if instead of try
- C. raise from None always
- D. bare except always

**Correct answer:** B. if instead of try
**Explanation:** The lecture says if the condition is obvious, use if instead of try.
**Source:** L07 slide 12

## P3Q047 — Exceptions vs if

According to the lecture, exceptions are expensive compared to:

- A. if statements
- B. JSON dumps
- C. string literals
- D. list slicing

**Correct answer:** A. if statements
**Explanation:** The lecture says exception handling is expensive compared with an if statement.
**Source:** L07 slide 12

## P3Q048 — Exceptions

What happens logically when Python enters an except block?

- A. Python considers the problem handled unless you explicitly stop or re-raise.
- B. Python always stops after except.
- C. Python automatically re-raises the same exception.
- D. Python ignores finally.

**Correct answer:** A. Python considers the problem handled unless you explicitly stop or re-raise.
**Explanation:** The lecture says entering except means Python considers the problem solved and continues execution unless you explicitly stop or re-raise.
**Source:** L07 slide 9

## P3Q049 — Exceptions

Which module/function was shown as a way to explicitly stop the program after catching an exception?

- A. os.getenv()
- B. sys.exit()
- C. json.dump()
- D. re.compile()

**Correct answer:** B. sys.exit()
**Explanation:** The lecture example imports sys and calls sys.exit() after handling ValueError.
**Source:** L07 slide 9

## P3Q050 — Searching strings

Which Python operator is best for checking whether a substring exists in a string?

- A. in
- B. findall
- C. append
- D. raise

**Correct answer:** A. in
**Explanation:** The lecture uses "User" in "User experience" to check existence.
**Source:** L07 slide 14

## P3Q051 — Searching strings

What does str.find(substring) return when the substring is not found?

- A. None
- B. False
- C. -1
- D. It raises ValueError.

**Correct answer:** C. -1
**Explanation:** The lecture explicitly states that -1 means not found.
**Source:** L07 slide 14

## P3Q052 — Replacing strings

What does str.replace(old, new) do to the original string?

- A. It modifies the original string in place.
- B. It returns a new string and does not modify the original.
- C. It always returns None.
- D. It works only for one-character strings.

**Correct answer:** B. It returns a new string and does not modify the original.
**Explanation:** Strings are immutable; the lecture says replace does not modify the original string.
**Source:** L07 slide 15

## P3Q053 — Regular expressions

What is a regular expression used for according to the lecture?

- A. Checking if a string matches a pattern, replacing substrings, and splitting strings.
- B. Only drawing graphs.
- C. Only storing JSON data.
- D. Only reading binary files.

**Correct answer:** A. Checking if a string matches a pattern, replacing substrings, and splitting strings.
**Explanation:** The lecture lists matching patterns, replacing substrings, and splitting strings as uses of regex.
**Source:** L07 slide 17

## P3Q054 — Regex exact matches

What does the regex ABA match as an exact sequence?

- A. Only "ABA"
- B. "A", "B", and "A" separately
- C. Any string containing A or B
- D. The empty string only

**Correct answer:** A. Only "ABA"
**Explanation:** A sequence of characters in regex matches that same sequence unless special operators are used.
**Source:** L07 slide 19

## P3Q055 — Regex repetitions

What does A+ mean in a regular expression?

- A. zero or more A characters
- B. one or more A characters
- C. zero or one A character
- D. exactly two A characters

**Correct answer:** B. one or more A characters
**Explanation:** The plus operator means one-or-more repetitions.
**Source:** L07 slide 20

## P3Q056 — Regex repetitions

What does A* mean in a regular expression?

- A. one or more A characters
- B. zero or more A characters
- C. exactly one A
- D. a literal asterisk after A

**Correct answer:** B. zero or more A characters
**Explanation:** The star operator means zero-or-more repetitions.
**Source:** L07 slide 20

## P3Q057 — Regex repetitions

What does A? mean in a regular expression?

- A. zero or one A
- B. one or more A
- C. zero or more A
- D. exactly two A characters

**Correct answer:** A. zero or one A
**Explanation:** The question mark operator means zero-or-one repetition.
**Source:** L07 slide 20

## P3Q058 — Regex repetitions

Which strings can A{1,2} match completely?

- A. Only empty string
- B. Only "A" or "AA"
- C. "A", "AA", and "AAA"
- D. Any number of A characters

**Correct answer:** B. Only "A" or "AA"
**Explanation:** {m,n} means between m and n repetitions, so A{1,2} means one or two A characters.
**Source:** L07 slide 21

## P3Q059 — Regex repetitions

Which quantifier is equivalent to +?

- A. {0,}
- B. {1,}
- C. {0,1}
- D. {1,2}

**Correct answer:** B. {1,}
**Explanation:** The lecture states + means {1,}.
**Source:** L07 slide 21

## P3Q060 — Regex repetitions

Which quantifier is equivalent to *?

- A. {0,}
- B. {1,}
- C. {0,1}
- D. {2,}

**Correct answer:** A. {0,}
**Explanation:** The lecture states * means {0,}.
**Source:** L07 slide 21

## P3Q061 — Regex repetitions

Which quantifier is equivalent to ?

- A. {0,}
- B. {1,}
- C. {0,1}
- D. {1,}

**Correct answer:** C. {0,1}
**Explanation:** The lecture states ? means {0,1}.
**Source:** L07 slide 21

## P3Q062 — Regex grouping

Why are parentheses useful in regex repetitions?

- A. They make regex case-insensitive automatically.
- B. They group a longer string so operators apply to the group.
- C. They turn regex into JSON.
- D. They remove all special meaning from characters.

**Correct answer:** B. They group a longer string so operators apply to the group.
**Explanation:** Operators like * normally apply to one character; parentheses group longer patterns.
**Source:** L07 slide 22

## P3Q063 — Regex grouping

What can (ABC)+ match?

- A. Only "A"
- B. "ABC", "ABCABC", "ABCABCABC", etc.
- C. Only "AB"
- D. Only strings ending in C but not starting with A

**Correct answer:** B. "ABC", "ABCABC", "ABCABCABC", etc.
**Explanation:** The group ABC is repeated one or more times.
**Source:** L07 slide 22

## P3Q064 — Regex alternatives

What does (Ana|Eva) match?

- A. Only "Ana" or "Eva"
- B. Only "AnaEva"
- C. Any name containing A or E
- D. The empty string

**Correct answer:** A. Only "Ana" or "Eva"
**Explanation:** The vertical bar creates alternatives inside the group.
**Source:** L07 slide 22

## P3Q065 — Regex character classes

What does [ABC]+ mean?

- A. One or more characters, each of which is A, B, or C.
- B. Exactly the string "ABC".
- C. Any character except A, B, or C.
- D. A number followed by B or C.

**Correct answer:** A. One or more characters, each of which is A, B, or C.
**Explanation:** A character class selects one of the listed characters; + repeats it.
**Source:** L07 slide 23

## P3Q066 — Regex character classes

What does [^AB]+ mean?

- A. Only A and B.
- B. One or more characters except A and B.
- C. The start of a line followed by AB.
- D. The literal string ^AB.

**Correct answer:** B. One or more characters except A and B.
**Explanation:** A caret at the start of a character class negates it.
**Source:** L07 slide 23

## P3Q067 — Regex shortcuts

Which shortcut represents a decimal digit?

- A. \w
- B. \d
- C. \s
- D. .

**Correct answer:** B. \d
**Explanation:** \d is the shortcut for [0-9], a decimal digit.
**Source:** L07 slide 23

## P3Q068 — Regex shortcuts

Which shortcut represents a word character such as letter, digit, or underscore?

- A. \w
- B. \d
- C. \s
- D. $

**Correct answer:** A. \w
**Explanation:** \w is shorthand for [a-zA-Z0-9_].
**Source:** L07 slide 23

## P3Q069 — Regex shortcuts

Which shortcut represents whitespace?

- A. \w
- B. \d
- C. \s
- D. \x

**Correct answer:** C. \s
**Explanation:** \s represents whitespace characters such as spaces, tabs, and newlines.
**Source:** L07 slide 23

## P3Q070 — Regex special characters

In the lecture, what does . match by default?

- A. Any character except newline
- B. Only a literal dot
- C. Only digits
- D. Only whitespace

**Correct answer:** A. Any character except newline
**Explanation:** The dot matches any character except 
 by default.
**Source:** L07 slide 23

## P3Q071 — Regex special characters

What does .* usually represent?

- A. Any string except newline, using greedy matching by default
- B. Only a literal dot followed by a star
- C. Exactly one digit
- D. Only an empty string

**Correct answer:** A. Any string except newline, using greedy matching by default
**Explanation:** Dot means any non-newline character, and star repeats zero or more times; regex is greedy by default.
**Source:** L07 slides 23, 26

## P3Q072 — Regex line anchors

What does ^ mean outside a character class?

- A. End of line
- B. Start of line
- C. Whitespace
- D. A literal caret always

**Correct answer:** B. Start of line
**Explanation:** The caret anchor means start of the line.
**Source:** L07 slide 24

## P3Q073 — Regex line anchors

What does $ mean in regular expressions?

- A. Start of line
- B. End of line
- C. Any digit
- D. Any whitespace

**Correct answer:** B. End of line
**Explanation:** The dollar anchor means end of the line.
**Source:** L07 slide 24

## P3Q074 — Regex escaping

If you want to match a regex special character literally, what should you usually do?

- A. Precede it with a backslash.
- B. Put it after json.dumps.
- C. Use raise.
- D. Call find instead of regex.

**Correct answer:** A. Precede it with a backslash.
**Explanation:** Special regex characters must be escaped with backslash to match literally.
**Source:** L07 slide 23

## P3Q075 — Regex and Python strings

Why are raw strings often used for regex patterns in Python?

- A. Because Python then does not interpret backslash escapes inside the string.
- B. Because raw strings automatically compile regex.
- C. Because raw strings make regex non-greedy.
- D. Because regex cannot be written in normal strings.

**Correct answer:** A. Because Python then does not interpret backslash escapes inside the string.
**Explanation:** The r prefix means Python will not interpret the string content in the usual escape-processing way.
**Source:** L07 slide 25

## P3Q076 — Regex and Python strings

Which Python string notation is usually clearer for regex paths/backslashes?

- A. r"..." raw strings
- B. json strings only
- C. f-strings only
- D. bytes only

**Correct answer:** A. r"..." raw strings
**Explanation:** The lecture suggests raw strings as the solution for avoiding doubled Python-level escaping.
**Source:** L07 slide 25

## P3Q077 — Regex greedy matching

What will the regex <.*> match against <h1>Header</h1> by default?

- A. Only <h1>
- B. The whole string <h1>Header</h1>
- C. Only Header
- D. Nothing

**Correct answer:** B. The whole string <h1>Header</h1>
**Explanation:** Regex matching is greedy by default, so <.*> consumes as much as possible.
**Source:** L07 slide 26

## P3Q078 — Regex compilation

Which Python module supports regular expressions?

- A. json
- B. re
- C. locale
- D. fileinput

**Correct answer:** B. re
**Explanation:** Regular expressions are supported by the re module.
**Source:** L07 slide 27

## P3Q079 — Regex compilation

Which function compiles a regex pattern?

- A. re.compile
- B. json.dumps
- C. str.find
- D. open

**Correct answer:** A. re.compile
**Explanation:** The lecture shows p = re.compile("a[bcd]*d").
**Source:** L07 slide 27

## P3Q080 — Regex flags

Which flag shown in the lecture makes regex matching ignore case?

- A. re.IGNORECASE
- B. re.JSON
- C. re.ASCII_ONLY
- D. re.NOCASEERROR

**Correct answer:** A. re.IGNORECASE
**Explanation:** The compile example uses re.IGNORECASE.
**Source:** L07 slide 27

## P3Q081 — Regex match methods

Which method checks whether the pattern matches at the beginning of the string?

- A. match
- B. fullmatch
- C. findall
- D. json.load

**Correct answer:** A. match
**Explanation:** p.match(...) checks for a match starting at the beginning of the string.
**Source:** L07 slide 28

## P3Q082 — Regex match methods

Which method checks whether the entire string matches the pattern?

- A. match
- B. fullmatch
- C. search
- D. finditer

**Correct answer:** B. fullmatch
**Explanation:** fullmatch requires the whole string to match the pattern.
**Source:** L07 slide 28

## P3Q083 — Regex match methods

Which method searches for a matching substring anywhere in the string?

- A. match
- B. fullmatch
- C. search
- D. dump

**Correct answer:** C. search
**Explanation:** search looks for a match anywhere in the target string.
**Source:** L07 slide 28

## P3Q084 — Regex match object

Which is NOT listed as information available from a regex Match object?

- A. group
- B. start
- C. end
- D. append

**Correct answer:** D. append
**Explanation:** The lecture lists group, start, end, and span for a Match object.
**Source:** L07 slide 28

## P3Q085 — Regex match object

What does span usually return for a Match object?

- A. A tuple (start, end)
- B. A JSON string
- C. A list of all files
- D. The original compiled pattern only

**Correct answer:** A. A tuple (start, end)
**Explanation:** span returns a tuple containing the start and end positions.
**Source:** L07 slide 28

## P3Q086 — Regex examples

The IP regex \d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3} has which limitation?

- A. It does not match any IP-like string.
- B. It can match invalid IPs such as 999.999.999.999.
- C. It matches only letters.
- D. It requires exactly two digits per segment.

**Correct answer:** B. It can match invalid IPs such as 999.999.999.999.
**Explanation:** The lecture warns that this expression checks form but not numeric validity.
**Source:** L07 slide 29

## P3Q087 — Regex examples

What kind of string does \(\d{2}\) \d{3} \d{2} \d{2} match according to the lecture?

- A. A phone number such as (71) 320 12 34
- B. An e-mail address
- C. A JSON object
- D. A Python identifier

**Correct answer:** A. A phone number such as (71) 320 12 34
**Explanation:** The lecture gives (71) 320 12 34 as a matching phone number.
**Source:** L07 slide 29

## P3Q088 — Regex groups

What does group(0) return from a regex match?

- A. The entire match
- B. The first captured group only
- C. The number of groups
- D. The start index only

**Correct answer:** A. The entire match
**Explanation:** The lecture notes that group(0) matches the entire match.
**Source:** L07 slide 30

## P3Q089 — Regex groups

How are subsequent regex groups numbered?

- A. By the order of closing brackets
- B. By the starting bracket order
- C. Alphabetically by group content
- D. They are not numbered

**Correct answer:** B. By the starting bracket order
**Explanation:** The lecture says groups are numbered by starting bracket.
**Source:** L07 slide 30

## P3Q090 — Regex groups

Can regex groups be nested?

- A. Yes
- B. No
- C. Only in JSON strings
- D. Only with re.IGNORECASE

**Correct answer:** A. Yes
**Explanation:** The lecture explicitly states groups can be nested.
**Source:** L07 slide 30

## P3Q091 — Regex multiple matches

What does findall return?

- A. A list of matched expressions
- B. Only the first Match object
- C. A file object
- D. None always

**Correct answer:** A. A list of matched expressions
**Explanation:** findall returns a list of matched expressions.
**Source:** L07 slide 31

## P3Q092 — Regex multiple matches

What does finditer return?

- A. An iterator over Match objects
- B. A JSON file
- C. A single string only
- D. A boolean

**Correct answer:** A. An iterator over Match objects
**Explanation:** finditer returns an iterator, and each item is a Match object.
**Source:** L07 slide 32

## P3Q093 — Regex module functions

What is true about re.match, re.search, and re.findall module-level functions?

- A. They behave like corresponding methods and internally compile or use cached patterns.
- B. They are unrelated to compiled regex objects.
- C. They work only with JSON.
- D. They always return strings.

**Correct answer:** A. They behave like corresponding methods and internally compile or use cached patterns.
**Explanation:** The lecture says module functions correspond to regex object methods and internally call compile or use cached values.
**Source:** L07 slide 33

## P3Q094 — Regex module functions

What does re.match return if there is no match?

- A. None
- B. False
- C. 0
- D. An empty string

**Correct answer:** A. None
**Explanation:** Regex functions return None when there is no match.
**Source:** L07 slide 33

## P3Q095 — Regex code behavior

What is the result of re.match("ab*", "ac")?

- A. A match for "a"
- B. None
- C. A match for "ac"
- D. SyntaxError

**Correct answer:** A. A match for "a"
**Explanation:** b* means zero or more b characters, so the pattern matches the initial "a".
**Source:** L07 slides 20, 33

## P3Q096 — Regex code behavior

What is the result of re.fullmatch("ab*", "abbb")?

- A. It matches the whole string.
- B. It returns None because b* cannot match multiple b characters.
- C. It matches only "a" and fails fullmatch.
- D. It raises ValueError.

**Correct answer:** A. It matches the whole string.
**Explanation:** ab* means a followed by zero or more b characters, so abbb fully matches.
**Source:** L07 slides 20, 28

## P3Q097 — Regex code behavior

What is the result of re.fullmatch("ab*", "abbbc")?

- A. It matches the whole string.
- B. It returns None.
- C. It matches only c.
- D. It raises AssertionError.

**Correct answer:** B. It returns None.
**Explanation:** fullmatch requires the whole string; c is not allowed by ab*, so there is no full match.
**Source:** L07 slide 28

## P3Q098 — Regex code behavior

What does re.search("ab*", "xxabbb") find?

- A. The substring "abbb"
- B. Only the first x
- C. Nothing because the pattern is not at the beginning
- D. The whole string xxabbb

**Correct answer:** A. The substring "abbb"
**Explanation:** search can find the pattern anywhere, and ab* matches abbb.
**Source:** L07 slide 28

## P3Q099 — String search vs regex

Which tool is enough if you only need to check whether "User" exists in "User experience"?

- A. The in operator
- B. json.loads
- C. re.compile with groups is always required
- D. raise ValueError

**Correct answer:** A. The in operator
**Explanation:** For simple existence checks, the lecture uses the in operator.
**Source:** L07 slide 14

## P3Q100 — String replace vs regex

For a simple literal replacement like replacing "User" with "Programmer", which method did the lecture show?

- A. str.replace
- B. list.extend
- C. re.finditer only
- D. json.dump

**Correct answer:** A. str.replace
**Explanation:** The lecture uses s.replace("User", "Programmer") for simple replacement.
**Source:** L07 slide 15

## P3Q101 — Exceptions and regex

Which option best follows the lecture advice?

- A. Use exceptions for obvious conditions instead of if.
- B. Use if for obvious conditions, try for exceptional situations, and raise when you cannot handle the problem.
- C. Use bare except for every block.
- D. Never raise exceptions manually.

**Correct answer:** B. Use if for obvious conditions, try for exceptional situations, and raise when you cannot handle the problem.
**Explanation:** This summarizes the lecture rules from Exceptions How-to.
**Source:** L07 slide 12

## P3Q102 — Regex escaping

In a regex, why must a literal dot in an IP pattern be written as \.?

- A. Because . normally means any character except newline.
- B. Because . normally means a digit.
- C. Because . is invalid in regex.
- D. Because Python lists require it.

**Correct answer:** A. Because . normally means any character except newline.
**Explanation:** The dot is a regex special character; escaping it makes it a literal dot.
**Source:** L07 slides 23, 29

## P3Q103 — Regex alternatives

Which regex matches either "cat" or "dog" as a whole alternative?

- A. (cat|dog)
- B. [cat|dog]
- C. cat+dog
- D. cat*dog

**Correct answer:** A. (cat|dog)
**Explanation:** Parentheses group alternatives and | means OR between alternatives.
**Source:** L07 slide 22

## P3Q104 — Regex character classes

Which regex matches a single digit using a character class rather than shortcut?

- A. [0-9]
- B. [^0-9]+
- C. \w
- D. [A-Z]+

**Correct answer:** A. [0-9]
**Explanation:** [0-9] is the class equivalent of \d for one digit.
**Source:** L07 slide 23

## P3Q105 — Regex anchors

Which regex matches lines starting with abc according to the lecture style?

- A. ^abc.*
- B. .*abc$
- C. [abc]
- D. abc^

**Correct answer:** A. ^abc.*
**Explanation:** ^ marks the start of a line, so ^abc.* matches lines beginning with abc.
**Source:** L07 slide 24

## P3Q106 — Regex anchors

Which regex matches lines ending with k according to the lecture style?

- A. ^k.*
- B. .*k$
- C. $k.*
- D. [k]$*

**Correct answer:** B. .*k$
**Explanation:** $ marks the end of a line, so .*k$ matches lines ending with k.
**Source:** L07 slide 24
