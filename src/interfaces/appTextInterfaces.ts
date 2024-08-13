interface Section {
    en: string;
    fr: string;
}

interface MenuBar {
    sections: {
        section1: Section;
        section2: Section;
    };
    settingMenu: {
        language: Section;
        darkMode: Section;
    };
}

interface BottomSection {
    contact: Section;
    personalAccount: Section;
}

interface Presentation {
    en: string;
    fr: string;
}

export interface AppTextInterfaces {
    title: string;
    menuBar: MenuBar;
    presentation: Presentation;
    bottomSection: BottomSection;
}