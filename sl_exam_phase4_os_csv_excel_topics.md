# Phase 4 — OS interfaces, CSV, and Excel (Lecture 08)
Source lecture: `SL_W04IST_SI4034_lecture_08-os.pdf`
Scope: Python only. No comparisons to other languages except where the lecture explicitly uses them as context.

## Lambda expressions
- A lambda expression creates an anonymous function for short, local use.
- A lambda is syntactic sugar for a simple function definition using def.
- A lambda body is an expression, not a block of statements; it cannot contain statements such as return, for, while, or assignment statements.
- A lambda may contain a conditional expression such as x if x > 0 else -x.
- Lambdas are often used as key functions for sorting, for example key=lambda item: item[1].
- By default, tuples are sorted lexicographically, starting from element 0.

## Program arguments
- Command-line arguments can be read from sys.argv.
- sys.argv contains the script name and all arguments after it, but not the Python interpreter command itself.
- With sys.argv, the programmer must manually interpret which values are options, parameters, or filenames.
- argparse helps define and parse command-line arguments.
- Positional arguments added with add_argument('name') are required by default.
- Argument values are strings by default unless type=... is specified.
- Optional arguments can have short and long names, for example -e and --extra.
- The default parameter supplies a value when an optional argument is not provided.
- ArgumentParser(description='...') adds text to the generated help.

## Environment variables and .env
- os.environ is a dictionary-like object containing the current process environment.
- os.environ['NAME'] raises KeyError if the variable is missing; os.environ.get('NAME') and os.getenv('NAME') can return None or a default.
- Setting os.environ['DATAFILE'] changes the environment only for the current process and child processes started from it.
- python-dotenv loads variables from a .env file into the environment with load_dotenv().
- load_dotenv() does not overwrite already existing environment variables unless override=True is explicitly used.
- Sensitive .env files should be added to .gitignore.

## CSV files
- CSV files are text files commonly editable in spreadsheets.
- CSV parsing is non-trivial because separators, encodings, and separators inside quoted fields may vary.
- csv.reader reads rows as lists; its iterator should normally be consumed only once.
- list(reader) loads all rows at once into memory.
- csv.DictReader reads rows as dictionaries and uses the first row as headers if fieldnames is not provided.
- If fieldnames is provided, those names are used as keys instead of reading headers from the first row.
- csv.Sniffer().sniff(sample) can infer a dialect, but after reading a sample you must seek(0) to read the file from the beginning again.
- csv.writer writes list-like rows using writerow().
- When writing CSV files on Python, open(..., newline='') is the standard pattern.
- csv.DictWriter writes dictionary rows; writeheader() writes the header row.
- DictWriter uses the configured fieldnames to control column order; dictionary key order in each row does not decide the CSV column order.
- DictWriter rows may omit some fields; missing fields become empty values by default.

## Excel files with openpyxl
- openpyxl is a common external library for working with Excel .xlsx files.
- A Workbook contains worksheets; a new Workbook has a default active sheet.
- A worksheet has a title and cells indexed by column letters and row numbers.
- workbook.save(filename) writes the file and overwrites an existing file without warning.
- openpyxl.load_workbook(filename) opens an existing workbook.
- workbook.sheetnames lists worksheet names; workbook['SheetName'] selects a worksheet by name.
- Cells can be accessed with Excel notation like sheet['B3'] or with sheet.cell(row=3, column=2).
- openpyxl row and column numbers are 1-based, not 0-based.
- sheet.cell(..., value=...) can assign a value directly; sheet.cell(...) returns a Cell object.
- Excel formulas can be assigned as strings beginning with '=', using English function names such as '=SUM(A2:A10)'.
- Ranges can be selected with worksheet['A1':'B6'], worksheet['A'], worksheet['A:B'], worksheet[5], or worksheet[5:10].
- worksheet.iter_rows(...) and worksheet.iter_cols(...) iterate over ranges of cells by rows or columns.
- Cell styling can be changed by assigning style objects such as openpyxl.styles.Font(color='FF0000', italic=True) to cell.font.
