import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
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
      <PostCard
        key={post.postId}
        data={post}
      />
    )
  }) 
    
    return (
        <div>
            <PostListContainer>
               {cardPost}
                <PostComments />
            </PostListContainer> 
        </div>
    )

}
export default PostPage; 