/* InputStack */

import { FC } from 'react'
import { HStack, Box, Icon } from '@chakra-ui/react'
import { ArrowRight } from 'react-feather'
/** #™━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const InputStack: FC = ({ children }) => (
    //___________
    <HStack
        width="300px"
        mb={ 4 }
        spacing={ 4 }
        divider={
            <Box border="0 !important" height="40px" alignItems="center" display="flex">
                <Icon as={ ArrowRight } />
            </Box>
        }
        align="flex-end"
    >
        { children }
    </HStack>
)