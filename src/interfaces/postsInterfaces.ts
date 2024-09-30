// interface for the links of the project
export interface PostsMediasInterface {
    id:string
    linkPath:string
    text:string
}

// interface for the tags
export interface PostsTagsInterface {
    id: string
    text: string
}

// interface for the link
export interface PostsLinksInterface {
    linkName: string
    link:string
}

export interface PostTextKeyPointsInterface{
    id:number
    text:string
}

// interface for a single post item
export interface PostInterface {
    id: string
    projectOrigin?: string
    title?:string
    description?:string
    tags?: PostsTagsInterface[]
    postTextParagraphs: [string]
    postTextKeyPoints?:{
        text:string
        points: PostTextKeyPointsInterface[]
    }
    postsLinks:PostsLinksInterface[]
    medias?: PostsMediasInterface[]
}

// the whole interface
export interface PostsInterface {
    presentation:PostInterface[]
    projects:PostInterface[]
}

export interface PostsInterfaceWithLanguage {
    en:PostsInterface
    fr:PostsInterface
}