# SL Exam Source 01 — Thomas Screenshot Question Bank

Source file: `Sc_lang_thomas.pdf`

Status: extracted and corrected. The PDF contains 17 screenshots from a 20-question ePortal quiz. Visible quiz numbers: 1–10, 12–16, 18, 20. Missing from the PDF: 11, 17, 19.

Important note: some selected answers in the screenshots appear to be wrong. This source stores the corrected answer, not blindly the clicked option.

## Q1 — Functions: default/keyword arguments

**Question:** You have defined a function: def myfunction(x=5, y=7). All following calls are correct: myfunction(3), myfunction(y=8), myfunction().

**Correct answer:** True

**Why:** Both parameters have default values; one positional argument, one keyword argument, or no arguments are all valid.

## Q2 — Tuples: iteration

**Question:** When you run code to iterate over a tuple: for a in ('abc', 'def', 'ghi'): print(a), you will see an error.

**Correct answer:** False

**Why:** Tuples are iterable. The loop prints abc, def, ghi on separate lines.

## Q3 — Functions: positional arguments

**Question:** You have defined a function: def f(a, b): # body. If you call f(6), variable a will be equal to 6 and variable b will be equal to 0.

**Correct answer:** False

**Why:** b has no default value. Calling f(6) raises TypeError for the missing required argument b.

## Q4 — Tuples: immutability

**Question:** You can add a new element to the tuple using append(element) method.

**Correct answer:** False

**Why:** Tuples are immutable and do not have append(). Lists have append().

## Q5 — Logging: levels

**Question:** If you set logging level to WARNING, all DEBUG messages will also be displayed.

**Correct answer:** False

**Why:** WARNING shows WARNING and more severe messages, such as ERROR and CRITICAL. DEBUG is lower priority and is hidden.

## Q6 — Lists and strings: iteration

**Question:** When you run: for a in ['abcd']: print(a). In the first printed line you will see: abcd.

**Correct answer:** True

**Why:** The list has one element: the string 'abcd'. The first and only printed value is abcd.

## Q7 — Lists: append

**Question:** If you perform append([4, 5, 6]) on the list [1, 2, 3], its length will be 4.

**Correct answer:** True

**Why:** append() adds its argument as one element. The list becomes [1, 2, 3, [4, 5, 6]], length 4.

## Q8 — Lists: slicing

**Question:** You have a list l = [1, 2, 3, 4, 5]. The sum of elements defined by slice [1:3] equals 5.

**Correct answer:** True

**Why:** l[1:3] gives [2, 3]. Their sum is 5.

## Q9 — Lists: append

**Question:** You can add a new element to the list using append(element) method.

**Correct answer:** True

**Why:** append(x) adds x at the end of a list.

## Q10 — Assertions

**Question:** The command assert c==4 raises an exception if c is not equal 4.

**Correct answer:** True

**Why:** In normal execution, a failed assert raises AssertionError. With Python -O, asserts can be ignored.

## Q12 — Lists: extend

**Question:** If you perform extend([4, 5, 6]) on the list [1, 2, 3], its length will be 4.

**Correct answer:** False

**Why:** extend() adds each element from the iterable. The list becomes [1, 2, 3, 4, 5, 6], length 6.

## Q13 — Strong typing / string concatenation

**Question:** age = 20; s = 'Jane is ' + (age+5) + ' years old'; print(s). This code will display: Jane is 25 years old.

**Correct answer:** False

**Why:** The expression tries to concatenate a string with an int. Python raises TypeError unless the number is converted to str or formatted.

## Q14 — Strings: iteration

**Question:** When you run: for a in 'abcd': print(a). In the first printed line you will see: abcd.

**Correct answer:** False

**Why:** Iterating over a string gives one character at a time. The first printed value is 'a'.

## Q15 — Tuples: tuple() conversion

**Question:** The length of the tuple created with tuple('123') is 3.

**Correct answer:** True

**Why:** tuple('123') creates ('1', '2', '3'), so the length is 3.

## Q16 — range

**Question:** If you run the for loop with range(15, 0, -5), the last value in the range is 5.

**Correct answer:** True

**Why:** The generated values are 15, 10, 5. The stop value 0 is excluded.

## Q18 — Sorting tuples with lambda / sorted() return value

**Question:** You have comps = (("Lenovo", 2499), ("Toshiba", 1699), ("HP", 2099)). If you sort the tuple using sorted(comps, key=lambda laptop: laptop[1]), the first element of the tuple comps is ("Toshiba", 1699).

**Correct answer:** False

**Why:** sorted(...) returns a new sorted list and does not modify the original tuple comps. The sorted result starts with ('Toshiba', 1699), but comps itself still starts with ('Lenovo', 2499).

**Note:** Ambiguous wording: if the exam means 'first element of the sorted result', the expected answer could be True. For strict Python semantics, False.

## Q20 — Files: read vs readline

**Question:** You have opened file with f=open('file.txt'). The command f.read() reads a single line from the file f.

**Correct answer:** False

**Why:** f.read() reads the whole file content. f.readline() reads one line.
