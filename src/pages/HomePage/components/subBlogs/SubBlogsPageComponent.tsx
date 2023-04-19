import { Box, Button, Pagination } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryBlogs } from "../../../../hooks/usePost";
import { Post } from "../../../../types/postType";
import HomePage from "../../HomePage";
import SideBarComponent from "../sideBar/SideBarComponent";
import {
  StyledBlogAnimation,
  StyledBlogAnimationText,
  StyledBlogBlock,
  StyledBlogContainer,
  StyledBlogMain,
  StyledSideBar,
} from "./style";
import Loading from "../loading/Loading";
import { EDIT_STATE } from "../../../../common/const";

const SubBlogsComponent: FC = () => {
  const PAGE_SIZE = 10;

  const params = useParams();

  const [page, setPage] = useState(1);

  const { loading, _data, total } = useQueryBlogs(
    PAGE_SIZE,
    page,
    params?.typeId ? params?.typeId : ""
  );

  const history = useNavigate();

  const ToSingle = (blogId: string) => history(`/leoblogclient/blog/${blogId}`);

  const ToBlogAddPage = () => history(`/leoblogclient/addBlog`);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const getContext = () => {
    return loading ? (
      <Loading />
    ) : (
      <StyledBlogContainer>
        <StyledBlogMain>
          {EDIT_STATE ? (
            <Button variant="outlined" onClick={() => ToBlogAddPage()}>
              Add New Blog
            </Button>
          ) : (
            <></>
          )}
          {_data &&
            _data.map((data: Post, index: number) => (
              <StyledBlogBlock key={index}>
                <StyledBlogAnimation>
                  <StyledBlogAnimationText
                    onClick={() => ToSingle(data.id)}
                    title={data.title}
                  >
                    {data.title}
                  </StyledBlogAnimationText>
                  <span>{new Date(Number(data.createAt)).toDateString()}</span>
                </StyledBlogAnimation>
              </StyledBlogBlock>
            ))}
          <Pagination
            count={Math.ceil(total / PAGE_SIZE)}
            page={page}
            onChange={handleChange}
          />
        </StyledBlogMain>
        <StyledSideBar>
          <SideBarComponent />
        </StyledSideBar>
      </StyledBlogContainer>
    );
  };

  return (
    <>
      <HomePage state={1} context={getContext()} />
    </>
  );
};
export default SubBlogsComponent;
