/* 
 * patternlab-node - v0.14.0 - 2015 
 * 
 * Brian Muenzenmeyer, and the web community.
 * Licensed under the MIT license. 
 * 
 * Many thanks to Brad Frost and Dave Olsen for inspiration, encouragement, and advice. 
 *
 */

(function () {
  "use strict";

  var fs = require('fs-extra'),
  path = require('path');

  var pattern_exporter = function(){

    function exportPatterns(patternlab){

      //read the config export options
      var exportKeys = patternlab.config.patternExportKeys;

      //find the chosen patterns to export
      for (var i = 0; i < exportKeys.length; i++){
        for (var j = 0; j < patternlab.patterns.length; j++){
          if(exportKeys[i] === patternlab.patterns[j].key){
            //write matches to the desired location
            fs.outputFileSync(patternlab.config.patternExportDirectory + patternlab.patterns[j].key + '.html', patternlab.patterns[j].patternPartial);
          }
        }
      }
    }

    return {
      export_patterns: function(patternlab){
        exportPatterns(patternlab);
      }
    };

  };

  module.exports = pattern_exporter;

}());
