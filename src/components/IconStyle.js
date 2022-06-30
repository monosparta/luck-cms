import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CancelIcon from "@mui/icons-material/Cancel";

export const CheckCircleIconStyle = () => {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CheckCircleIcon style={{ color: "green", padding: "0px 8px 0px 0px" }} />
      <h2>目前為使用中</h2>
    </div>
  );
};
export const AccessTimeFilledIconStyle = () => {
  return (
    <div
      style={{
        width: "80%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AccessTimeFilledIcon
        style={{ color: "grey", padding: "0px 8px 0px 0px" }}
      />
      <h2>目前為閒置中</h2>
    </div>
  );
};

export const CancelIconStyle = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CancelIcon style={{ color: "Red", padding: "0px 8px 0px 0px" }} />
      <h2>目前異常中</h2>
    </div>
  );
};
