export interface TagGroupedByCategory{
    
}

// interface for the links of the project
export interface PostMediasInterface {
    id:string
    linkPath:string
    linkPathHd?:string
    text:string
}

// interface for tag
export interface TagInterface{
    id:string
    text: string
    category:string
}

// interface for the link
export interface PostLinksInterface {
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
    tagsId?: string[]
    postTextParagraphs: [string]
    postTextKeyPoints?:{
        text:string
        points: PostTextKeyPointsInterface[]
    }
    postsLinks:PostLinksInterface[]
    medias?: {
        images:PostMediasInterface[]
        videos:PostMediasInterface[]
    }
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