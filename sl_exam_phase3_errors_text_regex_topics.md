# Phase 3 — Errors, encodings, JSON, and regular expressions

Sources:
- `SL_W04IST_SI4034_lecture_06-exceptions.pdf`
- `SL_W04IST_SI4034_lecture_07-re.pdf`

## Scope

This phase focuses only on Python-related exam material from lectures 06 and 07. It converts the lecture topics into single-choice paper-exam style questions.

## Topic map

### 1. Logging recap
- Logging shows program state.
- Logging does not change execution flow.
- Logging can remain in code.

### 2. Assertions
- `assert expression` checks that an expected condition/invariant is true.
- A failed assertion raises `AssertionError` in normal execution.
- `assert expression, message` attaches an explanatory message.
- Assertions are for debugging, not user-facing error handling.
- Assertions may be ignored with Python optimization option `-O`.

### 3. Exception handling
- `try` contains risky code.
- `except SomeError` handles matching exceptions.
- If no `except` matches, Python searches outer handlers; otherwise the program stops with traceback.
- Multiple exception types can be handled in separate blocks or in one tuple: `except (OSError, ValueError):`.
- `except Exception as e` gives access to the exception object.
- Bare `except:` should generally be avoided because it catches too much, including `KeyboardInterrupt`.
- `else` runs only if the `try` block succeeds.
- `finally` runs regardless of success or failure and is used for cleanup.
- A `return` in `finally` overrides previous `return` statements.

### 4. Raising and re-raising exceptions
- Exceptions can be raised automatically or by the programmer.
- Use `raise ValueError(...)` to signal a problem you cannot or do not want to resolve locally.
- After entering an `except` block, Python considers the exception handled unless you stop or re-raise.
- Use `raise ... from e` to chain exceptions.
- Use `raise ... from None` to suppress exception chaining.
- Use `if` for obvious conditions; use exceptions for exceptional conditions.

### 5. Text encodings
- Encoding defines how characters are stored in text files.
- ASCII is 7-bit; extended ASCII is 8-bit.
- Unicode supports international characters.
- Python 3 strings are Unicode text objects.
- Python 3 source files use UTF-8 by default unless declared otherwise.
- Use `open(..., encoding='utf-8')` to choose file encoding.
- Decoding errors raise `UnicodeDecodeError` by default.
- `errors='ignore'` omits unknown characters; `errors='replace'` replaces them with `�`.

### 6. JSON
- JSON is a text format for data exchange.
- JSON is multiplatform.
- `json.dump()` writes to a file.
- `json.dumps()` writes to a string.
- `json.load()` reads from a file.
- `json.loads()` reads from a string.
- JSON booleans are lowercase `true` and `false`, while Python uses `True` and `False`.

### 7. Simple text searching and replacing
- Use `in` to check whether a substring exists.
- Use `str.find()` to get the index; it returns `-1` when not found.
- Use `str.replace()` for simple replacement; it returns a new string.

### 8. Regular expressions
- Regex is a small specialized pattern language.
- Exact characters match themselves unless special syntax is used.
- `+` means one or more; `*` means zero or more; `?` means zero or one.
- `{m,n}` means between `m` and `n` repetitions.
- Parentheses group patterns and create capture groups.
- `|` means alternative.
- Character classes: `[ABC]`, `[^AB]`, `[0-9]`.
- Shortcuts: `\w`, `\d`, `\s`.
- Dot `.` means any character except newline.
- Anchors: `^` start of line, `$` end of line.
- Special characters must be escaped to match literally.
- Raw strings like `r"\d+"` reduce Python string escaping problems.
- Regex matching is greedy by default.
- Use `re.compile()` to compile a regex, optionally with flags like `re.IGNORECASE`.
- `match()` checks from the beginning; `fullmatch()` checks the whole string; `search()` checks anywhere.
- Match objects provide `group`, `start`, `end`, and `span`.
- `findall()` returns a list; `finditer()` returns an iterator of match objects.
