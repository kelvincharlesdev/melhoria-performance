<div align="center">
  <img src="https://git.raroacademy.com.br/uploads/-/system/appearance/logo/1/raroacademy.jpeg" alt="logo" width="70" height="auto" />
  <h1>Exercício Avaliativo Melhora de Performance</h1>
</div>

## 💡 **Proposta**

Exercício avaliativo da Raro Academy.  
Analisar todo projeto que contem 6 páginas  e identificar e efetuar possíveis melhorias de desempenho

## ✍️ **Processo**

> ### Page 01: CampoDeBusca

    Notei que sempre que o usuário queria buscar algum nome pelo filtro, a página  re renderizava a cada letra que ele digitava, sendo assim usei o Debounce com um timeout de 1s, Isso faz com que a página so faça a busca quando o usuário parar de digitar por 1s, enquanto o usuário nao para de digitar a função de clearTimeout dentro do Debounce tem o papel de ir limpando as chamadas ate que o usuário pare de digitar. Fazendo uma única busca e assim melhorando o desempenho da página !

> ### Page 02: Chat

      Na página  de chat no map do component ChatMessageList tanto o MyChatMessage quanto o ChatMessage estavam sem suas key causando um problema no console.log, então a primeira coisa que fiz foi setar o id como key. Depois pude perceber que toda vez que alguém digitava uma mensagem no chat quanto eu ou qualquer usuário o site re renderizava todas as mensagem uma a uma , e para melhorar o desempenho usei Memo tanto em MyChatMessage quanto em ChatMessage para armazenar as mensagens que ja estavam na tela e nao sofriam alterações melhorando o despenho da página !

> ### Page 03: ColorResponsive

      Nessa página  percebi que sempre  que a página  mudava de tamanho as cores eram renderizadas duas vezes, causando re renderização desnecessária, para resolver usei um if para verificar se a cor do estado atual é diferente da cor do breakpoint atual se houver diferença ele atualiza para ficarem iguais. se for igual ele nao faz nenhuma ação assim evita qualquer re renderização desnecessária

> ### Page 04: ContadorComErros

         Nessa página  sempre que um erro aparecia na tela ele re renderizava todos os erros novos na tela , Usei um Memo no componente de Error e no componente ContadorComErros para armazenar o valor do componente pai e renderizar apenas o ultimo erro.

> ### Page 05: ListKeys

      Nessa página  toda vez que adicionava um input novo ele re renderizava todos input novamente , então usei um memo no componente do Input para armazenar os input que ja estavam na tela e renderizar apenas o pai deles !

> ### Page 05: MarketPlace

        Nessa página  tem varias re renderizações desnecessárias em todos componentes a primeira delas é no componente do :

        - Relógio : Toda vez que o relógio mudava a página  toda re renderizava, para resolver tirei o state do set data de dentro do contexto geral e coloquei apenas no componente do relógio , ja que nao precisava dele no state global

        - Lista Produtos: Adicionei useCallback para armazenar a função

## 😰 Desafios

      . Leitura de código pronto
      . Observar atentamente a cada processo de cada página
      . Entender o comportamento de renderização e re renderização
      . Identificar e solucionar possíveis melhorar  de performance de maneira correta

## 👩‍💻 **Dev**

<table align="center">
    <tr>  
        <td align="center">
            <div>
                <img src="https://avatars.githubusercontent.com/u/110488969?v=4"width="120px;" alt="Foto de Kelvin no GitHub"/><br>
                    <b> Kelvin Charles </b><br>
                        <a href="https://www.linkedin.com/in/kelvin-charles/" alt="Linkedin"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" height="20"></a>
                        <a href="https://github.com/kelvincharlesdev" alt="GitHub"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="20"></a>
            </div>
        </td>
    </tr>
</table>
