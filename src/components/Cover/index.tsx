
import { CoverContainer } from "./style";

interface CoverProps {
  children: React.ReactNode;
  isVertical?: boolean;
}


export const Cover = ({ children, isVertical }: CoverProps) => {
  return (
    <CoverContainer isVertical={isVertical}>
      {children}
    </CoverContainer>
  )
}