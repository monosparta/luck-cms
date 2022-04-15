import React from "react";
import "./Luck.css";
import ToggleButton from "@mui/material/ToggleButton";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CircleIcon from '@mui/icons-material/Circle';

const Luck = () => {
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
            <div className="cir"><CircleIcon sx={{ color: "#363F4E", height:"20px",width:"20px"}}></CircleIcon>
            使用中</div>
            <div className="cir"><CircleIcon sx={{ color: "#000000",height:"20px",width:"20px"}}></CircleIcon>
            可使用</div>
            <div className="cir"><CircleIcon sx={{ color: "#FF5A5A", height:"20px",width:"20px"}}></CircleIcon>
            異常&ensp; </div>
            </Paper>
        </Box>
      </div>
      <div className="luck__title" >置物櫃當前使用狀態</div>
      <div className="luck__toggle">
        <div className="toggle-btn">
          <ToggleButton
            value="00"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            00
          </ToggleButton>
          <ToggleButton
            value="01"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            01
          </ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
              
            }}
          >
            02
          </ToggleButton>

          <ToggleButton
            value="03"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            03
          </ToggleButton>
          <ToggleButton
            value="04"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            04
          </ToggleButton>
          <ToggleButton
            className="btn"
            disabled="True"
            style={{
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
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
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            05
          </ToggleButton>

          <ToggleButton
            value="06"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            06
          </ToggleButton>
          <ToggleButton
            value="07"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            07
          </ToggleButton>
          <ToggleButton
            value="08"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            08
          </ToggleButton>
          <ToggleButton
            value="09"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            09
          </ToggleButton>
          <ToggleButton
            value="10"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            10
          </ToggleButton>
          <ToggleButton
            value="11"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            11
          </ToggleButton>
          <ToggleButton
            value="12"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            12
          </ToggleButton>

          <ToggleButton
            value="13"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            13
          </ToggleButton>
          <ToggleButton
            value="14"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            14
          </ToggleButton>
          <ToggleButton
            value="15"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            15
          </ToggleButton>
          <ToggleButton
            value="16"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            16
          </ToggleButton>
          <ToggleButton
            value="17"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            17
          </ToggleButton>
          <ToggleButton
            value="18"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            18
          </ToggleButton>
          <ToggleButton
            value="19"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            19
          </ToggleButton>

          <ToggleButton
            value="20"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            20
          </ToggleButton>
          <ToggleButton
            value="21"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            21
          </ToggleButton>
          <ToggleButton
            value="22"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            22
          </ToggleButton>
          <ToggleButton
            value="23"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            23
          </ToggleButton>
          <ToggleButton
            value="24"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            24
          </ToggleButton>
          <ToggleButton
            value="25"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            25
          </ToggleButton>
          <ToggleButton
            value="26"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            26
          </ToggleButton>

          <ToggleButton
            value="27"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            27
          </ToggleButton>
          <ToggleButton
            value="28"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            28
          </ToggleButton>
          <ToggleButton
            value="29"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            29
          </ToggleButton>
          <ToggleButton
            value="30"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            30
          </ToggleButton>
          <ToggleButton
            value="31"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            31
          </ToggleButton>
          <ToggleButton
            value="32"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            32
          </ToggleButton>
          <ToggleButton
            value="33"
            className="btn"
            color="primary"
            style={{
              width: 90,
              height: 90,
              background: "#FFF",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "12%",
              borderColor: "#000000",
              fontSize: "25px",
            }}
          >
            33
          </ToggleButton>
        </div>
      </div>
    </div>
  );
};

export default Luck;
