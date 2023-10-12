import { QuizType, areValidParamsForQuiz } from '@/helpers/student';

import { FC } from 'react';
import Footer from '@/components/molecules/Footer';
import { Metadata } from 'next';
import QuizSection from '@/components/organisms/Quiz/QuizSection';
import SimpleNavBar from '@/components/molecules/SimpleNavBar';
import { redirect } from 'next/navigation';

interface QuizPageProps {
  params: { id: string[] };
}

export function generateMetadata({ params }: QuizPageProps): Metadata {
  if (!areValidParamsForQuiz(params.id)) {
    return {
      title: `BoltAbacus | Invalid Quiz`,
    };
  } else {
    return {
      title: `BoltAbacus | ${
        params.id[3] === 'classwork' ? 'Classwork' : 'Homework'
      }`,
    };
  }
}

const QuizPage: FC<QuizPageProps> = ({ params }) => {
  if (!areValidParamsForQuiz(params.id)) {
    redirect('/student/dashboard');
  }

  const levelId = parseInt(params.id[0]);
  const classId = parseInt(params.id[1]);
  const topicId = parseInt(params.id[2]);
  const quizType = params.id[3] as QuizType;

  return (
    <main className="min-h-screen flex flex-col">
      <SimpleNavBar />
      <div className="flex-1">
        <QuizSection
          levelId={levelId}
          classId={classId}
          topicId={topicId}
          quizType={quizType}
        />
      </div>
    </main>
  );
};

export default QuizPage;
