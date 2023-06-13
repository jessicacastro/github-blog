import { Card } from "@/components/Card";
import { Cover } from "@/components/Cover";
import { Search } from "@/components/Search";
import { apiService } from "@/services/api";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { BloggerContainer, BloggerInfoContainer, ExtraBloggerInfoContainer, ExtraInfo } from "./style";

interface Blogger {
  login: string
  avatar_url: string
  name: string
  company: string
  followers: number
  bio: string
  html_url: string
}

export const Home = () => {
  const [blogger, setBlogger] = useState<Blogger>()

  const loadBlogger = async () => {
    const response = await apiService.get('/users/jessicacastro');

    setBlogger(response.data)
  }

  useEffect(() => {
    loadBlogger()
  }, [])

  return (
    <>
      <Cover>
        <img src={blogger?.avatar_url} alt={blogger?.name} />

        <BloggerContainer>
          <BloggerInfoContainer>
            <h2>{blogger?.name}</h2>
            <a href={blogger?.html_url}>
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </BloggerInfoContainer>

          <p>
            {blogger?.bio}
          </p>

          <ExtraBloggerInfoContainer>
            <ExtraInfo>
              <FontAwesomeIcon icon={faGithub} />
              <span>{blogger?.login}</span>
            </ExtraInfo>

            <ExtraInfo>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{blogger?.company}</span>
            </ExtraInfo>

            <ExtraInfo>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{blogger?.followers} seguidores</span>
            </ExtraInfo>
          </ExtraBloggerInfoContainer>
        </BloggerContainer>
      </Cover>
      <Search />
      <Card />
    </>
  )
}