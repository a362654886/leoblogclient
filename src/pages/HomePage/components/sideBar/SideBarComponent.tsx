import { Box, Button, Modal, TextField } from "@mui/material";
import React from "react";
import { FC, useState } from "react";
import { useAddPostType, useQueryPostTypes } from "../../../../hooks/usePost";
import { PostType } from "../../../../types/postType";
import { StyledTypeHeader, StyledTypeSpan, StyledTypeSpanDiv } from "./style";
import { EDIT_STATE } from "../../../../common/const";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "inline",
  backgroundColor: "white",
};

const SideBarComponent: FC = () => {
  const history = useNavigate();

  const { _data } = useQueryPostTypes();

  const [openNewType, setOpenNewType] = useState(false);
  const [newTypeValue, setNewTypeValue] = useState("");

  const { addPostTypeFunction } = useAddPostType();

  const ToPostType = (blogId: string) => history(`/leoblogclient/blogs/${blogId}`);

  const submitNewType = () => {
    addPostTypeFunction({
      variables: { type: newTypeValue },
    })
      .then((r) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <StyledTypeHeader>
        <h3>Types</h3>
        {EDIT_STATE ? (
          <Button variant="outlined" onClick={() => setOpenNewType(true)}>
            Add New Type
          </Button>
        ) : (
          <></>
        )}
      </StyledTypeHeader>
      <StyledTypeSpanDiv>
        {_data &&
          _data.map((data: PostType, index: number) => (
            <StyledTypeSpan key={index} onClick={() => ToPostType(data.id)}>
              {data.type}
            </StyledTypeSpan>
          ))}
      </StyledTypeSpanDiv>
      <Modal
        open={openNewType}
        onClose={() => setOpenNewType(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="div" sx={style}>
          <div>
            <TextField
              id="outlined-basic"
              label="New Type"
              variant="outlined"
              onChange={(v) => setNewTypeValue(v.target.value)}
            />
          </div>
          <br />
          <Button onClick={() => submitNewType()} variant="contained">
            Submit
          </Button>
        </Box>
      </Modal>
    </>
  );
};
export default SideBarComponent;
