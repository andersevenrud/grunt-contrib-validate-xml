# grunt-contrib-validate-xml

A Grunt XML validation plugin forked from https://github.com/kajyr/grunt-xml-validator

This was made mainly due to the `grunt-xml-validator` plugin being outdated.

## Getting Started
This plugin requires Grunt `>=0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-contrib-validate-xml --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-contrib-validate-xml');
```

## The "validate_xml" task

### Overview
In your project's Gruntfile, add a section named `validate_xml` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  validate_xml: {
    your_target: {
      src: [ 'your_files/*.xml', 'another_file.xml' ]
    },
  },
});
```

## Release History

0.0.1 - Initial release
