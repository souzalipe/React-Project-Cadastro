import { ProductCard } from "../product-card/product-card"
import "./styles.css"

// vou adicionar uma array que deixara a lista de produtos mais dinâmica 

const listaDEProdutos = [
    {
        nomeProduto:"Malbac Tradicional",
        preco: "R$ 300,00",
        imgUrl: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/products/B48130/B48130_Malbec_Desodorante_Col%C3%B4nia_1.jpg",
    },
    {
        nomeProduto: "Malbac Bluer",
        preco: "R$ 299,35",
        imgUrl: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/products/B83188/B83188_Malbec-Bleu-Desodorante-Colonia-100ml_.jpg",
    },
    {
        nomeProduto: "Malbac Ultra Bluer",
        preco: "R$ 250,40",
        imgUrl: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B50119/4e3b5189-ef7c-4f03-8c69-ea5ce169bc48-bot-50119-malbec-ultra-bleu-frontal-01.jpg",
    },
    {
        nomeProduto: "Malbac Icon",
        preco: "R$ 370,54",
        imgUrl: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_210,h_210/v1/imagens/product/B54150/08d16f28-be2f-4c3d-936a-28853771a540-bot-54150-malbec-icon-colonia-frontal-01.jpg",
    }
]


export const ProductList = () => {
    return (
       <>
       <div className="conteiner_title">
        <h1 className="title">Produtos a Venda</h1>
       </div>
        <ul className="product-list-container">
            {listaDEProdutos.map((item,index) => (
                <ProductCard
                    key={index} //Parametro usado para renderizar listas em react, para mapear melhor
                    nomeProduto={item.nomeProduto}
                    preco={item.preco}
                    imgUrl={item.imgUrl} 
                />
            ))}
        </ul>
       </>
    )
}

// O map vai retornar um novo array com os objetos dentro do ProductCard --> <ProductCard />, <ProductCard />, <ProductCard />, <ProductCard />]