# JAVASCRIPT ROADMAP

# DOM

### What is the DOM?

The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

A web page is a document that can be either displayed in the browser window or as the HTML source. In both cases, it is the same document but the Document Object Model (DOM) representation allows it to be manipulated. As an object-oriented representation of the web page, it can be modified with a scripting language such as JavaScript.

For example, the DOM specifies that the querySelectorAll method in this code snippet must return a list of all the <p> elements in the document:

`const paragraphs = document.querySelectorAll("p"); 
// paragraphs[0] is the first <p> element 
// paragraphs[1] is the second <p> element, etc. 
alert(paragraphs[0].nodeName)`

All of the properties, methods, and events available for manipulating and creating web pages are organized into objects. For example, the document object that represents the document itself, any table objects that implement the HTMLTableElement DOM interface for accessing HTML tables, and so forth, are all objects.

### DOM and JavaScript
The previous short example, like nearly all examples, is JavaScript. That is to say, it is written in JavaScript, but uses the DOM to access the document and its elements. The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime.

### Accessing the DOM

You don't have to do anything special to begin using the DOM. You use the API directly in JavaScript from within what is called a script, a program run by a browser.

When you create a script, whether inline in a `<script>` element or included in the web page, you can immediately begin using the API for the document or window objects to manipulate the document itself, or any of the various elements in the web page (the descendant elements of the document). Your DOM programming may be something as simple as the following example, which displays a message on the console by using the console.log() function:
```
<body onload="console.log('Helloooo!');">
```
As it is generally not recommended to mix the structure of the page (written in HTML) and manipulation of the DOM (written in JavaScript), the JavaScript parts will be grouped together here, and separated from the HTML.

For example, the following function creates a new `<h1>` element, adds text to that element, and then adds it to the tree for the document:
```
<html>
  <head>
    <script>
       // run this function when the document is loaded
       window.onload = function() {

         // create a couple of elements in an otherwise empty HTML page
         const heading = document.createElement("h1");
         const heading_text = document.createTextNode("Big Head!");
         heading.appendChild(heading_text);
         document.body.appendChild(heading);
      }
    </script>
  </head>
  <body>
  </body>
</html>
```



## HTML Elementes
**References:**
https://www.w3schools.com/js/js_htmldom_elements.asp
https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction
### Finding HTML Elements
Often, with Javascrip, you want to manipulate HTML elements.

To do so, you have to find the elements first. There are several ways to do this.

- Finding HTML elements by id
- Finding HTML elements by tag name
- Finding HTML elements by class name
- Finding HTML elements by CSS selectors
- Finding HTML elements by HTML object collections.

#### Finding HTML Element by Id
```
const element = document.getElementById("introduction");
```
#### Finding HTML Element by Tag Name
This example finds all `<p>` elements:
```
const element = document.getElementByTagName("p");
```
This example finds the element with `id="main"`, and the finds all `<p>` elements inside `"main"`.
```
const x = document.getElementeById("main");
const y = x.getElementByTagName("p");
```
## Events

## Selection

# Functions

# Misc

# Modules

# Number

# Objects

# Promises

# Strings

# Syntax

# Variables

# fetch API

# Arrays

# Classes

## Inheritance
