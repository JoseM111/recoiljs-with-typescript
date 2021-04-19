import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { WithChildren } from './global'

type PageContainerProps = WithChildren<{
    onClick: () => void
}>

export const PageContainer = ({ onClick, children }: PageContainerProps) => {
    return (
        <Flex direction="column" width="100vw" height="100vh" onClick={ onClick }>
            <Box flex={ 1 } position="relative">
                { children }
            </Box>
        </Flex>
    )
}
