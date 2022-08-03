import "./ProjectTile.css";

const ProjectTile = (props) => {
  console.log(props.imgUrl);
  return (
    <div className={"tileContainer"}>
      <h2 className={"tileTitle"}>
        <span className={'tileTitleTags'}>{`< `}</span>
        {props.title}
        <span className={'tileTitleTags'}>{` />`}</span>
      </h2>
      <a target={"_blank"} rel={"noreferrer"} href={props.url}>
        <div
          className={"tileImage"}
          style={{ backgroundImage: `url(${props.imgUrl})` }}
        />
      </a>
    </div>
  );
};

export default ProjectTile;
