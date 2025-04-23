"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
const axios_1 = __importDefault(require("axios"));
const _global = global;
_global.createRequestManager = function (info) {
    return Object.assign(Object.assign({}, info), { schedule: function (request, retryCount) {
            var _a, _b, _c, _d, _e;
            return __awaiter(this, void 0, void 0, function* () {
                // Pass this request through the interceptor if one exists
                if (info.interceptor) {
                    request = yield info.interceptor.interceptRequest(request);
                }
                // Append any cookies into the header properly
                let headers = (_a = request.headers) !== null && _a !== void 0 ? _a : {};
                let cookieData = '';
                for (let cookie of (_b = request.cookies) !== null && _b !== void 0 ? _b : [])
                    cookieData += `${cookie.name}=${cookie.value};`;
                headers['cookie'] = cookieData;
                // If no user agent has been supplied, default to a basic Paperback-iOS agent
                headers['user-agent'] = (_c = headers["user-agent"]) !== null && _c !== void 0 ? _c : 'Paperback-iOS';
                // If we are using a urlencoded form data as a post body, we need to decode the request for Axios
                let decodedData = request.data;
                if (typeof decodedData == 'object') {
                    if ((_d = headers['content-type']) === null || _d === void 0 ? void 0 : _d.includes('application/x-www-form-urlencoded')) {
                        decodedData = "";
                        Object.keys(request.data).forEach(attribute => {
                            if (decodedData.length > 0) {
                                decodedData += "&";
                            }
                            decodedData += `${attribute}=${request.data[attribute]}`;
                        });
                    }
                }
                // We must first get the response object from Axios, and then transcribe it into our own Response type before returning
                let response = yield (0, axios_1.default)(`${request.url}${(_e = request.param) !== null && _e !== void 0 ? _e : ''}`, {
                    method: request.method,
                    headers: headers,
                    data: decodedData,
                    timeout: info.requestTimeout || 0,
                    responseType: 'arraybuffer'
                });
                let responsePacked = {
                    rawData: createRawData(response.data),
                    data: Buffer.from(response.data, 'binary').toString(),
                    status: response.status,
                    headers: response.headers,
                    request: request
                };
                // Pass this through the response interceptor if one exists
                if (info.interceptor) {
                    responsePacked = yield info.interceptor.interceptResponse(responsePacked);
                }
                return responsePacked;
            });
        } });
};
