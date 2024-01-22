window.onload = function () {

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function (){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

}


//svg animatie//
//video bekeken: https://www.youtube.com/watch?v=bOXDOxrzoDQ&t=604s  en gebruik gemaakt van programma:svgator//

(function (root, factory) {
    if (typeof exports === 'object' && typeof module !== 'undefined') {
        module.exports = factory();
    } else if (typeof __SVGATOR_DEFINE__ === 'function' && __SVGATOR_DEFINE__.amd) {
        __SVGATOR_DEFINE__(factory);
    } else {
        (root = typeof globalThis !== 'undefined' ? globalThis : root || self).__SVGATOR_PLAYER__ = (root.__SVGATOR_PLAYER__ || {});
        root.__SVGATOR_PLAYER__['5c7f360c'] = factory();
    }
}(this, function () {
    'use strict';

    function _typeof(obj) {
        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            _typeof = function (obj) {
                return typeof obj;
            };
        } else {
            _typeof = function (obj) {
                return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj;
            };
        }
        return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
            throw new TypeError('Super expression must either be null or a function');
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: { value: subClass, writable: true, configurable: true }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
    }

    function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
        return _setPrototypeOf(o, p);
    }

    function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();
        return function _createSuperInternal() {
            var Super = _getPrototypeOf(Derived), result;
            if (hasNativeReflectConstruct) {
                var NewTarget = _getPrototypeOf(this).constructor;
                result = Reflect.construct(Super, arguments, NewTarget);
            } else {
                result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
        };
    }

    function _isNativeReflectConstruct() {
        if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === 'function') return true;
        try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
        } catch (e) {
            return false;
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
            return call;
        }
        return _assertThisInitialized(self);
    }

    function _assertThisInitialized(self) {
        if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return self;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError('Cannot call a class as a function');
        }
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }

    var Animator = /*#__PURE__*/ (function () {
        function Animator(player, options) {
            _classCallCheck(this, Animator);

            _defineProperty(this, 'player', void 0);

            _defineProperty(this, 'options', void 0);

            _defineProperty(this, 'animation', void 0);

            _defineProperty(this, 'render', void 0);

            this.player = player;
            this.options = options;
            this.animation = player.animation;
            this.render = player.render;
            this.player.root.classList.add('svgator-player-animator');
            this.animation.resetDuration();
            this.registerEvents();
            this.animate();
        }

        _createClass(Animator, [{
            key: 'registerEvents',
            value: function registerEvents() {
                var _this = this;

                this.animation.on('play', function () {
                    _this.animate();
                });
            }
        }, {
            key: 'animate',
            value: function animate() {
                var _this2 = this;

                if (!this.animation.isPaused() && !this.animation.isStopped()) {
                    this.render.draw();
                    requestAnimationFrame(function () {
                        _this2.animate();
                    });
                }
            }
        }]);

        return Animator;
    }());

    return Animator;
}));
