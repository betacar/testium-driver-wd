'use strict';

exports.clear = function clear(selector) {
  return this.getElement(selector).clear();
};

exports.type = function type(selector, value) {
  return this.getElement(selector).type(value);
};

exports.clearAndType = function clearAndType(selector, value) {
  return this.getElement(selector).clear().type(value);
};

exports.fillFields = function fillFields(fields) {
  for (var field in fields) {
    if (!this.assertElementExists(field)) break;
    var value = fields[field];
    this.clearAndType(field, value);
  }
};
