'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ADD_COMMENT = 'ADD_COMMENT';
var REMOVE_COMMENT = 'REMOVE_COMMENT';
var EDIT_COMMENT = 'EDIT_COMMENT';
var THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
var THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

var addComment = function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: text,
    id: _uuid2.default.v4()
  };
};

var removeComment = function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id: id
  };
};

var editComment = function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    text: text,
    id: id
  };
};

var thumbUpComment = function thumbUpComment(id) {
  return {
    type: THUMB_UP_COMMENT,
    id: id
  };
};

var thumbDownComment = function thumbDownComment(id) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: id
  };
};

exports.default = {
  addComment: addComment,
  removeComment: removeComment,
  editComment: editComment,
  thumbUpComment: thumbUpComment,
  thumbDownComment: thumbDownComment
};

//# sourceMappingURL=actions-compiled.js.map