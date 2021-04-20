/* CurrencyInput  */

import { FormControl, FormLabel, NumberInput, NumberInputField } from '@chakra-ui/react'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

type CurrencyInputProps = {
    label: string
    amount: number
    onChange?: (amount: number) => void
}

export const CurrencyInput = ({ amount, onChange, label }: CurrencyInputProps) => {
    //: - ©MEMBER-PROPERTIES|
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/
    let symbol = label === 'usd' ? '$' : '€'
    /**| #™━━━━━━━━━━━━━━━━━━━━━|*/

    return (
        <FormControl id={ label.toUpperCase() }>
            <FormLabel>{ label.toUpperCase() }</FormLabel>
            <NumberInput
                precision={ 2 }
                step={ 0.2 }
                bg="blue.50"
                value={ `${ symbol } ${ amount }` }
                onChange={ (value) => {
                    const withoutSymbol = value.split(' ')[0]
                    onChange?.(parseFloat(withoutSymbol || '0'))
                } }
            >
                <NumberInputField />
            </NumberInput>
        </FormControl>
    )
}
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */