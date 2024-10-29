import { useFeature } from "../../context/FeatureProvider";
import { FEATURE, FEATURE_NAME } from "../../context/type";
import * as Styled from "./index.styles";

function FeatureToggle() {
  const { curFeature, setFeature } = useFeature();

  const features = Object.values(FEATURE);

  return (
    <Styled.Ul>
      {features.map((feature) => (
        <Styled.Li
          key={feature}
          onClick={() => setFeature(feature)}
          $isActive={curFeature === feature}
        >
          {FEATURE_NAME[feature]}
        </Styled.Li>
      ))}
    </Styled.Ul>
  );
}

export default FeatureToggle;
