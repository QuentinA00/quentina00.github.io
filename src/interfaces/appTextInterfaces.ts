export interface MenuBarSettingsItemInterface{
    key: string
    text: string
}

export interface MenuBarElementInterface {
    id:string
    text:string
    settings?:MenuBarSettingsItemInterface[]
}

export interface BottomSectionItemInterface {
    id:string
    text:string
    icon:string
    link:string
}

export interface AppTextInterface {
    title: string
    menuBar: MenuBarElementInterface[]
    presentation: {
        title:string
        presentationText:string
        linkSection:{
            linkText:string
            linkUrl:string
        }
    }
    bottomSection: {
        contact: string
        personalAccount: string
        items: BottomSectionItemInterface[]
    }
}

// export the whole interfaces above, starting with a language
export interface AppTextInterfacesWithLanguage {
    fr: AppTextInterface
    en: AppTextInterface
}