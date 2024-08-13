interface MenuBarSettingsItemProps {
    text:string
    idKey:string
}

const MenuBarSettingsItem:React.FC<MenuBarSettingsItemProps> = ({text, idKey}) => {
    return (
        <div className="menuBarSettingsItem">
            <p>{text}</p>

            {idKey == 'language' && 
                <div className="menuBarSettingsItem-language">
                    <button>en</button>
                    <button>fr</button>
                </div>
            }
        </div>
    )
}

export default MenuBarSettingsItem