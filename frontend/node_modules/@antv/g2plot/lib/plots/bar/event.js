"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("@antv/util");
var event_1 = require("../../util/event");
exports.EVENT_MAP = event_1.EVENT_MAP;
exports.onEvent = event_1.onEvent;
var componentMap = {
    bar: 'interval',
};
var SHAPE_EVENT_MAP = event_1.getEventMap(componentMap);
util_1.assign(event_1.EVENT_MAP, SHAPE_EVENT_MAP);
//# sourceMappingURL=event.js.map