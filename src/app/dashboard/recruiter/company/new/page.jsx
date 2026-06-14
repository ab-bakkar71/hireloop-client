import RegisterCompanyPage from '@/components/dashboard/RegisterCompanyPage';
import { getUserSession } from '@/lib/core/session';
import React from 'react';

const CompanyRegister = async() => {
  const user = await getUserSession();
  console.log(user);

  
  return (
    <div>
      <RegisterCompanyPage recruiter = {user}/>
    </div>
  );
};

export default CompanyRegister;