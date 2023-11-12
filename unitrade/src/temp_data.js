let posts = [
    {
        id: 1,
        name: "Сковорода Б/У",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pulvinar proin gravida hendrerit lectus. Fames ac turpis egestas integer eget aliquet nibh. Cras fermentum odio eu feugiat pretium nibh. Morbi tristique senectus et netus et malesuada. Risus at ultrices mi tempus imperdiet. Mattis rhoncus urna neque viverra justo. Enim ut sem viverra aliquet eget. Sit amet facilisis magna etiam tempor orci. Tellus orci ac auctor augue. Est sit amet facilisis magna etiam. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Condimentum lacinia quis vel eros donec. Mauris sit amet massa vitae tortor condimentum. Molestie nunc non blandit massa enim nec dui nunc.\n",
        creation_date: "11.09.2023 12:00",
        user_data: {
            dormitory: "Гуртожиток №4, 4 поверх, 82/4",
            telegram: "https://t.me/sasha_hal",
            instagram: "https://www.instagram.com/just_sanyok_hal/",
            phone: "0771820653",
        }
    },
    {
        id: 2,
        name: "Чайник емальований",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",

        price: 200
    },
    {
        id: 3,
        name: "Тумбочка IKEA",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 4,
        name: "Макарони Barilla",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 5,
        name: "Сковорода Б/У",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 6,
        name: "Чайник емальований",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 7,
        name: "Тумбочка IKEA",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 8,
        name: "Макарони Barilla",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 9,
        name: "Сковорода Б/У",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 10,
        name: "Чайник емальований",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 11,
        name: "Тумбочка IKEA",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 12,
        name: "Макарони Barilla",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 13,
        name: "Сковорода Б/У",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 14,
        name: "Чайник емальований",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 15,
        name: "Тумбочка IKEA",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    },
    {
        id: 16,
        name: "Макарони Barilla",
        img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
        price: 200
    }
]
export {posts};