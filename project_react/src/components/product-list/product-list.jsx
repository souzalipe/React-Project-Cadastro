import { ProductCard } from "../product-card/product-card"

export const ProductList = () => {
    return (
        <ul>
            <h1>ProductList</h1>
            <ProductCard 
                cores={"#fff"}
                imgUrl = {"https://media.istockphoto.com/id/1132154377/pt/foto/jeans.jpg?s=1024x1024&w=is&k=20&c=vQ-o-eI1mJFcxpSm7POj-4RBLNyT7YC-_hwSz73wv7g="}
                preco = {"R$ 23"}
                nomeProduto= {"calça"}
                tamanhos={12}
            />
            <ProductCard 
                cores={"#fff"}
                imgUrl = {"../src/assets/clohtes/—Pngtree—white polo shirt mockup realistic_5268053.png"}
                preco = {"R$ 23"}
                nomeProduto= {"camisa"}
                tamanhos={12}
            />
            <ProductCard 
                cores={"#fff"}
                imgUrl = {"../src/assets/clohtes/png-transparent-jacket-duffel-coat-hood-blue-jacket.png"}
                preco = {"R$ 15"}
                nomeProduto= {"casaco de pobre"}
                tamanhos={15} 
            />
            <ProductCard 
              cores={"#fff,red"}
              imgUrl = {"../src/assets/clohtes/kisspng-down-feather-jacket-down-jacket-5a9752f79ce596.2586811915198666156427.jpg"}
              preco = {"R$ 30"}
              nomeProduto= {"casaco de rico"}
              tamanhos={15} 
            />
        </ul>
    )
}