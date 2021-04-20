import { Heading } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'
import { InputStack } from './InputStack'
import { CurrencyInput } from './CurrencyInput'
import { Commission } from './Commission'
import { usdAtom, euroSelector } from './utils'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const Selectors = () => {
    //: - ©MEMBER-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    const [ usd, setUSD ] = useRecoilState(usdAtom)
    /*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     @useRecoilState:
     • Returns a tuple where the first element is the value
     of state and the second element is a setter function
     that will update the value of the given state when called.
     This hook will implicitly subscribe the component to the given state.
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
    const [ eur, setEUR ] = useRecoilState(euroSelector)
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    return (
        <div style={ { padding: 20 } }>
            <Heading size="lg" mb={ 2 }>
                Currency converter
            </Heading>
            <InputStack>
                <CurrencyInput label="usd" amount={ usd } onChange={ (usd) => setUSD(usd) } />
                <CurrencyInput label="eur" amount={ eur } onChange={ (eur) => setEUR(eur) } />
            </InputStack>
            <Commission />
        </div>
    )
}
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

