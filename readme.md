Solution for Beasts problem 4 for Watch and
Other Solutions can be found at:https://github.com/gordonmzhu/beasts/issues/3

librarySystem.js stores all needed libraries under the librarySystem window Object. This reduces the number of global variables and prevents naming conflicts.
librarySystem.js is able to store libraries that requires dependencies to function.

Use of Library System - to store a library use :librarySystem('libraryName',callbackFunction[, optionalArrayOfDependencies])
the callbackFunction can take in as arguments the libraries it requires as dependencies

To retrieve a library: librarySystem('libraryname')
