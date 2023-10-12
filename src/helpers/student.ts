export enum QuizType {
  homework = 'classwork',
  classwork = 'homework',
}

export const isValidLevelId = (id: string) => {
  const level = parseInt(id);
  return !(isNaN(level) || level > 10 || level < 0);
};

export const isValidClassId = (id: string) => {
  const classId = parseInt(id);
  return !(isNaN(classId) || classId > 10 || classId < 0);
};

export const isValidTopicId = (id: string) => {
  const topicId = parseInt(id);
  return !(isNaN(topicId) || topicId < 0);
};

export const isValidQuizType = (type: string) => {
  return type === 'homework' || type === 'classwork';
};

export const areValidParamsForQuiz = (params: string[]) => {
  const levelId = params[0];
  const classId = params[1];
  const topicId = params[2];
  const quizType = params[3];

  if (
    levelId === undefined ||
    classId === undefined ||
    topicId === undefined ||
    quizType === undefined
  )
    return false;
  if (
    !isValidLevelId(levelId) ||
    !isValidClassId(classId) ||
    !isValidTopicId(topicId) ||
    !isValidQuizType(quizType)
  )
    return false;

  return true;
};
