export interface ITask {
  id: string;
  title: string;
  category: string;
  level: "low" | "high" | "normal";
}
