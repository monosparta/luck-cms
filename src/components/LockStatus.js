import React from "react";

import { Box, Paper } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";

const LockStatus = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          width: 128,
          height: 176,
          borderRadius: "10%",
          borderColor: "#000000",
          border: "1px solid ",
        },
      }}
    >
      <Paper className="lockStatusPaper" elevation={0}>
        <div className="lockCirclePaper">
          <LockOpenIcon
            sx={{
              color: "#363F4E",
              height: "16px",
              width: "16px",
            }}
          ></LockOpenIcon>
          開啟中
        </div>
        <div className="lockCirclePaper">
          <LockIcon
            sx={{
              color: "#363F4E",
              height: "16px",
              width: "16px",
            }}
          ></LockIcon>
          關閉中
        </div>
        <div className="lockCirclePaper">
          <CircleIcon
            sx={{
              color: "#363F4E",
              height: "16px",
              width: "16px",
            }}
          ></CircleIcon>
          使用中
        </div>
        <div className="lockCirclePaper">
          <CircleIcon
            sx={{
              color: "#C4C4C4",
              borderRadius: "50%",
              height: "16px",
              width: "16px",
            }}
          ></CircleIcon>
          可使用
        </div>
        <div className="lockCirclePaper">
          <CircleIcon
            sx={{
              color: "#FF5A5A",
              height: "16px",
              width: "16px",
            }}
          ></CircleIcon>
          異常&ensp;{" "}
        </div>
      </Paper>
    </Box>
  );
};

export default LockStatus;

// const Available = () => {
//   return (
//     <div
//       style={{
//         background: "#FFFFFF",
//         color: "#363F4E",
//         border: "1px solid #000",
//         cursor: "pointer",
//       }}
//     ></div>
//   );
// };

// const unAvailable = () => {
//   return (
//     <div
//       style={{
//         background: "#FF5A5A",
//         color: "#FFFFFF",
//         border: "1px solid #000",
//         cursor: "pointer",
//       }}
//     ></div>
//   );
// };

// const Block = () => {
//   return (
//     <div
//       style={{
//         background: "#FFFFFF",
//         border: "1px dashed",
//       }}
//     ></div>
//   );
// };

// const Locked = () => {
//   return (
//     <div
//       style={{
//         background: "#FFFFFF",
//         color: "#363F4E",
//         border: "1px solid #000",
//         cursor: "pointer",
//       }}
//     >
//       <LockIcon
//         sx={{
//           position: "absolute",
//           top: "5px",
//           right: "5px",
//           height: "16px",
//           width: "16px",
//         }}
//       />
//     </div>
//   );
// };

// const unLocked = () => {
//   return (
//     <div
//       style={{
//         background: "#FFFFFF",
//         color: "#363F4E",
//         border: "1px solid #000",
//       }}
//     >
//       <LockOpenIcon
//         sx={{
//           position: "absolute",
//           top: "5px",
//           right: "5px",
//           height: "16px",
//           width: "16px",
//         }}
//       />
//     </div>
//   );
// };
