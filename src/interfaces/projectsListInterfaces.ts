export interface ProjectsMediasInterface {
    id:string
    linkPath:string
    text:string
}

export interface ProjectsInterface {
    id: string
    title:string
    description:string
    medias:ProjectsMediasInterface[]
}

export interface ProjectsListInterfaceWithLanguage {
    en:ProjectsInterface[]
    fr:ProjectsInterface[]
}