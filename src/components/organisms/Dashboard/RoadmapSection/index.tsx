import { FC } from 'react';
import LevelCard from '@/components/molecules/LevelCard';

export interface RoadmapSectionProps {}

const RoadmapSection: FC<RoadmapSectionProps> = ({}) => {
  return (
    <div className="px-6 pt-2 tablet:p-10 desktop:px-24">
      <p className="font-medium text-md desktop:text-lg">Roadmap</p>
      <div className="grid grid-cols-1 gap-10 py-4 tablet:grid-cols-2 desktop:grid-cols-3">
        <LevelCard type="finished" description="Test Mode" level={1} />
        <LevelCard type="finished" description="Test Mode" level={2} />
        <LevelCard type="inprogress" description="Test Mode" level={3} />
        <LevelCard type="locked" description="Test Mode" level={4} />
        <LevelCard type="locked" description="Test Mode" level={5} />
        <LevelCard type="locked" description="Test Mode" level={6} />
        <LevelCard type="locked" description="Test Mode" level={7} />
        <LevelCard type="locked" description="Test Mode" level={8} />
        <LevelCard type="locked" description="Test Mode" level={9} />
        <LevelCard type="locked" description="Test Mode" level={10} />
      </div>
    </div>
  );
};

export default RoadmapSection;
