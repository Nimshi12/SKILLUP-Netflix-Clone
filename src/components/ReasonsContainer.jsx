import { reasons } from "../__data__/reasons";
import ReasonsItem from "./ReasonsItem";

const ReasonsContainer = () => {
  return (
    <div className="reasons">
      <h2>More Reasons to Join</h2>
      <div className="reasons-container">
        {
          reasons.map((reason) => {
            return <ReasonsItem key={1} reason={reason} />
          })
        }
      </div>
    </div>
  );
};

export default ReasonsContainer;
