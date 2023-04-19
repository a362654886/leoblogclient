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
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddPost,
  useQueryBlog,
  useQueryPostTypes,
  useUpdatePost,
} from "../../hooks/usePost";
import { PostType } from "../../types/postType";
import FullTextEditor from "./components/FullTextEditor/FullTextEditor";
import { FullTextEditDiv, StyledBlogAddBody } from "./style";

const BlogUpdatePage: FC = () => {
  const history = useNavigate();

  const params = useParams();

  const [html, setHtml] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [types, setTypes] = useState<string[]>([]);

  const { loading: postTypesLoading, _data: postTypesData } =
    useQueryPostTypes();

  const {
    loading: postGetLoading,
    error,
    _data: postData,
  } = useQueryBlog(params?.id ? params?.id : "");

  const { updatePostFunction, loading } = useUpdatePost();

  const updateBlog = () => {
    const typeIds = types.map(
      (type) => postTypesData.find((e: PostType) => e.type === type).id
    );
    updatePostFunction({
      variables: {
        id: params?.id ? params?.id : "",
        types: typeIds,
        title: title,
        context: html,
      },
    })
      .then((r) => {
        history(`/leoblogclient/blogs/null`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (!postGetLoading) {
      setHtml(postData.context);
      setTitle(postData.title);
      const types = postData.types
        ? postData.types.map((type) => type.type)
        : [];
      setTypes(types);
    }
  }, [postGetLoading]);

  return (
    <>
      {postTypesLoading || postGetLoading ? (
        <p>Loading</p>
      ) : (
        <StyledBlogAddBody>
          <h2>updatePage</h2>
          <h3>Title:</h3>
          <TextField
            id="outlined-basic"
            variant="outlined"
            inputProps={{ "aria-label": "Without label" }}
            value={title}
            onChange={(v) => setTitle(v.target.value)}
          />
          <h3>Types:</h3>
          <FormControl sx={{ m: 0, width: 300, mt: 3 }}>
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
          <Button onClick={() => updateBlog()} variant="contained">
            Update
          </Button>
        </StyledBlogAddBody>
      )}
    </>
  );
};
export default BlogUpdatePage;
