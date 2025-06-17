// ---------- menuBar in the header
export interface MenuBarSubMenuItemInterface{
    key:string
    text:string
    icon:string
}

export interface MenuBarItemInterface {
    id:string
    text:string
    icon?:string
    link?:string
    subMenuItems:MenuBarSubMenuItemInterface[]
}


// ---------- bottom section
export interface BottomSectionLinkInterface {
    id:string
    text:string
    icon:string
    link:string
    description:string
}


// ---------- paiements
export interface PaymentAmountInterface {
    value: string
    description: string
}

export interface PaymentMethodInterface {
    name: string
    displayName: string
    icon: string
    baseUrl: string
}

export interface PaymentStepsInterface {
    selectAmount: string
    selectMethod: string
    backButton: string
}

export interface PaymentInfoInterface {
    security: string
    encryption: string
}

export interface PaymentInterface {
    title: string
    description: string
    amounts: PaymentAmountInterface[]
    methods: PaymentMethodInterface[]
    steps: PaymentStepsInterface
    info: PaymentInfoInterface
}


// ---------- pages of the app
export interface PagesTextInterface {
    id:string
    text:string
}

// ---------- main interface
export interface AppTextInterface {
    title: string
    
    // menuBar are some additional elements that can be added asides pages elements in menuBar
    menuBar: MenuBarItemInterface[]
    
    // pages are used to create the routes of the app as well as menuBar elements
    pages:PagesTextInterface[]

    contact:{
        text:string
        image:string
    }

    bottomSection: {
        contact: string
        mail:string
        professionalLinks: BottomSectionLinkInterface[]
        personalAccount: string
        personalLinks: BottomSectionLinkInterface[]
        copyright:{
            title:string
            text:string
        }
    }

    generalAppContent: {
        imgsPath:{
            professional:string
            personal:string
        }
    }

    // payment in the app
    payment: PaymentInterface
}

// export the whole interfaces above, starting with a language
export interface AppTextInterfacesWithLanguage {
    fr: AppTextInterface
    en: AppTextInterface
}