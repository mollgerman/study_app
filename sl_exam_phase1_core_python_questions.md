# SL Exam Phase 1 Question Bank — Lectures 01–03

Created: 2026-06-17

All questions are **single-choice** and all answers follow **Python semantics**.

## P1-001 — Lecture 01 — Python files

**Question:** Which extension is normally used for Python source files?

A. .py
B. .java
C. .exe
D. .txt

**Correct answer:** A — .py

**Explanation:** Python source files conventionally use the .py extension.

## P1-002 — Lecture 01 — Running Python code

**Question:** Which command is a valid way to run a Python file named app.py on Windows using the Python launcher?

A. py app.py
B. run app.py
C. python.compile app.py
D. execute app.py

**Correct answer:** A — py app.py

**Explanation:** The slides show py app.py as a normal way to run a Python app.

## P1-003 — Lecture 01 — Code layout

**Question:** What does Python use to define blocks of code?

A. Indentation
B. Curly braces only
C. begin/end keywords
D. Semicolons only

**Correct answer:** A — Indentation

**Explanation:** Python uses indentation instead of brackets/braces for blocks.

## P1-004 — Lecture 01 — Code layout

**Question:** How many spaces did the lecture recommend for indentation?

A. 2 spaces
B. 4 spaces
C. 8 spaces
D. Tabs only

**Correct answer:** B — 4 spaces

**Explanation:** The lecture encouraged using 4 spaces.

## P1-005 — Lecture 01 — PEP8

**Question:** Which tool checks Python code for compliance with PEP8 style?

A. pycodestyle
B. pytest
C. pydoc
D. pipstyle

**Correct answer:** A — pycodestyle

**Explanation:** pycodestyle checks PEP8 compliance; it was formerly known as pep8.

## P1-006 — Lecture 01 — PEP

**Question:** What does PEP stand for in Python?

A. Python Enhancement Proposal
B. Python Execution Process
C. Program Error Protocol
D. Package Extension Path

**Correct answer:** A — Python Enhancement Proposal

**Explanation:** PEP means Python Enhancement Proposal.

## P1-007 — Lecture 01 — Typing

**Question:** Python is dynamically typed. What does this mean?

A. A variable name can later refer to an object of a different type
B. Python automatically converts every type in every expression
C. Python has no types
D. Variables must declare their type before use

**Correct answer:** A — A variable name can later refer to an object of a different type

**Explanation:** Dynamic typing means the name can refer to objects of different types during execution.

## P1-008 — Lecture 01 — Strong typing

**Question:** What happens in Python 3 when evaluating 2 + '2'?

A. It returns 4
B. It returns '22'
C. It raises TypeError
D. It returns None

**Correct answer:** C — It raises TypeError

**Explanation:** Python is strongly typed; int and str are not implicitly added together.

## P1-009 — Lecture 01 — Input

**Question:** What type does input() return in Python?

A. Always str
B. Always int
C. A type automatically detected from user input
D. Always bytes

**Correct answer:** A — Always str

**Explanation:** input() reads a line of text; numeric conversion must be explicit.

## P1-010 — Lecture 01 — Print

**Question:** Which statement about print in Python 3 is correct?

A. print is a function
B. print is a keyword statement like in Python 2
C. print cannot use f-strings
D. print returns the printed string

**Correct answer:** A — print is a function

**Explanation:** In Python 3, print() is a function.

## P1-011 — Lecture 01 — Functions

**Question:** Which keyword defines a function in Python?

A. def
B. function
C. func
D. method

**Correct answer:** A — def

**Explanation:** Function definitions start with def.

## P1-012 — Lecture 01 — Functions

**Question:** Which keyword returns a result from a Python function?

A. return
B. yieldback
C. send
D. result

**Correct answer:** A — return

**Explanation:** return returns a value from a function.

## P1-013 — Lecture 01 — Empty blocks

**Question:** Which keyword can be used as an empty function body?

A. pass
B. empty
C. skip
D. none

**Correct answer:** A — pass

**Explanation:** pass is a no-operation statement used where a body is required.

## P1-014 — Lecture 01 — Loops

**Question:** What does this loop print first: for c in 'abcd': print(c)?

A. a
B. abcd
C. 0
D. It raises an error

**Correct answer:** A — a

**Explanation:** Iterating over a string gives one character at a time.

## P1-015 — Lecture 01 — Objects

**Question:** According to Python semantics, every object has:

A. identity, type, and value
B. only a memory address
C. only a class name
D. a public and private type

**Correct answer:** A — identity, type, and value

**Explanation:** The lecture states that every object has identity, type, and value.

## P1-016 — Lecture 02 — Standard IO

**Question:** In the Unix stream model, an application that receives data from STDIN, processes it, and sends the result to STDOUT is called a:

A. filter
B. compiler
C. package
D. module

**Correct answer:** A — filter

**Explanation:** A filter reads from standard input, processes, and writes to standard output.

## P1-017 — Lecture 02 — Redirection

**Question:** What does > do in a command such as py app.py > out.txt?

A. Redirects output and replaces the file content if it exists
B. Redirects input from out.txt
C. Appends output to out.txt
D. Pipes output to another app

**Correct answer:** A — Redirects output and replaces the file content if it exists

**Explanation:** > redirects output to a file and replaces existing content.

## P1-018 — Lecture 02 — Redirection

**Question:** Which operator appends output to an existing file?

A. >>
B. >
C. <
D. |

**Correct answer:** A — >>

**Explanation:** >> appends to the original content of the file.

## P1-019 — Lecture 02 — Pipes

**Question:** Which operator pipes data from one program to another?

A. |
B. <
C. >
D. ::

**Correct answer:** A — |

**Explanation:** The pipe operator connects one program's output to another program's input.

## P1-020 — Lecture 02 — Streams

**Question:** Which Python function sends data to standard output?

A. print()
B. input()
C. read()
D. open()

**Correct answer:** A — print()

**Explanation:** print() writes to standard output.

## P1-021 — Lecture 02 — Streams

**Question:** Which Python function reads one line from standard input?

A. input()
B. print()
C. log()
D. format()

**Correct answer:** A — input()

**Explanation:** input() reads one line from standard input.

## P1-022 — Lecture 02 — Strings

**Question:** Which class handles strings in Python?

A. str
B. string
C. char
D. text

**Correct answer:** A — str

**Explanation:** Strings in Python are handled by the str class.

## P1-023 — Lecture 02 — Strings

**Question:** What is the result of: a = 'abc' 'def'?

A. 'abcdef'
B. SyntaxError
C. 'abc def'
D. ['abc','def']

**Correct answer:** A — 'abcdef'

**Explanation:** Sibling string literals are concatenated automatically.

## P1-024 — Lecture 02 — Strings

**Question:** Which statement about Python strings is true?

A. Strings are immutable
B. Strings are mutable lists of characters
C. Python has a separate char type
D. Strings cannot be iterated

**Correct answer:** A — Strings are immutable

**Explanation:** Strings are immutable; there is no separate character type.

## P1-025 — Lecture 02 — String formatting

**Question:** Which expression is an f-string?

A. f'Hello {name}'
B. 'Hello {}'.format(name)
C. str(name)
D. format 'Hello {name}'

**Correct answer:** A — f'Hello {name}'

**Explanation:** An f-string begins with f before the opening quote.

## P1-026 — Lecture 02 — String methods

**Question:** What is the result of ' too long '.strip()?

A. 'too long'
B. ' too long '
C. 'toolong'
D. ['too','long']

**Correct answer:** A — 'too long'

**Explanation:** strip() removes leading and trailing whitespace.

## P1-027 — Lecture 02 — String methods

**Question:** What is the result of 'apples and pears'.split()?

A. ['apples', 'and', 'pears']
B. applesandpears
C. ['apples and pears']
D. SyntaxError

**Correct answer:** A — ['apples', 'and', 'pears']

**Explanation:** split() without arguments splits on whitespace.

## P1-028 — Lecture 02 — String iteration

**Question:** What is printed first by: for character in 'abc': print(character)?

A. a
B. abc
C. character
D. It raises TypeError

**Correct answer:** A — a

**Explanation:** A string is iterable and yields one-character strings.

## P1-029 — Lecture 02 — Lists

**Question:** Which statement about Python lists is correct?

A. Lists are ordered and mutable
B. Lists are unordered and immutable
C. Lists cannot contain mixed types
D. Lists are not iterable

**Correct answer:** A — Lists are ordered and mutable

**Explanation:** Lists are ordered mutable compound data types.

## P1-030 — Lecture 02 — List operations

**Question:** After data = [1, 2, 3]; data.append(4), what is data?

A. [1, 2, 3, 4]
B. [4, 1, 2, 3]
C. [1, 2, 3]
D. None

**Correct answer:** A — [1, 2, 3, 4]

**Explanation:** append() modifies the list by adding the object at the end.

## P1-031 — Lecture 02 — List operations

**Question:** What does data + [6, 7, 8] do?

A. Creates a new list
B. Always modifies data in place
C. Deletes data
D. Returns a tuple

**Correct answer:** A — Creates a new list

**Explanation:** The + operator creates a new concatenated list.

## P1-032 — Lecture 02 — List indexing

**Question:** For data = [3, 4, 45, 26, 1], what is data[-1]?

A. 1
B. 3
C. 45
D. IndexError

**Correct answer:** A — 1

**Explanation:** Index -1 refers to the last element.

## P1-033 — Lecture 02 — List slicing

**Question:** For data = [3, 4, 45, 26, 1], what is data[1:3]?

A. [4, 45]
B. [4, 45, 26]
C. [3, 4, 45]
D. [45, 26]

**Correct answer:** A — [4, 45]

**Explanation:** Slicing includes start index 1 and excludes stop index 3.

## P1-034 — Lecture 02 — Debugging

**Question:** What is a debugger used for?

A. Running an application step by step and inspecting values
B. Installing packages
C. Formatting strings
D. Creating virtual environments

**Correct answer:** A — Running an application step by step and inspecting values

**Explanation:** A debugger allows step-by-step execution and value inspection.

## P1-035 — Lecture 02 — Breakpoints

**Question:** What is a breakpoint?

A. A place where code execution stops
B. A syntax error
C. A package manager
D. A Python string method

**Correct answer:** A — A place where code execution stops

**Explanation:** Breakpoints mark where the debugger should stop execution.

## P1-036 — Lecture 02 — Logging

**Question:** Which logging level is the default threshold mentioned in the lecture?

A. WARNING
B. DEBUG
C. INFO
D. CRITICAL

**Correct answer:** A — WARNING

**Explanation:** WARNING is the default logging level.

## P1-037 — Lecture 02 — Logging

**Question:** If the logging level is WARNING, which messages are normally shown?

A. WARNING, ERROR, and CRITICAL
B. DEBUG only
C. DEBUG and INFO only
D. All messages including DEBUG

**Correct answer:** A — WARNING, ERROR, and CRITICAL

**Explanation:** A logging threshold shows messages at that level and more severe ones.

## P1-038 — Lecture 03 — uv

**Question:** Which tool does the lecture use to set up Python projects with one tool?

A. uv
B. pip only
C. javac
D. makepy

**Correct answer:** A — uv

**Explanation:** The lecture presents uv as the single tool for project setup.

## P1-039 — Lecture 03 — uv

**Question:** Which file keeps Python project configuration when using uv?

A. pyproject.toml
B. requirements.exe
C. main.lock
D. project.py

**Correct answer:** A — pyproject.toml

**Explanation:** uv keeps configuration in pyproject.toml.

## P1-040 — Lecture 03 — uv

**Question:** Which uv-related file should be committed to version control according to the lecture?

A. uv.lock
B. __pycache__
C. venv/bin/python
D. pip.log

**Correct answer:** A — uv.lock

**Explanation:** The lecture states that uv.lock should be committed.

## P1-041 — Lecture 03 — Functions

**Question:** Given def foo(a, b): return a+b, what happens when calling foo(2)?

A. TypeError: missing required argument
B. It returns 2
C. It returns None
D. b becomes 0 automatically

**Correct answer:** A — TypeError: missing required argument

**Explanation:** Both positional arguments are required because no default value is defined.

## P1-042 — Lecture 03 — Keyword arguments

**Question:** Given def foo(a=2, b=2): return a+b, which call is valid?

A. foo(b=1, a=2)
B. foo(a=1, 2)
C. foo(,2)
D. foo(a=)

**Correct answer:** A — foo(b=1, a=2)

**Explanation:** Keyword arguments can be reordered.

## P1-043 — Lecture 03 — Keyword arguments

**Question:** Which rule about Python function calls is correct?

A. After a keyword argument, subsequent arguments must also be keyword arguments
B. Positional arguments can always appear after keyword arguments
C. Keyword arguments cannot have default values
D. Default arguments are mandatory

**Correct answer:** A — After a keyword argument, subsequent arguments must also be keyword arguments

**Explanation:** The lecture states that all following arguments after a keyword argument must also be keyword arguments.

## P1-044 — Lecture 03 — Type hints

**Question:** What is true about Python type hints?

A. They are annotations and can be ignored at runtime
B. They always enforce type checks at runtime
C. They are required in every Python function
D. They replace tests

**Correct answer:** A — They are annotations and can be ignored at runtime

**Explanation:** Type hints are annotations; runtime Python does not enforce them automatically.

## P1-045 — Lecture 03 — mypy

**Question:** Which module is used for static code verification in the lecture?

A. mypy
B. logging
C. fileinput
D. random

**Correct answer:** A — mypy

**Explanation:** mypy is used for static code verification.

## P1-046 — Lecture 03 — Lists

**Question:** Lists in Python are:

A. mutable sequences
B. immutable mappings
C. unordered sets
D. not iterable

**Correct answer:** A — mutable sequences

**Explanation:** Lists are mutable sequences indexed by numbers.

## P1-047 — Lecture 03 — append vs extend

**Question:** If a = [1,2,3] and a.append([4,5,6]) is executed, what is len(a)?

A. 4
B. 6
C. 3
D. 1

**Correct answer:** A — 4

**Explanation:** append adds the whole list [4,5,6] as one element.

## P1-048 — Lecture 03 — append vs extend

**Question:** If a = [1,2,3] and a.extend([4,5,6]) is executed, what is len(a)?

A. 6
B. 4
C. 3
D. 1

**Correct answer:** A — 6

**Explanation:** extend adds each element from the iterable.

## P1-049 — Lecture 03 — List methods

**Question:** Which list method removes and returns the last element when no index is provided?

A. pop()
B. remove()
C. clear()
D. append()

**Correct answer:** A — pop()

**Explanation:** s.pop() removes and returns the last element.

## P1-050 — Lecture 03 — List methods

**Question:** Which list operation removes the first matching value x?

A. s.remove(x)
B. s.pop(x)
C. del s[x]
D. s.extend(x)

**Correct answer:** A — s.remove(x)

**Explanation:** remove(x) deletes the first occurrence of x from the list.

## P1-051 — Lecture 03 — sort vs sorted

**Question:** What does list.sort() return?

A. None
B. A sorted tuple
C. A new sorted list
D. The largest element

**Correct answer:** A — None

**Explanation:** sort() sorts the list in place and returns None.

## P1-052 — Lecture 03 — sort vs sorted

**Question:** What does sorted(a) do?

A. Returns a new sorted list and leaves a intact
B. Sorts a in place and returns None
C. Deletes duplicates from a
D. Returns a tuple only

**Correct answer:** A — Returns a new sorted list and leaves a intact

**Explanation:** sorted() returns a new sorted list; the original argument remains intact.

## P1-053 — Lecture 03 — range

**Question:** What values are produced by range(0, 15, 5)?

A. 0, 5, 10
B. 0, 5, 10, 15
C. 5, 10, 15
D. 15, 10, 5

**Correct answer:** A — 0, 5, 10

**Explanation:** The stop value 15 is excluded.

## P1-054 — Lecture 03 — range

**Question:** What values are produced by range(15, 0, -5)?

A. 15, 10, 5
B. 15, 10, 5, 0
C. 0, 5, 10, 15
D. It raises ValueError

**Correct answer:** A — 15, 10, 5

**Explanation:** With negative step, values decrease and stop before 0.

## P1-055 — Lecture 03 — List comprehensions

**Question:** What is created by [x*x for x in range(3)]?

A. [0, 1, 4]
B. [1, 4, 9]
C. [0, 1, 2]
D. (0, 1, 4)

**Correct answer:** A — [0, 1, 4]

**Explanation:** range(3) gives 0, 1, 2, and their squares are 0, 1, 4.

## P1-056 — Lecture 03 — Tuples

**Question:** Tuples in Python are:

A. immutable sequences
B. mutable sequences
C. unordered mappings
D. only numeric lists

**Correct answer:** A — immutable sequences

**Explanation:** Tuples are immutable sequences.

## P1-057 — Lecture 03 — Tuple creation

**Question:** Which expression creates a single-element tuple?

A. ('Brian',)
B. ('Brian')
C. tuple('Brian',)
D. ['Brian']

**Correct answer:** A — ('Brian',)

**Explanation:** The comma creates the single-element tuple; ('Brian') is just a string in parentheses.

## P1-058 — Lecture 03 — tuple conversion

**Question:** What is len(tuple('123'))?

A. 3
B. 1
C. 0
D. It raises TypeError

**Correct answer:** A — 3

**Explanation:** tuple('123') creates ('1','2','3').

## P1-059 — Lecture 03 — tuple conversion

**Question:** What happens with tuple(1, 2, 3)?

A. It raises TypeError
B. It creates (1, 2, 3)
C. It creates [1, 2, 3]
D. It returns 1

**Correct answer:** A — It raises TypeError

**Explanation:** tuple() expects at most one iterable argument, not three separate arguments.

## P1-060 — Lecture 03 — Tuple sorting

**Question:** Given comps = [('Lenovo', 2499), ('HP', 2099)], what does sorted(comps, key=lambda comp: comp[1]) sort by?

A. The second element of each tuple
B. The first element of each tuple
C. The length of the list only
D. It cannot sort lists of tuples

**Correct answer:** A — The second element of each tuple

**Explanation:** The lambda returns comp[1], so the key is the price/second element.

## P1-061 — Lecture 03 — Tuple sorting

**Question:** What is the result type of sorted((3, 1, 2))?

A. list
B. tuple
C. range
D. set

**Correct answer:** A — list

**Explanation:** sorted() always returns a new list, even when the input is a tuple.

## P1-062 — Lecture 03 — Tuple methods

**Question:** What is the result of calling (3, 1, 2).sort()?

A. AttributeError because tuple has no sort method
B. (1, 2, 3)
C. [1, 2, 3]
D. None after sorting in place

**Correct answer:** A — AttributeError because tuple has no sort method

**Explanation:** Tuples are immutable and do not provide sort(). Use sorted(tuple_obj) for a new list.

