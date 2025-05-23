import { Form, PagedResults, RequestManager, SearchRequest } from "..";
import { Section, TrackerActionQueue } from "../models";
import { TrackedManga } from "../models/TrackedManga";
import { Requestable } from "./Requestable";
import { Searchable } from "./Searchable";
export declare abstract class Tracker implements Requestable, Searchable {
    protected cheerio: CheerioAPI;
    /**
     * Manages the ratelimits and the number of requests that can be done per second
     * This is also used to fetch pages when a chapter is downloading
     */
    abstract readonly requestManager: RequestManager;
    constructor(cheerio: CheerioAPI);
    abstract getSearchResults(query: SearchRequest, metadata: unknown): Promise<PagedResults>;
    abstract getMangaForm(mangaId: string): Form;
    abstract getTrackedManga(mangaId: string): Promise<TrackedManga>;
    abstract getSourceMenu(): Promise<Section>;
    abstract processActionQueue(actionQueue: TrackerActionQueue): Promise<void>;
}
