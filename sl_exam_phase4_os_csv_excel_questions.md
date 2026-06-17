# Phase 4 — OS interfaces, CSV, and Excel (Lecture 08) — Question Bank
Source lecture: `SL_W04IST_SI4034_lecture_08-os.pdf`
Questions: 98
Format: single-choice. Most are True/False because the Thomas seed exam uses that style heavily.

## P4-Q001 — Lambda expressions

In Python, lambda x, y: x + y creates an anonymous function.

A. True
B. False

**Correct answer:** True

**Explanation:** lambda creates an unnamed function object whose body is an expression.

## P4-Q002 — Lambda expressions

A lambda expression in Python is best used when a short function is needed in only one place.

A. True
B. False

**Correct answer:** True

**Explanation:** That is the main use shown in the lecture.

## P4-Q003 — Lambda expressions

The expression lambda x, y: x + y is equivalent in behavior to a simple function that returns x + y.

A. True
B. False

**Correct answer:** True

**Explanation:** It is similar to def f(x, y): return x + y.

## P4-Q004 — Lambda expressions

A Python lambda can contain several statements separated by indentation, just like a def function body.

A. True
B. False

**Correct answer:** False

**Explanation:** A lambda body must be a single expression, not a statement block.

## P4-Q005 — Lambda expressions

A Python lambda can directly contain a return statement.

A. True
B. False

**Correct answer:** False

**Explanation:** return is a statement; lambda contains an expression whose value is returned implicitly.

## P4-Q006 — Lambda expressions

The expression lambda x: x if x > 0 else -x is valid Python.

A. True
B. False

**Correct answer:** True

**Explanation:** A conditional expression is still an expression, so it is allowed inside lambda.

## P4-Q007 — Lambda expressions

The expression lambda x: if x > 0: x else: -x is valid Python.

A. True
B. False

**Correct answer:** False

**Explanation:** That uses statement syntax; a lambda requires expression syntax: x if x > 0 else -x.

## P4-Q008 — Lambda expressions

For l = [(1, 'Bob'), (2, 'Alice')], l.sort() sorts by the whole tuple by default.

A. True
B. False

**Correct answer:** True

**Explanation:** Tuple comparison starts with element 0, then element 1 if needed.

## P4-Q009 — Lambda expressions

For l = [(1, 'Bob'), (2, 'Alice')], l.sort(key=lambda k: k[1]) sorts using the names rather than the numbers.

A. True
B. False

**Correct answer:** True

**Explanation:** The key function returns tuple element 1, the name.

## P4-Q010 — Lambda expressions

For l = [(1, 'Bob'), (2, 'Alice')], after l.sort(key=lambda k: k[1]), the first tuple is (2, 'Alice').

A. True
B. False

**Correct answer:** True

**Explanation:** Alphabetically, 'Alice' comes before 'Bob'.

## P4-Q011 — Lambda expressions

In sorted(items, key=lambda x: x[1]), the lambda is called to compute a sorting key.

A. True
B. False

**Correct answer:** True

**Explanation:** The key function tells Python what value to sort by.

## P4-Q012 — Lambda expressions

A lambda function cannot take more than one parameter.

A. True
B. False

**Correct answer:** False

**Explanation:** lambda x, y: x + y is valid and has two parameters.

## P4-Q013 — Lambda expressions

A lambda expression must always be assigned to a variable before it can be used.

A. True
B. False

**Correct answer:** False

**Explanation:** It can be passed directly, for example as a key function.

## P4-Q014 — Lambda expressions

Tuple sorting compares tuple elements one by one from the first element.

A. True
B. False

**Correct answer:** True

**Explanation:** Default tuple comparison is lexicographic.

## P4-Q015 — Lambda expressions

Using key=lambda k: k[1] can change how a list of tuples is sorted.

A. True
B. False

**Correct answer:** True

**Explanation:** The key selects the second item as the comparison key.

## P4-Q016 — Program arguments

sys.argv is a list containing command-line arguments.

A. True
B. False

**Correct answer:** True

**Explanation:** The sys module exposes command-line arguments through sys.argv.

## P4-Q017 — Program arguments

sys.argv includes the Python interpreter command itself, such as 'python'.

A. True
B. False

**Correct answer:** False

**Explanation:** It excludes the interpreter; it includes the script name and following arguments.

## P4-Q018 — Program arguments

When running python myprog.py file.txt -s 3, sys.argv can contain ['myprog.py', 'file.txt', '-s', '3'].

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows this exact structure.

## P4-Q019 — Program arguments

When using sys.argv directly, Python automatically knows which argument is a filename and which one is an option.

A. True
B. False

**Correct answer:** False

**Explanation:** With sys.argv, the user/programmer must interpret arguments manually.

## P4-Q020 — Program arguments

The argparse module helps handle command-line arguments in Python.

A. True
B. False

**Correct answer:** True

**Explanation:** argparse is designed for parsing arguments.

## P4-Q021 — Program arguments

argparse.ArgumentParser() creates an argument parser object.

A. True
B. False

**Correct answer:** True

**Explanation:** That is the standard starting point shown in the lecture.

## P4-Q022 — Program arguments

parser.parse_args() parses the command-line arguments according to the parser configuration.

A. True
B. False

**Correct answer:** True

**Explanation:** parse_args reads and validates the command line.

## P4-Q023 — Program arguments

A positional argument added as parser.add_argument('number') is optional by default.

A. True
B. False

**Correct answer:** False

**Explanation:** Positional arguments are required by default.

## P4-Q024 — Program arguments

In argparse, the default type of an argument value is string unless type=... is specified.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture explicitly says type describes the type, string by default.

## P4-Q025 — Program arguments

parser.add_argument('number', type=int) makes argparse convert that argument to int.

A. True
B. False

**Correct answer:** True

**Explanation:** type=int requests integer conversion.

## P4-Q026 — Program arguments

Optional arguments in argparse can have both a short and long version, such as -e and --extra.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows parser.add_argument('-e', '--extra', ...).

## P4-Q027 — Program arguments

In argparse, default=2 provides the value 2 when the optional argument is not passed.

A. True
B. False

**Correct answer:** True

**Explanation:** default supplies a fallback value.

## P4-Q028 — Program arguments

The help parameter in add_argument describes the argument in help output.

A. True
B. False

**Correct answer:** True

**Explanation:** help text is used in argparse help messages.

## P4-Q029 — Program arguments

The description parameter of ArgumentParser can be used to add text to the generated help.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture uses argparse.ArgumentParser(description='App to increase integers').

## P4-Q030 — Program arguments

A long option normally starts with two dashes, for example --version.

A. True
B. False

**Correct answer:** True

**Explanation:** That is the command-line convention from the lecture.

## P4-Q031 — Program arguments

A short option normally starts with two dashes, for example --v.

A. True
B. False

**Correct answer:** False

**Explanation:** A short option normally uses one dash, like -v.

## P4-Q032 — Program arguments

A positional argument is written without an option name, for example file.txt.

A. True
B. False

**Correct answer:** True

**Explanation:** file.txt is used as an example of a positional argument.

## P4-Q033 — Program arguments

In the lecture's argparse example, args.number + args.extra works because both arguments use type=int.

A. True
B. False

**Correct answer:** True

**Explanation:** Without type=int, they would be strings and + would concatenate or fail depending on context.

## P4-Q034 — Environment variables

os.environ gives access to environment variables in Python.

A. True
B. False

**Correct answer:** True

**Explanation:** The os module exposes environment variables through os.environ.

## P4-Q035 — Environment variables

os.environ behaves like a dictionary of environment variables.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture says environ is a dictionary with all variables.

## P4-Q036 — Environment variables

os.environ['USERPROFILE'] and os.environ.get('USERPROFILE') behave identically when USERPROFILE is missing.

A. True
B. False

**Correct answer:** False

**Explanation:** Indexing raises KeyError; get returns None or a provided default.

## P4-Q037 — Environment variables

os.getenv('USERPROFILE', 'C:\Users\Default') can return a default value if the variable is missing.

A. True
B. False

**Correct answer:** True

**Explanation:** os.getenv supports a default parameter.

## P4-Q038 — Environment variables

Setting os.environ['DATAFILE'] = 'filename.csv' changes the system environment permanently for all future applications.

A. True
B. False

**Correct answer:** False

**Explanation:** It only affects the current app and child processes started by it.

## P4-Q039 — Environment variables

An application's environment is a copy of the system environment.

A. True
B. False

**Correct answer:** True

**Explanation:** Changes inside the app do not rewrite the global system environment.

## P4-Q040 — Environment variables

Environment variables are often used to pass configuration to applications.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture mentions they are widely used by containers for configuration.

## P4-Q041 — Environment variables

The python-dotenv package can read runtime settings from a .env file.

A. True
B. False

**Correct answer:** True

**Explanation:** python-dotenv loads variables from .env.

## P4-Q042 — Environment variables

load_dotenv() overwrites existing environment variables by default.

A. True
B. False

**Correct answer:** False

**Explanation:** Existing variables are not overwritten unless override=True is explicitly passed.

## P4-Q043 — Environment variables

If a .env file contains sensitive data, it should usually be added to .gitignore.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture warns to add sensitive .env files to .gitignore.

## P4-Q044 — Environment variables

If no .env file is present, an application using load_dotenv() can still read normal environment variables.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture says if .env is absent, the application reads just environment variables.

## P4-Q045 — Environment variables

In a .env file, ADMIN_EMAIL=admin@${DOMAIN} can reuse another variable named DOMAIN.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture example uses ADMIN_EMAIL=admin@${DOMAIN}.

## P4-Q046 — CSV files

CSV files are text files.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture describes CSV files as text files editable by a text editor or spreadsheet.

## P4-Q047 — CSV files

CSV files can have problems with different separators and encodings.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture lists separators and encodings as CSV problems.

## P4-Q048 — CSV files

A CSV field can contain the separator character if it is quoted properly.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture example includes 'New York, Manhattan' as one field.

## P4-Q049 — CSV files

csv.reader(dataFile) returns rows as dictionaries by default.

A. True
B. False

**Correct answer:** False

**Explanation:** csv.reader returns rows as lists; DictReader returns dictionaries.

## P4-Q050 — CSV files

A csv.reader object can normally be iterated only once because it consumes the stream.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture says dataReader can be used in the loop only once.

## P4-Q051 — CSV files

list(dataReader) reads all rows at once into a list.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows dataList = list(dataReader) and notes all rows are read at once.

## P4-Q052 — CSV files

csv.DictReader is usually useful when the first row contains column headers.

A. True
B. False

**Correct answer:** True

**Explanation:** DictReader maps values to column names.

## P4-Q053 — CSV files

If fieldnames is not provided to DictReader, it uses the first row as column names.

A. True
B. False

**Correct answer:** True

**Explanation:** This is explicitly stated in the lecture.

## P4-Q054 — CSV files

If fieldnames=['Id', 'Name'] is passed to DictReader, those names are used as keys.

A. True
B. False

**Correct answer:** True

**Explanation:** The fieldnames parameter supplies column names.

## P4-Q055 — CSV files

csv.Sniffer().sniff(dataFile.read(1024)) can be used to guess the CSV dialect.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows this pattern.

## P4-Q056 — CSV files

After reading a sample for csv.Sniffer, dataFile.seek(0) returns the file pointer to the start.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture includes dataFile.seek(0) after sniffing.

## P4-Q057 — CSV files

csv.writer(dataFile).writerow(row) can write one CSV row.

A. True
B. False

**Correct answer:** True

**Explanation:** writerow writes a single row.

## P4-Q058 — CSV files

When writing CSV in Python, open(..., newline='') is shown in the lecture examples.

A. True
B. False

**Correct answer:** True

**Explanation:** Both writer and DictWriter examples use newline=''.

## P4-Q059 — CSV files

csv.DictWriter writes rows from dictionaries instead of lists.

A. True
B. False

**Correct answer:** True

**Explanation:** DictWriter maps dictionary keys to CSV columns.

## P4-Q060 — CSV files

writer.writeheader() writes the header row when using DictWriter.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows writer.writeheader().

## P4-Q061 — CSV files

With DictWriter, the order of dictionary keys in each row determines the CSV column order.

A. True
B. False

**Correct answer:** False

**Explanation:** DictWriter uses the fieldnames order.

## P4-Q062 — CSV files

With DictWriter, you must provide every field in every row dictionary or Python always raises an exception.

A. True
B. False

**Correct answer:** False

**Explanation:** The lecture says you do not have to put all fields in each row.

## P4-Q063 — CSV files

Using csv.reader is safer than manually splitting CSV lines with split(',') because fields can include separators.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture highlights that fields can include separators, so proper CSV parsing is needed.

## P4-Q064 — CSV files

csv.DictReader always requires a manually provided fieldnames list.

A. True
B. False

**Correct answer:** False

**Explanation:** It can infer field names from the first row.

## P4-Q065 — CSV files

A CSV file can be edited in Excel or LibreOffice Calc.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture says CSV files can be edited with a spreadsheet.

## P4-Q066 — Excel files with openpyxl

The lecture uses openpyxl as the library for working with Excel files.

A. True
B. False

**Correct answer:** True

**Explanation:** openpyxl is described as the most popular library for Excel files.

## P4-Q067 — Excel files with openpyxl

openpyxl is built into Python, so it never needs installation.

A. True
B. False

**Correct answer:** False

**Explanation:** The lecture says it is an additional library and shows pip install openpyxl.

## P4-Q068 — Excel files with openpyxl

A spreadsheet workbook consists of sheets.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture describes spreadsheets as consisting of sheets.

## P4-Q069 — Excel files with openpyxl

A newly created openpyxl.Workbook() contains a default sheet.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture says a new Workbook contains the default sheet.

## P4-Q070 — Excel files with openpyxl

workbook.active gives access to the active sheet.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture uses sheet = workbook.active.

## P4-Q071 — Excel files with openpyxl

sheet.title = 'My sheet' changes the worksheet name.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows setting sheet.title.

## P4-Q072 — Excel files with openpyxl

workbook.create_sheet(title='Next sheet') creates another worksheet.

A. True
B. False

**Correct answer:** True

**Explanation:** That is the lecture example.

## P4-Q073 — Excel files with openpyxl

workbook.save('mySheet.xlsx') overwrites existing files without warning.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture explicitly warns that save() overwrites existing files without warning.

## P4-Q074 — Excel files with openpyxl

openpyxl.load_workbook('test.xlsx') opens an existing workbook.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture uses load_workbook for existing files.

## P4-Q075 — Excel files with openpyxl

workbook.sheetnames returns the list of worksheet names.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture prints workbook.sheetnames.

## P4-Q076 — Excel files with openpyxl

workbook['Mysheet'] selects a worksheet by name.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows sheet2 = workbook['Mysheet'].

## P4-Q077 — Excel files with openpyxl

Cells in Excel can be indexed by columns A, B, C and rows 1, 2, 3.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture describes Excel-style cell indexing.

## P4-Q078 — Excel files with openpyxl

sheet['B3'] = 34 writes the value 34 to cell B3.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows direct cell assignment using B3.

## P4-Q079 — Excel files with openpyxl

sheet.cell(row=3, column=2, value=10) writes to cell B3.

A. True
B. False

**Correct answer:** True

**Explanation:** Row 3 and column 2 correspond to B3.

## P4-Q080 — Excel files with openpyxl

In openpyxl, row and column indexes in sheet.cell() are 0-based.

A. True
B. False

**Correct answer:** False

**Explanation:** Excel/openpyxl row and column numbers are 1-based in this API.

## P4-Q081 — Excel files with openpyxl

The result of sheet.cell(row=3, column=2) is a Cell object.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture says cell() returns a Cell object.

## P4-Q082 — Excel files with openpyxl

cell.value = '=SUM(A2:A10)' assigns an Excel formula to the cell.

A. True
B. False

**Correct answer:** True

**Explanation:** Formulas are assigned as strings beginning with '='.

## P4-Q083 — Excel files with openpyxl

When assigning Excel formulas in openpyxl, the lecture reminds to use English function names.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture explicitly says to remember to use English names.

## P4-Q084 — Excel files with openpyxl

worksheet['A1':'B6'] selects a rectangular range of cells.

A. True
B. False

**Correct answer:** True

**Explanation:** That is the lecture's range example.

## P4-Q085 — Excel files with openpyxl

worksheet['A'] selects a full column range.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture lists worksheet['A'] as a column-only selection.

## P4-Q086 — Excel files with openpyxl

worksheet[5] selects row 5.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows cell_row = worksheet[5].

## P4-Q087 — Excel files with openpyxl

worksheet.iter_rows(...) iterates through cells by rows.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows nested loops over worksheet.iter_rows.

## P4-Q088 — Excel files with openpyxl

worksheet.iter_cols(...) iterates through cells by columns.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture shows nested loops over worksheet.iter_cols.

## P4-Q089 — Excel files with openpyxl

openpyxl.styles.Font(color='FF0000', italic=True) creates a font style that can be assigned to cell.font.

A. True
B. False

**Correct answer:** True

**Explanation:** The lecture uses this exact pattern for simple styling.

## P4-Q090 — Excel files with openpyxl

Changing cell.font modifies the value stored inside the cell.

A. True
B. False

**Correct answer:** False

**Explanation:** cell.font changes styling, not the cell value.

## P4-Q091 — Lambda expressions

Which expression correctly defines a Python lambda that returns the absolute value of x?

A. lambda x: if x > 0: x else: -x
B. lambda x: x if x > 0 else -x
C. lambda x: return abs(x)
D. lambda x { abs(x) }

**Correct answer:** B

**Explanation:** The conditional expression form is valid inside lambda.

## P4-Q092 — Program arguments

Which module is specifically shown for easier command-line argument handling?

A. os
B. csv
C. argparse
D. openpyxl

**Correct answer:** C

**Explanation:** The lecture introduces argparse for command-line parsing.

## P4-Q093 — Environment variables

Which Python expression is the safest choice if USERPROFILE may be missing and you want a default value?

A. os.environ['USERPROFILE']
B. sys.argv['USERPROFILE']
C. csv.getenv('USERPROFILE')
D. os.getenv('USERPROFILE', 'C:\Users\Default')

**Correct answer:** D

**Explanation:** os.getenv with a default avoids KeyError.

## P4-Q094 — CSV files

Which class reads CSV rows as dictionaries using column names?

A. csv.reader
B. csv.writer
C. csv.DictReader
D. csv.Sniffer

**Correct answer:** C

**Explanation:** csv.DictReader maps rows to dictionaries.

## P4-Q095 — CSV files

After reading 1024 bytes from a file to sniff its CSV dialect, what should be done before reading rows from the beginning?

A. close()
B. seek(0)
C. writeheader()
D. load_workbook()

**Correct answer:** B

**Explanation:** seek(0) moves the file pointer back to the beginning.

## P4-Q096 — Excel files with openpyxl

Which command opens an existing Excel workbook?

A. openpyxl.Workbook('test.xlsx')
B. openpyxl.load_workbook('test.xlsx')
C. csv.reader('test.xlsx')
D. os.environ['test.xlsx']

**Correct answer:** B

**Explanation:** load_workbook opens an existing .xlsx file.

## P4-Q097 — Excel files with openpyxl

In openpyxl, which cell is addressed by row=3, column=2?

A. A2
B. B3
C. C2
D. B2

**Correct answer:** B

**Explanation:** Column 2 is B and row 3 is 3.

## P4-Q098 — Excel files with openpyxl

Which statement is true about workbook.save('file.xlsx') according to the lecture?

A. It may overwrite an existing file without warning.
B. It never writes to disk.
C. It only saves the active sheet.
D. It automatically creates a backup.

**Correct answer:** A

**Explanation:** The lecture warns that save overwrites existing files without warning.

