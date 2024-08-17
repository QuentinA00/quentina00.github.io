export interface MenuBarSettingsItemInterface{
    key: string
    text: string
}

export interface MenuBarElementInterface {
    id:number
    text:string
    settings?:MenuBarSettingsItemInterface[]
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
    }
}

// export the whole interfaces above, starting with a language
export interface AppTextInterfacesWithLanguage {
    fr: AppTextInterface
    en: AppTextInterface
}