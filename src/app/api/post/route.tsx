const mercadopago = require("mercadopago");
// Agrega credenciales
const mpKey = process.env.MERCADOPAGO_ACCESS_KEY;
mercadopago.configure({
  access_token: mpKey,
});
export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  imgUrl: string;
  quantity: number;
}

type ItemType = {
  id: number;
  title: string;
  unit_price: number;
  quantity: number;
};
declare global {
  var id: string;
}

export async function GET(request: Request) {
  return new Response("h1");
}

export async function POST(req: Request) {
  const body = await req.json();
  const userInfo = body.userInfo;
  const cartProducts = body.cartProducts;

  console.log(userInfo);
  console.log(cartProducts);

  const productsMaped = cartProducts.map((product: any) => {
    return {
      id: product.id,
      title: product.name,
      unit_price: Number(product.price),
      quantity: Number(product.quantity),
    };
  });

  let preference = {
    items: [] as ItemType[],
    payment_methods: {
      excluded_payment_types: [
        {
          id: "atm",
        },
      ],
    },

    // Editar estas despues
    notification_url: "https://3db2-181-142-112-172.ngrok.io/webhook",
    back_urls: {
      success: "http://localhost:5173",
      failure: "http://localhost:8080",
      pending: "http://localhost:8080",
    },

    auto_return: "approved",
  };
  let resInitPoint = null;
  let resId = null;
  cartProducts.map((product: ProductType) => {
    const totalItems: ItemType[] = [
      {
        id: product.id,
        title: product.title,
        unit_price: Number(product.price) * 1000,
        quantity: Number(product.quantity),
      },
    ];
    preference.items.push(totalItems[0]);
    console.log(totalItems);
  });
  // init_point:
  await mercadopago.preferences
    .create(preference)
    .then(function (response: any) {
      const resBody = response.body;
      resInitPoint = resBody.init_point;

      console.log(resBody);
      resId = resBody.id;
      global.id = resBody.body.id;
      console.log(global.id);
    })
    .catch(function (error: any) {
      console.log(error);
    });

  return new Response(JSON.stringify({ initPoint: resInitPoint, id: resId }));
}
