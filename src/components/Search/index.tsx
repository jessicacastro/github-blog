import { SearchContainer, TitleBar } from "./style";

export const Search = () => (
  <SearchContainer>
    <TitleBar>
      <strong>Publicações</strong>
      <span>6 publicações</span>
    </TitleBar>

    <form>
      <input type="text" placeholder="Buscar conteúdo" />
    </form>
  </SearchContainer>
)