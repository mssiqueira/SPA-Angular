import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }


foodDetails = [
{
  id:1,
  foodName: "Chopp Hommer",
  choppDetails: "com aroma de ervas e sabor levemente amargo, produz um chopp mais escuro e marcante",
  choppPrice: 50,
  choppImg:"https://images.unsplash.com/photo-1636737420364-653b8cb1be4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
},

{
  id:2,
  foodName: "Chopp Moe",
  choppDetails: "Esse estilo apresenta aroma torrado e sabor amargo, que lembra café ou chocolate. Sua espuma é cremosa e pode ser clara ou amarronzada. A densidade, a coloração, o aroma, o sabor e o teor alcóolico podem variar conforme alguns fatores. Seu percentual de álcool chega a 8% em média.",
  choppPrice: 57,
  choppImg:"https://images.unsplash.com/photo-1641746772953-42f830385493?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
},


{
  id:3,
  foodName: "Chopp Marge",
  choppDetails: "uma cerveja de trigo muito amada pelos brasileiros. De maneira geral, é ela quem rende aquele chopp amarelinho, super popular e conhecido por todos nós. Com baixo teor de lúpulo, é feita de malte de trigo e cevada.",
  choppPrice: 69,
  choppImg:"https://images.unsplash.com/photo-1576271758686-3dabd9c6aaed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},

{
  id:4,
  foodName: "Chopp Barney",
  choppDetails: "apresenta baixa fermentação, com ação do levedo em baixa temperatura. Trata-se do estilo favorito dos mestres cervejeiros alemães e tchecos, com graduação alcoólica que varia entre 4,7% e 5,5%",
  choppPrice: 59,
  choppImg:"https://images.unsplash.com/photo-1556720072-94ce7d90544c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
},

{
  id:5,
  foodName: "Chopp Bart",
  choppDetails: "O estilo apresenta 50% de malte de trigo (no mínimo). Sua cor é clara e opaca, com sabor e aroma frutados, lembrando banana e cravo. A bebida é refrescante, com teor alcóolico moderado (em torno de 5% a 6%).",
  choppPrice: 59,
  choppImg:"https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
},

{
  id:6,
  foodName: "Chopp Lisa",
  choppDetails: "Apresenta cor clara, sabor amargo cítrico e aroma frutado. Esse estilo de cerveja artesanal é bem carbonatado, o que lhe confere uma espuma bastante cremosa. Trata-se de uma cerveja forte, com malte acentuado e teor alcoólico em torno de 7,5% e 8,5%.",
  choppPrice: 89,
  choppImg:"https://images.unsplash.com/photo-1495270804540-e6d9120e6f50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
},


]

}
