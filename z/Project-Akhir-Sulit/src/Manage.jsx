import { Button, Flex, FormControl, FormLabel, Input, Spinner, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { GameContext } from "./contexts/GameContext";

const initialGame = {
    image_url: '',
    name: '',
    category: '',
    description: '',
    price: 0,
    rating: 0,
    release_year: 0,
    is_android_app: false,
    is_ios_app: false
}

export default function Manage() {
    const { games, fetchGames, isFetching, addGame, deleteGame, editGame } = useContext(GameContext)
    const [editedId, setEditedId] = useState(null);
    const [game, setGame] = useState(initialGame)

    useEffect(() => {
        fetchGames();
    }, [])

    const onChangeHandle = (e) => {
        setGame((prevGame) => ({
            ...prevGame,
            [e.target.name]: e.target.value
        }))
    }
    //edit
    const onEditHandle = (game) => {
        setEditedId(game.id);
        setGame(() => ({ ...game }));
    }
    //edit + submit
    const onSubmitHandle = async (e) => {
        e.preventDefault();
        if (editedId) {
            try {
                await editGame(game);
                setEditedId(null);
                setGame(initialGame);
            } catch (error) {

            }
        } else await addGame(game);
    }

    return (
        <Flex direction='column' gap={8} padding={8}>
            <TableContainer border='1px' borderColor='gray.100'>
                {isFetching ? (
                    <Flex justifyContent='center'>
                        <Spinner
                            marginY={8}
                            thickness='4px'
                            speed='1s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                    </Flex>
                ) : (
                    <Table variant='simple'>
                        <Thead>
                            <Tr>
                                <Th isNumeric>No</Th>
                                <Th>Name</Th>
                                <Th>Description</Th>
                                <Th>Category</Th>
                                <Th>Price</Th>
                                <Th>Rating</Th>
                                <Th>Android</Th>
                                <Th>IOS</Th>
                                <Th>Size</Th>
                                <Th>Release</Th>
                                <Th>Action</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                games.map((game, index) => (
                                    <Tr key={game.id}>
                                        <Td>{index + 1}</Td>
                                        <Td>{game.name}</Td>
                                        <Td>{game.description}</Td>
                                        <Td>{game.category}</Td>
                                        <Td>{game.price}</Td>
                                        <Td>{game.rating}</Td>
                                        <Td>{game.is_android_app}</Td>
                                        <Td>{game.is_ios_app}</Td>
                                        <Td>{game.size}</Td>
                                        <Td>{game.release_year}</Td>
                                        <Td>
                                            <Flex gap={3}>
                                                //edit
                                                <Button onClick={() => onEditHandle(game)} backgroundColor='yellow.400' color="gray.700">Edit</Button>
                                                <Button onClick={() => deleteGame(game.id)} backgroundColor='red.400' color="gray.700">Delete</Button>
                                            </Flex>
                                        </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                )}

            </TableContainer>
            <Flex direction='column' gap={4}>
                <Text fontSize={24} fontWeight={600}>{editedId ? 'Edit' : 'Create'} Data</Text> // Change Edit or Create Data
                <form onSubmit={onSubmitHandle}>
                    <Flex direction='column' gap={4}>
                        <FormControl>
                            <FormLabel>Image URL</FormLabel>
                            <Input type='text' name="image_url" value={game.image_url} onChange={onChangeHandle} placeholder="https://..." />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input type='text' name="name" value={game.name} onChange={onChangeHandle} placeholder="Game Name" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Category</FormLabel>
                            <Input type='text' name="category" value={game.category} onChange={onChangeHandle} placeholder="Game Category" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Description</FormLabel>
                            <Input type='text' name="description" value={game.description} onChange={onChangeHandle} placeholder="Game Description" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Price</FormLabel>
                            <Input type='number' name="price" min={0} value={game.price} onChange={onChangeHandle} placeholder="Game Price" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Rating</FormLabel>
                            <Input type='number' name="rating" min={0} max={5} value={game.rating} onChange={onChangeHandle} placeholder="Game Rating" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Release Year</FormLabel>
                            <Input type='number' name="release_year" min={0} value={game.release_year} onChange={onChangeHandle} placeholder="Game Release Year" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Android</FormLabel>
                            <Input type='number' name="is_android_app" value={game.is_android_app} onChange={onChangeHandle} placeholder="is Android Game?" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>IOS</FormLabel>
                            <Input type='number' name="is_ios_app" value={game.is_ios_app} onChange={onChangeHandle} placeholder="is IOS Game?" />
                        </FormControl>
                        <Button type="submit" _hover={{ backgroundColor: 'twitter.800' }} backgroundColor='twitter.600' color='twitter.50' fontWeight={700}>SUBMIT</Button>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    )
}
