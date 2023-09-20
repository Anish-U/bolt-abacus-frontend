import { FC } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { pricingPlans } from '@/helpers/pricingPlans';
import styles from './index.module.css';

export interface PricingCardProps {
  plan: (typeof pricingPlans)[0];
}

const PricingCard: FC<PricingCardProps> = ({ plan }) => {
  return (
    <div
      className={`relative flex flex-col p-8 border desktop:p-12 tablet:px-4 rounded-2xl border-gold shadow-boxGold ${styles.pricingCard}`}
    >
      <h3 className="text-xl font-bold tablet:text-lg">{plan.title}</h3>
      {plan.mostPopular && (
        <p className="absolute top-0 text-black -translate-y-1/2 rounded-full px-3 py-0.5 text-sm font-bold tracking-wide bg-gold">
          Most Popular
        </p>
      )}
      <p className="mt-5 text-sm font-semibold">{plan.description}</p>
      <div className="p-6 mt-4 -mx-8 tablet:-mx-4 tablet:px-4 desktop:-mx-12 desktop:px-10 bg-gold">
        <p className="flex items-center text-sm font-semibold text-black">
          <span className="text-3xl">{plan.price}</span>
          <span className="ml-3">{plan.currency}</span>
          <span>{plan.frequency}</span>
        </p>
      </div>
      <ul className="flex-1 mt-6 space-y-4">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center text-sm">
            <GiCheckMark className="shrink-0 text-gold" />
            <span className="ml-3">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
