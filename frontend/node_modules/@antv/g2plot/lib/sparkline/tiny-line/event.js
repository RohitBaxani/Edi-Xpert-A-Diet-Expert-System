"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@antv/util");
var event_1 = require("../../util/event");
exports.EVENT_MAP = event_1.EVENT_MAP;
exports.onEvent = event_1.onEvent;
var SHAPE_EVENT_MAP = {
    onLineClick: 'line:click',
    onLineDblclick: 'line:dblclick',
    onLineMousemove: 'line:mousemove',
    onLineMousedown: 'line:mousedown',
    onLineMouseup: 'line:mouseup',
    onLineMouseenter: 'line:mouseenter',
    onLineMouseleave: 'line:mouseleave',
    onLineContextmenu: 'line:contextmenu',
};
util_1.assign(event_1.EVENT_MAP, SHAPE_EVENT_MAP);
//# sourceMappingURL=event.js.map