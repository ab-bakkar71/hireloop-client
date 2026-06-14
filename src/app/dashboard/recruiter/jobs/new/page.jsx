"use client"

import React, { useState } from 'react';
import {
    Form,
    Fieldset,
    TextField,
    Input,
    Label,
    FieldError,
    TextArea,
    Button
} from '@heroui/react';
// Gravity UI Icons setup
import {
    Briefcase,
    Layers,
    Xmark,
    Check
} from '@gravity-ui/icons';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { createJob } from '@/lib/actions/job';

// 🛠️ FIX 1: কম্পোনেন্টের নাম বড় হাতের অক্ষরে (Capitalized) করা হয়েছে
export default function NewJobPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isRemote, setIsRemote] = useState(false);

    const [companyInfo] = useState({
        id: "comp_987312",
        name: "HireLoop Tech Corp",
        isApproved: true
    });

    const handleJobSubmit = async (e) => {
        e.preventDefault();

        if (!companyInfo.isApproved) {
            toast.error("Your company registry status is pending approval. Action denied.");
            return;
        }

        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        if (Number(userData.minSalary) > Number(userData.maxSalary)) {
            toast.error("Minimum salary cannot be greater than maximum salary.");
            setIsLoading(false);
            return;
        }

        const jobPayload = {
            title: userData.jobTitle,
            category: userData.category,
            type: userData.jobType,
            salaryRange: {
                min: Number(userData.minSalary),
                max: Number(userData.maxSalary),
                currency: userData.currency
            },
            location: isRemote ? "Remote" : `${userData.city}, ${userData.country}`,
            isRemote: isRemote,
            deadline: userData.deadline,
            description: {
                responsibilities: userData.responsibilities,
                requirements: userData.requirements,
                benefits: userData.benefits || ""
            },
            companyId: companyInfo.id,
            companyName:companyInfo.name,
            status: "active",
            isPubliclyVisible: true
        };
        const res = await createJob(jobPayload);

        if(res.insertedId){
            toast.success("Job post is now live and publicly visible! 🚀");
            router.push("/dashboard/recruiter/jobs");
        }
        else if(res.error){
            toast.error("An error occurred. Please try again.");
        }
        setIsLoading(false);

    };

    return (
        <div className="min-h-screen bg-[#0d0d0d] text-white flex justify-center items-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">

            {/* Background Atmosphere Lights */}
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D470FF]/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Container */}
            <div className="w-full max-w-3xl bg-[#161616] border border-zinc-800/80 shadow-2xl rounded-2xl relative z-10 flex flex-col">

                {/* Modal Top/Header Wrapper */}
                <div className="flex justify-between items-start p-6 sm:p-8 border-b border-zinc-800/60">
                    <div>
                        <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
                            Register New Position
                        </h1>
                        <p className="text-xs text-zinc-400 mt-1.5">
                            Enter the role details below to start hiring on HireLoop.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-800/50 transition-all"
                    >
                        <Xmark className="w-4 h-4" />
                    </button>
                </div>

                {/* HeroUI HTML Form Body */}
                <Form className="p-6 sm:p-8 flex flex-col gap-8" onSubmit={handleJobSubmit}>

                    {/* SECTION 1: JOB INFO FIELDSET */}
                    <Fieldset className="flex flex-col gap-5 w-full">
                        <legend className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-blue-500" /> Job Specification
                        </legend>

                        {/* Row 1: Title and Category */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {/* 🛠️ FIX 2: isRequired এর বদলে native required ব্যবহার করা হয়েছে */}
                            <TextField required name="jobTitle">
                                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Job Title</Label>
                                <Input placeholder="e.g. Acme Corp" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm" />
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>

                            <TextField required name="category">
                                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Industry / Category</Label>
                                <Input placeholder="Technology, Design, Corporate" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm" />
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>
                        </div>

                        {/* Row 2: Type and Deadline */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-zinc-300 text-xs font-medium">Job Type</label>
                                <select
                                    name="jobType"
                                    className="w-full bg-[#222] border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-400 focus:text-white focus:outline-none cursor-pointer appearance-none"
                                    defaultValue="Full-time"
                                    required
                                >
                                    <option value="Full-time" className="bg-zinc-950">Full-time</option>
                                    <option value="Part-time" className="bg-zinc-950">Part-time</option>
                                    <option value="Contract" className="bg-zinc-950">Contract</option>
                                    <option value="Internship" className="bg-zinc-950">Internship</option>
                                </select>
                            </div>

                            <TextField required name="deadline" type="date">
                                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Application Deadline</Label>
                                <Input className="bg-[#222] border border-zinc-800 text-zinc-400 focus:text-white rounded-xl text-sm" />
                                <FieldError className="text-rose-500 text-xs mt-1" />
                            </TextField>
                        </div>

                        {/* Row 3: Salary Fields and Currency Selector */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-zinc-800/40 pt-4">
                            <TextField required name="minSalary" type="number">
                                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Min Salary</Label>
                                <Input placeholder="e.g. 50000" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm" />
                            </TextField>

                            <TextField required name="maxSalary" type="number">
                                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Max Salary</Label>
                                <Input placeholder="e.g. 80000" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm" />
                            </TextField>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-zinc-300 text-xs font-medium">Currency</label>
                                <select
                                    name="currency"
                                    className="w-full bg-[#222] border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-400 focus:text-white focus:outline-none cursor-pointer appearance-none"
                                    defaultValue="BDT"
                                    required
                                >
                                    <option value="USD" className="bg-zinc-950">USD ($)</option>
                                    <option value="EUR" className="bg-zinc-950">EUR (€)</option>
                                    <option value="GBP" className="bg-zinc-950">GBP (£)</option>
                                    <option value="BDT" className="bg-zinc-950">BDT (৳)</option>
                                </select>
                            </div>
                        </div>

                        {/* Row 4: Dynamic Location and Remote Toggle Wrapper */}
                        <div className="border-t border-zinc-800/40 pt-4 flex flex-col gap-4">
                            <div className="flex items-center gap-2.5">
                                <input
                                    type="checkbox"
                                    id="remote"
                                    checked={isRemote}
                                    onChange={(e) => setIsRemote(e.target.checked)}
                                    className="w-4 h-4 rounded bg-zinc-900 border-zinc-800 text-blue-600 focus:ring-0 cursor-pointer"
                                />
                                <label htmlFor="remote" className="text-xs text-zinc-300 select-none cursor-pointer font-medium">
                                    This position is fully Remote / Work from Home
                                </label>
                            </div>

                            {!isRemote && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 animate-in fade-in duration-200">
                                    <TextField required={!isRemote} name="city">
                                        <Label className="text-zinc-300 text-xs font-medium mb-1.5">City</Label>
                                        <div className="relative flex items-center">
                                            <Input placeholder="e.g. Dhaka" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm w-full" />
                                        </div>
                                    </TextField>

                                    <TextField required={!isRemote} name="country">
                                        <Label className="text-zinc-300 text-xs font-medium mb-1.5">Country</Label>
                                        <Input placeholder="e.g. Bangladesh" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm" />
                                    </TextField>
                                </div>
                            )}
                        </div>
                    </Fieldset>

                    {/* SECTION 2: JOB DESCRIPTION TEXTAREA FIELDSET */}
                    <Fieldset className="flex flex-col gap-5 w-full border-t border-zinc-800/60 pt-6">
                        <legend className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Layers className="w-4 h-4 text-purple-500" /> Descriptions & Scope
                        </legend>

                        <div className="flex flex-col w-full">
                            <Label className="text-zinc-300 text-xs font-medium mb-1.5">Core Responsibilities</Label>
                            <TextArea
                                required
                                name="responsibilities"
                                placeholder="Tell us about day to day core responsibilities..."
                                rows={4}
                                className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm p-1"
                            />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </div>

                        <div className="flex flex-col w-full mt-1">
                            <Label className="text-zinc-300 text-xs font-medium mb-1.5">Requirements & Tech Stack</Label>
                            <TextArea
                                required
                                name="requirements"
                                placeholder="Core frameworks, required professional work experience bounds..."
                                rows={4}
                                className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm p-1"
                            />
                            <FieldError className="text-rose-500 text-xs mt-1" />
                        </div>

                        <div className="flex flex-col w-full mt-1">
                            <Label className="text-zinc-300 text-xs font-medium mb-1.5">Benefits & Perks (Optional)</Label>
                            <TextArea
                                name="benefits"
                                placeholder="Medical insurance, equity shares, custom workstation setups..."
                                rows={3}
                                className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm p-1"
                            />
                        </div>
                    </Fieldset>

                    {/* SECTION 3: AUTOMATED IDENTIFIED COMPANY SUB-CARD */}
                    <div className="w-full bg-[#1e1e1e] border border-zinc-800/80 rounded-xl p-4 flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                        <div>
                            <span className="text-[10px] font-mono tracking-wider text-zinc-500 uppercase block">Posting Entity</span>
                            <h4 className="text-sm font-semibold text-zinc-200 mt-0.5">{companyInfo.name}</h4>
                        </div>
                        <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium px-2.5 py-1 rounded-full w-fit">
                            <Check className="w-3 h-3" /> Approved Organization
                        </div>
                    </div>

                    {/* Bottom Interactive Modal Actions */}
                    <div className="flex justify-end items-center gap-3 border-t border-zinc-800/60 pt-6 mt-2 w-full">
                        <button
                            type="button"
                            onClick={() => router.back()}
                            className="px-5 py-2.5 bg-transparent border border-zinc-800 hover:bg-zinc-950 text-zinc-300 text-sm font-medium rounded-xl transition-all duration-200"
                        >
                            Cancel
                        </button>
                        <Button
                            type="submit"
                            isLoading={isLoading}
                            className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 text-sm font-semibold rounded-xl min-w-[140px] transition-all duration-200"
                        >
                            {isLoading ? "Posting..." : "Post Job"}
                        </Button>
                    </div>

                </Form>
            </div>
        </div>
    );
}