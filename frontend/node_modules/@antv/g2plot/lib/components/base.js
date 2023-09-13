"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var event_emitter_1 = tslib_1.__importDefault(require("@antv/event-emitter"));
var util_1 = require("@antv/util");
var BaseComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BaseComponent, _super);
    function BaseComponent(config) {
        var _this = _super.call(this) || this;
        _this.container = config.container;
        _this.destroyed = false;
        _this.group = _this.container.addGroup();
        _this.config = config;
        _this.disposables = [];
        _this.init(config);
        return _this;
    }
    BaseComponent.prototype.getGroup = function () {
        return this.group;
    };
    BaseComponent.prototype.getBBox = function () {
        return this.getGroup().getBBox();
    };
    BaseComponent.prototype.clear = function () {
        this.group.clear();
    };
    BaseComponent.prototype.render = function () {
        this.renderInner(this.group);
        this.getCanvas().draw();
    };
    BaseComponent.prototype.update = function (config) {
        this.config = tslib_1.__assign(tslib_1.__assign({}, this.config), config);
        this.init(tslib_1.__assign(tslib_1.__assign({}, this.config), { config: config }));
        this.group.clear();
        this.renderInner(this.group);
        this.getCanvas().draw();
    };
    BaseComponent.prototype.destroy = function () {
        util_1.each(this.disposables, function (fn) {
            fn();
        });
        this.disposables = [];
        this.group.remove(true);
        this.destroyed = true;
    };
    BaseComponent.prototype.getCanvas = function () {
        return this.container.get('canvas');
    };
    BaseComponent.prototype.addDisposable = function (fn) {
        this.disposables.push(fn);
    };
    return BaseComponent;
}(event_emitter_1.default));
exports.default = BaseComponent;
//# sourceMappingURL=base.js.map