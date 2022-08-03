import "./SoftSkills.css";
import Card from "../UI/Card";

const SoftSkills = () => {
  return (
    <Card title={"Soft Skills"}>
      <section className={"softSkillContainer"}>
        <ul className={"listContainer"}>
          <li className={"listItem"}>Strong Communication</li>
          <li className={"listItem"}>Innovative Problem Solving</li>
          <li className={"listItem"}>Adaptable to New Technologies</li>
          <li className={"listItem"}>Dedicated Team Worker</li>
        </ul>
        <ul className={"listContainer"}>
          <li className={"listItem"}>Task Prioritization</li>
          <li className={"listItem"}>Self-driven</li>
          <li className={"listItem"}>Feedback Receptive</li>
          <li className={"listItem"}>Collaborative Approach</li>
        </ul>
      </section>
    </Card>
  );
};

export default SoftSkills;
