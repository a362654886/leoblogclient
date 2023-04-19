import {
  Button,
  Checkbox,
  FormControl,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddPost, useQueryPostTypes } from "../../hooks/usePost";
import { PostType } from "../../types/postType";
import FullTextEditor from "./components/FullTextEditor/FullTextEditor";
import { FullTextEditDiv, StyledBlogAddBody } from "./style";

const BlogAddPage: FC = () => {
  const history = useNavigate();

  const [html, setHtml] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [types, setTypes] = useState<string[]>([]);

  const { loading: postTypesLoading, _data: postTypesData } =
    useQueryPostTypes();

  const { addPostFunction, loading } = useAddPost();

  const addNewBlog = () => {
    const typeIds = types.map(
      (type) => postTypesData.find((e: PostType) => e.type === type).id
    );
    addPostFunction({
      variables: { title: title, context: html, types: typeIds },
    })
      .then((r) => {
        history(`/blogs/null`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading ? (
        <p>Loading</p>
      ) : (
        <StyledBlogAddBody>
          <h2>addPage</h2>
          <h3>Title:</h3>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{ "aria-label": "Without label" }}
            onChange={(v) => setTitle(v.target.value)}
          />
          <h3>Types:</h3>
          <FormControl sx={{ m: 0, width: 300, mt: 3 }}>
            {!postTypesLoading && (
              <Select
                multiple
                displayEmpty
                value={types}
                onChange={(v) =>
                  setTypes(
                    typeof v.target.value == "string"
                      ? v.target.value.split(",")
                      : v.target.value
                  )
                }
                input={<OutlinedInput />}
                renderValue={(selected) => selected.join(", ")}
                inputProps={{ "aria-label": "Without label" }}
              >
                {postTypesData.map((postType: PostType) => (
                  <MenuItem key={postType.id} value={postType.type}>
                    <Checkbox checked={types.indexOf(postType.type) > -1} />
                    <ListItemText primary={postType.type} />
                  </MenuItem>
                ))}
              </Select>
            )}
          </FormControl>
          <h3>Context:</h3>
          <FullTextEditDiv>
            <FullTextEditor
              html={html}
              setFullText={(e) => {
                setHtml(e);
              }}
            />
          </FullTextEditDiv>
          <Button onClick={() => addNewBlog()} variant="contained">
            Submit
          </Button>
        </StyledBlogAddBody>
      )}
    </>
  );
};
export default BlogAddPage;
