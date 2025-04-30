import { useState } from 'react';
import DonationOption from './DonationOption';

interface DonationType {
  type: 'once' | 'monthly';
  label: string;
  actionText: string;
}

const DonationForm = () => {
  const [donationType, setDonationType] = useState<DonationType>({
    type: 'monthly',
    label: 'MONTHLY',
    actionText: 'JOIN TODAY'
  });
  
  const [selectedAmount, setSelectedAmount] = useState(40);
  const [customAmount, setCustomAmount] = useState('');
  const [showCustom, setShowCustom] = useState(false);
  
  const donationOptions = [
    { amount: 10, id: 1 },
    { amount: 20, id: 2 },
    { amount: 40, id: 3 },
    { amount: 100, id: 4 }
  ];
  
  const handleDonationTypeChange = (type: 'once' | 'monthly', label: string, actionText: string) => {
    setDonationType({ type, label, actionText });
  };
  
  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setShowCustom(false);
  };
  
  const handleOtherAmountClick = () => {
    setShowCustom(true);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="flex mb-5">
        <button 
          id="give-once-btn"
          className={`w-1/2 py-2 text-center rounded-l-md border text-sm font-bold tracking-wider ${
            donationType.type === 'once' 
              ? 'bg-charity-yellow text-charity-black border-charity-yellow' 
              : 'bg-white text-gray-700 border-gray-300'
          }`}
          onClick={() => handleDonationTypeChange('once', 'GIVE ONCE', 'DONATE NOW')}
        >
          GIVE ONCE
        </button>
        <button 
          id="monthly-btn"
          className={`w-1/2 py-2 text-center rounded-r-md border text-sm font-bold tracking-wider ${
            donationType.type === 'monthly' 
              ? 'bg-charity-yellow text-charity-black border-charity-yellow' 
              : 'bg-white text-gray-700 border-gray-300'
          }`}
          onClick={() => handleDonationTypeChange('monthly', 'MONTHLY', 'JOIN TODAY')}
        >
          MONTHLY
        </button>
      </div>
      
      <p className="text-sm text-gray-700 mb-4">
        {donationType.type === 'monthly' 
          ? 'Choose an amount to give per month'
          : 'Choose a one-time donation amount'}
      </p>
      
      {/* Donation options */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {donationOptions.map((option) => (
          <DonationOption
            key={option.id}
            amount={option.amount}
            selected={selectedAmount === option.amount && !showCustom}
            onClick={() => handleAmountSelect(option.amount)}
          />
        ))}
      </div>
      
      <div className="mb-6">
        {showCustom ? (
          <div className="border rounded py-3 px-4 border-charity-yellow bg-white">
            <div className="flex items-center">
              <span className="text-gray-500 mr-2">$</span>
              <input 
                type="number" 
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full focus:outline-none text-lg"
                placeholder="Enter amount"
              />
            </div>
          </div>
        ) : (
          <DonationOption
            amount={0}
            selected={false}
            onClick={handleOtherAmountClick}
            isOther={true}
          />
        )}
      </div>
      
      <button className="w-full bg-charity-yellow text-charity-black font-bold py-3 px-4 rounded text-sm tracking-wider">
        {donationType.actionText}
      </button>
      
      {donationType.type === 'monthly' && (
        <p className="mt-4 text-sm text-gray-600">
          Your ${selectedAmount}.00 monthly donation can give {Math.floor(selectedAmount / 3.33)} people clean water every year. 100% funds water projects.
        </p>
      )}
      
      {donationType.type === 'once' && (
        <p className="mt-4 text-sm text-gray-600">
          100% of your donation funds clean water projects. Private donors cover our operating costs.
        </p>
      )}
    </div>
  );
};

export default DonationForm;
