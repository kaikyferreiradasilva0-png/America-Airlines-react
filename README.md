
# Exercício de Fixação: Refatorando de HTML/JS para React ⚛️

**Objetivo:** Consolidar os conhecimentos de React migrando um site construído com HTML, CSS e JavaScript puro (Vanilla) para o ecossistema moderno do React JS utilizando o Vite. O foco desta prática é a aplicação de componentização, uso de _props_ e a conteinerização da aplicação com Docker.

## 1. O que é Refatorar um Código? 🛠️

Refatorar código significa alterar a estrutura interna de um software sem mudar o seu comportamento externo (o que o usuário vê e como ele interage).

Imagine que você tem um quarto muito bagunçado, mas consegue encontrar suas coisas. Refatorar seria organizar as gavetas, colocar etiquetas nas caixas e arrumar o armário. O quarto continua sendo o seu quarto e guardando as mesmas coisas, mas agora é muito mais fácil encontrar, manter e adicionar coisas novas.

Na programação, refatoramos para:

-   Deixar o código mais limpo e legível.
    
-   Evitar repetição de código (DRY - _Don't Repeat Yourself_).
    
-   Facilitar a manutenção e a adição de novas funcionalidades no futuro.
    

📺 **Para relembrar o conceito de forma rápida, assista a este vídeo:**

[Refatoração // Dicionário do Programador (Código Fonte TV)](https://www.youtube.com/watch?v=VOxnyVI2lOc "null")

## 2. Relembrando Componentes e Props no React 🧩

Ao migrar nosso HTML para React, vamos aplicar na prática a construção da nossa interface como blocos de montar: os **Componentes**.

### O que são Componentes?

São pedaços independentes e reutilizáveis da sua interface de usuário (UI). Um botão, um cabeçalho, ou um cartão de produto podem ser componentes.

**Exemplo em HTML tradicional (Repetitivo):**

```
<div class="card">
  <h2>Produto 1</h2>
  <p>Preço: R$ 50,00</p>
</div>
<div class="card">
  <h2>Produto 2</h2>
  <p>Preço: R$ 80,00</p>
</div>

```

**Exemplo em React (Componentizado):**

```
// Definindo o componente Card
function Card(props) {
  return (
    <div className="card">
      <h2>{props.titulo}</h2>
      <p>Preço: R$ {props.preco}</p>
    </div>
  );
}

// Usando o componente na página principal
function App() {
  return (
    <div>
      <Card titulo="Produto 1" preco="50,00" />
      <Card titulo="Produto 2" preco="80,00" />
    </div>
  );
}

```

### O que são Props?

_Props_ (abreviação de propriedades) são as informações que passamos para dentro de um componente para torná-lo dinâmico, permitindo que o mesmo componente exiba dados diferentes. É exatamente como passar argumentos para uma função em JavaScript.

**Exemplo de um componente SEM props (Estático/Fixo):**

```
function Botao() {
  return <button className="btn">Clique Aqui</button>;
}

// Toda vez que você usar <Botao />, ele sempre dirá "Clique Aqui"

```

**Exemplo de um componente COM props (Dinâmico/Reutilizável):**

```
function Botao(props) {
  return <button className="btn">{props.texto}</button>;
}

// Agora você pode usar o MESMO componente para várias ações diferentes:
function App() {
  return (
    <div>
      <Botao texto="Salvar" />
      <Botao texto="Cancelar" />
      <Botao texto="Enviar Mensagem" />
    </div>
  );
}

```

## 3. Passo a Passo da Tarefa 🚀

1.  **Faça um Fork e Clone:** Faça um `fork` deste repositório para a sua conta do GitHub. Depois, clone para a sua máquina local.
    
2.  **Crie uma nova Branch:** Antes de começar a modificar o projeto, isole seu trabalho criando uma nova branch para a refatoração.
    
    ```
    git checkout -b feature/refatoracao-react
    
    ```
    
3.  **Inicie o Projeto React:** Crie um novo projeto React com Vite na mesma pasta (ou em uma nova pasta dentro do repositório) rodando:
    
    ```
    npm create vite@latest meu-novo-app -- --template react
    
    ```
    
4.  **Migração:** * Pegue o HTML estático e quebre-o em pelo menos **3 componentes diferentes** (Ex: `Header`, `Footer`, `Card`, `Section`, etc.).
    
    -   Identifique áreas repetitivas do HTML original e crie um componente dinâmico usando **props** para renderizar esses itens (como vimos no exemplo acima).
        
5.  **Dockerização:** O seu projeto Vite _precisa_ rodar dentro de um container Docker. Crie um arquivo `Dockerfile` e um `docker-compose.yml` na raiz do seu projeto React. Não se esqueça da configuração no **`vite.config.js`** para o Docker funcionar adequadamente!
    
6.  **Entrega:** Faça o _commit_ das suas alterações, dê um _push_ da sua nova branch para o seu repositório no GitHub (`git push origin feature/refatoracao-react`) e envie o link para avaliação.
    

### ✅ Critérios de Aceite:

-   O projeto não deve ter erros no console.
    
-   Pelo menos 3 componentes devem ser criados e utilizados.
    
-   O uso de `props` deve estar claro em pelo menos um componente que se repete na tela.
    
-   A aplicação deve rodar perfeitamente via Docker.
    

Boa sorte e boa prática! 💻✨