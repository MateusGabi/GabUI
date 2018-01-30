# GabUI 
an minimalist CSS Framework

[![Build Status](https://travis-ci.org/MateusGabi/GabUI.svg?branch=master)](https://travis-ci.org/MateusGabi/GabUI)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

### Install

* `$ git clone git@github.com:MateusGabi/GabUI.git`
* `$ npm install`
* `$ npm run dist`

You can see some examples in `examples` directory.

### Edit output files

* Edit lines 15, 16 and 17 on `Gulpfile.js`
* Edit line 3 on `webpack.config.js` 

### Project Structure

```
├── assets
|  ├── css
|  └── js
├── docs
|  ├── index.pug
|  ├── js.js
|  ├── layout.pug
|  ├── pages
|  |  ├── buttons.pug
|  |  ├── grid.pug
|  |  └── typo.pug
|  └── started.pug
├── Gulpfile.js
├── ISSUE_TEMPLATE.md
├── javascript
|  ├── codehighlight.js
|  ├── index.js
|  ├── Info.js
|  └── Modal.js
├── LICENSE.md
├── out.txt
├── package-lock.json
├── package.json
├── pages
├── PULL_REQUEST_TEMPLATE.md
├── README.md
├── scss
|  ├── index.scss
|  ├── _animations.scss
|  ├── _buttons.scss
|  ├── _colors.scss
|  ├── _core.scss
|  ├── _flexbox-helper.scss
|  ├── _footer.scss
|  ├── _forms.scss
|  ├── _grid.scss
|  ├── _imports.scss
|  ├── _master.scss
|  ├── _menu.scss
|  ├── _modal.scss
|  ├── _navbar.scss
|  ├── _pages.scss
|  ├── _prism.scss
|  ├── _table.scss
|  ├── _tag.scss
|  ├── _theme.scss
|  ├── _typography.scss
|  └── _variables.scss
└── webpack.config.js
```