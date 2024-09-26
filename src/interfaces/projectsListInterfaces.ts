// interface for the links of the project
export interface ProjectsMediasInterface {
    id:string
    linkPath:string
    text:string
}

// interface for the tags
export interface ProjectsTagsInterface {
    id: string
    text: string
}

// the whole interface
export interface ProjectsInterface {
    id: string
    projectOrigin: string
    title:string
    description:string
    tags?: ProjectsTagsInterface[]
    postText: string
    medias?: ProjectsMediasInterface[]
}

export interface ProjectsListInterfaceWithLanguage {
    en:ProjectsInterface[]
    fr:ProjectsInterface[]
}