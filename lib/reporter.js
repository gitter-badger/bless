// Generated by CoffeeScript 1.7.1
(function() {
  var formatNumber, pluralize, reporter;

  formatNumber = require("format-number")();

  pluralize = require("pluralize");

  reporter = function(options) {
    var message, numFiles, numSelectors;
    numSelectors = options.numSelectors, numFiles = options.numFiles;
    message = [];
    message.push("Input file contained " + (formatNumber(numSelectors)) + " " + (pluralize("selector", numSelectors)) + ".");
    if (numFiles > 1) {
      message.push("" + (formatNumber(numFiles)) + " " + (pluralize("file", numFiles)) + " created.");
    } else {
      message.push("No changes made.");
    }
    return message.join(" ");
  };

  module.exports = reporter;

}).call(this);
