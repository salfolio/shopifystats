import Widget from "./Widget/Widget";
import styles from "./Widget/Widget.module.css";

function WidgetContainer(props) {
  return (
    <div className={styles.widgets}>
      <Widget
        featureName={"DANCEABILITY"}
        featureValue={props.featureValue[0]}
        progressBarColor={"#CA6A82"}
      />
      <Widget
        featureName={"ENERGY"}
        featureValue={props.featureValue[1]}
        progressBarColor={"#F1C837"}
      />
      <Widget
        featureName={"VALENCE"}
        featureValue={props.featureValue[2]}
        progressBarColor={"#57D46B"}
      />
    </div>
  );
}

export default WidgetContainer;
