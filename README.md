Derby File Select
=================

A [Derby JS](http://derbyjs.com) component for selecting files.

Installation
------------

    $ npm install d-file-select --save

Usage
-----

Create a view:

    <upload:>
      <div as="dropzone">
        <input type="file" as="input">
      </div>

Associate your view with the component:

    app.component('upload', require('d-file-select'));

Elements
--------

**dropzone** - The region that a file can be dragged and dropped onto.

**input** - The `<input type="file">` element that can select a new image.

Data
----

The following path data is available to views implementing the component:

**files** - The uploaded files.

Options
-------

**accept** - Accepted file types.

Functions
---------

**change($event)** - Use if you have multiple file inputs that must implement the change event.

**clear()** - Clear selected filed.

**dragenter($event)** - Use if you have multiple dropzones that must implement the dragenter event.

**dragover($event)** - Use if you have multiple dropzones that must implement the dragover event.

**drop($event)** - Use if you have multiple dropzones that must implement the drag event.

Events
------

**select(files)** - Event emitted after files are selected.
