import { Header } from "../../components/Header";
import { Summury } from "../../components/Summury";
import { PriceHighlight, TransactionContainer, TransactionTable } from "./style";

export function Transaction()
{
    return (
      <>
      <Header/>
      <Summury/>
      <TransactionContainer>
       <TransactionTable>
          <tbody>
            <tr>
              <td width="50%"> Desenvolvimento de website</td>
              <td><PriceHighlight type="deposit"> R$ 12.000,00</PriceHighlight></td>
              <td>Vendas</td>
              <td > 20/02/2021</td>
            </tr>
            <tr>
              <td width="50%"> Aluguel</td>
              <td><PriceHighlight type="withdraw"> R$ - 12.000,00</PriceHighlight></td>
              <td>Vendas</td>
              <td> 17/02/2021</td>
            </tr>
          </tbody>
        </TransactionTable>
       </TransactionContainer>
      </>

    );
}