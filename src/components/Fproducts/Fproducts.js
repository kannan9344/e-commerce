import Veg_1 from "/src/assets/veg-1.png";
import Veg_12 from "/src/assets/vegetables/beetroot-2.png";
import Veg_13 from "/src/assets/vegetables/beetroot-3.png";
import Veg_14 from "/src/assets/vegetables/beetroot-4.png";
import Veg_15 from "/src/assets/vegetables/beetroot-5.png";
import Veg_2 from "/src/assets/veg-2.png";
import Veg_22 from "/src/assets/vegetables/onion-2.png";
import Veg_23 from "/src/assets/vegetables/onion-3.png";
import Veg_24 from "/src/assets/vegetables/onion-4.png";
import Veg_25 from "/src/assets/vegetables/onion-5.png";
import Fruit_1 from "/src/assets/fruit-1.png";
import Fruit_12 from "/src/assets/fruits/mango-2.png";
import Fruit_13 from "/src/assets/fruits/mango-3.png";
import Fruit_14 from "/src/assets/fruits/mango-4.png";
import Fruit_15 from "/src/assets/fruits/mango-5.png";
import Fruit_2 from "/src/assets/fruit-2.png";
import Fruit_22 from "/src/assets/fruits/orange-2.png";
import Fruit_23 from "/src/assets/fruits/orange-3.png";
import Fruit_24 from "/src/assets/fruits/orange-4.png";
import Fruit_25 from "/src/assets/fruits/orange-5.png";
import Meat_1 from"/src/assets/meat-1.png";
import Meat_12 from "/src/assets/meat/meat-2.png";
import Meat_13 from "/src/assets/meat/meat-3.png";
import Meat_14 from "/src/assets/meat/meat-4.png";
import Meat_15 from "/src/assets/meat/meat-5.png";
import Meat_2 from"/src/assets/meat-2.png";
import Meat_22 from "/src/assets/meat/fish-2.png";
import Meat_23 from "/src/assets/meat/fish-3.png";
import Meat_24 from "/src/assets/meat/fish-4.png";
import Meat_25 from "/src/assets/meat/fish-5.png";
import Egg from "/src/assets/egg.png";
import Egg_12 from "/src/assets/egg/egg-2.png";
import Egg_13 from "/src/assets/egg/egg-3.png";
import Egg_14 from "/src/assets/egg/egg-4.png";
import Egg_15 from "/src/assets/egg/egg-5.png";
import Milk_1 from "/src/assets/milk-1.png";
import Milk_12 from "/src/assets/milk/milk-2.png";
import Milk_13 from "/src/assets/milk/milk-3.png";
import Milk_14 from "/src/assets/milk/milk-4.png";
import Milk_15 from "/src/assets/milk/milk-5.png";
import Dry_1 from "/src/assets/dry-1.png";
import Dry_12 from "/src/assets/dry/almond-2.png";
import Dry_13 from "/src/assets/dry/almond-3.png";
import Dry_14 from "/src/assets/dry/almond-4.png";
import Dry_15 from "/src/assets/dry/almond-5.png";
import Dry_2 from "/src/assets/dry-2.png";
import Dry_22 from "/src/assets/dry/dry-2.png";
import Dry_23 from "/src/assets/dry/dry-3.png";
import Dry_24 from "/src/assets/dry/dry-4.png";
import Dry_25 from "/src/assets/dry/dry-5.png";

const Fproducts=[
    {
        "id":1,
        "img":Veg_1,
        "text":"Beetroot",
        "discount":20,
        "gram":200,
        "rate":50,
        "dis":"Beetroot is a root vegetable also known as red beet, table beet, garden beet, or just beet.",
        "images":{
            img1:Veg_1,
            img2:Veg_12,
            img3:Veg_13,
            img4:Veg_14,
            img5:Veg_15,
        }
    },
    {
        "id":2,
        "img":Meat_1,
        "text":"Beef Steaks",
        "discount":10,
        "gram":500,
        "rate":350,
        "dis":"It's exceptionally rich in high-quality protein, vitamins, and minerals. Therefore, it may improve muscle growth and maintenance, as well as exercise performance.",
        "images":{
            img1:Meat_1,
            img2:Meat_12,
            img3:Meat_13,
            img4:Meat_14,
            img5:Meat_15,
        }
    },
    {
        "id":3,
        "img":Egg,
        "text":"Egg",
        "discount":5,
        "gram":30,
        "rate":20,
        "dis":"Eggs are packed full of high-quality protein, making them ideal as part of many different dietary patterns that can assist people in managing their weight",
        "images":{
            img1:Egg,
            img2:Egg_12,
            img3:Egg_13,
            img4:Egg_14,
            img5:Egg_15,
        }
    },
    {
        "id":4,
        "img":Milk_1,
        "text":"Milk",
        "discount":7,
        "gram":100,
        "rate":40,
        "dis":"Milk is rich in vitamin D, calcium, and phosphorus, essential for building and maintaining strong bones. Calcium is the main mineral that makes up your bones.",
        "images":{
            img1:Milk_1,
            img2:Milk_12,
            img3:Milk_13,
            img4:Milk_14,
            img5:Milk_15,
        }
    },
    {
        "id":5,
        "img":Dry_1,
        "text":"Almond",
        "discount":15,
        "gram":400,
        "rate":650,
        "dis":" Almonds have both calcium and phosphorus, which are good for bone health. Almonds seem to help curb blood sugar spikes after meals, which is key for people with diabetes.",
        "images":{
            img1:Dry_1,
            img2:Dry_12,
            img3:Dry_13,
            img4:Dry_14,
            img5:Dry_15,
        }
    },
    {
        "id":6,
        "img":Fruit_1,
        "text":"Mango",
        "discount":45,
        "gram":500,
        "rate":250,
        "dis":"Mango is rich in vitamins, minerals, and antioxidants, and it has been associated with many health benefits, including potential anticancer effects, as well as improved immunity and digestive and eye health.",
        "images":{
            img1:Fruit_1,
            img2:Fruit_12,
            img3:Fruit_13,
            img4:Fruit_14,
            img5:Fruit_15,
        }
    },
    {
        "id":7,
        "img":Veg_2,
        "text":"Onion",
        "discount":15,
        "gram":500,
        "rate":450,
        "dis":"Onions may provide potential health benefits. These may include reducing the risk of several types of cancer, improving mood, and maintaining skin and hair health.",
        "images":{
            img1:Veg_2,
            img2:Veg_22,
            img3:Veg_23,
            img4:Veg_24,
            img5:Veg_25,
        }
    },
    {
        "id":8,
        "img":Dry_2,
        "text":"Date",
        "discount":8,
        "gram":500,
        "rate":470,
        "dis":"Almonds have both calcium and phosphorus, which are good for bone health. Almonds seem to help curb blood sugar spikes after meals, which is key for people with diabetes.",
        "images":{
            img1:Dry_2,
            img2:Dry_22,
            img3:Dry_23,
            img4:Dry_24,
            img5:Dry_25,
        }
    },
    {
        "id":9,
        "img":Meat_2,
        "text":"Fish Meat",
        "discount":18,
        "gram":500,
        "rate":170,
        "dis":"Fish is rich in calcium and phosphorus and a great source of minerals, such as iron, zinc, iodine, magnesium, and potassium.",
        "images":{
            img1:Meat_2,
            img2:Meat_22,
            img3:Meat_23,
            img4:Meat_24,
            img5:Meat_25,
        }
    },
    {
        "id":10,
        "img":Fruit_2,
        "text":"Orange",
        "discount":27,
        "gram":500,
        "rate":470,
        "dis":"Oranges are a treasure trove of nutrients and protective plant compounds, including vitamins, minerals, and antioxidants. Studies show that consuming oranges regularly may benefit your health in several ways.",
        "images":{
            img1:Fruit_2,
            img2:Fruit_22,
            img3:Fruit_23,
            img4:Fruit_24,
            img5:Fruit_25,
        }
    }
];

export default Fproducts;