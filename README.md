# colur: a kool logger

[![license](http://img.shields.io/badge/license-mit-3498db.svg)](https://github.com/artisin/colur/blob/master/LICENSE)
[![wercker status](https://app.wercker.com/status/a432f5dddbb23e0ee1680892b3f511ef/s/master "wercker status")](https://app.wercker.com/project/byKey/a432f5dddbb23e0ee1680892b3f511ef)
[![npm version](http://img.shields.io/npm/v/colur.svg)](https://www.npmjs.com/package/colur)


All right, it is not _that_ kool, but it is a stylized logger with [colors](https://www.npmjs.com/package/colors)! I needed a simple stylized colur logger for my test’s and other command console activity. PS. This is a node thang.


### Parameters

+ `colur(<log-string>, <option>)`
+ `colur(<log-string>)`
+ `return` -> always returns the stylized logger string


### Arguments

+ `<log-string>` -> `String`
    * The string you with to log.
+ `<option>` -> `Object`
+ `<option>.color` -> `String`
    * Can specify a custom color from the [colors](https://www.npmjs.com/package/colors) library. If you mess up and specify a color that does not exist, then it defaults to the default Green/White color.
+ `<option>.stringCaps` -> `Boolean => true`
    * Includes `|>` and `<|` start and end caps.
+ `<option>.endColor` -> `Boolean => true`
    * Use the end color which is `bgBlue.white.bold`.
    * Alias: `end`
+ `<option>.startColor` -> `Boolean => true`
    * Use the start color which is also the default color of `bgGreen.white.bold`.
+ `<option>.consoleType` -> `String`
    * Can specify the console type, the default is `info`.
    * Omit the `console` part, just include the modifier like `error`.
+ `<option>.strReturn` -> `Boolean => true`
    * Does not invoke `console` and just returns the stylized logger string.
+ `<option>.error` -> `Boolean => true`
    * A preset that sets the `console` to `error` and uses the color of `bgRed.white.bold`

### Preview

![Colur Preview](http://i.imgur.com/EID9OeT.png)