import {
    Source,
    SourceInfo,
    HomeSection,
    TagType,
    ContentRating,
    SourceManga,
    Chapter,
    ChapterDetails,
    SearchRequest,
    PagedResults
  } from "paperback-extensions-common";
  
  export const HitomiInfo: SourceInfo = {
    version: "1.0.0",
    name: "Hitomi.la",
    icon: "icon.png",
    author: "Evan",
    authorWebsite: "",
    description: "Basic test extension for hitomi.la",
    websiteBaseURL: "https://hitomi.la",
    contentRating: ContentRating.MATURE,
    sourceTags: [{ text: "NSFW", type: TagType.YELLOW }]
  };
  
  export class HitomiSource extends Source {
    public requestManager: any;
  
    // Paperback will inject its Cheerio instance here; we just pass it to super
    constructor(cheerio: any) {
      super(cheerio);
      this.requestManager = {} as any;
    }
  
    async getHomePageSections(cb: (section: HomeSection) => void): Promise<void> {
      cb({
        id: "featured",
        title: "Popular Galleries",
        items: [],
        view_more: false
      });
    }
  
    getMangaShareUrl(mangaId: string): string {
      return `https://hitomi.la/galleries/${mangaId}.html`;
    }
  
    // Stub implementations to satisfy the abstract base class:
    async getMangaDetails(mangaId: string): Promise<SourceManga> {
      return {} as any;
    }
    async getChapters(mangaId: string): Promise<Chapter[]> {
      return [];
    }
    async getChapterDetails(mangaId: string, chapterId: string): Promise<ChapterDetails> {
      return {} as any;
    }
    async getSearchResults(query: SearchRequest, metadata: any): Promise<PagedResults> {
      return { results: [] } as any;
    }
  }