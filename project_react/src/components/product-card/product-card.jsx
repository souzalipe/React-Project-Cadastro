import "./styles.css";

export const ProductCard =({imgUrl,nomeProduto,preco,}) =>{
    return (
		<li>
			<div className="product_wrap">
				<div className="product_item">
					
					<div className="img">
						<img src={imgUrl} alt="Round_neck" />
						<p className="brand_name">{nomeProduto}</p>
					</div><br></br>

					<div className="price">
						<p>{preco}</p>
					</div>

					<div className="size_color">
						<div className="title">Linha Exclusiva</div>
						
						<div>
							<button className="compra_btn">Compre Agora &#128722;</button>	
						</div>
					</div>
					
				</div>
			</div>
		</li>
	);
};