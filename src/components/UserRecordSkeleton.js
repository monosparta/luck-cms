import React from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const UserRecordSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height={64}
        sx={{ margin: "0 0 10px 0", borderRadius: "8px" }}
      />
      <Skeleton
        variant="circular"
        width={10}
        height={10}
        sx={{ margin: "5px" }}
      />
      <Skeleton
        variant="circular"
        width={10}
        height={10}
        sx={{ margin: "5px" }}
      />
      <Skeleton
        variant="circular"
        width={10}
        height={10}
        sx={{ margin: "5px" }}
      />
    </Box>
  );
};

export default UserRecordSkeleton;
