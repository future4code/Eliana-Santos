import React from "react";
import { useParams } from "react-router-dom";
import PostCardComments from "../../components/Post/PostCardComments";
import PostComments from "../../components/Post/PostComments";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequest from "../../hooks/useRequest";
import { PostListContainer } from "../FeedPage/styled";

const PostPage = () => {
  useProtectedPage()
  const params = useParams()
  const posts = useRequest([], `${BASE_URL}/posts/${params.id}/comments`)


  const cardPost = posts.map((post) => {
    return (
      <PostCardComments
        key={post.postId}
        data={post}   
      />
    )
  })

  return (
    <div>
      <PostListContainer>
        <PostComments/>
        {cardPost}
      </PostListContainer>
    </div>
  )

}
export default PostPage; 