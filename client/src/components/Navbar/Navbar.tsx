import { Flex } from "@chakra-ui/react"

export const Navbar = () => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={1}
            p={8}
        >
            <p>Home</p>
            <p>About</p>
            <p>Settings</p>
        </Flex>
    )
}