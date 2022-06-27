import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Collapse from "@mui/material/Collapse";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";
import "./MemberList.css";
import MemberDialog from "../components/MemberDialog";

const MemberList = () => {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [checkOpen, setCheckOpen] = React.useState(false);
  const [checkAction, setCheckAction] = React.useState("");
  const [alertText, setAlertText] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const HandleModtify = () => {
    setCheckOpen(false);
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 3000);
  };
  const columns = [
    {
      field: "firstName",
      headerName: "使用者名稱",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "lastName",
      headerName: "信箱",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "age",
      headerName: "身份",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "button",
      headerName: "",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
      renderCell: () => {
        return (
          <div className="memberOption">
            <Button
              onClick={() => {
                setAlertOpen(false);
                handleCheckOpen();
                setCheckAction("edit");
              }}
              style={{
                width: 108,
                height: 36,
                background: "#2F384F",
                color: "#fff",
                boxShadow: "none",
                borderRadius: "10px",
                fontSize: 14,
                margin: 5,
              }}
            >
              修改密碼
            </Button>

            <img
              onClick={() => {
                setAlertOpen(false);
                handleCheckOpen();
                setCheckAction("delete");
              }}
              src={require("../assets/delete.png")}
              alt=""
              style={{ height: "24px", width: "24px", cursor: "pointer" }}
            ></img>
          </div>
        );
      },
    },
  ];
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: "28" },
    { id: 2, lastName: "Lannister", firstName: "Cersei" },
    { id: 3, lastName: "Lannister", firstName: "Jaime" },
    { id: 4, lastName: "Stark", firstName: "Arya" },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
    { id: 6, lastName: "Melisandre", firstName: null },
    { id: 7, lastName: "Clifford", firstName: "Ferrara" },
    { id: 8, lastName: "Frances", firstName: "Rossini" },
    { id: 9, lastName: "Roxie", firstName: "Harvey" },
  ];
  const handleCheckOpen = () => {
    setCheckOpen(true);
  };
  const handleCheckClose = () => {
    setCheckOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="memberList">
      <MemberDialog
        handleClose={handleClose}
        setCheckOpen={setCheckOpen}
        checkOpen={checkOpen}
        handleCheckClose={handleCheckClose}
        HandleModtify={HandleModtify}
        checkAction={checkAction}
        setAlertText={setAlertText}
        alertText={alertText}
        alertOpen={alertOpen}
        open={open}
        setOpen={setOpen}
        setCheckAction={setCheckAction}
      />
      <Stack
        className="success"
        sx={{
          width: "478px",
          height: "52px",
          top: "107px",
          position: "absolute",
          right: "24px",
        }}
        spacing={2}
      >
        <Collapse in={alertOpen}>
          <Alert
            icon={<CheckIcon fontSize="inherit" />}
            variant="filled"
            severity="info"
          >
            {alertText}成功
          </Alert>
        </Collapse>
      </Stack>
      <div className="memberHeader">
        <p>管理者列表</p>
        <div>
          <Link to="/register">
            <Button
              variant="contained"
              style={{
                width: 124,
                height: 44,
                border: "1px solid #2F384F",
                background: "transparent",
                color: "#2F384F",
                boxShadow: "none",
                borderRadius: "10px",
                fontSize: 16,
                textAlign: "left",
                textDecoration: "none",
              }}
            >
              新增管理者
            </Button>
          </Link>
        </div>
      </div>
      <div className="memberList">
        <Box sx={{ height: 450, width: "100%" }}>
          <DataGrid
            sx={{ border: 0 }}
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[3]}
            hideFooter
          />
        </Box>
      </div>
    </div>
  );
};

export default MemberList;
