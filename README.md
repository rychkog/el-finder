# el finder
A pet project for finding similar elements on the pages
It uses an html element id to detect an element on the origin page, introspect it and based on acquired knowledge
match similar elements on the sample page.

## Installation
`npm i`

## To test
`npm t`

## To start

`node src/main.js ${origin} ${sample} ${elementId}`

- **origin** - an absolute path to the page where an element with the *elementId* is located
- **sample** - an absolute path to the page with potentially similar elements
- **elementId** - an optional html element id

## Output

The program outputs a path to the found potentially similar element on the sample page