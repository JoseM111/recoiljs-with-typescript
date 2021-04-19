/* Atoms.tsx */
import { atom, useRecoilState, useRecoilValue } from 'recoil'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const darkModeState = atom({
    key: 'darkMode',
    default: false,
})
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const DarkModeSwitch = ({}): JSX.Element => {
    //: - ©MEMBER-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    const [ darkMode, setDarkMode ] = useRecoilState(darkModeState)
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    console.log('Darkmode:', darkMode)

    return (
        <input
            type="checkbox"
            checked={ darkMode }
            onChange={ (event) =>
                setDarkMode(event.target.checked)
            }
        />
    )
}
// END-OF: DarkModeSwitch--
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const Button = ({}): JSX.Element => {
    //: - ©MEMBER-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    const darkMode = useRecoilValue(darkModeState)
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    return (
        <button
            style={ {
                backgroundColor: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
            } }
        >
            My UI Button
        </button>
    )
}
// END-OF: Button--
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const Atoms = ({}): JSX.Element => (
    //______<>fragment</>_____
    <div>
        <div className="">
            <DarkModeSwitch />
        </div>

        <div className="">
            <Button />
        </div>
    </div>
)
// END-OF: NAME--