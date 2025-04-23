"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _global = global;
_global.createSourceStateManager = function (info) {
    return Object.assign(Object.assign({}, info), { store: function (key, value) {
            // Fill this in so the test classes don't commit sudoku
            virtualStateStore[key] = value;
            return Promise.resolve();
        }, retrieve: function (key) {
            var _a;
            return Promise.resolve((_a = virtualStateStore[key]) !== null && _a !== void 0 ? _a : "");
        }, keychain: {
            store: function (key, value) {
                // Fill this in so the test classes don't commit sudoku
                virtualKeychainStore[key] = value;
                return Promise.resolve();
            },
            retrieve: function (key) {
                var _a;
                return Promise.resolve((_a = virtualKeychainStore[key]) !== null && _a !== void 0 ? _a : "");
            }
        } });
};
var virtualStateStore = {};
var virtualKeychainStore = {};
