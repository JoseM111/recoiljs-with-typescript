/* utils.ts  */

import { atom, selector } from 'recoil'
import { commissionEnabledAtom, commissionAtom } from './Commission'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const addCommission = (amount: number, commission: number) =>
    amount / ( 1 - commission / 100 )

export const removeCommission = (amount: number, commission: number) =>
    amount * ( 1 - commission / 100 )
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const exchangeRate = 0.83

export const usdAtom = atom({
    key: 'usd',
    default: 1,
})

// You can ignore everything below this line.
// It's just a bunch of UI components that we're using in this example.
/*  • @selectors are way to take different pieces of
 state in your app & compute them to new values
 • In a selector you can pull in values from other atoms 
 */
export const euroSelector = selector<number>({
    key: 'eur',
    //___________
    get: ({ get }) => {
        let usd = get(usdAtom)
        const commissionEnabled: boolean = get(commissionEnabledAtom)

        if (commissionEnabled) {
            const commission: number = get(commissionAtom)
            usd = removeCommission(usd, commission)
        }

        return usd * exchangeRate
    },
    set: ({ set, get }, newEuroValue) => {
        //___________
        // @ts-ignore
        let newUSDValue = newEuroValue / exchangeRate
        const commissionEnabled: boolean = get(commissionEnabledAtom)

        if (commissionEnabled) {
            const commission: number = get(commissionAtom)
            newUSDValue = addCommission(newUSDValue, commission)
        }

        set(usdAtom, newUSDValue)

        console.log('Set values: ', newEuroValue)
    },
    //___________
})
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */