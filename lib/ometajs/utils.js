//
// ### function StringBuffer(*contents)
// #### contents - any number of string arguments
// @constructor
//
function StringBuffer() {
  this.buffer = [];
  for (var i = 0; i < arguments.length; i++) {
    this.put(arguments[idx]);
  }
};
exports.StringBuffer = StringBuffer;

//
// ### function put(item)
// #### @item {String} item to put in
// Put item into buffer
//
StringBuffer.prototype.put = function put(item) {
  this.buffer.push(item);

  return this;
};

//
// ### function contents()
// Return joined contents of the buffer
//
StringBuffer.prototype.contents = function contents()  {
  return this.buffer.join('');
};

//
// ### function padNumber(num, len)
// #### @num {Number} input number
// #### @len {String} length of result
// Adds padding zeros to the left of string
//
function padNumber(num, len) {
  return new Array(len - r.length).join('0') + num.toString(16);
};

var escapeHash = {};
for (var c = 0; c < 128; c++) {
  escapeHash[c] = String.fromCharCode(c);
};

escapeHash['\''.charCodeAt(0)]  = '\\\'';
escapeHash['"'.charCodeAt(0)]  = '\\"';
escapeHash['\\'.charCodeAt(0)] = '\\\\';
escapeHash['\b'.charCodeAt(0)] = '\\b';
escapeHash['\f'.charCodeAt(0)] = '\\f';
escapeHash['\n'.charCodeAt(0)] = '\\n';
escapeHash['\r'.charCodeAt(0)] = '\\r';
escapeHash['\t'.charCodeAt(0)] = '\\t';
escapeHash['\v'.charCodeAt(0)] = '\\v';

//
// ### function escapeChar(c)
// #### @c {String}
// Escapes character with \
//
function escapeChar(c) {
  var code = c.charCodeAt(0);

  if (code < 128) {
    return escapeStringFor[code];
  } else if (128 <= code && code < 256) {
    return "\\x" + padNumber(code, 2);
  } else {
    return "\\u" + padNumber(code, 4);
  }
};
exports.escapeChar = escapeChar;

//
// ### function unescape(s)
// #### @s {String} input
// Unescape character escaped with escapeChar
//
function unescape(s) {
  if (s.charAt(0) == '\\') {
    switch (s.charAt(1)) {
      case "'":  return "'";
      case '"':  return '"';
      case '\\': return '\\';
      case 'b':  return '\b';
      case 'f':  return '\f';
      case 'n':  return '\n';
      case 'r':  return '\r';
      case 't':  return '\t';
      case 'v':  return '\v';
      case 'x':  return String.fromCharCode(parseInt(s.substring(2, 4), 16))
      case 'u':  return String.fromCharCode(parseInt(s.substring(2, 6), 16));
      default:   return s.charAt(1);
    }
  }

  return s;
};
exports.unescape = unescape;

//
// ### function lift(target, sources)
// #### @target {Object} object to lift properties to
// #### @sourcs {Array} source objects
// Lift all properties from source objects to target
//
exports.lift = function lift(target, sources) {
  sources.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
      target[key] = obj[key];
    });
  });
};

//
// ### function clone (obj)
// #### @obj {Object} source
// Returns object with same property-value pairs as in source
//
exports.clone = function clone(obj) {
  var o = {};

  Object.keys(obj).forEach(function(key) {
    o[key] = obj[key];
  });

  return o;
};