
export type TQuiz = {
    moduleId: string;
    question: string;
    description: string;
    options: string[];
    correctOptions: string;
  };
  
  export type TInitialState = {
    quiz: TQuiz[];
  };
  
  export type TAction = {
    payload: TQuiz;
  };
  