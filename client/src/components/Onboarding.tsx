import React, { useState } from 'react';
import Select from 'react-select';

type Option = {
  value: string;
  label: string;
};

const Onboarding = () => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    email: '',
    program: '',
    universities: [] as string[],
    countries: [] as string[],
    scholarship: '',
    linkedin: '',
  });

  const [displayPicture, setDisplayPicture] = useState<File | null>(null);
  const [cv, setCv] = useState<File | null>(null);

  const handleMultiSelectChange = (selectedOptions: Option[] | null, field: 'universities' | 'countries') => {
    setProfileData({
      ...profileData,
      [field]: selectedOptions?.map(option => option.value) || [],
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'displayPicture' | 'cv') => {
    const file = e.target.files?.[0] || null;
    if (field === 'displayPicture') setDisplayPicture(file);
    if (field === 'cv') setCv(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Profile Data:', profileData);
    console.log('Display Picture:', displayPicture);
    console.log('CV:', cv);
  };

  const programOptions = [
    { value: 'Masters', label: 'Masters' },
    { value: 'MBA', label: 'MBA' },
    { value: 'PhD', label: 'PhD' },
  ];

  const universityOptions = [
    { value: 'Harvard University', label: 'Harvard University' },
    { value: 'Stanford University', label: 'Stanford University' },
    { value: 'MIT', label: 'MIT' },
  ];

  const countryOptions = [
    { value: 'USA', label: 'USA' },
    { value: 'UK', label: 'UK' },
    { value: 'Canada', label: 'Canada' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profileData.fullName}
            onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Program</label>
          <Select
            options={programOptions}
            onChange={(selectedOption) =>
              setProfileData({ ...profileData, program: selectedOption?.value || '' })
            }
            className="w-full"
            classNamePrefix="select"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Target Universities</label>
          <Select
            isMulti
            options={universityOptions}
            onChange={(selectedOptions) =>
              handleMultiSelectChange(selectedOptions as Option[], 'universities')
            }
            className="w-full"
            classNamePrefix="select"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Target Countries</label>
          <Select
            isMulti
            options={countryOptions}
            onChange={(selectedOptions) =>
              handleMultiSelectChange(selectedOptions as Option[], 'countries')
            }
            className="w-full"
            classNamePrefix="select"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Scholarship/Fellowship</label>
          <input
            type="text"
            name="scholarship"
            value={profileData.scholarship}
            onChange={(e) => setProfileData({ ...profileData, scholarship: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">LinkedIn Profile</label>
          <input
            type="url"
            name="linkedin"
            value={profileData.linkedin}
            onChange={(e) => setProfileData({ ...profileData, linkedin: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, 'displayPicture')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Upload CV</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleFileChange(e, 'cv')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save Profile
        </button>
      </div>
    </form>
  );
};

export default Onboarding;