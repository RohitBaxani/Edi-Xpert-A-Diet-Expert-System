"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var MatrixUtil = tslib_1.__importStar(require("@antv/matrix-util"));
var util_1 = require("@antv/util");
var dependents_1 = require("../dependents");
function groupTransform(group, actions) {
    var ulMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    var matrix = MatrixUtil.transform(ulMatrix, actions);
    group.setMatrix(matrix);
}
exports.groupTransform = groupTransform;
function transform(actions, matrix) {
    var ulMatrix = matrix ? util_1.clone(matrix) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
    return MatrixUtil.transform(ulMatrix, actions);
}
exports.transform = transform;
function move(element, x, y, matrix) {
    var ulMatrix = matrix ? util_1.clone(matrix) : [1, 0, 0, 0, 1, 0, 0, 0, 1];
    ulMatrix[6] = x;
    ulMatrix[7] = y;
    element.setMatrix(ulMatrix);
}
exports.move = move;
function translate(element, x, y) {
    dependents_1.Util.translate(element, x, y);
}
exports.translate = translate;
function rotate(element, radian) {
    dependents_1.Util.rotate(element, radian);
}
exports.rotate = rotate;
//# sourceMappingURL=g-util.js.map