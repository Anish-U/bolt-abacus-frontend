export const pricingPlans = [
  {
    title: 'Category A',
    description: '1-5 levels or 6-10 levels',
    currency: 'INR',
    price: 300,
    frequency: '/session',
    features: [
      '30 Students per batch',
      '4 sessions / month',
      'Duration - 15 months',
      'Homework support',
      'Payable - 18,000 INR (EMI Available)',
    ],
    mostPopular: false,
  },
  {
    title: 'Category B',
    description: '1-5 levels or 6-10 levels',
    currency: 'INR',
    price: 400,
    frequency: '/session',
    features: [
      '15 Students per batch',
      '4 sessions / month',
      'Duration - 15 months',
      'Homework support',
      'Payable - 24,000 INR (EMI Available)',
    ],
    mostPopular: true,
  },
  {
    title: 'Category C',
    description: '1-5 levels or 6-10 levels',
    currency: 'INR',
    price: 550,
    frequency: '/session',
    features: [
      '10 Students per batch',
      '4 sessions / month',
      'Duration - 15 months',
      'Homework support',
      'Payable - 33,000 INR (EMI Available)',
    ],
    mostPopular: false,
  },
];

export const PricingPlans = typeof pricingPlans;
