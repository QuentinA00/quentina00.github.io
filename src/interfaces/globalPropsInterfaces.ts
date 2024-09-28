import { AppTextInterface } from "./appTextInterfaces";

export interface AppTextProps {
    appText: AppTextInterface
    appLanguage: 'en'|'fr'
    setAppLanguage: (chosenLanguage:AppTextProps['appLanguage']) => void
}