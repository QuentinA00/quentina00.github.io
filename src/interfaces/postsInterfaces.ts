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

// the whole interface
export interface PostsInterface {
    id: string
    projectOrigin?: string
    title?:string
    description?:string
    tags?: PostsTagsInterface[]
    postText: string
    postsLinks:PostsLinksInterface[]
    medias?: PostsMediasInterface[]
}

export interface PostsInterfaceWithLanguage {
    en:PostsInterface[]
    fr:PostsInterface[]
}