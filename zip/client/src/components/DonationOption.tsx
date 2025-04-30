interface DonationOptionProps {
  amount: number;
  selected: boolean;
  onClick: () => void;
  isOther?: boolean;
  currency?: string;
}

const DonationOption = ({
  amount,
  selected,
  onClick,
  isOther = false,
  currency = "$"
}: DonationOptionProps) => {
  const classes = `donation-option border rounded py-3 px-4 text-center 
    ${selected ? 'selected border-charity-yellow' : 'border-gray-300'}`;

  return (
    <button className={classes} onClick={onClick}>
      {isOther ? (
        <span className="text-md text-gray-500">Other amount</span>
      ) : (
        <>
          <span className="text-lg font-medium">{currency}{amount}</span>
          <span className={`text-xs ${selected ? 'text-gray-700' : 'text-gray-500'} block`}>/month</span>
        </>
      )}
    </button>
  );
};

export default DonationOption;
