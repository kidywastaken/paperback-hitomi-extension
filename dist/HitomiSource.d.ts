import { Source, SourceInfo, HomeSection, SourceManga, Chapter, ChapterDetails, SearchRequest, PagedResults } from "paperback-extensions-common";
export declare const HitomiInfo: SourceInfo;
export declare class HitomiSource extends Source {
    requestManager: any;
    constructor(cheerio: any);
    getHomePageSections(cb: (section: HomeSection) => void): Promise<void>;
    getMangaShareUrl(mangaId: string): string;
    getMangaDetails(mangaId: string): Promise<SourceManga>;
    getChapters(mangaId: string): Promise<Chapter[]>;
    getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails>;
    getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults>;
}
