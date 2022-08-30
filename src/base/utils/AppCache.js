import {MD5} from "crypto-js";

/**
 * App for work with cache
 */
export const AppCache = {

    ////////////////////////////
    // Request cache

    requestIsHas: function (method) {
        return localStorage.getItem(AppCache._requestKey(method)) !== null
    },

    requestGet: function (method) {
        return JSON.parse(localStorage.getItem(AppCache._requestKey(method)));
    },

    requestSet: function (method, response) {
        localStorage.setItem(AppCache._requestKey(method), JSON.stringify(response))
    },

    requestClear: function (method) {
        localStorage.removeItem(AppCache._requestKey(method))
    },

    _requestKey: function (method) {
        return `request-${MD5(method.toString())}`
    },

    ////////////////////////////
    // Int

    intGet: function (key) {
        return parseInt(localStorage.getItem(key)) ?? 0
    },

    intSet: function (key, value) {
        localStorage.setItem(key, `${value}`)
    },

    ////////////////////////////
    // String

    stringGet: function (key) {
        return localStorage.getItem(key)
    },

    stringSet: function (key, value) {
        localStorage.setItem(key, value)
    },

    ////////////////////////////
    // Common

    clearByKey: function (key) {
        localStorage.removeItem(key)
    },

    clearAll: function () {
        localStorage.clear()
    },
};