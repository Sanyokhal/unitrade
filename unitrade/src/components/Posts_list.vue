<template>
  <div class="container">
    <div class="menu">
      <span class="menu-tag">Оголошення</span>
      <div class="menu-options">
        <input type="text" placeholder="Пошук" v-model="search" class="search-bar">
        <select name="" id="" class="product-category" v-model="category">
          <option value="0">Всі</option>
          <option value="1">Меблі</option>
          <option value="2">Одяг</option>
          <option value="3">Їжа</option>
        </select>
        <select class="product-price" v-model="is_free">
          <option value="true">Даром</option>
          <option value="false">Не даром</option>
        </select>
      </div>
    </div>
    <div class="posts_list">
      <Post_comp :post="post" v-for="post in posts" :key="post.id"/>
    </div>
  </div>
</template>

<script>
import Post_comp from "@/components/Post_comp";

export default {
  name: "Posts_list",
  components: {Post_comp},
  data() {
    return {
      posts: [
        {
          id: 1,
          name: "Сковорода Б/У",
          img_url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQAj79Q5PIpOlQrCebauRr21wuu3dByV1wjuHoTvrKDIznL4ab4wMvMSC92H_Z9773bNGeVXbHGvsCUR5qHodabLQ7mLkYm&usqp=CAE",
          price: 200
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
        }
      ],
      search: undefined,
      category: 0,
      is_free: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/main_colors";

.container {
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 80vw;
  margin-left: 10vw;
  justify-content: space-between;
  margin-top: 100px;

  .menu {
    margin-top: 10px;
    width: 100%;
    background-color: $light-main;
    border-radius: 10px;
    height: 60px;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .menu-tag {
      font-size: 20px;
      font-weight: bold;
      color: black;
      margin-left: 10px;
    }

    .menu-options {
      margin-right: 10px;
      display: flex;
      flex-direction: row;
      gap: 20px;

      .search-bar {
        width: 290px;
        font-family: 'Montserrat', sans-serif;
        max-width: 300px;
        padding-left: 10px;
        border-radius: 20px;
        border: 1px solid $dark-blue-main;
        font-weight: bold;
        transition: box-shadow ease-out .3s;
      }

      .search-bar::placeholder {
        transition: all ease-out .3s;
      }

      .search-bar:focus-visible, .search-bar:hover {
        outline: none;
        transition: box-shadow ease-out .3s;
        box-shadow: 2px 2px 4px $default-shadow-color;
      }

      .search-bar:focus-visible::placeholder {
        padding-left: 50px;
        opacity: 0;
        transition: all ease-out .3s;
      }

      .product-category {
        width: 150px;
        padding-left: 10px;
        font-family: 'Montserrat', sans-serif;
        max-width: 150px;
        font-weight: 500;
        background-color: $light-blue-main;
        border: 1px solid $dark-blue-main;
        border-radius: 20px;
        transition: box-shadow ease-out .3s;
        box-shadow: 2px 2px 4px $default-shadow-color;
      }

      .product-category:focus-visible {
        outline: none;
      }

      .product-category:hover {
        cursor: pointer;
        transition: box-shadow ease-out .3s;
        box-shadow: 4px 4px 6px $default-shadow-color;
      }

      .product-price {
        font-family: 'Montserrat', sans-serif;
        max-width: 120px;
        padding-left: 10px;
        width: 120px;
        height: 30px;
        line-height: 30px;
        font-size: 16px;
        background-color: $light-brown-main;
        border-radius: 20px;
        font-weight: 500;
        text-align: center;
        border: 1px solid $dark-brown-main;
        transition: box-shadow ease-out .3s;
        box-shadow: 2px 2px 4px $default-shadow-color;
      }

      .product-price:hover {
        cursor: pointer;
        transition: box-shadow ease-out .3s;
        box-shadow: 4px 4px 6px $default-shadow-color;
      }

      .product-price:focus-visible {
        outline: none;
      }
    }
  }

  .posts_list {
    max-width: 80vw;
    width: 80vw;
    display: grid;
    grid-template-columns:repeat(auto-fit, 250px);
    grid-template-rows:repeat(auto-fit, 300px);
    grid-gap: 20px;
    justify-content: space-evenly;
  }
}
</style>