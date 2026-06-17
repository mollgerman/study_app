# SL Exam Phase 2 — Objects, Collections, and Files

Scope: Python only. Based on lecture 04 (classes/objects) and lecture 05 (sets/maps/files).

## Scopes and namespaces
- Python name lookup follows LEGB: Local, Enclosing, Global, Built-in.
- local assignment inside a function does not change the outer variable unless nonlocal or global is used.
- nonlocal changes a variable in an enclosing function scope.
- global changes or creates a name in the module-level global scope.

## Object-oriented programming basics
- An object has state and behaviour.
- State is represented by attributes; behaviour is represented by methods.
- A class is the blueprint/type used to create objects.
- An object created from a class is an instance.

## Classes, constructors, and methods
- class defines a new class in Python.
- __init__ is the constructor-like special method called when a new object is created.
- self is the first parameter of instance methods and refers to the object.
- obj.method() is equivalent to Class.method(obj) for instance methods.
- The class definition must exist before creating an object from that class.

## Attributes and privacy conventions
- Python objects can have attributes added or removed dynamically.
- Python has no strict private attributes or methods.
- A single underscore is a convention for internal use.
- A double underscore triggers name mangling to make access harder.

## Class attributes, instance attributes, inheritance
- Instance attributes are stored in each object.
- Class attributes are stored in the class and shared by instances unless shadowed.
- A derived class inherits methods and attributes from a base class.
- A method in a derived class with the same name as in the base class overrides it.
- super() can be used instead of naming the base class directly.

## Object string representations and dataclasses
- __str__ should return a user-friendly string representation.
- __repr__ is used by repr() and for unambiguous/debug representations.
- If __str__ is undefined, __repr__ may be used.
- @dataclass automatically generates common methods such as __init__, __repr__, and __eq__ depending on options.
- frozen=True makes dataclass instances immutable.
- typing.ClassVar marks a dataclass attribute as a class variable.

## Sets
- A set is an unordered collection without duplicate elements.
- {} creates an empty dictionary, not an empty set; use set() for an empty set.
- set is mutable; frozenset is immutable.
- Sets are not indexable and cannot be sliced, but they are iterable.
- Typical set operations: union |, difference -, intersection &.
- remove(e) raises an exception if e does not exist; discard(e) does not.
- pop() removes and returns an arbitrary element.

## Dictionaries / maps
- A dictionary stores key-value pairs.
- Dictionaries are indexed by keys, not numeric positions.
- Only hashable objects can be used as dictionary keys.
- {} creates an empty dictionary.
- in checks whether a key exists in the dictionary.
- keys(), values(), and items() return dynamic view objects.
- Iterating directly over a dictionary iterates over keys.
- Changing the loop variable from for key, value in d.items() does not modify the dictionary value.

## File access
- Files can be binary or text.
- By default, files are opened in text read mode: rt.
- Text files convert system line endings to 
 when reading.
- with open(...) as f automatically closes the file after the block.
- read() reads the whole file; readline() reads one line.
- Iterating for line in f is efficient for line-by-line reading.
- Modes: w write, a append, r+ read/write, b binary, t text.
- write(s) returns the number of characters written; writelines(list) returns None.
- tell() returns current position; seek() changes position.
- fileinput can read files line by line and defaults to sys.stdin without arguments.
