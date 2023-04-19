import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryBlog } from "../../hooks/usePost";
import {
  StyledBlogBody,
  StyledBlogContextBody,
  StyledBlogContextHeader,
  StyledBlogRelateBlogsBody,
  StyledBlogTypesDiv,
  StyledTitle,
} from "./style";
import { StyledHeader } from "../HomePage/style";
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from "@mui/material";
import logo from "../../img/logo.jpg";
import Loading from "../HomePage/components/loading/Loading";

const BlogPage: FC = () => {
  const subPages = ["", "blogs", "aboutMe"];

  const history = useNavigate();

  const [value] = useState(0);

  const params = useParams();

  const { loading, error, _data, relatedPosts } = useQueryBlog(
    params?.id ? params?.id : ""
  );

  const toBlogTypePage = (id: string) => history(`/leoblogclient/blogs/${id}`);

  const getContext = () => {
    return loading ? (
      <Loading />
    ) : error ? (
      <>error</>
    ) : (
      <>
        <StyledBlogContextHeader>
          <h1>{_data.title}</h1>
          <span>{new Date(Number(_data.createAt)).toDateString()}</span>
        </StyledBlogContextHeader>
        <StyledBlogTypesDiv>
          <p>Types:</p>
          {_data.types?.map((item) => {
            return (
              <span onClick={() => toBlogTypePage(item.id)}>{item.type}</span>
            );
          })}
        </StyledBlogTypesDiv>
        <StyledBlogContextBody
          dangerouslySetInnerHTML={{
            __html: _data.context ? _data.context : "",
          }}
        ></StyledBlogContextBody>
        <StyledBlogRelateBlogsBody>
          <h4>Related Blogs</h4>
          {relatedPosts.map((relatedPost) => (
            <p>
              <a onClick={() => history(`/leoblogclient/blog/${relatedPost.id}`)}>
                {relatedPost.title}
              </a>
            </p>
          ))}
        </StyledBlogRelateBlogsBody>
        <></>
      </>
    );
  };

  return (
    <StyledBlogBody>
      <StyledHeader>
        <img src={logo} />
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => history(`/leoblogclient/${subPages[newValue]}`)}
        >
          <BottomNavigationAction label="Home" />
          <BottomNavigationAction label="Blogs" />
          <BottomNavigationAction label="About me" />
        </BottomNavigation>
      </StyledHeader>
      {getContext()}
      <Button
        variant="outlined"
        onClick={() => history(`/leoblogclient/updateBlog/${params?.id ? params?.id : ""}`)}
      >
        Update
      </Button>
    </StyledBlogBody>
  );
};
export default BlogPage;
