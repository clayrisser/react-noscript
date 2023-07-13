# React NoScript

Nest HTML tags under the <noscript> tag in React

![](assets/react-noscript.png)

The HTML &lt;noscript&gt; tag lets you to display a custom message when a clients browser does not support JavaScript. However, when you nest HTML tags under the &lt;noscript&gt; tag in React, it creates the following error.

```
Uncaught Error: Invariant Violation
```
This component bypasses that error. 


## Installation

The easiest way to use react-noscript is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-noscript.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-noscript --save
```


## Usage

Import the component
```
var NoScript = require('react-noscript');
```
If you are using es6, import it the following way.
```
import NoScript from 'react-noscript';
```
Next implement the component wherever you want to notify your clients that their browser does not support JavaScript.
```
<NoScript>
    <div style={{padding: '20px', backgroudColor: 'orange', width: '100%'}}>
        <h1>Yikes!!!!</h1>
        <h5>It looks like this page does not have JavaScript enabled.</h5>
    </div>
</NoScript>
```


### Notes
If you implement this component with a message outside of HTML tags, like below . . .
```
<NoScript>
    Yikes, your browser does not support JavaScript!
</NoScript>
```
. . . it creates the following error.
```
Invariant Violation:renderToStaticMarkup():
```

This component only works on [Isomorphic or Universal React applications](https://github.com/DavidWells/isomorphic-react-example).


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).


## License

[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html)

Copyright (c) 2016 Jam Risser.
