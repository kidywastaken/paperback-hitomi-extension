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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitomiSource = exports.HitomiInfo = void 0;
const paperback_extensions_common_1 = require("paperback-extensions-common");
exports.HitomiInfo = {
    version: "1.0.0",
    name: "Hitomi.la",
    icon: "icon.png",
    author: "Evan",
    authorWebsite: "",
    description: "Basic test extension for hitomi.la",
    websiteBaseURL: "https://hitomi.la",
    contentRating: paperback_extensions_common_1.ContentRating.MATURE,
    sourceTags: [{ text: "NSFW", type: paperback_extensions_common_1.TagType.YELLOW }]
};
class HitomiSource extends paperback_extensions_common_1.Source {
    // Paperback will inject its Cheerio instance here; we just pass it to super
    constructor(cheerio) {
        super(cheerio);
        this.requestManager = {};
    }
    getHomePageSections(cb) {
        return __awaiter(this, void 0, void 0, function* () {
            cb({
                id: "featured",
                title: "Popular Galleries",
                items: [],
                view_more: false
            });
        });
    }
    getMangaShareUrl(mangaId) {
        return `https://hitomi.la/galleries/${mangaId}.html`;
    }
    // Stub implementations to satisfy the abstract base class:
    getMangaDetails(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    getChapters(mangaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
    getChapterDetails(mangaId, chapterId) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    getSearchResults(query, metadata) {
        return __awaiter(this, void 0, void 0, function* () {
            return { results: [] };
        });
    }
}
exports.HitomiSource = HitomiSource;
