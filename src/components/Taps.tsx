import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { QuizCard } from "./QuizCard";

export function TabsDefault() {
  const data = [
    {
      label: "Quiz List",
      value: "quiz-list",
      desc: <QuizCard >Hello pri3bi</QuizCard>,
    },
    {
      label: "Add Quiz",
      value: "add-quiz",
      desc: <QuizCard >Add Quiz</QuizCard>,
    },
  ];

  return (
    <Tabs value="quiz-list">
      <TabsHeader placeholder={""}>
        {data.map(({ label, value }) => (
          <Tab placeholder={""} key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody placeholder={""}>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
