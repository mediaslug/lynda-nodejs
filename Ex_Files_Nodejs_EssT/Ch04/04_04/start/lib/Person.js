/**
 * Created by pabrams on 7/19/2016.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, EventEmitter);
/*
 *  Module.exports is the object that is returned by the require statement.
 *  When we require this module, we will return anything that is on module.exports.
 */
module.exports = Person;