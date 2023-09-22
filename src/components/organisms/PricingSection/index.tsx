import { FC } from 'react';
import PricingCard from '@/components/molecules/PricingCard';
import { pricingPlans } from '@/helpers/pricingPlans';

export interface PricingSectionProps {}

const PricingSection: FC<PricingSectionProps> = ({}) => {
  return (
    <div
      id="contact"
      className="p-12 tablet:p-10 desktop:py-16 desktop:pt-4 desktop:px-24"
    >
      <h1 className="pt-2 text-xl font-bold text-center text-gold desktop:text-2xl">
        Pricing
      </h1>
      <div className="grid grid-cols-1 gap-12 py-16 mx-auto tablet:grid-cols-3 desktop:grid-cols-3">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.title} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
