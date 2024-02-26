import { Logo } from "../Logo";
import { HeaderButton, HeaderContainer, HeaderContent } from "./style";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo />
                <HeaderButton>
                    Nova transação
                </HeaderButton>
            </HeaderContent>    
        </HeaderContainer>
    );
}