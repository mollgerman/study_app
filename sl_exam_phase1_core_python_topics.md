# SL Exam Phase 1 Source — Core Python Topics
Created: 2026-06-17
Scope: **Python only**. Do not transfer rules from Java, C#, JavaScript, or other languages.
Source lectures: `SL_W04IST_SI4034_lecture_01.pdf`, `SL_W04IST_SI4034_lecture_02.pdf`, `SL_W04IST_SI4034_lecture_03.pdf`.
Exam style target: paper exam, single-choice answers, similar to the Thomas screenshot seed bank.

## Lecture 01 — Introduction into Python
### Keypoints
- Python files use .py extension; run with py app.py or a selected version such as py --3.14 app.py.
- Python uses indentation instead of braces; 4 spaces are recommended.
- pycodestyle checks PEP8 compliance; install it with pip install pycodestyle.
- PEP means Python Enhancement Proposal; PEP20 contains principles such as readability counts.
- Python is dynamically typed: variable names can refer to objects of different types during execution.
- Python is strongly typed: '2' + 2 raises TypeError; explicit conversion is needed.
- print() is a function in Python 3; input() reads a line from standard input and returns a string.
- Basic types include int, bool, float, complex; strings are sequence types.
- if/else controls conditional execution; def defines a function; return gives back a result; pass creates an empty body.
- for iterates over values; range produces a sequence of integers; strings can be iterated character by character.
- Everything in Python is an object, with identity, type, and value.

### Exam traps
- Do not answer using Java/C#/JavaScript rules; use Python semantics only.
- Python 3 forbids Python 2 print statement syntax: print 'Hello'.
- Dynamic typing does not mean weak typing.
- input() returns text, even if the user types digits.
- range(10) stops before 10.

## Lecture 02 — My first simple program
### Keypoints
- Standard input and output are streams; applications can be sources, sinks, or filters.
- < redirects input, > redirects output replacing the file, >> appends output, and | pipes one program into another.
- print() writes to standard output; input() reads one line from standard input.
- sys.stdin and fileinput.input() can read streams line by line.
- Strings are str objects; single quotes, double quotes, and triple quotes create string literals.
- Adjacent string literals are concatenated: 'abc' 'def' becomes 'abcdef'.
- Strings are immutable and Python has no separate character type; a character is a string of length 1.
- str(x) converts non-string objects to strings.
- f-strings and str.format() format text.
- strip(), join(), and split() are common string methods.
- Strings are iterable; iterating over 'abc' produces 'a', 'b', 'c'.
- Lists are ordered, mutable, iterable compound data types.
- append() adds one element; remove() removes by value; + creates a new list.
- List slicing uses start inclusive, stop exclusive; negative indexes count from the end.
- A debugger runs code step by step and lets you inspect values; breakpoints stop execution.
- Logging is better than print debugging for persistent diagnostic messages.
- Logging levels: DEBUG, INFO, WARNING, ERROR, CRITICAL; WARNING is the default threshold.

### Exam traps
- A list containing one string ['abcd'] iterates once; the string 'abcd' iterates four times.
- > replaces an output file, while >> appends.
- data + [x] creates a new list; append modifies the existing list.
- data[1:3] excludes index 3.
- WARNING level does not show DEBUG messages.

## Lecture 03 — Lists and tuples
### Keypoints
- uv can initialize a project, add dependencies, sync dependencies, and run a Python file.
- uv keeps project configuration in pyproject.toml and installed dependency state in uv.lock.
- Positional arguments without default values must be provided.
- Keyword/default arguments can be omitted and can be called by name in any order.
- After a keyword argument in a call, following arguments must also be keyword arguments.
- Python type hints are annotations; they can be ignored at runtime.
- mypy performs static code verification; missing types are ignored by default.
- Lists are mutable sequences; append adds one object, insert inserts before index, extend appends elements from an iterable.
- del removes by index or slice; pop removes and returns; remove deletes the first matching value.
- list.sort() sorts in place and returns None; sorted() returns a new list and leaves the original intact.
- range is an immutable sequence type used mostly in for loops.
- range(start, stop, step) excludes stop; range(15,0,-5) gives 15, 10, 5.
- List comprehensions build lists compactly, e.g. [x*x for x in range(10)].
- Tuples are immutable sequences.
- A single-element tuple requires a comma, e.g. ('Brian',) or 'Brian',.
- tuple([1,2,3]) gives (1,2,3); tuple('123') gives ('1','2','3'); tuple(1,2,3) is invalid.
- Tuples are compared element by element; lambda can be used as a key for selected-element sorting.
- A tuple has no sort() method; sorted(tuple_obj) returns a new list.

### Exam traps
- append([4,5,6]) adds one list object; extend([4,5,6]) adds three elements.
- list.sort() returns None.
- sorted() does not modify the original list or tuple.
- ('Brian') is a string; ('Brian',) is a tuple.
- Type hints do not enforce runtime types by themselves.
