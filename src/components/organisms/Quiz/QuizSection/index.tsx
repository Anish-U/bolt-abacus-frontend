import { FC } from 'react';

export interface QuizSectionProps {
  levelId: number;
  classId: number;
  topicId: number;
  quizType: 'homework' | 'classwork';
}

const QuizSection: FC<QuizSectionProps> = ({
  levelId,
  classId,
  topicId,
  quizType,
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 justify-evenly tablet:justify-between tablet:items-center tablet:p-10 tablet:gap-8 desktop:p-20">
      <span>{`levelId: ${levelId}`}</span>
      <span>{`classId: ${classId}`}</span>
      <span>{`topicId: ${topicId}`}</span>
      <span>{`quizType: ${quizType}`}</span>
    </div>
  );
};

export default QuizSection;
