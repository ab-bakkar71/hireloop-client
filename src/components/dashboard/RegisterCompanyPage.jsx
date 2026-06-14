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
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Xmark } from '@gravity-ui/icons';
import { ArrowUpToLine, LocationEditIcon } from 'lucide-react';
import { createCompany } from '@/lib/actions/companies';

export default function RegisterCompanyPage({recruiter}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [logoFile, setLogoFile] = useState(null);
  const [logoPreview, setLogoPreview] = useState("");

  // ফাইল হ্যান্ডলার এবং ক্লায়েন্ট সাইড প্রিভিউ জেনারেশন
  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File exceeds 5MB limit.");
        return;
      }
      
      // 📝 কনসোল লগ: ইউজার ফাইল সিলেক্ট করলে ফাইলের মেটাডাটা দেখা যাবে
      console.log("📁 Selected File Details:", {
        fileName: file.name,
        fileSize: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
        fileType: file.type
      });

      setLogoFile(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  // ফর্ম সাবমিট হ্যান্ডলার (ImgBB এবং Backend integration)
  const handleSubmitCompany = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const companyData = Object.fromEntries(formData.entries());
    
    // 📝 কনসোল লগ ১: ফর্মের টেক্সট ইনপুট থেকে কী কী ডাটা পাওয়া গেল
    console.log("📝 1. Received Text Form Data:", companyData);
    
    let uploadedLogoUrl = "";

    // প্রথমে ফ্রন্টএন্ড থেকেই সরাসরি ImgBB তে ইমেজ আপলোড প্রসেস শুরু
    if (logoFile) {
      try {
        console.log("⏳ 2. Starting upload to ImgBB...");
        const imgbbFormData = new FormData();
        imgbbFormData.append("image", logoFile);

        const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMAGE_API}`, {
          method: "POST",
          body: imgbbFormData,
        });

        const imgbbResult = await imgbbResponse.json();

        // 📝 কনসোল লগ ২: ImgBB থেকে ব্যাক আসা সম্পূর্ণ রেসপন্স ডাটা
        console.log("☁️ 3. ImgBB Full Response API Data:", imgbbResult);

        if (imgbbResult.success) {
          uploadedLogoUrl = imgbbResult.data.url; 
          console.log("🔗 4. Successfully Generated Image CDN URL:", uploadedLogoUrl);
        } else {
          toast.error("Failed to upload image to ImgBB cloud storage.");
          setIsLoading(false);
          return;
        }
      } catch (error) {
        console.error("❌ ImgBB Connection Error:", error);
        toast.error("ImgBB upload connection error.");
        setIsLoading(false);
        return;
      }
    } else {
      console.log("⚠️ No logo file selected for upload.");
    }
  
    // জেনারেটেড ইউআরএল এবং বাকী টেক্সট ডাটা দিয়ে পেলোড গঠন
    const companyPayload = {
      name: companyData.companyName,
      industry: companyData.industry,
      website: `https://${companyData.websiteUrl}`,
      location: companyData.location,
      employeeCount: companyData.employeeCount,
      description: companyData.description,
      logoUrl: uploadedLogoUrl, 
      status: "pending",
      recruiterId: recruiter.id
    };

    //
    console.log("🚀 5. Final Payload Sending to Your Server Database:", companyPayload);

    try {

      const payload = await createCompany(companyPayload)

     
      console.log("🏢 6. Your Backend Server Response:", payload);

      if(payload.insertedId){
        toast.success("Company registered successfully! 🏢");
        router.push("/dashboard/recruiter/company"); 
      }
    } catch (error) {
      console.log(error);
      toast.error("Network interface connection to your server failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex justify-center items-center p-4 sm:p-6 lg:p-10 relative overflow-hidden">
      
      {/* Background Subtle Atmosphere Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-[#D470FF]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Glassmorphic Modal Window Container */}
      <div className="w-full max-w-2xl bg-[#161616] border border-zinc-800/80 shadow-2xl rounded-2xl relative z-10 flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Top Header Wrapper */}
        <div className="flex justify-between items-start p-6 sm:p-8 border-b border-zinc-800/60">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
              Register New Company
            </h1>
            <p className="text-xs text-zinc-400 mt-1.5">
              Enter your business details to start hiring on HireLoop.
            </p>
          </div>
          <button 
            type="button" 
            onClick={() => router.back()} 
            className="text-zinc-500 hover:text-white p-1 rounded-lg hover:bg-zinc-800/50 transition-all focus:outline-none"
          >
            <Xmark className="w-4 h-4" />
          </button>
        </div>

        {/* HeroUI Custom Form Wrapper */}
        <Form className="p-6 sm:p-8 flex flex-col gap-6" onSubmit={handleSubmitCompany}>
          <Fieldset className="flex flex-col gap-5 w-full">
            
            {/* Row 1: Company Name and Industry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TextField required name="companyName">
                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Company Name</Label>
                <Input placeholder="e.g. Acme Corp" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm" />
                <FieldError className="text-rose-500 text-xs mt-1" />
              </TextField>

              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-300 text-xs font-medium">Industry / Category</label>
                <select 
                  name="industry"
                  className="w-full bg-[#222] border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-400 focus:text-white focus:outline-none cursor-pointer appearance-none"
                  defaultValue="Technology"
                  required
                >
                  <option value="Technology" className="bg-zinc-950">Technology</option>
                  <option value="Design" className="bg-zinc-950">Design & Creative</option>
                  <option value="Marketing" className="bg-zinc-950">Marketing & Sales</option>
                  <option value="Healthcare" className="bg-zinc-950">Healthcare</option>
                  <option value="Finance" className="bg-zinc-950">Finance & Banking</option>
                </select>
              </div>
            </div>

            {/* Row 2: Website URL and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <TextField required name="websiteUrl">
                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Website URL</Label>
                <div className="flex items-center w-full mt-1 bg-[#222] border border-zinc-800 rounded-xl overflow-hidden focus-within:border-zinc-700 transition-colors">
                  <span className="text-xs text-zinc-500 bg-[#1a1a1a] px-3.5 py-3 border-r border-zinc-800 select-none">
                    https://
                  </span>
                  <Input placeholder="www.company.com" className="bg-transparent border-none text-white text-sm w-full focus:ring-0 shadow-none" />
                </div>
                <FieldError className="text-rose-500 text-xs mt-1" />
              </TextField>

              <TextField required name="location">
                <Label className="text-zinc-300 text-xs font-medium mb-1.5">Location</Label>
                <div className="relative flex items-center mt-1">
                  <LocationEditIcon className="absolute left-3.5 text-zinc-500 w-4 h-4 pointer-events-none z-20" />
                  <Input placeholder="City, Country" className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm pl-10 w-full" />
                </div>
                <FieldError className="text-rose-500 text-xs mt-1" />
              </TextField>
            </div>

            {/* Row 3: Employee Count Selector and File Uploader Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-zinc-300 text-xs font-medium">Employee Count Range</label>
                <select 
                  name="employeeCount"
                  className="w-full bg-[#222] border border-zinc-800 rounded-xl px-3 py-2.5 text-sm text-zinc-400 focus:text-white focus:outline-none cursor-pointer appearance-none"
                  defaultValue="1-10 employees"
                  required
                >
                  <option value="1-10" className="bg-zinc-950">1-10 employees</option>
                  <option value="11-50" className="bg-zinc-950">11-50 employees</option>
                  <option value="51-200" className="bg-zinc-950">51-200 employees</option>
                  <option value="201-500" className="bg-zinc-950">201-500 employees</option>
                  <option value="500+" className="bg-zinc-950">500+ employees</option>
                </select>
              </div>

              {/* Company Logo Image Dropzone Area */}
              <div className="flex flex-col gap-1.5">
                <span className="text-zinc-300 text-xs font-medium">Company Logo</span>
                <div className="flex items-center gap-4 mt-1">
                  <label htmlFor="logo-upload" className="w-12 h-12 bg-[#222] border border-dashed border-zinc-700 hover:border-zinc-500 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden transition-all shrink-0">
                    {logoPreview ? (
                      <img src={logoPreview} alt="Logo preview" className="w-full h-full object-cover" />
                    ) : (
                      <ArrowUpToLine className="w-4 h-4 text-zinc-400" />
                    )}
                    <input 
                      type="file" 
                      id="logo-upload" 
                      accept="image/png, image/jpeg" 
                      onChange={handleLogoChange} 
                      className="hidden" 
                    />
                  </label>
                  <div className="flex flex-col">
                    <span className="text-xs font-medium text-zinc-300">
                      {logoFile ? logoFile.name : "Upload image"}
                    </span>
                    <span className="text-[10px] text-zinc-500 mt-0.5">
                      PNG, JPG up to 5MB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Textarea Brief Description */}
            <div className="flex flex-col w-full mt-1">
              <Label className="text-zinc-300 text-xs font-medium mb-1.5">Brief Description</Label>
              <TextArea 
                required
                name="description"
                placeholder="Tell us about your company's mission and culture..."
                rows={4}
                className="bg-[#222] border border-zinc-800 text-white rounded-xl text-sm p-1"
              />
              <FieldError className="text-rose-500 text-xs mt-1" />
            </div>

          </Fieldset>

          {/* Bottom Interactive Modal Action Bar */}
          <div className="flex justify-end items-center gap-3 border-t border-zinc-800/60 pt-6 mt-4 w-full">
            <button 
              type="button" 
              onClick={() => router.back()} 
              className="px-5 py-2.5 bg-transparent border border-zinc-800 hover:bg-zinc-950 text-zinc-300 text-sm font-medium rounded-xl transition-all duration-200 focus:outline-none"
            >
              Cancel
            </button>
            <Button 
              type="submit" 
              isLoading={isLoading}
              className="px-5 py-2.5 bg-white text-black hover:bg-zinc-200 text-sm font-semibold rounded-xl min-w-[150px] transition-all duration-200"
            >
              {isLoading ? "Registering..." : "Register Company"}
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
}