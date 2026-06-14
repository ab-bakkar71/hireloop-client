"use client"
import { TrashBin } from '@gravity-ui/icons';
import { Button, Table } from '@heroui/react';
import { Eye, Pencil } from 'lucide-react';
import React from 'react';

const JobTable = ({jobs}) => {
    return (
        <div className="w-full mt-8 bg-[#161616] border border-zinc-800/60 rounded-2xl shadow-2xl overflow-hidden">
            <Table aria-label="Recruiter Jobs Management Table">
                <Table.ScrollContainer>
                    <Table.Content className="min-w-[800px] text-zinc-300">

                        {/* Table Header Configuration */}
                        <Table.Header className="bg-[#1e1e1e] border-b border-zinc-800/80 text-zinc-400 text-xs uppercase tracking-wider">
                            <Table.Column isRowHeader className="py-4 pl-6">Job Title</Table.Column>
                            <Table.Column>Type / Category</Table.Column>
                            <Table.Column>Location</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Date line</Table.Column>
                            <Table.Column className="text-center pr-6">Action</Table.Column>
                        </Table.Header>

                        {/* Table Body Configuration */}
                        <Table.Body>
                            {jobs.map((job, index) => (
                                <Table.Row
                                    key={index}
                                    className="border-b border-zinc-800/40 hover:bg-zinc-900/40 transition-colors duration-150"
                                >
                                    {/* 1. Job Title */}
                                    <Table.Cell className="py-4 pl-6 font-medium text-white text-sm">
                                        {job.title}
                                    </Table.Cell>

                                    {/* 2. Type/Category badge look */}
                                    <Table.Cell className="text-sm">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-zinc-200 font-medium">{job.type}</span>
                                            <span className="text-zinc-500 text-xs">{job.category}</span>
                                        </div>
                                    </Table.Cell>

                                    {/* 3. Location */}
                                    <Table.Cell className="text-sm text-zinc-400">
                                        {job.location}
                                    </Table.Cell>

                                    {/* 4. Status Badge rendering */}
                                    <Table.Cell>
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${job.status.toLowerCase() === 'active'
                                                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'
                                                : 'bg-zinc-800/50 border-zinc-700/50 text-zinc-500'
                                            }`}>
                                            {job.status}
                                        </span>
                                    </Table.Cell>

                                    {/* 5. Deadline */}
                                    <Table.Cell className="text-sm font-mono text-zinc-400">
                                        {job.deadline}
                                    </Table.Cell>

                                    {/* 6. Action Section (3 Minimal Gravity UI Icons) */}
                                    <Table.Cell className="text-center pr-6">
                                        <div className="flex items-center justify-center gap-1.5">

                                            {/* View Button */}
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="flat"
                                                onClick={() => onView?.(job.id)}
                                                className="bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/40 text-zinc-400 hover:text-white rounded-lg transition-all"
                                                aria-label="View Job Details"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </Button>

                                            {/* Edit Button */}
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="flat"
                                                onClick={() => onEdit?.(job.id)}
                                                className="bg-zinc-800/40 hover:bg-zinc-800 border border-zinc-700/40 text-blue-400 hover:text-blue-300 rounded-lg transition-all"
                                                aria-label="Edit Job"
                                            >
                                                <Pencil className="w-3.5 h-3.5" />
                                            </Button>

                                            {/* Delete Button */}
                                            <Button
                                                isIconOnly
                                                size="sm"
                                                variant="flat"
                                                onClick={() => onDelete?.(job.id)}
                                                className="bg-zinc-800/40 hover:bg-rose-950 border border-zinc-700/40 text-rose-400 hover:text-rose-300 rounded-lg transition-all"
                                                aria-label="Delete Job"
                                            >
                                                <TrashBin className="w-4 h-4" />
                                            </Button>

                                        </div>
                                    </Table.Cell>

                                </Table.Row>
                            ))}
                        </Table.Body>

                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default JobTable;