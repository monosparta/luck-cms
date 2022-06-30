import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./MemberList.css";
import MemberDialog from "../components/MemberDialog";
import MemberListDataGrid from "../components/MemberListDataGrid";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAdmin,
  getAdminList,
  deleteAdmin,
  clearState,
} from "../redux/adminSlice";
import MemberOption from "../components/MemberOption";

const MemberList = () => {
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [checkOpen, setCheckOpen] = React.useState(false);
  const [checkAction, setCheckAction] = React.useState("");
  const [alertText, setAlertText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = React.useState({});

  const dispatch = useDispatch();

  const { adminList, isFetching, isError, isSuccess } =
    useSelector(selectAdmin);

  const handleModify = () => {
    setCheckOpen(false);
    setAlertOpen(true);
    setTimeout(() => {
      setAlertOpen(false);
    }, 3000);
  };

  useEffect(() => {
    dispatch(getAdminList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isError) {
      dispatch(clearState());
    }
    if (isFetching) {
      dispatch(clearState());
    }
    if (isSuccess) {
      setRows(adminList);
      dispatch(clearState());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess]);

  const columns = [
    {
      field: "name",
      headerName: "使用者名稱",
      flex: 1,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: "mail",
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
          <MemberOption
            setAlertOpen={setAlertOpen}
            setCheckOpen={setCheckOpen}
            setCheckAction={setCheckAction}
          />
        );
      },
    },
  ];
  return (
    <div id="memberList">
      <MemberDialog
        setCheckOpen={setCheckOpen}
        checkOpen={checkOpen}
        handleModify={handleModify}
        checkAction={checkAction}
        setAlertText={setAlertText}
        alertText={alertText}
        alertOpen={alertOpen}
        open={open}
        setOpen={setOpen}
        setCheckAction={setCheckAction}
      />
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
          <MemberListDataGrid adminList={rows} columns={columns} />
        </Box>
      </div>
    </div>
  );
};

export default MemberList;
