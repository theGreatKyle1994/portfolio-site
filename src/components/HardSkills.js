import "./HardSkills.css";
import "../UI/BottomBorder.css";
import Card from "../UI/Card";

const HardSkills = (props) => {
  return (
    <Card title={"Hard Skills"}>
      <ul className={"skillContainer"}>
        <div className={"skillBox"}>
          <span className={"iconBox"}>{props.icons.tagHtml}</span>
          <li className={"skillList"}>HTML5</li>
        </div>
        <div className={"skillBox"}>
          <span className={"iconBox"}>{props.icons.tagCss}</span>
          <li className={"skillList"}>CSS3</li>
        </div>
        <div className={"skillBox"}>
          <span className={"iconBox"}>{props.icons.tagJavaScript}</span>
          <li className={"skillList"}>{"JavaScript(ES6)"}</li>
        </div>
        <div className={"skillBox"}>
          <span className={"iconBox"}>{props.icons.tagTypeScript}</span>
          <li className={"skillList"}>TypeScript</li>
        </div>
        <div className={"skillBox"}>
          <span className={"iconBox"}>{props.icons.tagReact}</span>
          <li className={"skillList"}>React</li>
        </div>
        <div className={"skillBox"}>
          <span className={"iconBox"}>{props.icons.tagTerminal}</span>
          <li className={"skillList"}>Terminal</li>
        </div>
      </ul>
    </Card>
  );
};

export default HardSkills;
