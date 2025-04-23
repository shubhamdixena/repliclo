import { useState } from 'react';
import DonationOption from './DonationOption';

interface DonationType {
  type: 'once' | 'monthly';
  label: string;
}

const DonationForm = () => {
  const [donationType, setDonationType] = useState<DonationType>({
    type: 'monthly',
    label: 'MONTHLY'
  });
  
  const [selectedAmount, setSelectedAmount] = useState(40);
  
  const donationOptions = [
    { amount: 10, id: 1 },
    { amount: 20, id: 2 },
    { amount: 40, id: 3 },
    { amount: 100, id: 4 }
  ];
  
  const handleDonationTypeChange = (type: 'once' | 'monthly', label: string) => {
    setDonationType({ type, label });
  };
  
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex mb-4">
        <button 
          id="give-once-btn"
          className={`w-1/2 py-2 text-center rounded-l-md border ${
            donationType.type === 'once' 
              ? 'bg-charity-yellow text-charity-black font-medium border-charity-yellow' 
              : 'bg-white text-gray-700 border-gray-300'
          }`}
          onClick={() => handleDonationTypeChange('once', 'GIVE ONCE')}
        >
          GIVE ONCE
        </button>
        <button 
          id="monthly-btn"
          className={`w-1/2 py-2 text-center rounded-r-md border ${
            donationType.type === 'monthly' 
              ? 'bg-charity-yellow text-charity-black font-medium border-charity-yellow' 
              : 'bg-white text-gray-700 border-gray-300'
          }`}
          onClick={() => handleDonationTypeChange('monthly', 'MONTHLY')}
        >
          MONTHLY
        </button>
      </div>
      
      <p className="text-sm text-gray-700 mb-4">Choose an amount to give per month</p>
      
      {/* Donation options */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {donationOptions.map((option) => (
          <DonationOption
            key={option.id}
            amount={option.amount}
            selected={selectedAmount === option.amount}
            onClick={() => handleAmountSelect(option.amount)}
          />
        ))}
      </div>
      
      <div className="mb-4">
        <DonationOption
          amount={0}
          selected={false}
          onClick={() => {}}
          isOther={true}
        />
      </div>
      
      <button className="w-full bg-charity-yellow text-charity-black font-bold py-3 px-4 rounded">
        JOIN TODAY
      </button>
      
      <p className="mt-4 text-sm text-gray-600">
        Your ${selectedAmount}.00 monthly donation can give {Math.floor(selectedAmount / 3.33)} people clean water every year. 100% funds water projects.
      </p>
    </div>
  );
};

export default DonationForm;
