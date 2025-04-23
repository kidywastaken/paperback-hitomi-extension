import { Chapter, ChapterDetails, HomeSection, Manga, MangaTile, MangaUpdates, PagedResults, SearchRequest, Source, TagSection } from ".";
import "./models/impl_export";
export declare class APIWrapper {
    getMangaDetails(source: Source, mangaId: string): Promise<Manga>;
    getChapters(source: Source, mangaId: string): Promise<Chapter[]>;
    getChapterDetails(source: Source, mangaId: string, chapterId: string): Promise<ChapterDetails>;
    searchRequest(source: Source, query: SearchRequest, metadata?: any): Promise<PagedResults>;
    getTags(source: Source): Promise<TagSection[] | null>;
    filterUpdatedManga(source: Source, time: Date, ids: string[]): Promise<MangaUpdates[]>;
    getHomePageSections(source: Source): Promise<HomeSection[]>;
    /**
     * Performs a 'get more' request. Usually this is done when a homesection has it's 'View More' button tapped, and the user
     * is starting to scroll through all of the available titles in each section.
     * It is recommended that when you write your tests for a source, that you run one test using this function,
     * for each homepageSectionId that the source offers, if those sections are expected to traverse multiple pages
     * @param source
     * @param homepageSectionId
     * @param metadata
     * @param resultPageLimiter How many pages this should attempt to iterate through at most. This prevents
     * you from being in an infinite loop. Defaults to 3.
     */
    getViewMoreItems(source: Source, homepageSectionId: string, metadata: any, resultPageLimiter?: number): Promise<MangaTile[] | null>;
    getWebsiteMangaDirectory(source: Source, metadata: any): Promise<PagedResults | null>;
}
