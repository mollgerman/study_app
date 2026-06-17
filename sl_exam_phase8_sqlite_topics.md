# SL Exam Phase 8 — SQLite and `sqlite3` (compact)

Source lecture: `SL_W04IST_SI4034_lecture_12-sqlite.pdf`

This phase is intentionally **smaller** than previous phases. It focuses on the highest-probability exam traps for a paper-based, single-choice Python exam.

## Core topics

1. **What SQLite is**
   - Serverless, self-contained relational database engine.
   - Stored in a single file.
   - Built into Python through `sqlite3`.
   - Better compared with `open("data.csv")` than with enterprise databases.

2. **When to use / avoid SQLite**
   - Good for local app data, configuration, caches, prototypes, and replacing flat files.
   - Avoid for high-volume concurrent writes, high availability/replication, big multi-user systems, and per-user access control.

3. **Connections and storage**
   - `sqlite3.connect("file.db")` opens or creates a file.
   - `sqlite3.connect(":memory:")` creates a temporary database lost on close.
   - SQLite storage classes: `NULL`, `INTEGER`, `REAL`, `TEXT`, `BLOB`.
   - Column types are advisory; SQLite uses flexible typing.

4. **Transactions**
   - Write operations require `commit()` unless handled by context manager/autocommit.
   - Uncommitted changes are discarded if the program crashes before commit.
   - `rollback()` undoes uncommitted changes.
   - `with con:` manages transactions only: commit on success, rollback on exception, but does not close the connection.
   - Python 3.12+ recommends `sqlite3.connect(..., autocommit=False)` for new code.

5. **Cursors and reading data**
   - Cursor sends SQL statements to the database.
   - `execute()`, `executemany()`, `executescript()` are for statements.
   - `fetchone()` returns one tuple or `None`.
   - `fetchmany(n)` returns up to `n` rows.
   - `fetchall()` returns all remaining rows.
   - Cursor is iterable; iteration is better for large result sets.

6. **Parameterized statements and SQL injection**
   - Use `?` placeholders or named placeholders such as `:id`.
   - Do not build SQL from user input using f-strings or string concatenation.
   - A one-element parameter tuple needs a comma: `("W5",)`.

7. **SQL operations and joins**
   - `UPDATE` without `WHERE` modifies every row.
   - `DELETE` without `WHERE` deletes every row.
   - Default `JOIN` is `INNER JOIN`.
   - `LEFT JOIN` preserves all rows from the left table.

8. **Resource handling and advanced patterns**
   - Use `cur.close()` and `con.close()` or `contextlib.closing()`.
   - `con.execute(...)` can be used as a shortcut for simple statements.
   - Use explicit cursor when `lastrowid` or `rowcount` is needed.
   - `con.row_factory = sqlite3.Row` allows access by column name and index.

9. **Common exceptions**
   - `IntegrityError`: duplicate primary key, foreign key violation.
   - `OperationalError`: missing table, locked database, wrong path.
   - `ProgrammingError`: wrong number of placeholders.
