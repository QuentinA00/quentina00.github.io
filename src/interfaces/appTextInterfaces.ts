export interface MenuBarElementInterface {
    id:number
    text:string
    settingMenu?:MenuBarSettingMenuInterface
}

export interface MenuBarSettingMenuInterface {
    language: string
    darkMode: string
}

export interface AppTextInterface {
    title: string
    menuBar: MenuBarElementInterface[]
    presentation: string
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