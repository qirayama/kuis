import { Card, CardBody, CardHeader, Flex, Grid, GridItem, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "./contexts/GameContext";


export default function Home() {
    const gameContext = useContext(GameContext)
    const { isFetching, fetchGames, games } = gameContext

    useEffect(() => {
        fetchGames();
    }, [])

    return (
        <Flex padding={8} direction="column" gap={1}>
            <Text fontSize={18} fontWeight={700} color='gray.800'>Daftar Game</Text>
            <Text fontSize={16} fontWeight={400} color='gray.600'>Koleksi game yang dapat anda nikmati di musim ini</Text>
            <Flex justifyContent="center" marginTop={4} >
                {
                    isFetching ? (
                        <Spinner
                            marginTop={8}
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    ) : (
                        <Grid width="100%" templateColumns='repeat(4, 1fr)' gap={4}>
                            {games.length ? games.map((game) => (
                                <Card key={game.id} gap={1}>
                                    <Image src={game.image_url} height={300} objectFit="cover" objectPosition="center" />
                                    <CardHeader>
                                        <Heading fontSize={24}>{game.name}</Heading>
                                        <Text>{game.release_year}</Text>
                                        <Text>{game.price}</Text>
                                        <Text>{game.category}</Text>
                                        <Flex>
                                            <Text>{game.is_android_app}</Text>
                                            <Text>{game.is_ios_app}</Text>
                                        </Flex>
                                    </CardHeader>
                                    <CardBody paddingTop={0}>
                                        <Text>{game.description}</Text>
                                    </CardBody>
                                </Card>
                            )) : <GridItem colSpan={4} align={'center'} >Games is empty</GridItem>}
                        </Grid>
                    )
                }
            </Flex>
        </Flex>
    )
}
