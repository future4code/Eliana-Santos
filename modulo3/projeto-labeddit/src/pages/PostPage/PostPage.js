import React from "react";
import PostCard from "../../components/Post/PostCard";
import PostComments from "../../components/Post/PostComments";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequest from "../../hooks/useRequest";
import { goToPost } from "../../router/coordinator";
import { PostListContainer } from "../FeedPage/styled";

const PostPage = () => {
    useProtectedPage()
    const posts = useRequest([], `${BASE_URL}/posts/:id/comments`)
   
    const onClickCard = (id) => {
        goToPost(id)
      }
  const post = posts.map((post) => {
    return (
      <PostCard
        key={post.post_id}
        data={post}
        onClick={() => onClickCard()}
      />
    )
  })
   
    return (
        <div>
            <PostListContainer>
                {post}
                <PostComments/>
            </PostListContainer>
        </div>
    )

}
export default PostPage; 