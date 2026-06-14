

import JobTable from '@/components/dashboard/JobTable';
import { getCompanyJobs } from '@/lib/api/jobs';

const recruiterJobs = async () => {
    const companyId = 'comp_987312'
    const jobs = await getCompanyJobs(companyId);

    return (

        <section className='px-12 py-8'>
            <h2 className='text-2xl font-semibold'>Manage All Jobs</h2>
            <p>View, update and manage Your current job posting</p>
            <JobTable jobs={jobs}/>
        </section>




        
    );
};

export default recruiterJobs;