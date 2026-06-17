# Phase 6 — Testing Python Code Question Bank

Source: `SL_W04IST_SI4034_lecture_10-testing.pdf`  
Question count: 132  
Generated: 2026-06-17T11:54:51Z

## P6-Q001 — Floating point arithmetic

What is the result of .1 + .1 + .1 == .3 in Python?

A. True
B. False
C. SyntaxError
D. TypeError

**Correct answer:** B

**Explanation:** Binary floating-point arithmetic cannot represent 0.1 exactly, so the equality check is false.

## P6-Q002 — Floating point arithmetic

Why can direct equality comparisons between floats be dangerous in tests?

A. Because floats are immutable
B. Because some decimal fractions are approximated in binary
C. Because pytest cannot compare floats
D. Because floats are strings internally

**Correct answer:** B

**Explanation:** Many decimal fractions have no finite binary representation, so small rounding errors appear.

## P6-Q003 — Floating point arithmetic

Which assertion is the safest way to compare .1 + .1 + .1 with .3 using a tolerance?

A. assert .1 + .1 + .1 is .3
B. assert abs((.1 + .1 + .1) - .3) < 1e-12
C. assert str(.1 + .1 + .1) == str(.3)
D. assert int(.1 + .1 + .1) == int(.3)

**Correct answer:** B

**Explanation:** A tolerance allows for tiny representation errors in binary floating-point arithmetic.

## P6-Q004 — pytest.approx

What is pytest.approx() used for?

A. Approximating execution time
B. Comparing values such as floats with tolerance
C. Generating fake input files
D. Skipping slow tests

**Correct answer:** B

**Explanation:** pytest.approx() is a convenience helper for tolerant numeric comparisons.

## P6-Q005 — Decimal

Which expression gives exact decimal arithmetic for tenths?

A. Decimal(0.1)
B. Decimal("0.1")
C. float("0.1")
D. int(0.1)

**Correct answer:** B

**Explanation:** Decimal should receive string values to avoid inheriting a binary float approximation.

## P6-Q006 — Decimal

Why is Decimal(3.14) less exact than Decimal("3.14")?

A. Decimal cannot store decimals
B. Decimal(3.14) receives an already approximated float
C. Strings are always faster than floats
D. Decimal ignores string inputs

**Correct answer:** B

**Explanation:** The float 3.14 is already approximated before Decimal sees it.

## P6-Q007 — Decimal

What is the result of sum([Decimal("0.1")] * 6) == Decimal("0.6")?

A. True
B. False
C. TypeError
D. None

**Correct answer:** A

**Explanation:** Decimal values created from strings represent the decimal values exactly.

## P6-Q008 — Floating point arithmetic

What is the result of sum([0.1] * 6) == 0.6 in standard Python floats?

A. Always True
B. False because of floating point approximation
C. SyntaxError
D. It depends on pytest

**Correct answer:** B

**Explanation:** The lecture example shows this as false because 0.1 cannot be represented exactly as a binary float.

## P6-Q009 — Fraction

Which module is used for exact rational arithmetic?

A. decimal only
B. fractions
C. random
D. statistics only

**Correct answer:** B

**Explanation:** The fractions module provides Fraction for exact rational numbers.

## P6-Q010 — Fraction

Which expression creates the exact rational value 1/10?

A. Fraction(0.1)
B. Fraction(Decimal("0.1"))
C. float(1/10)
D. round(0.1)

**Correct answer:** B

**Explanation:** Fraction(Decimal("0.1")) avoids the binary float approximation.

## P6-Q011 — Fraction

What does Fraction(0.1) represent?

A. Exactly 1/10
B. The exact rational value of the already approximated float 0.1
C. Always 0
D. A decimal string

**Correct answer:** B

**Explanation:** Fraction(0.1) captures the binary float approximation, not the intended decimal 1/10.

## P6-Q012 — Floating point arithmetic

Which base do computers normally use for floating-point arithmetic in the lecture?

A. Base 2
B. Base 3
C. Base 8 only
D. Base 10 only

**Correct answer:** A

**Explanation:** The lecture states that computers use binary arithmetic, base 2.

## P6-Q013 — Floating point arithmetic

Which decimal fraction is used as the lecture example of a value with no finite binary representation?

A. 1/10
B. 1/2
C. 1/4
D. 2/4

**Correct answer:** A

**Explanation:** 0.1, or 1/10, cannot be represented exactly with finite binary digits.

## P6-Q014 — Floating point arithmetic

What does format(.1, ".30f") demonstrate?

A. That .1 is stored exactly as 0.1
B. That .1 has a visible binary approximation error when printed with many digits
C. That strings cannot format floats
D. That Python converts floats to Decimal

**Correct answer:** B

**Explanation:** Printing many decimal places shows 0.10000000000000000555..., revealing approximation.

## P6-Q015 — Testing numeric code

For financial calculations in Python tests, which module is preferred for exact decimal arithmetic?

A. decimal
B. requests
C. smtplib
D. pytest only

**Correct answer:** A

**Explanation:** The decimal module is recommended for exact decimal arithmetic such as financial values.

## P6-Q016 — Goals of testing

Which is a goal of testing?

A. Prevent regressions
B. Remove all exceptions from Python
C. Make code run without Python
D. Avoid specifications

**Correct answer:** A

**Explanation:** Testing helps prevent regressions when existing functionality is changed.

## P6-Q017 — Goals of testing

What does “validate correctness” mean in testing?

A. Tests show that code does what the specification says
B. Tests rewrite the source code automatically
C. Tests replace documentation completely
D. Tests guarantee no bugs in the universe

**Correct answer:** A

**Explanation:** Correctness means the behavior matches the expected specification.

## P6-Q018 — Goals of testing

How can tests document behavior?

A. They show intended usage of functions
B. They hide function behavior
C. They delete code comments
D. They convert code to PDF

**Correct answer:** A

**Explanation:** Good tests are examples of how functions should behave.

## P6-Q019 — Testing approaches

What is static testing?

A. Running code with known inputs
B. Analyzing code without running it
C. Watching logs in production only
D. Sending real emails

**Correct answer:** B

**Explanation:** Static testing analyses code without executing it, for example with pylint or type checkers.

## P6-Q020 — Testing approaches

What is dynamic testing?

A. Running code with known inputs and checking expected outputs
B. Only checking indentation
C. Only reading logs
D. Renaming test files

**Correct answer:** A

**Explanation:** Dynamic tests execute code and assert expected results.

## P6-Q021 — Testing approaches

What is passive testing in the lecture?

A. Observe a running system, e.g. logging or tracing
B. Run pytest with -q
C. Delete failing tests
D. Use Decimal

**Correct answer:** A

**Explanation:** Passive testing observes system behavior without actively asserting every input/output pair.

## P6-Q022 — Testing approaches

IDE underlines are an example of what kind of checks?

A. Static checks in real time
B. Dynamic acceptance tests
C. Mocking
D. TDD refactoring

**Correct answer:** A

**Explanation:** The lecture describes IDE underlines as static checks happening in real time.

## P6-Q023 — Testing levels

What does a unit test focus on?

A. One function or class in isolation
B. A whole company workflow
C. A full database cluster only
D. A user contract negotiation

**Correct answer:** A

**Explanation:** Unit tests isolate a single function or class.

## P6-Q024 — Testing levels

What does integration testing check?

A. That components work correctly together
B. That one isolated function has no imports
C. That code has no spaces
D. That pytest is installed

**Correct answer:** A

**Explanation:** Integration tests check interaction between components.

## P6-Q025 — Testing levels

What does acceptance testing check?

A. That a system meets user requirements
B. That each variable has a type hint
C. That no function returns None
D. That all tests use mocks

**Correct answer:** A

**Explanation:** Acceptance tests are about user-level requirements.

## P6-Q026 — Test design strategies

What is white-box testing?

A. Tests reflect internal implementation structure
B. Only inputs and outputs matter
C. Tests are written without knowing any code
D. Tests compare only colors

**Correct answer:** A

**Explanation:** White-box tests use knowledge of internal implementation.

## P6-Q027 — Test design strategies

What is black-box testing?

A. Only inputs and outputs matter
B. Internal implementation must be tested line by line
C. Tests are disabled
D. Mock objects are forbidden

**Correct answer:** A

**Explanation:** Black-box testing treats implementation details as irrelevant and focuses on behavior.

## P6-Q028 — Test design strategies

What is grey-box testing?

A. Partial internal knowledge combined with input/output behavior
B. No test strategy
C. Only manual testing
D. Testing CSS colors

**Correct answer:** A

**Explanation:** Grey-box testing combines some knowledge of internals with functional testing.

## P6-Q029 — What to test

Which category should you focus on when designing tests?

A. Typical cases
B. Only impossible cases
C. Only syntax errors
D. Only comments

**Correct answer:** A

**Explanation:** The lecture says to focus on typical, edge, and error cases.

## P6-Q030 — What to test

Which is an edge case?

A. Empty input
B. A normal expected value only
C. A perfect mid-range value
D. A comment

**Correct answer:** A

**Explanation:** Boundaries, empty inputs, zero, and None are examples of edge cases.

## P6-Q031 — What to test

Which is an error case?

A. Invalid input that should raise an expected exception
B. A normal input with a normal output
C. A passing import statement
D. A correct docstring

**Correct answer:** A

**Explanation:** Error cases verify behavior for invalid inputs and expected exceptions.

## P6-Q032 — What to test

Can we test every possible input?

A. No
B. Yes, always
C. Only with pytest -v
D. Only with Decimal

**Correct answer:** A

**Explanation:** The lecture states we cannot test every possible input, not even all edge cases.

## P6-Q033 — pytest basics

What is pytest?

A. An industry-standard Python test runner
B. A web browser
C. A database server
D. A DOCX parser

**Correct answer:** A

**Explanation:** pytest is presented as an industry-standard test runner for Python.

## P6-Q034 — pytest basics

How do you install pytest?

A. pip install pytest
B. pip install requests only
C. python pytest.py install
D. import pytest install

**Correct answer:** A

**Explanation:** The lecture shows pip install pytest.

## P6-Q035 — pytest basics

Compared with unittest, pytest is described as:

A. Simpler, with no class boilerplate required
B. Unable to use assert
C. Only for Java
D. Only for GUI testing

**Correct answer:** A

**Explanation:** pytest is described as simpler than unittest because class boilerplate is not required.

## P6-Q036 — pytest basics

Which built-in Python testing framework is mentioned as another option?

A. unittest
B. requests
C. pillow
D. sqlite3

**Correct answer:** A

**Explanation:** unittest is Python’s built-in testing framework.

## P6-Q037 — pytest basics

Which command runs all discoverable pytest tests from the current directory recursively?

A. pytest
B. python -m json
C. pip pytest
D. pytest --delete

**Correct answer:** A

**Explanation:** Running pytest without arguments discovers and runs tests recursively from the current directory.

## P6-Q038 — pytest basics

What does pytest -q do?

A. Runs with quiet output
B. Runs with query output
C. Deletes tests
D. Starts an SMTP server

**Correct answer:** A

**Explanation:** The -q option gives quieter output.

## P6-Q039 — pytest basics

What does pytest -v do?

A. Verbose output, showing each test name
B. Virtual environment creation
C. Validates HTML
D. Disables assertions

**Correct answer:** A

**Explanation:** -v is verbose mode and shows more detailed test names.

## P6-Q040 — pytest basics

How can you run one test file only?

A. pytest myapp/test_app.py
B. pytest --all-only
C. python run every file
D. pip install test_app.py

**Correct answer:** A

**Explanation:** Passing a file path to pytest runs tests from that file only.

## P6-Q041 — VS Code testing

In VS Code, what command palette action configures tests?

A. Python: Configure Tests
B. Python: Delete Tests
C. HTML: Configure Tests
D. CSV: Run Tests

**Correct answer:** A

**Explanation:** The lecture shows using Python: Configure Tests from the command palette.

## P6-Q042 — VS Code testing

Which framework should be chosen in the VS Code testing setup from the lecture?

A. pytest
B. SMTP
C. BeautifulSoup
D. SQLite

**Correct answer:** A

**Explanation:** The activation steps say to choose pytest framework.

## P6-Q043 — First pytest test

Which keyword is used in a simple pytest test to verify an expected result?

A. assert
B. check
C. expect only
D. ensure only

**Correct answer:** A

**Explanation:** pytest tests commonly use Python assert statements.

## P6-Q044 — First pytest test

Given def add(a,b): return a+b, which assertion tests add(2,3)?

A. assert add(2, 3) == 5
B. assert add(2, 3) = 5
C. add(2,3) assert 5
D. assert 5 == add = (2,3)

**Correct answer:** A

**Explanation:** The valid assertion compares the return value to 5 using ==.

## P6-Q045 — Test discovery

Which file name pattern is discovered by pytest?

A. test_app.py
B. app.test
C. tests.docx
D. check-app.md

**Correct answer:** A

**Explanation:** pytest scans for test_*.py and *_test.py files.

## P6-Q046 — Test discovery

Which second file name pattern is discovered by pytest?

A. app_test.py
B. app.pytest.md
C. app.testing.txt
D. test-app.java

**Correct answer:** A

**Explanation:** pytest also scans for *_test.py files.

## P6-Q047 — Test discovery

Which functions does pytest collect as tests?

A. Functions starting with test
B. Functions ending with main
C. Every function in every file
D. Only functions named run

**Correct answer:** A

**Explanation:** pytest collects functions whose names start with test.

## P6-Q048 — Test discovery

Inside classes, which methods are collected by pytest?

A. Methods starting with test inside classes prefixed with Test
B. All methods in all classes
C. Only __init__ methods
D. Methods starting with run

**Correct answer:** A

**Explanation:** pytest collects methods starting with test in classes whose names start with Test.

## P6-Q049 — Test discovery

For pytest class grouping, what must the class name start with?

A. Test
B. test_
C. Check
D. Class

**Correct answer:** A

**Explanation:** pytest test classes should be prefixed with Test.

## P6-Q050 — Test discovery

For pytest test classes in the lecture, is inheritance required?

A. No
B. Yes, from unittest.TestCase only
C. Yes, from pytest.TestCase
D. Yes, from object explicitly

**Correct answer:** A

**Explanation:** pytest grouping classes do not require inheritance.

## P6-Q051 — Test discovery

For pytest test classes in the lecture, what should you avoid defining?

A. __init__ method
B. test methods
C. assert statements
D. class name starting with Test

**Correct answer:** A

**Explanation:** The lecture says no __init__ method is needed.

## P6-Q052 — Testing exceptions

Which pytest feature checks that an exception is raised?

A. pytest.raises
B. pytest.exception_is
C. pytest.error
D. pytest.catch_all

**Correct answer:** A

**Explanation:** pytest.raises is used as a context manager to verify expected exceptions.

## P6-Q053 — Testing exceptions

What happens if code inside with pytest.raises(TypeError) does not raise TypeError?

A. The test fails
B. The test always passes
C. pytest installs TypeError
D. The exception is ignored

**Correct answer:** A

**Explanation:** The test fails if the expected exception is not raised.

## P6-Q054 — Testing exceptions

Which example correctly tests that add("a", 2) raises TypeError?

A. with pytest.raises(TypeError): add("a", 2)
B. pytest.raises = TypeError(add("a", 2))
C. raise pytest(TypeError)
D. assert raises TypeError add("a", 2)

**Correct answer:** A

**Explanation:** pytest.raises is used as a context manager around the call that should fail.

## P6-Q055 — Parametrization

What does @pytest.mark.parametrize allow?

A. Running the same test logic with multiple input sets
B. Installing pytest automatically
C. Disabling all tests
D. Converting tests into CSV

**Correct answer:** A

**Explanation:** Parametrization generates independent test cases from one test function.

## P6-Q056 — Parametrization

In @pytest.mark.parametrize("a, b, expected", [...]), what do the names describe?

A. Parameters passed to the test function
B. Environment variables
C. Class attributes
D. Package names

**Correct answer:** A

**Explanation:** The names match the arguments of the test function.

## P6-Q057 — Parametrization

If @pytest.mark.parametrize contains three tuples, how many independent cases are generated?

A. Three
B. One
C. Zero
D. It depends on print()

**Correct answer:** A

**Explanation:** Each tuple of arguments becomes one independent test case.

## P6-Q058 — Parametrization

Which call pattern is correct for a parametrized test?

A. def test_add(a, b, expected): assert add(a,b) == expected
B. def test_add(): assert a+b==expected without parameters
C. @pytest.parametrize only, no test function
D. def add_test expected, a, b

**Correct answer:** A

**Explanation:** The test function accepts the same names declared in parametrize.

## P6-Q059 — Fixtures

What is a pytest fixture?

A. A function that sets up and optionally tears down an environment for tests
B. A type of database row
C. A syntax for list slicing
D. A command-line argument parser

**Correct answer:** A

**Explanation:** Fixtures prepare test resources and can clean them up afterward.

## P6-Q060 — Fixtures

Which decorator marks a pytest fixture?

A. @pytest.fixture
B. @pytest.test
C. @fixture.pytest
D. @mock.fixture

**Correct answer:** A

**Explanation:** @pytest.fixture marks a function as a fixture.

## P6-Q061 — Fixtures

How does a test receive a fixture?

A. By declaring a parameter with the fixture name
B. By importing every fixture manually inside the test body only
C. By using global variables only
D. By naming the test file fixture.py

**Correct answer:** A

**Explanation:** pytest injects a fixture when the test function has a parameter with the fixture name.

## P6-Q062 — Fixtures

In the lecture SMTP fixture, what does the fixture return or yield?

A. An smtplib.SMTP connection object
B. A Decimal object
C. A CSV reader
D. A pytest command

**Correct answer:** A

**Explanation:** The smtp fixture creates an smtplib.SMTP connection for the test.

## P6-Q063 — Fixtures

What is tmp_path?

A. A built-in pytest fixture that provides a pathlib.Path temporary directory per test
B. A permanent project folder
C. A string constant in requests
D. A SQLite cursor

**Correct answer:** A

**Explanation:** tmp_path gives a temporary directory as a pathlib.Path object.

## P6-Q064 — Fixtures

What older pytest fixture did tmp_path replace?

A. tmpdir
B. tempfile_old
C. tmp_file
D. old_path

**Correct answer:** A

**Explanation:** The lecture says tmp_path replaced the older tmpdir fixture in pytest 3.9+.

## P6-Q065 — Fixtures

What does tmp_path / "log.txt" create?

A. A Path object for a file named log.txt inside the temporary directory
B. A string division error
C. A real HTTP request
D. A pytest marker

**Correct answer:** A

**Explanation:** pathlib.Path overloads / to build child paths.

## P6-Q066 — Fixtures

In a fixture, what does return do?

A. Ends the fixture function immediately
B. Suspends and later resumes the fixture
C. Runs teardown after the test
D. Creates three tests

**Correct answer:** A

**Explanation:** return ends the function and does not resume after the test.

## P6-Q067 — Fixtures

In a fixture, what does yield do?

A. Provides the value to the test, then resumes after the test for teardown
B. Stops pytest discovery
C. Skips the test permanently
D. Creates a Decimal

**Correct answer:** A

**Explanation:** yield suspends the fixture while the test runs, then resumes for cleanup.

## P6-Q068 — Fixtures

When does teardown code after yield run?

A. After the test, even on test failure
B. Before fixture setup
C. Only if all tests pass
D. Never

**Correct answer:** A

**Explanation:** The lecture notes teardown after yield runs even if the test fails.

## P6-Q069 — Fixtures

Which line is teardown in the yielded SMTP fixture?

A. conn.close() after yield
B. import smtplib
C. @pytest.fixture
D. def smtp():

**Correct answer:** A

**Explanation:** The cleanup after the yielded connection closes it.

## P6-Q070 — Fixtures

Why use fixtures instead of duplicating setup code in every test?

A. They centralize setup and provide clean resources per test
B. They make tests impossible to run
C. They avoid assert statements
D. They convert tests to production code

**Correct answer:** A

**Explanation:** Fixtures reduce duplication and manage setup/teardown.

## P6-Q071 — Mocking

What is a mock object?

A. An object that replaces a real dependency during testing with controlled behavior
B. A real server that must be online
C. A test report file
D. A floating-point number

**Correct answer:** A

**Explanation:** Mocks isolate code from external dependencies by providing controlled responses.

## P6-Q072 — Mocking

Which Python library provides patch in the lecture example?

A. unittest.mock
B. requests.patch only
C. pytest.patcher
D. mockito only

**Correct answer:** A

**Explanation:** patch is imported from unittest.mock, which is built in.

## P6-Q073 — Mocking

What does @patch("requests.get") do in the example?

A. Replaces requests.get with a mock during the test
B. Performs a real HTTP GET
C. Installs requests
D. Deletes the requests module

**Correct answer:** A

**Explanation:** patch temporarily replaces the target function with a mock object.

## P6-Q074 — Mocking

In the mock example, what does mock_get.return_value.status_code = 200 configure?

A. The fake response status code returned by requests.get
B. The real server status code
C. pytest verbosity
D. Decimal precision

**Correct answer:** A

**Explanation:** The mock is configured so calling requests.get returns an object whose status_code is 200.

## P6-Q075 — Mocking

Why mock HTTP requests in unit tests?

A. Tests run offline, fast, and independently from external services
B. Mocks make tests slower
C. Mocks send real email
D. Mocks disable Python imports

**Correct answer:** A

**Explanation:** Mocking avoids real network calls and makes tests deterministic.

## P6-Q076 — Mocking

What real dependency is isolated in the fetch_status example?

A. requests.get
B. print
C. Decimal
D. pytest.approx

**Correct answer:** A

**Explanation:** The function fetch_status depends on requests.get, which is mocked in the test.

## P6-Q077 — Mocking

If requests.get is patched, is a real HTTP request made in the lecture example?

A. No
B. Yes, always
C. Only if pytest -v is used
D. Only when Decimal is imported

**Correct answer:** A

**Explanation:** The lecture explicitly says no real HTTP request is made.

## P6-Q078 — Test organization

Where should tests generally be kept?

A. Separate from production code
B. Inside comments only
C. In the Python interpreter binary
D. Only in .env files

**Correct answer:** A

**Explanation:** The lecture recommends separating tests from production code.

## P6-Q079 — Test organization

Which project layout is shown as one approach?

A. myproject/app.py and myproject/tests/test_app.py
B. myproject/app.docx only
C. tests inside Python standard library
D. one CSV file only

**Correct answer:** A

**Explanation:** One approach is a module with its own tests/ folder and test files.

## P6-Q080 — Test organization

What is the second test organization approach?

A. A parallel tests/ tree that mirrors the full project structure
B. All tests in README only
C. Tests stored in environment variables
D. Tests only in compiled files

**Correct answer:** A

**Explanation:** The lecture shows a separate tests/ tree mirroring the project.

## P6-Q081 — Separate test files

If app.py defines add(), how does tests/test_app.py import it in the lecture example?

A. import app
B. import add from pytest
C. from tests import app.py as file
D. open("app.py") only

**Correct answer:** A

**Explanation:** The example imports the module under test by name: import app.

## P6-Q082 — Separate test files

Why keep test files out of production packages?

A. To separate testing code from application code
B. Because pytest cannot read tests/
C. Because assert works only in production packages
D. Because imports become impossible

**Correct answer:** A

**Explanation:** The lecture recommends keeping test files separate from production code.

## P6-Q083 — Separate test files

What naming convention makes tests/test_app.py discoverable?

A. It starts with test_ and ends with .py
B. It starts with app_
C. It has no extension
D. It is named production.py

**Correct answer:** A

**Explanation:** test_app.py matches pytest’s test_*.py discovery rule.

## P6-Q084 — TDD

What does TDD stand for?

A. Test-Driven Development
B. Typed Data Dictionary
C. Temporary Debug Directory
D. Text Document Design

**Correct answer:** A

**Explanation:** TDD is Test-Driven Development.

## P6-Q085 — TDD

What is the correct TDD cycle?

A. Red-Green-Refactor
B. Green-Red-Delete
C. Refactor-Red-Ignore
D. Mock-Delete-Ship

**Correct answer:** A

**Explanation:** The lecture presents TDD as Red, Green, Refactor.

## P6-Q086 — TDD

What happens in the Red step?

A. Write a failing test for the next small feature
B. Delete all tests
C. Write all final code first
D. Refactor without tests

**Correct answer:** A

**Explanation:** Red means writing a test first and seeing it fail.

## P6-Q087 — TDD

What happens in the Green step?

A. Write the minimum code to make the test pass
B. Rewrite the whole application
C. Remove the failing test
D. Improve code style only

**Correct answer:** A

**Explanation:** Green focuses on the simplest implementation that passes the test.

## P6-Q088 — TDD

What happens in the Refactor step?

A. Improve the code without changing behavior
B. Change behavior without tests
C. Add random features
D. Delete the production code

**Correct answer:** A

**Explanation:** Refactoring improves structure while preserving passing behavior.

## P6-Q089 — TDD

In TDD, when should tests be written?

A. Before code
B. Only after deployment
C. Never
D. Only after refactor

**Correct answer:** A

**Explanation:** The lecture says write tests before code, not after.

## P6-Q090 — TDD

When should you stop in the TDD cycle according to the lecture?

A. When all required tests pass
B. When one test fails
C. Before running tests
D. After deleting mocks

**Correct answer:** A

**Explanation:** Stop when the required tests pass.

## P6-Q091 — TDD count_words

In the count_words example, what is the first Red test?

A. assert count_words("hello") == 1
B. assert count_words(1) == "hello"
C. assert "hello" == 0
D. assert split == 1

**Correct answer:** A

**Explanation:** The first test expects one word for the string hello.

## P6-Q092 — TDD count_words

In the count_words Green step, what minimum implementation is shown?

A. return len(text.split())
B. return 0
C. return text
D. raise ValueError

**Correct answer:** A

**Explanation:** The minimum solution uses split() and len() to count words.

## P6-Q093 — TDD count_words

What should count_words("") return in the extended tests?

A. 0
B. 1
C. None
D. TypeError always

**Correct answer:** A

**Explanation:** An empty string contains zero words.

## P6-Q094 — TDD count_words

What should count_words("hello   world") return according to the multiple spaces test idea?

A. 2
B. 3
C. 0
D. The original string

**Correct answer:** A

**Explanation:** str.split() without arguments treats repeated whitespace as separators and returns two words.

## P6-Q095 — TDD admin challenge

For a new requirement to filter HTTP 4xx lines, what is the first safe TDD step?

A. Write a failing test for filter_errors(log)
B. Refactor unrelated code first
C. Deploy immediately
D. Delete existing tests

**Correct answer:** A

**Explanation:** The Red step is writing a failing test for the new requirement.

## P6-Q096 — TDD admin challenge

After writing a failing test for filter_errors(log), what comes next?

A. Add the simplest filter_errors() that passes
B. Remove pytest
C. Mock Decimal
D. Change requirements

**Correct answer:** A

**Explanation:** The Green step is minimal code that passes the test.

## P6-Q097 — TDD admin challenge

Which edge case should be added for a log parser filter?

A. Empty log
B. Only a comment in source code
C. A missing pytest installation only
D. A DOCX style

**Correct answer:** A

**Explanation:** The lecture mentions edge-case tests such as empty log and mixed codes.

## P6-Q098 — TDD admin challenge

When should refactoring happen in the log parser TDD challenge?

A. Once all tests pass
B. Before any tests exist
C. Only if tests fail forever
D. Never

**Correct answer:** A

**Explanation:** TDD refactors after tests are green.

## P6-Q099 — Pytest code behavior

Which test name will pytest collect?

A. def test_add(): ...
B. def add_test(): ...
C. def check_add(): ...
D. def add(): ...

**Correct answer:** A

**Explanation:** pytest collects functions starting with test.

## P6-Q100 — Pytest code behavior

Which class name will pytest collect tests from?

A. class TestCalculator:
B. class CalculatorTestOnlyMaybe:
C. class Calculator:
D. class testingCalculator:

**Correct answer:** A

**Explanation:** pytest collects methods from classes prefixed with Test.

## P6-Q101 — Pytest code behavior

Which method inside class TestCalc will pytest collect?

A. def test_add(self):
B. def add(self):
C. def check(self):
D. def __init__(self):

**Correct answer:** A

**Explanation:** Test methods must start with test.

## P6-Q102 — Pytest code behavior

What is wrong with assert add(2, 2) = 4?

A. = is assignment; equality comparison needs ==
B. assert cannot compare integers
C. add cannot be tested
D. pytest needs semicolons

**Correct answer:** A

**Explanation:** Assertions comparing values use ==, not assignment =.

## P6-Q103 — Pytest code behavior

What will assert add(2, 2) == 5 do if add returns 4?

A. Fail the test
B. Pass silently
C. Install pytest
D. Return 5

**Correct answer:** A

**Explanation:** A false assert expression fails the test.

## P6-Q104 — Test design

Which is the best unit-test target?

A. A pure function that calculates a value
B. The whole internet
C. Every user in production
D. A laptop keyboard

**Correct answer:** A

**Explanation:** Unit tests are best for isolated functions/classes.

## P6-Q105 — Test design

Which test is more likely an integration test?

A. Checking that a parser and database writer work together
B. Checking add(2,2)==4 only
C. Checking a single string split only
D. Checking Decimal("0.1") only

**Correct answer:** A

**Explanation:** Integration tests verify multiple components working together.

## P6-Q106 — Test design

Which test is more likely an acceptance test?

A. Checking that the final system behavior satisfies a user requirement
B. Checking one private helper only
C. Checking one branch inside a function only
D. Checking pytest -q output

**Correct answer:** A

**Explanation:** Acceptance tests are user-requirement oriented.

## P6-Q107 — Mocking code behavior

If fetch_status returns requests.get(url).status_code and the patched mock returns status_code 404, what should fetch_status("x") return?

A. 404
B. 200 always
C. None
D. A real HTTP response object

**Correct answer:** A

**Explanation:** The function returns whatever status_code is configured on the mocked return value.

## P6-Q108 — Mocking code behavior

What should you mock when testing code that sends email?

A. The SMTP connection or send method
B. The integer type
C. The assert keyword
D. The test file name

**Correct answer:** A

**Explanation:** External services like email servers should be mocked to keep tests isolated.

## P6-Q109 — Fixture code behavior

A fixture creates a temporary file using tmp_path. Should tests depend on a permanent real file path?

A. No
B. Yes, always
C. Only for floats
D. Only for parametrize

**Correct answer:** A

**Explanation:** tmp_path lets tests use isolated temporary paths instead of permanent real files.

## P6-Q110 — Fixture code behavior

What happens to a fixture value when it is listed as a test parameter?

A. pytest calls the fixture and passes its result into the test
B. Python treats it as a string literal
C. The test is skipped
D. It becomes a command-line argument

**Correct answer:** A

**Explanation:** Fixture injection is based on test parameter names.

## P6-Q111 — Parametrization behavior

Why is parametrization useful?

A. It avoids repeating the same test logic for many input/output sets
B. It disables test discovery
C. It replaces all fixtures
D. It requires a database

**Correct answer:** A

**Explanation:** Parametrization keeps repeated test logic in one test function.

## P6-Q112 — Parametrization behavior

For @pytest.mark.parametrize("value", [1, 2, 3]), how many times is the test called?

A. 3
B. 1
C. 0
D. It depends on tmp_path

**Correct answer:** A

**Explanation:** Each value creates a separate test invocation.

## P6-Q113 — Precision testing

Which is bad practice for floats?

A. assert result == expected for approximate floating-point operations
B. assert result == pytest.approx(expected)
C. assert abs(result - expected) < tolerance
D. Use Decimal for exact decimal money values

**Correct answer:** A

**Explanation:** Direct equality is fragile for results involving binary floating-point approximations.

## P6-Q114 — Precision testing

Which is good practice for exact money-like decimal values?

A. Use Decimal with strings
B. Use float equality always
C. Use random rounding only
D. Store all money as comments

**Correct answer:** A

**Explanation:** Decimal("...") gives exact decimal representation.

## P6-Q115 — Test organization

Which import style matches the lecture for separate test files?

A. import app, then call app.add(2, 2)
B. copy all production code into tests
C. never import production modules
D. import tests as app only

**Correct answer:** A

**Explanation:** The test file imports the module under test and calls its function through the module name.

## P6-Q116 — TDD principle

Why should the first TDD test fail?

A. To prove the test actually detects the missing feature
B. Because all tests must always fail
C. Because pytest cannot pass first tests
D. Because refactoring requires failing tests

**Correct answer:** A

**Explanation:** A failing Red test shows the feature is not implemented yet and the test is meaningful.

## P6-Q117 — TDD principle

What should be preserved during refactoring?

A. Behavior
B. Failing tests
C. Syntax errors
D. External API outages

**Correct answer:** A

**Explanation:** Refactoring changes structure, not externally visible behavior.

## P6-Q118 — Testing philosophy

Which statement is most aligned with the lecture?

A. Tests catch regressions quickly
B. Tests guarantee no bug can exist
C. Tests are useful only after production failure
D. Tests are only for GUI apps

**Correct answer:** A

**Explanation:** The lecture says tests catch regressions in seconds instead of after deployment.

## P6-Q119 — Testing philosophy

What problem can happen without tests when an API changes?

A. A parser may silently return wrong results
B. Python stops supporting strings
C. pytest becomes mandatory
D. Files cannot be opened

**Correct answer:** A

**Explanation:** The lecture motivates tests by mentioning API/parser changes that silently break results.

## P6-Q120 — Testing philosophy

Which statement about tests and documentation is true?

A. Tests can document expected behavior
B. Tests replace all course slides
C. Tests hide usage examples
D. Tests are not executable

**Correct answer:** A

**Explanation:** Tests show how functions are intended to be used.

## P6-Q121 — Testing approaches

Which tool belongs to static testing?

A. pylint
B. pytest running a function
C. logging a live process only
D. smtplib sending email

**Correct answer:** A

**Explanation:** pylint analyzes code without running it.

## P6-Q122 — Testing approaches

Which tool belongs to dynamic testing?

A. pytest
B. pylint only
C. type checker only
D. IDE underline only

**Correct answer:** A

**Explanation:** pytest runs code with inputs and expected assertions.

## P6-Q123 — Testing approaches

Which belongs to passive observation?

A. Logging
B. assert add(2,2)==4
C. pytest.raises
D. parametrize

**Correct answer:** A

**Explanation:** Logging/tracing observes running behavior.

## P6-Q124 — pytest basics

What must a pytest assertion expression evaluate to for the test to pass?

A. True
B. False
C. None only
D. A string only

**Correct answer:** A

**Explanation:** assert passes when the expression is truthy.

## P6-Q125 — Testing exceptions

Which exception type should be named in pytest.raises?

A. The expected exception type
B. Always Exception for every test
C. Always KeyboardInterrupt
D. The function name

**Correct answer:** A

**Explanation:** pytest.raises should specify the exception you expect.

## P6-Q126 — Mocking

What is the main benefit of controlled mock responses?

A. Deterministic tests
B. More network dependency
C. Random failures
D. Manual copy-paste

**Correct answer:** A

**Explanation:** Mocks return controlled data, making tests predictable.

## P6-Q127 — Fixtures

What is one reason to use yield in a fixture instead of return?

A. To run cleanup code after the test
B. To avoid creating a value
C. To make pytest ignore the fixture
D. To create syntax errors

**Correct answer:** A

**Explanation:** yield allows teardown code after the test finishes.

## P6-Q128 — TDD count_words

Why does len(text.split()) work for "hello   world"?

A. split() without arguments collapses whitespace separators
B. split() counts characters
C. split() returns the original string
D. split() always returns one item

**Correct answer:** A

**Explanation:** Python string split without arguments separates on runs of whitespace.

## P6-Q129 — Test discovery

What happens if a file is named app_tests.txt?

A. pytest will not discover it as a Python test file by default
B. pytest always discovers it
C. It becomes a fixture
D. It is run as a database

**Correct answer:** A

**Explanation:** Default pytest discovery looks for Python files matching test_*.py or *_test.py.

## P6-Q130 — Testing levels

Which level is today’s focus in lecture 10?

A. Unit testing
B. Acceptance only
C. Production monitoring only
D. Manual UI testing only

**Correct answer:** A

**Explanation:** The lecture states unit testing is today’s focus.

## P6-Q131 — Test design

Which is a typical case for a function add(a,b)?

A. add(2, 3)
B. add(None, database, browser)
C. No input at all always
D. A corrupted compiled file

**Correct answer:** A

**Explanation:** Typical cases are normal expected usage.

## P6-Q132 — Test design

Which is an error case for add(a,b) if it accepts only numbers?

A. add("a", 2) raises TypeError
B. add(2,3)==5
C. add(0,0)==0
D. add(-1,1)==0

**Correct answer:** A

**Explanation:** Invalid input raising an expected exception is an error case.

