import React from "react";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { PostListContainer,  } from "./styled";
import useRequest from '../../hooks/useRequest'
import { goToPost } from "../../router/coordinator";
import PostCard from "../../components/Post/PostCard";
import PostCreate from "../../components/Post/PostCreate";

const FeedPage = () =>{
    useProtectedPage()
    const history = useHistory()
    const posts = useRequest([], `${BASE_URL}/posts`)
  
    const onClickCard = (id) => {
      goToPost(history, id)
    }
  
    const feedCards = posts.map((post) => {
      return (
        <PostCard
          key={post.post_id}
          title={post.title}
          onClick={() => onClickCard()}
        />
      )
    })
  
    return (
      <PostListContainer>
          <PostCreate/>
        {feedCards/* .length > 0 ? recipeCards : <Loading /> */} 
       
      </PostListContainer>
    )
  }
export default FeedPage; 