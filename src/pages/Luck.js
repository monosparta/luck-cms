import React from "react";
import "./Luck.css";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LuckStatus, selectLuck } from "../redux/luckSlice";
import { useSelector, useDispatch } from "react-redux";
import Item from "../components/Lock";


const Luck = ({ state }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(LuckStatus());

  }, []);


  useSelector(selectLuck);
  // const lockList = useSelector((state => state.luckNo))
  const navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/Info");
  };

  return (
    <div id="Luck">
      <div className="status">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              width: 160,
              height: 164,
              borderRadius: "10%",
              borderColor: "#000000",
              border: "1px solid ",
            },
          }}
        >
          <Paper className="p" elevation={0} >
            <div className="cir"><CircleIcon sx={{ color: "#363F4E", height: "20px", width: "20px" }}></CircleIcon>
              使用中</div>
            <div className="cir"><CircleIcon sx={{ color: "#000000", height: "20px", width: "20px" }}></CircleIcon>
              可使用</div>
            <div className="cir"><CircleIcon sx={{ color: "#FF5A5A", height: "20px", width: "20px" }}></CircleIcon>
              異常&ensp; </div>
          </Paper>
        </Box>
      </div>
      <div className="luck__title" >置物櫃當前使用狀態</div>
      <div className="luck__toggle">
        {/* <div className="toggle-btn">
          <ToggleButton
            value="00"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            00
          </ToggleButton>
          <ToggleButton
            value="01"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            01
          </ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}

          ></ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}
          ></ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}
          ></ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}
          ></ToggleButton>
          <ToggleButton
            value="02"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",

            }}
            onClick={(e) => handleClick(e)}
          >
            02
          </ToggleButton>

          <ToggleButton
            value="03"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            03
          </ToggleButton>
          <ToggleButton
            value="04"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            04
          </ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}
          ></ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}
          ></ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}
          ></ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              border: "1px solid #E0E0E0",
              borderStyle: "dashed",
              borderWidth: "1px",
              borderRadius: "12%",
              borderColor: "#000000",
            }}
          ></ToggleButton>
          <ToggleButton
            value="05"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            05
          </ToggleButton>

          <ToggleButton
            value="06"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            06
          </ToggleButton>
          <ToggleButton
            value="07"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            07
          </ToggleButton>
          <ToggleButton
            value="08"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            08
          </ToggleButton>
          <ToggleButton
            value="09"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            09
          </ToggleButton>
          <ToggleButton
            value="10"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            10
          </ToggleButton>
          <ToggleButton
            value="11"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            11
          </ToggleButton>
          <ToggleButton
            value="12"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            12
          </ToggleButton>

          <ToggleButton
            value="13"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            13
          </ToggleButton>
          <ToggleButton
            value="14"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            14
          </ToggleButton>
          <ToggleButton
            value="15"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            15
          </ToggleButton>
          <ToggleButton
            value="16"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            16
          </ToggleButton>
          <ToggleButton
            value="17"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            17
          </ToggleButton>
          <ToggleButton
            value="18"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            18
          </ToggleButton>
          <ToggleButton
            value="19"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            19
          </ToggleButton>

          <ToggleButton
            value="20"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            20
          </ToggleButton>
          <ToggleButton
            value="21"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            21
          </ToggleButton>
          <ToggleButton
            value="22"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            22
          </ToggleButton>
          <ToggleButton
            value="23"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            23
          </ToggleButton>
          <ToggleButton
            value="24"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            24
          </ToggleButton>
          <ToggleButton
            value="25"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            25
          </ToggleButton>
          <ToggleButton
            value="26"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            26
          </ToggleButton>

          <ToggleButton
            value="27"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            27
          </ToggleButton>
          <ToggleButton
            value="28"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            28
          </ToggleButton>
          <ToggleButton
            value="29"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            29
          </ToggleButton>
          <ToggleButton
            value="30"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            30
          </ToggleButton>
          <ToggleButton
            value="31"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            31
          </ToggleButton>
          <ToggleButton
            value="32"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            32
          </ToggleButton>
          <ToggleButton
            value="33"
            className="btn"
            color="primary"
            style={{
              width: 100,
              height: 100,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
            onClick={(e) => handleClick(e)}
          >
            33
          </ToggleButton>
        </div> */}
      </div>
      <div style={{ width: 770 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
          <Item></Item>
        </Box>
      </div>
    </div>
  );
};

export default Luck;
