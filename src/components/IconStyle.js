import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CancelIcon from "@mui/icons-material/Cancel";
const divStyle = {
  width: "100%",
  marginLeft: "15%",
  display: "flex",
  alignItems: "center",
};
export const CheckCircleIconStyle = () => {
  return (
    <div style={divStyle}>
      <CheckCircleIcon style={{ color: "green", padding: "0px 8px 0px 0px" }} />
      <h2>目前為使用中</h2>
    </div>
  );
};
export const AccessTimeFilledIconStyle = () => {
  return (
    <div style={divStyle}>
      <AccessTimeFilledIcon
        style={{ color: "grey", padding: "0px 8px 0px 0px" }}
      />
      <h2>目前為閒置中</h2>
    </div>
  );
};

export const CancelIconStyle = () => {
  return (
    <div style={divStyle}>
      <CancelIcon style={{ color: "Red", padding: "0px 8px 0px 0px" }} />
      <h2>目前異常中</h2>
    </div>
  );
};
