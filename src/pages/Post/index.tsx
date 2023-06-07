import { Cover } from "@/components/Cover";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";
import remarkGfm from "remark-gfm";
import { ExtraInfo, ExtraPostInfoContainer, Links, LinksContainer, PostContainer } from "./style";

export const Post = () => {
  const { id } = useParams();

  const postMarkdown = "**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\r\n\r\n**Dynamic typing**\r\nJavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\r\n\r\n```javascript\r\nlet foo = 42;   // foo is now a number\r\nfoo = ‘bar’;    // foo is now a string\r\nfoo = true;     // foo is now a boolean\r\n```"

  return (
    <>
      <Cover isVertical>
        <LinksContainer>
          <Links to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            voltar
          </Links>

          <Links to="https://github.com/jessicacastro/" target="_blank">
            ver no github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Links>
        </LinksContainer>

        <h1>JavaScript data types and data structures</h1>

        <ExtraPostInfoContainer>
          <ExtraInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>jessicacastro</span>
          </ExtraInfo>

          <ExtraInfo>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </ExtraInfo>

          <ExtraInfo>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </ExtraInfo>
        </ExtraPostInfoContainer>
      </Cover>

      <PostContainer>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {postMarkdown}
        </ReactMarkdown>
      </PostContainer>
    </>
  )
}