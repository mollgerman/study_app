# SL Exam Phase 2 Question Bank — Objects, Collections, and Files

Total questions: 88

## P2-001 — Scopes and namespaces

In Python, the LEGB rule means Python searches names in the order Local, Enclosing, Global, Built-in.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** LEGB is Local, Enclosing, Global, Built-in.

## P2-002 — Scopes and namespaces

A variable assigned inside a function is global by default.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** Assignment inside a function creates or changes a local variable unless global or nonlocal is declared.

## P2-003 — Scopes and namespaces

The keyword global tells Python that assignments to that name should affect the module-level name.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** global binds the name to the global/module namespace.

## P2-004 — Scopes and namespaces

The keyword nonlocal is used to modify a variable in an enclosing function scope.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** nonlocal targets an enclosing non-global scope.

## P2-005 — Scopes and namespaces

Which namespace is checked first when Python resolves a name inside a function?

- A. Local
- B. Built-in
- C. Global
- D. Enclosing

**Correct answer:** A

**Explanation:** Python checks the local function scope first.

## P2-006 — Scopes and namespaces

Built-in names such as print and len are checked before local variables.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** Built-ins are checked last in LEGB.

## P2-007 — OOP basics

In object-oriented programming, object state is represented by attributes.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Attributes are variables belonging to the object.

## P2-008 — OOP basics

In object-oriented programming, object behaviour is represented by methods.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Methods are functions belonging to the object/class.

## P2-009 — OOP basics

A class is the blueprint used to create objects.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture states that each object is created from a blueprint named class.

## P2-010 — OOP basics

An object created from a class is also called an instance.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** An object of a given class is an instance of that class.

## P2-011 — OOP basics

Which statement best describes a method in Python?

- A. A variable belonging to an object
- B. A module imported with pip
- C. A function belonging to a class/object
- D. A value stored in a list

**Correct answer:** C

**Explanation:** A method is a function belonging to a class/object and usually operates on attributes.

## P2-012 — Classes, constructors, and methods

A class definition must be present before an object of that class is created.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Python needs the class name to exist before instantiation.

## P2-013 — Classes, constructors, and methods

The special method used when a new object is created is always named __init__.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** __init__ initializes object attributes.

## P2-014 — Classes, constructors, and methods

__init__ usually sets the initial state of the object.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The constructor-like method sets attribute values.

## P2-015 — Classes, constructors, and methods

The first argument of an instance method is a reference to the object.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** This parameter is normally called self.

## P2-016 — Classes, constructors, and methods

The name self is a Python keyword and cannot be replaced.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** self is a convention, not a reserved keyword, although the first instance-method parameter must receive the object.

## P2-017 — Classes, constructors, and methods

For an instance w of Student, w.display() is equivalent to Student.display(w).

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Calling through the instance automatically passes the object as the first argument.

## P2-018 — Classes, constructors, and methods

Which method is called when executing Student("Ann", 34)?

- A. __str__
- B. __init__
- C. __repr__
- D. __call_method__

**Correct answer:** B

**Explanation:** Creating an object calls __init__.

## P2-019 — Classes, constructors, and methods

Methods must always be physically defined inside the class block.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** The lecture shows assigning an outside function to a class attribute as a method.

## P2-020 — Attributes and privacy

Python allows adding a new attribute to an existing object after it was created.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture shows w.dog = "Fuks" after object creation.

## P2-021 — Attributes and privacy

Python allows deleting an attribute from an object using del.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture shows del w.dog.

## P2-022 — Attributes and privacy

Python has strict private attributes exactly like Java private fields.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** The lecture says there are no private attributes nor methods; underscores are conventions/name mangling.

## P2-023 — Attributes and privacy

A single leading underscore in an attribute name is mainly a convention for internal use.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Single underscore does not enforce privacy.

## P2-024 — Attributes and privacy

A double leading underscore triggers name mangling in Python.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Name mangling makes outside access harder, but not impossible.

## P2-025 — Attributes and privacy

Which option is the usual convention for an internal-use attribute?

- A. public_name
- B. _name
- C. name$private
- D. final name

**Correct answer:** B

**Explanation:** A single leading underscore marks a name as internal by convention.

## P2-026 — Inheritance and attributes

If an attribute is stored in an object, it is an instance variable.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Instance variables are stored per object.

## P2-027 — Inheritance and attributes

If an attribute is stored in a class, it is a class variable shared by instances unless shadowed.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Class variables are common for all instances of the class.

## P2-028 — Inheritance and attributes

A new class can inherit attributes and methods from a base class.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Inheritance defines a new class based on an existing class.

## P2-029 — Inheritance and attributes

If a subclass defines a method with the same name as the base class method, it overrides it.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The subclass method replaces the inherited version for subclass instances.

## P2-030 — Inheritance and attributes

Since Python 3.0, super() can be used instead of writing the base class name directly.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture explicitly mentions super() as an alternative.

## P2-031 — Inheritance and attributes

Which one is shared by default between all instances of a class?

- A. Instance variable
- B. Class variable
- C. Local variable
- D. Function parameter

**Correct answer:** B

**Explanation:** Class variables are stored in the class and shared unless shadowed.

## P2-032 — String representation

__str__ should return a string.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture states __str__ should return string.

## P2-033 — String representation

print(obj) uses str(obj), which uses obj.__str__() for conversion.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Functions such as print(), str(), and format() use __str__ for conversion.

## P2-034 — String representation

__repr__ is mainly intended for debugging/unambiguous representation.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** __repr__ is less about pretty printing and more about unambiguous/debug information.

## P2-035 — String representation

If __str__ is undefined, __repr__ can be called for string conversion.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture states that if __str__ is undefined, __repr__ is called.

## P2-036 — Dataclasses

@dataclass automatically adds common “boring” methods such as __init__.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** dataclass is a decorator that can generate __init__, __repr__, __eq__, etc.

## P2-037 — Dataclasses

In a dataclass, frozen=True means the object is immutable.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture lists frozen as the option that makes the object immutable.

## P2-038 — Dataclasses

To create a class variable in a dataclass, the lecture says to use typing.ClassVar.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** ClassVar marks an attribute as a class variable.

## P2-039 — Dataclasses

Which dataclass option controls whether __repr__ is generated?

- A. init
- B. repr
- C. frozen
- D. classvar

**Correct answer:** B

**Explanation:** The dataclass parameter repr controls generation of __repr__.

## P2-040 — Sets

A set is an unordered collection of elements.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Sets do not preserve an indexable order for exam purposes.

## P2-041 — Sets

Set elements are not duplicated.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** A set stores unique elements only.

## P2-042 — Sets

{} creates an empty set.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** {} creates an empty dictionary; use set() for an empty set.

## P2-043 — Sets

set([3, 4]) creates a mutable set.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture labels set([3,4]) as mutable.

## P2-044 — Sets

frozenset([7, 8]) creates an immutable set-like object.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** frozenset is immutable.

## P2-045 — Sets

Sets are indexable using numeric indexes such as s[0].

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** Sets have no order and are not indexable.

## P2-046 — Sets

Sets can be sliced like lists.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** The lecture says sets have no slicing.

## P2-047 — Sets

Sets are iterable.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Sets are not indexable, but can be iterated.

## P2-048 — Sets

For a={1,2,3} and b={3,4}, a | b is the union.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** | is union.

## P2-049 — Sets

For a={1,2,3} and b={3,4}, a & b gives the intersection {3}.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** & is intersection.

## P2-050 — Sets

For a={1,2,3} and b={3,4}, a - b gives {1, 2}.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** - is difference.

## P2-051 — Sets

remove(e) raises an exception if e does not exist in the set.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture explicitly says remove(e) raises an exception if e does not exist.

## P2-052 — Sets

discard(e) is the same as remove(e) because both raise an exception when e is absent.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** discard does not raise an error for a missing element; remove does.

## P2-053 — Sets

pop() removes and returns an arbitrary set element.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Because sets are unordered, pop returns an arbitrary element.

## P2-054 — Sets

Which expression creates an empty set?

- A. {}
- B. []
- C. set()
- D. frozendict()

**Correct answer:** C

**Explanation:** set() creates an empty set; {} creates an empty dict.

## P2-055 — Dictionaries

A dictionary stores objects as key-value pairs.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Dictionaries/maps are key-value containers.

## P2-056 — Dictionaries

Dictionaries are indexed by keys.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Dictionary access uses keys, not numeric positions by default.

## P2-057 — Dictionaries

Only hashable objects can be dictionary keys.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture explicitly states this requirement.

## P2-058 — Dictionaries

{} creates an empty dictionary.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** {} is an empty dictionary, not an empty set.

## P2-059 — Dictionaries

For m={"Python":3, "Java":7}, m["Python"] returns 3.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The key "Python" maps to value 3.

## P2-060 — Dictionaries

For m={"Python":3}, the expression "Python" in m checks whether the key exists.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** in on a dictionary checks keys.

## P2-061 — Dictionaries

m.keys(), m.values(), and m.items() return dynamic views of the dictionary.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** View objects always show the current state of the dictionary.

## P2-062 — Dictionaries

Iterating directly over a dictionary iterates over its keys.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The shorter loop for lang in m1 iterates over keys.

## P2-063 — Dictionaries

In for lang, ver in m.items(): changing ver directly modifies m[lang].

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** The lecture warns that changing ver does not modify the dictionary.

## P2-064 — Dictionaries

Which method returns key-value pairs as a dynamic view?

- A. keys()
- B. values()
- C. items()
- D. pairs()

**Correct answer:** C

**Explanation:** items() returns pairs.

## P2-065 — Dictionaries

Which expression removes the value stored under key "Java" from m1?

- A. remove m1["Java"]
- B. del m1["Java"]
- C. m1.delete("Java")
- D. m1.remove("Java")

**Correct answer:** B

**Explanation:** del m1["Java"] removes that key-value pair.

## P2-066 — Files

Binary file content is a sequence of bytes.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Binary files store bytes interpreted by the application.

## P2-067 — Files

Text file content is a sequence of characters divided into lines by endline characters.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Text files are character data with line separators.

## P2-068 — Files

By default, open() uses text mode.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture says default is text mode and default mode is rt.

## P2-069 — Files

By default, open("log.txt") assumes read-only text mode rt.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** Default rt means read text.

## P2-070 — Files

Using with open(...) as f helps prevent forgetting to close the file.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The file is closed automatically after leaving the with block.

## P2-071 — Files

A file opened inside a with block remains open after the block ends.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** The lecture says the file is closed outside the with block.

## P2-072 — Files

f.read() reads the whole file at once.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** read() reads all content.

## P2-073 — Files

f.readline() reads a single line.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** readline() returns one line at a time.

## P2-074 — Files

When f.readline() reaches end of file, it returns an empty string "".

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture states "" means there is no more data.

## P2-075 — Files

When f.readline() returns "
", it means there is no more data.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** "
" means an empty line; "" means no more data.

## P2-076 — Files

The most efficient way shown for reading a text file line by line is for line in f.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture recommends iterating over the file object.

## P2-077 — Files

File mode w means append new data at the end.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** w means write only; a means append.

## P2-078 — Files

File mode a means append new data at the end.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** a is append mode.

## P2-079 — Files

File mode r+ means you can write and read.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** r+ enables reading and writing.

## P2-080 — Files

File mode b means binary file mode.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** b is binary mode.

## P2-081 — Files

f.write(s) returns the number of characters written.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture states write returns the number of characters written.

## P2-082 — Files

f.writelines(ls) returns the number of written lines.

- A. True
- B. False

**Correct answer:** B. False

**Explanation:** writelines stores a list of strings and returns None.

## P2-083 — Files

f.tell() returns the current position in the file.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** tell returns the current position.

## P2-084 — Files

f.seek(5) moves to the 5th character or byte of the file.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture uses f.seek(5) for moving to the 5th character/byte.

## P2-085 — Files

f.seek(-3, 2) is shown as moving from the end only in binary files.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The lecture says this is only in binary files.

## P2-086 — Files

Without arguments, fileinput.input() defaults to sys.stdin.

- A. True
- B. False

**Correct answer:** A. True

**Explanation:** The fileinput helper defaults to standard input when no files are passed.

## P2-087 — Files

Which mode should be used to append text to the end of a file?

- A. w
- B. a
- C. b
- D. t

**Correct answer:** B

**Explanation:** a means append.

## P2-088 — Files

Which method should you use to read one line from a text file?

- A. read()
- B. readline()
- C. writelines()
- D. tell()

**Correct answer:** B

**Explanation:** readline() reads a single line.
