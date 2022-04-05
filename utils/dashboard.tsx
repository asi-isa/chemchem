import Courses from "../comps/dashboard/Courses";
import Main from "../comps/dashboard/Main";

export type DashboardItem =
  | "Main"
  | "Courses"
  | "Schedule"
  | "Materials"
  | "Certificats"
  | "Messages"
  | "Settings";

export function getCurrentDashboardItem(item: DashboardItem) {
  if (item === "Main") return <Main />;
  if (item === "Courses") return <Courses />;
  if (item === "Schedule") return <div>Schedule</div>;
  if (item === "Materials") return <div>Materials</div>;
  if (item === "Certificats") return <div>Certificats</div>;
  if (item === "Messages") return <div>Messages</div>;
  if (item === "Settings") return <div>SSettings</div>;
}
