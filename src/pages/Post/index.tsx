import { Cover } from "@/components/Cover";
import { apiService } from "@/services/api";
import { formatRelativeDate } from "@/utils/format-relative-date";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";
import remarkGfm from "remark-gfm";
import { ExtraInfo, ExtraPostInfoContainer, Links, LinksContainer, PostContainer } from "./style";

interface Post {
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
  html_url: string
  title: string
}

export const Post = () => {
  const [post, setPost] = useState<Post>();
  const { issueNumber } = useParams();



  const loadPost = async () => {
    const response = await apiService.get(`/repos/jessicacastro/github-blog/issues/${issueNumber}`);

    setPost(response.data)
  }

  useEffect(() => {
    loadPost()
  }, [])



  return (
    <>
      {
        post && (
          <>
            <Cover isVertical>
              <LinksContainer>
                <Links to="/">
                  <FontAwesomeIcon icon={faChevronLeft} />
                  voltar
                </Links>

                <Links to={post.html_url} target="_blank">
                  ver no github
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Links>
              </LinksContainer>

              <h1>{post.title}</h1>

              <ExtraPostInfoContainer>
                <ExtraInfo>
                  <Link to={`https://github.com/${post.user.login}`} target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                    <span>{post.user.login}</span>
                  </Link>
                </ExtraInfo>

                <ExtraInfo>
                  <FontAwesomeIcon icon={faCalendarDay} />
                  <span>{formatRelativeDate(post.created_at)}</span>
                </ExtraInfo>

                <ExtraInfo>
                  <FontAwesomeIcon icon={faComment} />
                  <span>{post.comments} comentários</span>
                </ExtraInfo>
              </ExtraPostInfoContainer>
            </Cover>
            <PostContainer>
              <ReactMarkdown
                children={post.body}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        {...props}
                        children={String(children).replace(/\n$/, '')}
                        style={monokai}
                        language={match[1]}
                        PreTag="div"
                      />
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  }
                }} />
            </PostContainer>
          </>
        )
      }
    </>
  )
}