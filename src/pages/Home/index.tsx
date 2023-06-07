import { Card } from "@/components/Card";
import { Cover } from "@/components/Cover";
import { Search } from "@/components/Search";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BloggerContainer, BloggerInfoContainer, ExtraBloggerInfoContainer, ExtraInfo } from "./style";

export const Home = () => (
  <>
    <Cover>
      <img src="https://github.com/jessicacastro.png" alt="Jessica Castro" />

      <BloggerContainer>
        <BloggerInfoContainer>
          <h2>Jessica Castro</h2>
          <a href="https://github.com/jessicacastro">
            github
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </BloggerInfoContainer>

        <p>
          Hey there! I'm s Senior Software Engineer (Full Stack Developer) at Play9. I'm 27 years old, I like technology, games and futsal.
        </p>

        <ExtraBloggerInfoContainer>
          <ExtraInfo>
            <FontAwesomeIcon icon={faGithub} />
            <span>jessicacastro</span>
          </ExtraInfo>

          <ExtraInfo>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Play9</span>
          </ExtraInfo>

          <ExtraInfo>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </ExtraInfo>
        </ExtraBloggerInfoContainer>
      </BloggerContainer>
    </Cover>
    <Search />
    <Card />
  </>
)