# Grunt-less-to-sass

> Convert LESS files to SASS (.scss)

## Getting Started

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-less-to-sass --save-dev
```

## Less task
_Run this task with the `grunt lessToSass` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


### Usage Examples

```js
  convert: {
    files: [{
      expand: true,
      cwd: 'test/fixtures',
      src: ['*.less'],
      ext: '.scss',
      dest: 'test/expected'
    }]
  },
  excludes_replacements: {
    files: [{
      expand: true,
      cwd: 'test/fixtures',
      src: ['*.less'],
      ext: '.scss',
      dest: 'test/expected'
    }],
    options: {
      excludes: ['default']
    }
  },
  convert_within_custom_replacements: {
    files: [{
      expand: true,
      cwd: 'test/fixtures',
      src: ['default.less'],
      ext: '.scss',
      dest: 'test/expected'
    }],
    options: {
      replacements: [{
        pattern: /(\s+)\.([\w\-]*)\s*\((.*)\);/gi,
        replacement: '$1@include $2($3)',
        order: 2
      }]
    }
  }
```

### Replacements

[See all replacements](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements)

- [@extend](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/@extend.js)
- [@import](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/@import.js)
- [@include](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/@include.js)
- [@include_nested](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/@include_nested.js)
- [@mixin](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/@mixin.js)
- [adjust-hue](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/adjust-hue.js)
- [condition](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/condition.js)
- [default](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/default.js)
- [ie-hex-str](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/ie-hex-str.js)
- [important](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/important.js)
- [interpolation](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/interpolation.js)
- [mix](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/mix.js)
- [rgba](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/rgba.js)
- [unquote](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/unquote.js)
- [variables](https://github.com/duvillierA/grunt-less-to-sass/tree/master/tasks/lib/replacements/variables.js)
