"use client"
import DashboardStats from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import React from 'react';

const recruiterPage = () => {
    const {data: session, isPending} = useSession();
    if(isPending){
        return <div>Loading......</div>
    }

    const user = session?.user;
        console.log(user);
    return (
        <section className='px-12 py-8'>
            <div className='text-2xl'>
                Welcome Back, <span className='font-bold'>{user.name}</span>
                <DashboardStats/>
            </div>
        </section>
    );
};

export default recruiterPage;