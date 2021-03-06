```
   ____  __  ___     __            _______
  / __ \/  |/  /__  / /_____ _    / / ___/
 / / / / /|_/ / _ \/ __/ __ `/_  / /\__ \
/ /_/ / /  / /  __/ /_/ /_/ / /_/ /___/ /
\____/_/  /_/\___/\__/\__,_/\____//____/
```

## Description

OMetaJS is a JavaScript implementation of OMeta, an object-oriented language
for pattern matching.

This is a *node.js* module for developing and using such pattern matching
grammars.

## Installation

### Installing ometajs

``` bash
$ [sudo] npm install ometa-js -g
```

**Note:** If you are using ometajs _programatically_ you should not install
it globally.

``` bash
$ cd /path/to/your/project
$ npm install ometa-js
```

## Usage

### Command line

```bash
$ ometajs2js --help

Usage:
  ometajs2js [OPTIONS] [ARGS]


Options:
  -h, --help : Help
  -v, --version : Version
  -i INPUT, --input=INPUT : Input file (default: stdin)
  -o OUTPUT, --output=OUTPUT : Output file (default: stdout)
  --root=ROOT : Path to root module (default: ometajs)
```

`ometajs2js` will take input `*.ometajs` file and produce a [CommonJS][0]/AMD/Browser
compatible javascript file.

Also you may `require('*.ometajs')` files directly without compilation.
(OmetaJS is patching `require.extensions` as [CoffeeScript][1] does).

### Using as CommonJS module

```javascript
var ometajs = require('ometa-js');

var ast = ometajs.BSJSParser.matchAll('var x = 1', 'topLevel'),
    code = ometajs.BSJSTranslator.matchAll([ast], 'trans');
// Or:
var code = ometajs.compile('var x = 1');
```
Example

### Example grammar

```javascript
ometa Simple {
  top = [#simple] -> 'ok'
}
```

[More information][5] about OmetaJS syntax.

### Use cases

Fast prototyping and building your own parser/language. Processing/traversing
complex [AST][2].

Some projects that are using this:

 -   [XJST](http://github.com/veged/xjst)
 -   [ShmakoWiki](http://github.com/veged/shmakowiki/)
 -   [OmetaHighlighter](http://github.com/veged/ometa-highlighter)

### More information

To study OmetaJS or ask questions about it's core you can try to reach out
[original repository][3] author [Alessandro Warth][4] or me.

Here is [documented code][5].

#### Contributors

* [Alessandro Warth][4]
* [Takashi Yamamiya](https://github.com/propella)
* [Sergey Berezhnoy](https://github.com/veged)
* [Nikita Vasilyev](https://github.com/NV)
* [Fedor Indutny](https://github.com/indutny)

[0]: http://www.commonjs.org/
[1]: http://coffeescript.org/
[2]: http://en.wikipedia.org/wiki/Abstract_syntax_tree
[3]: http://www.tinlizzie.org/ometa/
[4]: http://github.com/alexwarth
[5]: http://Page-.github.com/ometa-js/
