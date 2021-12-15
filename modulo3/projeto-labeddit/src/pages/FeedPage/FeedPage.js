import React from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { PostListContainer, } from "./styled";
import useRequest from '../../hooks/useRequest'
import PostCard from "../../components/Post/PostCard";
import PostCreate from "../../components/Post/PostCreate";
import Loading from "../../components/Loading/Loading";

const FeedPage = () => {
  useProtectedPage()
 
  const posts = useRequest([], `${BASE_URL}/posts`)


  const feedCards = posts.map((post) => {
    return (
      <PostCard
        key={post.post_id}
        data={post}
      />
    )
  })

  return (
    <PostListContainer>
      <PostCreate />
      {feedCards.length > 0 ? feedCards : <Loading /> }

    </PostListContainer>
  )
}
export default FeedPage; 