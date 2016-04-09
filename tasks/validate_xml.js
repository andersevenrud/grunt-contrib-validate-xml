(function() {

  module.exports = function(grunt) {
    var DOMParser = require('xmldom').DOMParser;

    function task() {
      var fail = false;

      this.filesSrc.forEach(function(f) {
        var xml = grunt.file.read(f);
        return (new DOMParser({
          locator: {},
          errorHandler: function(level, msg) {
            fail = true;
            return grunt.log.error(f + "\tnot valid: " + msg);
          }
        })).parseFromString(xml, 'text/xml');
      });

      if ( fail ) {
        return grunt.fail.warn('Some files are not valid');
      }

      return grunt.log.ok(this.filesSrc.length + ' files valid');
    }

    return grunt.registerMultiTask('validate_xml', 'Grunt plugin to validate XML files', task);
  };

}).call(this);
