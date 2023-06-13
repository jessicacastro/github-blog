import { PostListContext } from "@/contexts/PostsContext";
import { formatRelativeDate } from '@/utils/format-relative-date';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import removeMarkdown from "remove-markdown";
import { useContextSelector } from 'use-context-selector';
import { BoxCard, CardContainer } from "./style";

export const Card = () => {
  const postList = useContextSelector(PostListContext, (context) => context.postList)

  return (
    <CardContainer>
      {
        postList?.items.map(post => (
          <BoxCard key={post.id} to={`post/${post.number}`}>
            <span>
              {formatRelativeDate(post.created_at)}
              <FontAwesomeIcon icon={faPen} />
            </span>

            <div>
              <h3>{post.title}</h3>
            </div>

            <p>
              {removeMarkdown(post.body)}
            </p>

          </BoxCard>
        ))
      }
    </CardContainer>
  )
}