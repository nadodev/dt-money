import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from "phosphor-react";
import { SummuryCard, SummuryContainer } from "./style";

export function Summury(){
    return (
        <SummuryContainer>
                <SummuryCard>
                    <header>
                        <span>Entradas</span>
                        <ArrowCircleUp  size={32} color="#33CC95"/>
                    </header>
                    <strong>R$ + 1000,00</strong>
                </SummuryCard>
                <SummuryCard>
                    <header>
                        <span>Saidas</span>
                        <ArrowCircleDown  size={32} color="#f75a68"/>
                    </header>
                    <strong>R$ - 1000,00</strong>
                </SummuryCard>
                <SummuryCard variant="total">
                    <header>
                        <span>Total</span>
                        <CurrencyCircleDollar  size={32} color="#fff"/>
                    </header>
                    <strong>R$ 1000,00</strong>
                </SummuryCard>
        </SummuryContainer>
    )
}