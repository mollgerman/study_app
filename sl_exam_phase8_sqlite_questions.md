# SL Exam Phase 8 — SQLite Question Bank (compact)

Source: `SL_W04IST_SI4034_lecture_12-sqlite.pdf`

Question count: 50

## P8-Q001 — SQLite basics

Which description best matches SQLite in Python?

A. A serverless relational database engine stored in a single file
B. A remote-only database that always needs a separate server
C. A Python package that must always be installed with pip
D. A spreadsheet format for Excel files

**Correct answer:** A

**Explanation:** SQLite is serverless, self-contained, relational, and stored in a single file.

## P8-Q002 — sqlite3 module

Which import is used for SQLite support in standard Python?

A. import sqlite3
B. import sqlite
C. import sqlserver
D. import pysql

**Correct answer:** A

**Explanation:** The lecture uses Python’s built-in sqlite3 module.

## P8-Q003 — Installation

Which statement about sqlite3 installation is correct?

A. sqlite3 is built into Python, so no pip installation is needed
B. sqlite3 requires pip install sqlite3
C. sqlite3 requires installing MySQL first
D. sqlite3 only works through DBeaver

**Correct answer:** A

**Explanation:** The sqlite3 module is included in Python.

## P8-Q004 — SQLite use cases

For which case is SQLite usually appropriate?

A. Local app data storage
B. High-volume concurrent writes
C. High-availability replication
D. Per-user access control in a large client-server system

**Correct answer:** A

**Explanation:** SQLite is good for local app data, configuration, caching, prototyping, and replacing flat files.

## P8-Q005 — SQLite limitations

Which scenario is listed as a reason to avoid SQLite?

A. High-volume concurrent writes
B. Local configuration persistence
C. Caching downloaded data
D. Replacing a small CSV file

**Correct answer:** A

**Explanation:** SQLite is not the best choice for high-volume concurrent writes.

## P8-Q006 — Flat files vs SQLite

What is the intended comparison in the lecture?

A. open("data.csv") vs sqlite3.connect("data.db")
B. Oracle vs PostgreSQL only
C. Excel vs PowerPoint
D. Python vs JavaScript

**Correct answer:** A

**Explanation:** The lecture says SQLite replaces fopen/open-style file storage, not Oracle.

## P8-Q007 — Transactions

A script executes three INSERT statements and crashes before con.commit(). What is saved?

A. Zero rows; uncommitted changes are discarded
B. All three rows; SQLite always autocommits
C. Only the first row
D. Only rows with INTEGER PRIMARY KEY

**Correct answer:** A

**Explanation:** Without commit, the transaction is rolled back when the connection closes.

## P8-Q008 — Storage classes

Which is NOT one of SQLite’s five storage classes from the lecture?

A. BOOLEAN
B. NULL
C. INTEGER
D. BLOB

**Correct answer:** A

**Explanation:** SQLite storage classes are NULL, INTEGER, REAL, TEXT, and BLOB.

## P8-Q009 — SQLite typing

What does “flexible typing” mean in SQLite?

A. Column type declarations are advisory and values may be coerced
B. Every column strictly rejects all other types
C. All values are stored as strings
D. Python type hints are required for every column

**Correct answer:** A

**Explanation:** SQLite column declarations are advisory rather than strictly enforced.

## P8-Q010 — Connecting

What happens when sqlite3.connect("usos.db") is called and the file does not exist?

A. The database file is created
B. Python raises ImportError
C. The command silently does nothing
D. Only an in-memory database is created

**Correct answer:** A

**Explanation:** sqlite3.connect opens or creates the database file.

## P8-Q011 — In-memory database

What is true about sqlite3.connect(":memory:")?

A. It creates a temporary database that is lost on close
B. It creates a permanent file named memory.db
C. It disables SQL queries
D. It requires DBeaver

**Correct answer:** A

**Explanation:** The in-memory database is fast and temporary, and disappears when closed.

## P8-Q012 — Cursor

What is a cursor in sqlite3?

A. An object used to send SQL statements to the database
B. A pointer to the mouse position
C. A special Python list of tables
D. A file encoding setting

**Correct answer:** A

**Explanation:** The lecture defines Cursor as an object used to send SQL statements to the database.

## P8-Q013 — Cursor methods

Which method is used to execute one SQL statement?

A. execute()
B. fetchone()
C. rollback()
D. connect()

**Correct answer:** A

**Explanation:** execute() sends one SQL statement through a cursor or connection.

## P8-Q014 — Multiple inserts

Which cursor method is best for inserting many rows using one statement and many parameter sets?

A. executemany()
B. fetchmany()
C. fetchall()
D. row_factory()

**Correct answer:** A

**Explanation:** executemany() runs a statement for multiple parameter sets.

## P8-Q015 — Fetching one row

What does fetchone() return when there are no more rows?

A. None
B. An empty dictionary
C. False
D. 0

**Correct answer:** A

**Explanation:** fetchone() returns a tuple for a row or None if no more rows exist.

## P8-Q016 — Fetching batches

What does fetchmany(4) return?

A. A list of up to 4 rows
B. Exactly 4 database files
C. One tuple only
D. A SQL cursor name

**Correct answer:** A

**Explanation:** fetchmany(n) returns a list containing up to n rows.

## P8-Q017 — fetchall behavior

After some rows have already been consumed, what does fetchall() return?

A. All remaining rows
B. Always the whole table from the beginning
C. Only the first row
D. The number of affected rows

**Correct answer:** A

**Explanation:** fetchall() returns rows not yet consumed by previous fetch operations.

## P8-Q018 — Cursor iteration

Which statement is true about cursors?

A. A cursor can be used directly in a for loop
B. A cursor cannot be iterated
C. A cursor is always a dictionary
D. A cursor automatically commits every SELECT

**Correct answer:** A

**Explanation:** The cursor is an iterator and can be used directly in for loops.

## P8-Q019 — Large result sets

For large SELECT results, which approach is preferred?

A. Iterating over the cursor
B. Always using fetchall()
C. Converting the database to CSV first
D. Using rollback() before reading

**Correct answer:** A

**Explanation:** Iteration avoids loading all rows into memory at once.

## P8-Q020 — Primary key

Which declaration creates an auto-incrementing rowid alias in SQLite?

A. id INTEGER PRIMARY KEY
B. id INT PRIMARY KEY
C. id TEXT PRIMARY KEY
D. id NUMBER PRIMARY KEY

**Correct answer:** A

**Explanation:** The exact keyword INTEGER PRIMARY KEY creates the rowid alias.

## P8-Q021 — Primary key mistake

Why can INT PRIMARY KEY be a mistake in SQLite?

A. It does not create the auto-incrementing rowid alias
B. It creates two tables
C. It prevents SELECT queries
D. It forces values to become TEXT

**Correct answer:** A

**Explanation:** The lecture warns that INT PRIMARY KEY is not equivalent to INTEGER PRIMARY KEY for rowid aliasing.

## P8-Q022 — Commit

What is the purpose of con.commit() after write operations?

A. Finalize the transaction so changes are saved
B. Open a new cursor
C. Delete all rows
D. Convert rows to dictionaries

**Correct answer:** A

**Explanation:** Every write operation needs commit() to finalize the transaction unless managed otherwise.

## P8-Q023 — SQL injection prevention

Which code style is safest for user data in INSERT or WHERE clauses?

A. Use ? placeholders and pass parameters separately
B. Use f-strings to build SQL directly
C. Concatenate strings with +
D. Use assert before SQL

**Correct answer:** A

**Explanation:** Parameterized statements avoid SQL injection attacks.

## P8-Q024 — Dangerous SQL construction

Why is cur.execute(f"INSERT ... {name} ...") dangerous with user data?

A. It may allow SQL injection
B. It always creates an in-memory database
C. It prevents commit() from working
D. It automatically closes the connection

**Correct answer:** A

**Explanation:** Building SQL with f-strings can mix user input into SQL code.

## P8-Q025 — Placeholder tuple

In cur.execute("DELETE FROM faculties WHERE code = ?", ("W5",)), why is the comma needed?

A. To create a one-element tuple
B. To create a dictionary
C. To commit the deletion
D. To convert W5 to bytes

**Correct answer:** A

**Explanation:** ("W5",) is a one-element tuple; without the comma it is just a parenthesized string.

## P8-Q026 — Named placeholders

Which placeholder style matches a dictionary such as {"id": 6, "name": "Computer Science"}?

A. :id and :name
B. ?id and ?name
C. %id and %name
D. {id} only inside f-strings

**Correct answer:** A

**Explanation:** sqlite3 supports named placeholders like :id with dictionary parameters.

## P8-Q027 — UPDATE without WHERE

What happens if an UPDATE statement has no WHERE clause?

A. It may modify every row
B. It raises SyntaxError automatically
C. It modifies no rows
D. It only changes the first row

**Correct answer:** A

**Explanation:** The lecture warns that UPDATE without WHERE modifies every row.

## P8-Q028 — DELETE without WHERE

What happens if a DELETE statement has no WHERE clause?

A. It deletes every row
B. It deletes only duplicate rows
C. It automatically rolls back
D. It creates a new table

**Correct answer:** A

**Explanation:** DELETE without WHERE deletes all rows in the table.

## P8-Q029 — Default JOIN

In SQLite SQL, what is the default JOIN shown in the lecture?

A. INNER JOIN
B. LEFT JOIN
C. FULL OUTER JOIN
D. CROSS DATABASE JOIN

**Correct answer:** A

**Explanation:** The lecture states that default JOIN is INNER JOIN.

## P8-Q030 — LEFT JOIN

What does LEFT JOIN preserve?

A. All rows from the left table, even if there is no match
B. Only rows with matches in both tables
C. Only rows from the right table
D. Only duplicate rows

**Correct answer:** A

**Explanation:** LEFT JOIN keeps all rows from the left table and uses NULL for missing right-side values.

## P8-Q031 — Closing resources

Which pair explicitly closes sqlite3 resources?

A. cur.close(); con.close()
B. cur.commit(); con.fetchall()
C. con.rollback(); sqlite3.close_all()
D. fetchone(); fetchmany()

**Correct answer:** A

**Explanation:** The lecture shows closing cursor and connection explicitly.

## P8-Q032 — contextlib.closing

Why use contextlib.closing() with sqlite3 connections/cursors?

A. To close them automatically at the end of a with block
B. To make SELECT statements faster
C. To change row names to uppercase
D. To disable transactions

**Correct answer:** A

**Explanation:** contextlib.closing() ensures close() is called automatically.

## P8-Q033 — Connection context manager

What does with con: manage?

A. The transaction only
B. The connection closing only
C. The SQL syntax checking only
D. The table schema only

**Correct answer:** A

**Explanation:** with con: commits on success and rolls back on exception, but does not close the connection.

## P8-Q034 — with con close

After using with con:, what must still be done if you want to close the connection?

A. Call con.close() or combine with contextlib.closing()
B. Call fetchall()
C. Call sqlite3.disconnect_all()
D. Nothing, with con always closes it

**Correct answer:** A

**Explanation:** The lecture emphasizes that with con: does not close the connection.

## P8-Q035 — Context manager transaction

What happens in with con: if an exception occurs inside the block?

A. The transaction is rolled back
B. The transaction is always committed
C. The database file is deleted
D. The cursor becomes a list

**Correct answer:** A

**Explanation:** Connection context manager rolls back on exception.

## P8-Q036 — autocommit False

In Python 3.12+, which autocommit setting is recommended for new sqlite3 code?

A. autocommit=False
B. autocommit=True
C. autocommit="always"
D. autocommit=None only

**Correct answer:** A

**Explanation:** The lecture says autocommit=False is recommended in new code.

## P8-Q037 — autocommit True

What does autocommit=True mean?

A. Each statement commits immediately
B. No statement is ever committed
C. Only SELECT statements are allowed
D. The database is stored in memory

**Correct answer:** A

**Explanation:** With autocommit=True, each statement commits immediately.

## P8-Q038 — legacy transaction control

What does LEGACY_TRANSACTION_CONTROL refer to?

A. Pre-Python-3.12 transaction behavior/current default that will change
B. A storage class for old rows
C. A function for deleting rows
D. A DBeaver-only feature

**Correct answer:** A

**Explanation:** The lecture lists it as pre-3.12 behavior and notes the default will change.

## P8-Q039 — Connection shortcut

Which shortcut can be used without explicitly creating a cursor for simple statements?

A. con.execute("SELECT * FROM faculties")
B. sqlite3.execute_all("SELECT *")
C. con.fetchcursor("SELECT *")
D. cursorless.rollback("SELECT *")

**Correct answer:** A

**Explanation:** The connection object has shortcut methods such as con.execute().

## P8-Q040 — Explicit cursor need

When is an explicit cursor especially useful according to the lecture?

A. When you need cur.lastrowid or cur.rowcount
B. When you want to avoid SQL entirely
C. When using print()
D. When reading a text file encoding

**Correct answer:** A

**Explanation:** The lecture says to use an explicit cursor when lastrowid or rowcount are needed.

## P8-Q041 — row_factory

How do you enable named column access for rows?

A. con.row_factory = sqlite3.Row
B. con.named_rows = True
C. cur.row_type = dict
D. sqlite3.enable_json_rows()

**Correct answer:** A

**Explanation:** Setting con.row_factory to sqlite3.Row enables named access.

## P8-Q042 — sqlite3.Row access

After setting sqlite3.Row, which access is valid?

A. Both row["name"] and row[0]
B. Only row["name"], never row[0]
C. Only row.name
D. Only row.get_column(0)

**Correct answer:** A

**Explanation:** sqlite3.Row supports named access and index access.

## P8-Q043 — row.keys

What does row.keys() provide for sqlite3.Row?

A. The column names
B. The primary keys of all tables
C. The database password
D. The SQL query history

**Correct answer:** A

**Explanation:** row.keys() returns column names such as id, name, code.

## P8-Q044 — Case sensitivity

What is true about column names in sqlite3.Row access?

A. Column names are case-insensitive
B. Column names must be uppercase only
C. Column names cannot be strings
D. Column names require UTF-32

**Correct answer:** A

**Explanation:** The lecture states that column names are case-insensitive.

## P8-Q045 — IntegrityError

Which problem commonly raises sqlite3.IntegrityError?

A. Duplicate primary key
B. Wrong number of placeholders
C. Missing table name
D. Calling fetchone()

**Correct answer:** A

**Explanation:** IntegrityError is associated with constraint violations like duplicate primary keys or foreign key violations.

## P8-Q046 — OperationalError

Which problem commonly raises sqlite3.OperationalError?

A. Missing table, locked database, or wrong path
B. Using a duplicate primary key only
C. Wrong number of question mark placeholders only
D. A failed Python assert

**Correct answer:** A

**Explanation:** The lecture lists missing table, locked database, and wrong path as typical OperationalError causes.

## P8-Q047 — ProgrammingError

Which problem commonly raises sqlite3.ProgrammingError?

A. Wrong number of ? placeholders
B. Duplicate primary key
C. Using SELECT
D. Closing a file after reading

**Correct answer:** A

**Explanation:** ProgrammingError can occur when the number of placeholders does not match parameters.

## P8-Q048 — Rollback

Why call con.rollback() after a database error?

A. To undo uncommitted changes in the current transaction
B. To permanently save all changes
C. To create a new table
D. To fetch rows as dictionaries

**Correct answer:** A

**Explanation:** rollback() reverts uncommitted changes after a failure.

## P8-Q049 — SELECT vs write transaction

Which operation normally changes data and therefore needs a commit?

A. INSERT
B. SELECT
C. fetchone()
D. row.keys()

**Correct answer:** A

**Explanation:** INSERT, UPDATE, and DELETE are write operations that need commit unless managed by transaction context/autocommit.

## P8-Q050 — Exam trap

Which answer is the best exam rule for sqlite3 user input?

A. Never format user input into SQL; use parameters
B. Always use f-strings because they are modern Python
C. Use assert to check SQL injection
D. Use fetchall() before every INSERT

**Correct answer:** A

**Explanation:** The safe pattern is parameterized SQL with placeholders.
