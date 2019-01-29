Solution to Beasts problem 4 for Watch and Code
Other Solutions can be found at:https://github.com/gordonmzhu/beasts/issues/3

librarySystem.js stores libraries under the librarySystem window Object. This reduces the number of global variables and reduces the chance of naming conflicts.
librarySystem.js is able to store libraries that requires dependencies to function.

Use of Library System:
To store a library use:librarySystem('libraryName',callbackFunction[, optionalArrayOfDependencies])
the callbackFunction can take in the libraries it requires as dependencies as arguments.

To retrieve a library: librarySystem('libraryname')
