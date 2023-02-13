# openlibrary-js

JavaScript library for accessing the Open Library Web API. See [Open Library's developer center](https://openlibrary.org/developers/api) for information about the API itself.

## Features
* Books, Works, Edition, and ISBN APIs
  * JSON and javascript format results (Books)
  * Get ratings, bookshelves, and editions (Works)
  * Supports getting multiple items with mixed ID types (Books)
  * viewapi and data options for refults (Books)
* Read API
  * Single- and multi-request options
* Subjects API
  * Limit results by year of publication
  * Limit results to books with an available ebook
  * Optionally include extra details in results
* Search API
  * Suppors generic query or field-specifiv query
  * Can limit results to desired fields
  * Result sorting options
* Search Inside API
  * Utility methods for getting an item's metadata or just its archive.org hostname
* Authors API
  * Get data on an individual author
  * Get all works by an author
* Recent Changes API
  * Limit to changes made by bots or by humans
  * Limit results to changes made on a specific date
  * Limit results to specific kind of changes
## To-Do
* Test Covers API
* Proper error checking and handling
* Node module version (CJS?)
* Add examples to docs
* Create browser demos
