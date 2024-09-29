export interface MenuBarSubMenuItemInterface{
    key:string
    text:string
    icon:string
}

export interface MenuBarItemInterface {
    id:string
    text:string
    icon?:string
    subMenuItems:MenuBarSubMenuItemInterface[]
}

export interface BottomSectionLinkInterface {
    id:string
    text:string
    icon:string
    link:string
    description:string
}

export interface PagesTextInterface {
    id:string
    text:string
}

export interface AppTextInterface {
    title: string
    
    // pages are used to create the routes of the app as well as menuBar elements
    pages:PagesTextInterface[]
    
    // menuBar are some additional elements that can be added asides pages elements in menuBar
    menuBar: MenuBarItemInterface[]

    bottomSection: {
        contact: string
        mail:string
        professionalLinks: BottomSectionLinkInterface[]
        personalAccount: string
        personalLinks: BottomSectionLinkInterface[]
    }
}

// export the whole interfaces above, starting with a language
export interface AppTextInterfacesWithLanguage {
    fr: AppTextInterface
    en: AppTextInterface
}