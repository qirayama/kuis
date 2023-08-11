"use client"
import { Button } from 'flowbite-react';
import { Table } from "flowbite-react";

export default function DefaultTable() {
    return (
        <div className="px-[200px] pb-12">
            <Table className='shadow'>
                <Table.Head>
                    <Table.HeadCell className='bg-violet-500 text-white p-4'>NO</Table.HeadCell>
                    <Table.HeadCell className='bg-violet-500 text-white p-4'>NAMA</Table.HeadCell>
                    <Table.HeadCell className='bg-violet-500 text-white p-4'>MATA KULIAH</Table.HeadCell>
                    <Table.HeadCell className='bg-violet-500 text-white p-4'>NILAI</Table.HeadCell>
                    <Table.HeadCell className='bg-violet-500 text-white p-4'>INDEX NILAI </Table.HeadCell>
                    <Table.HeadCell className='bg-violet-500 text-white p-4'>ACTION</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            1
                        </Table.Cell>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Algoritma</Table.Cell>
                        <Table.Cell>80</Table.Cell>
                        <Table.Cell>A</Table.Cell>
                        <Table.Cell className='pl-4 flex gap-1.5'>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit'>Edit</Button>
                            </span>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit bg-red-700 text-white'>Delete</Button>
                            </span>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            2
                        </Table.Cell>
                        <Table.Cell>Doe</Table.Cell>
                        <Table.Cell>Matematika</Table.Cell>
                        <Table.Cell>70</Table.Cell>
                        <Table.Cell>B</Table.Cell>
                        <Table.Cell className='pl-4 flex gap-1.5'>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit'>Edit</Button>
                            </span>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit bg-red-700 text-white'>Delete</Button>
                            </span>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            3
                        </Table.Cell>
                        <Table.Cell>Frank</Table.Cell>
                        <Table.Cell>Kalkulus</Table.Cell>
                        <Table.Cell>60</Table.Cell>
                        <Table.Cell>C</Table.Cell>
                        <Table.Cell className='pl-4 flex gap-1.5'>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit'>Edit</Button>
                            </span>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit bg-red-700 text-white'>Delete</Button>
                            </span>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            4
                        </Table.Cell>
                        <Table.Cell>Jason</Table.Cell>
                        <Table.Cell>Basis data</Table.Cell>
                        <Table.Cell>90</Table.Cell>
                        <Table.Cell>A</Table.Cell>
                        <Table.Cell className='pl-4 flex gap-1.5'>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit'>Edit</Button>
                            </span>
                            <span
                                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                                href="/tables"
                            >
                                <Button color="gray" className='w-fit bg-red-700 text-white'>Delete</Button>
                            </span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table >
        </div >
    )
}
