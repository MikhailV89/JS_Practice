export const categories = [
    {id: 'c1', title: 'Electronics', parentId: null},
    {id: 'c2', title: 'Phones', parentId: 'c1'},
    {id: 'c3', title: 'Smartphones', parentId: 'c2'},
    {id: 'c4', title: 'Feature Phones', parentId: 'c2'},
    {id: 'c5', title: 'Phone Accessories', parentId: 'c2'},
    {id: 'c6', title: 'Computers', parentId: 'c1'},
    {id: 'c7', title: 'Laptops', parentId: 'c6'},
    {id: 'c8', title: 'Desktops', parentId: 'c6'},
    {id: 'c9', title: 'Computer Accessories', parentId: 'c6'},
    {id: 'c10', title: 'Audio', parentId: 'c1'},
    {id: 'c11', title: 'Headphones', parentId: 'c10'},
    {id: 'c12', title: 'Speakers', parentId: 'c10'},
    {id: 'c13', title: 'Microphones', parentId: 'c10'},

    {id: 'c14', title: 'Home', parentId: null},
    {id: 'c15', title: 'Furniture', parentId: 'c14'},
    {id: 'c16', title: 'Chairs', parentId: 'c15'},
    {id: 'c17', title: 'Tables', parentId: 'c15'},
    {id: 'c18', title: 'Sofas', parentId: 'c15'},
    {id: 'c19', title: 'Kitchen', parentId: 'c14'},
    {id: 'c20', title: 'Cookware', parentId: 'c19'},
    {id: 'c21', title: 'Tableware', parentId: 'c19'},
    {id: 'c22', title: 'Kitchen Appliances', parentId: 'c19'},
    {id: 'c23', title: 'Decor', parentId: 'c14'},
    {id: 'c24', title: 'Lamps', parentId: 'c23'},
    {id: 'c25', title: 'Vases', parentId: 'c23'},
    {id: 'c26', title: 'Wall Art', parentId: 'c23'},

    {id: 'c27', title: 'Clothes', parentId: null},
    {id: 'c28', title: 'Men', parentId: 'c27'},
    {id: 'c29', title: 'Men Shirts', parentId: 'c28'},
    {id: 'c30', title: 'Men Pants', parentId: 'c28'},
    {id: 'c31', title: 'Men Jackets', parentId: 'c28'},
    {id: 'c32', title: 'Women', parentId: 'c27'},
    {id: 'c33', title: 'Women Dresses', parentId: 'c32'},
    {id: 'c34', title: 'Women Tops', parentId: 'c32'},
    {id: 'c35', title: 'Women Jackets', parentId: 'c32'},
    {id: 'c36', title: 'Kids', parentId: 'c27'},
    {id: 'c37', title: 'Kids T-shirts', parentId: 'c36'},
    {id: 'c38', title: 'Kids Pants', parentId: 'c36'},
    {id: 'c39', title: 'Kids Shoes', parentId: 'c36'},

    {id: 'c40', title: 'Sports', parentId: null},
    {id: 'c41', title: 'Fitness', parentId: 'c40'},
    {id: 'c42', title: 'Yoga', parentId: 'c41'},
    {id: 'c43', title: 'Gym Equipment', parentId: 'c41'},
    {id: 'c44', title: 'Fitness Accessories', parentId: 'c41'},
    {id: 'c45', title: 'Outdoor', parentId: 'c40'},
    {id: 'c46', title: 'Camping', parentId: 'c45'},
    {id: 'c47', title: 'Hiking', parentId: 'c45'},
    {id: 'c48', title: 'Cycling', parentId: 'c45'},
    {id: 'c49', title: 'Team Sports', parentId: 'c40'},
    {id: 'c50', title: 'Football', parentId: 'c49'},
    {id: 'c51', title: 'Basketball', parentId: 'c49'},
    {id: 'c52', title: 'Volleyball', parentId: 'c49'}
];

export const products = [
    {id: 'p1', title: 'iPhone 15', price: 1200, image: 'https://picsum.photos/seed/p1/300/200', categoryId: 'c3'},
    {
        id: 'p2',
        title: 'Samsung Galaxy S24',
        price: 1100,
        image: 'https://picsum.photos/seed/p2/300/200',
        categoryId: 'c3'
    },
    {id: 'p3', title: 'Google Pixel 8', price: 900, image: 'https://picsum.photos/seed/p3/300/200', categoryId: 'c3'},
    {id: 'p4', title: 'Xiaomi 14', price: 800, image: 'https://picsum.photos/seed/p4/300/200', categoryId: 'c3'},

    {id: 'p5', title: 'Nokia 3310', price: 80, image: 'https://picsum.photos/seed/p5/300/200', categoryId: 'c4'},
    {id: 'p6', title: 'Alcatel Classic', price: 60, image: 'https://picsum.photos/seed/p6/300/200', categoryId: 'c4'},
    {
        id: 'p7',
        title: 'Panasonic KX Phone',
        price: 70,
        image: 'https://picsum.photos/seed/p7/300/200',
        categoryId: 'c4'
    },
    {id: 'p8', title: 'EasyPhone Senior', price: 90, image: 'https://picsum.photos/seed/p8/300/200', categoryId: 'c4'},

    {id: 'p9', title: 'Phone Case', price: 20, image: 'https://picsum.photos/seed/p9/300/200', categoryId: 'c5'},
    {
        id: 'p10',
        title: 'Screen Protector',
        price: 15,
        image: 'https://picsum.photos/seed/p10/300/200',
        categoryId: 'c5'
    },
    {
        id: 'p11',
        title: 'Wireless Charger',
        price: 45,
        image: 'https://picsum.photos/seed/p11/300/200',
        categoryId: 'c5'
    },
    {id: 'p12', title: 'Power Bank', price: 55, image: 'https://picsum.photos/seed/p12/300/200', categoryId: 'c5'},

    {id: 'p13', title: 'MacBook Air', price: 1500, image: 'https://picsum.photos/seed/p13/300/200', categoryId: 'c7'},
    {id: 'p14', title: 'Dell XPS 13', price: 1400, image: 'https://picsum.photos/seed/p14/300/200', categoryId: 'c7'},
    {
        id: 'p15',
        title: 'Lenovo ThinkPad',
        price: 1300,
        image: 'https://picsum.photos/seed/p15/300/200',
        categoryId: 'c7'
    },
    {id: 'p16', title: 'Asus Zenbook', price: 1200, image: 'https://picsum.photos/seed/p16/300/200', categoryId: 'c7'},

    {id: 'p17', title: 'Gaming PC', price: 2200, image: 'https://picsum.photos/seed/p17/300/200', categoryId: 'c8'},
    {id: 'p18', title: 'Office Desktop', price: 900, image: 'https://picsum.photos/seed/p18/300/200', categoryId: 'c8'},
    {id: 'p19', title: 'Mini PC', price: 700, image: 'https://picsum.photos/seed/p19/300/200', categoryId: 'c8'},
    {id: 'p20', title: 'All-in-One PC', price: 1100, image: 'https://picsum.photos/seed/p20/300/200', categoryId: 'c8'},

    {
        id: 'p21',
        title: 'Mechanical Keyboard',
        price: 120,
        image: 'https://picsum.photos/seed/p21/300/200',
        categoryId: 'c9'
    },
    {id: 'p22', title: 'Wireless Mouse', price: 50, image: 'https://picsum.photos/seed/p22/300/200', categoryId: 'c9'},
    {id: 'p23', title: 'USB-C Hub', price: 70, image: 'https://picsum.photos/seed/p23/300/200', categoryId: 'c9'},
    {id: 'p24', title: 'Laptop Stand', price: 40, image: 'https://picsum.photos/seed/p24/300/200', categoryId: 'c9'},

    {
        id: 'p25',
        title: 'Sony Headphones',
        price: 300,
        image: 'https://picsum.photos/seed/p25/300/200',
        categoryId: 'c11'
    },
    {id: 'p26', title: 'AirPods Pro', price: 250, image: 'https://picsum.photos/seed/p26/300/200', categoryId: 'c11'},
    {id: 'p27', title: 'JBL Tune', price: 90, image: 'https://picsum.photos/seed/p27/300/200', categoryId: 'c11'},
    {
        id: 'p28',
        title: 'Studio Headphones',
        price: 180,
        image: 'https://picsum.photos/seed/p28/300/200',
        categoryId: 'c11'
    },

    {
        id: 'p29',
        title: 'Bluetooth Speaker',
        price: 120,
        image: 'https://picsum.photos/seed/p29/300/200',
        categoryId: 'c12'
    },
    {id: 'p30', title: 'Smart Speaker', price: 100, image: 'https://picsum.photos/seed/p30/300/200', categoryId: 'c12'},
    {id: 'p31', title: 'Soundbar', price: 250, image: 'https://picsum.photos/seed/p31/300/200', categoryId: 'c12'},
    {
        id: 'p32',
        title: 'Portable Speaker',
        price: 80,
        image: 'https://picsum.photos/seed/p32/300/200',
        categoryId: 'c12'
    },

    {
        id: 'p33',
        title: 'USB Microphone',
        price: 100,
        image: 'https://picsum.photos/seed/p33/300/200',
        categoryId: 'c13'
    },
    {
        id: 'p34',
        title: 'Studio Microphone',
        price: 220,
        image: 'https://picsum.photos/seed/p34/300/200',
        categoryId: 'c13'
    },
    {id: 'p35', title: 'Lavalier Mic', price: 60, image: 'https://picsum.photos/seed/p35/300/200', categoryId: 'c13'},
    {id: 'p36', title: 'Podcast Mic', price: 150, image: 'https://picsum.photos/seed/p36/300/200', categoryId: 'c13'},

    {id: 'p37', title: 'Office Chair', price: 180, image: 'https://picsum.photos/seed/p37/300/200', categoryId: 'c16'},
    {id: 'p38', title: 'Dining Chair', price: 90, image: 'https://picsum.photos/seed/p38/300/200', categoryId: 'c16'},
    {id: 'p39', title: 'Gaming Chair', price: 250, image: 'https://picsum.photos/seed/p39/300/200', categoryId: 'c16'},
    {id: 'p40', title: 'Wooden Chair', price: 120, image: 'https://picsum.photos/seed/p40/300/200', categoryId: 'c16'},

    {id: 'p41', title: 'Dining Table', price: 300, image: 'https://picsum.photos/seed/p41/300/200', categoryId: 'c17'},
    {id: 'p42', title: 'Coffee Table', price: 160, image: 'https://picsum.photos/seed/p42/300/200', categoryId: 'c17'},
    {id: 'p43', title: 'Desk', price: 220, image: 'https://picsum.photos/seed/p43/300/200', categoryId: 'c17'},
    {id: 'p44', title: 'Bedside Table', price: 90, image: 'https://picsum.photos/seed/p44/300/200', categoryId: 'c17'},

    {id: 'p45', title: 'Corner Sofa', price: 800, image: 'https://picsum.photos/seed/p45/300/200', categoryId: 'c18'},
    {id: 'p46', title: 'Small Sofa', price: 450, image: 'https://picsum.photos/seed/p46/300/200', categoryId: 'c18'},
    {id: 'p47', title: 'Sofa Bed', price: 650, image: 'https://picsum.photos/seed/p47/300/200', categoryId: 'c18'},
    {id: 'p48', title: 'Leather Sofa', price: 950, image: 'https://picsum.photos/seed/p48/300/200', categoryId: 'c18'},

    {id: 'p49', title: 'Frying Pan', price: 45, image: 'https://picsum.photos/seed/p49/300/200', categoryId: 'c20'},
    {id: 'p50', title: 'Cooking Pot', price: 70, image: 'https://picsum.photos/seed/p50/300/200', categoryId: 'c20'},
    {id: 'p51', title: 'Baking Tray', price: 35, image: 'https://picsum.photos/seed/p51/300/200', categoryId: 'c20'},
    {id: 'p52', title: 'Saucepan', price: 55, image: 'https://picsum.photos/seed/p52/300/200', categoryId: 'c20'},

    {id: 'p53', title: 'Dinner Plates', price: 40, image: 'https://picsum.photos/seed/p53/300/200', categoryId: 'c21'},
    {id: 'p54', title: 'Coffee Cups', price: 25, image: 'https://picsum.photos/seed/p54/300/200', categoryId: 'c21'},
    {id: 'p55', title: 'Cutlery Set', price: 60, image: 'https://picsum.photos/seed/p55/300/200', categoryId: 'c21'},
    {id: 'p56', title: 'Glass Set', price: 35, image: 'https://picsum.photos/seed/p56/300/200', categoryId: 'c21'},

    {id: 'p57', title: 'Blender', price: 90, image: 'https://picsum.photos/seed/p57/300/200', categoryId: 'c22'},
    {id: 'p58', title: 'Toaster', price: 50, image: 'https://picsum.photos/seed/p58/300/200', categoryId: 'c22'},
    {
        id: 'p59',
        title: 'Coffee Machine',
        price: 300,
        image: 'https://picsum.photos/seed/p59/300/200',
        categoryId: 'c22'
    },
    {
        id: 'p60',
        title: 'Electric Kettle',
        price: 40,
        image: 'https://picsum.photos/seed/p60/300/200',
        categoryId: 'c22'
    },

    {id: 'p61', title: 'Desk Lamp', price: 45, image: 'https://picsum.photos/seed/p61/300/200', categoryId: 'c24'},
    {id: 'p62', title: 'Floor Lamp', price: 120, image: 'https://picsum.photos/seed/p62/300/200', categoryId: 'c24'},
    {id: 'p63', title: 'Wall Lamp', price: 70, image: 'https://picsum.photos/seed/p63/300/200', categoryId: 'c24'},
    {id: 'p64', title: 'Night Lamp', price: 35, image: 'https://picsum.photos/seed/p64/300/200', categoryId: 'c24'},

    {id: 'p65', title: 'Ceramic Vase', price: 40, image: 'https://picsum.photos/seed/p65/300/200', categoryId: 'c25'},
    {id: 'p66', title: 'Glass Vase', price: 55, image: 'https://picsum.photos/seed/p66/300/200', categoryId: 'c25'},
    {id: 'p67', title: 'Tall Vase', price: 75, image: 'https://picsum.photos/seed/p67/300/200', categoryId: 'c25'},
    {id: 'p68', title: 'Small Vase', price: 25, image: 'https://picsum.photos/seed/p68/300/200', categoryId: 'c25'},

    {
        id: 'p69',
        title: 'Abstract Poster',
        price: 30,
        image: 'https://picsum.photos/seed/p69/300/200',
        categoryId: 'c26'
    },
    {
        id: 'p70',
        title: 'Landscape Print',
        price: 45,
        image: 'https://picsum.photos/seed/p70/300/200',
        categoryId: 'c26'
    },
    {id: 'p71', title: 'Canvas Art', price: 80, image: 'https://picsum.photos/seed/p71/300/200', categoryId: 'c26'},
    {
        id: 'p72',
        title: 'Photo Frame Set',
        price: 35,
        image: 'https://picsum.photos/seed/p72/300/200',
        categoryId: 'c26'
    },

    {id: 'p73', title: 'White Shirt', price: 45, image: 'https://picsum.photos/seed/p73/300/200', categoryId: 'c29'},
    {id: 'p74', title: 'Oxford Shirt', price: 60, image: 'https://picsum.photos/seed/p74/300/200', categoryId: 'c29'},
    {id: 'p75', title: 'Linen Shirt', price: 55, image: 'https://picsum.photos/seed/p75/300/200', categoryId: 'c29'},
    {id: 'p76', title: 'Checked Shirt', price: 50, image: 'https://picsum.photos/seed/p76/300/200', categoryId: 'c29'},

    {id: 'p77', title: 'Slim Jeans', price: 80, image: 'https://picsum.photos/seed/p77/300/200', categoryId: 'c30'},
    {id: 'p78', title: 'Chinos', price: 70, image: 'https://picsum.photos/seed/p78/300/200', categoryId: 'c30'},
    {id: 'p79', title: 'Cargo Pants', price: 75, image: 'https://picsum.photos/seed/p79/300/200', categoryId: 'c30'},
    {id: 'p80', title: 'Formal Pants', price: 90, image: 'https://picsum.photos/seed/p80/300/200', categoryId: 'c30'},

    {id: 'p81', title: 'Denim Jacket', price: 100, image: 'https://picsum.photos/seed/p81/300/200', categoryId: 'c31'},
    {id: 'p82', title: 'Bomber Jacket', price: 120, image: 'https://picsum.photos/seed/p82/300/200', categoryId: 'c31'},
    {
        id: 'p83',
        title: 'Leather Jacket',
        price: 250,
        image: 'https://picsum.photos/seed/p83/300/200',
        categoryId: 'c31'
    },
    {id: 'p84', title: 'Rain Jacket', price: 90, image: 'https://picsum.photos/seed/p84/300/200', categoryId: 'c31'},

    {id: 'p85', title: 'Summer Dress', price: 70, image: 'https://picsum.photos/seed/p85/300/200', categoryId: 'c33'},
    {id: 'p86', title: 'Evening Dress', price: 180, image: 'https://picsum.photos/seed/p86/300/200', categoryId: 'c33'},
    {id: 'p87', title: 'Casual Dress', price: 90, image: 'https://picsum.photos/seed/p87/300/200', categoryId: 'c33'},
    {id: 'p88', title: 'Office Dress', price: 110, image: 'https://picsum.photos/seed/p88/300/200', categoryId: 'c33'},

    {id: 'p89', title: 'Basic Top', price: 30, image: 'https://picsum.photos/seed/p89/300/200', categoryId: 'c34'},
    {id: 'p90', title: 'Silk Blouse', price: 90, image: 'https://picsum.photos/seed/p90/300/200', categoryId: 'c34'},
    {id: 'p91', title: 'Crop Top', price: 35, image: 'https://picsum.photos/seed/p91/300/200', categoryId: 'c34'},
    {
        id: 'p92',
        title: 'Long Sleeve Top',
        price: 45,
        image: 'https://picsum.photos/seed/p92/300/200',
        categoryId: 'c34'
    },

    {
        id: 'p93',
        title: 'Women Denim Jacket',
        price: 100,
        image: 'https://picsum.photos/seed/p93/300/200',
        categoryId: 'c35'
    },
    {id: 'p94', title: 'Women Blazer', price: 150, image: 'https://picsum.photos/seed/p94/300/200', categoryId: 'c35'},
    {
        id: 'p95',
        title: 'Women Raincoat',
        price: 130,
        image: 'https://picsum.photos/seed/p95/300/200',
        categoryId: 'c35'
    },
    {id: 'p96', title: 'Women Parka', price: 170, image: 'https://picsum.photos/seed/p96/300/200', categoryId: 'c35'},

    {
        id: 'p97',
        title: 'Kids T-shirt Blue',
        price: 20,
        image: 'https://picsum.photos/seed/p97/300/200',
        categoryId: 'c37'
    },
    {
        id: 'p98',
        title: 'Kids T-shirt Red',
        price: 20,
        image: 'https://picsum.photos/seed/p98/300/200',
        categoryId: 'c37'
    },
    {id: 'p99', title: 'Kids Polo', price: 25, image: 'https://picsum.photos/seed/p99/300/200', categoryId: 'c37'},
    {id: 'p100', title: 'Kids Hoodie', price: 35, image: 'https://picsum.photos/seed/p100/300/200', categoryId: 'c37'},

    {id: 'p101', title: 'Kids Jeans', price: 40, image: 'https://picsum.photos/seed/p101/300/200', categoryId: 'c38'},
    {id: 'p102', title: 'Kids Shorts', price: 25, image: 'https://picsum.photos/seed/p102/300/200', categoryId: 'c38'},
    {id: 'p103', title: 'Kids Joggers', price: 35, image: 'https://picsum.photos/seed/p103/300/200', categoryId: 'c38'},
    {
        id: 'p104',
        title: 'Kids Leggings',
        price: 30,
        image: 'https://picsum.photos/seed/p104/300/200',
        categoryId: 'c38'
    },

    {
        id: 'p105',
        title: 'Kids Sneakers',
        price: 50,
        image: 'https://picsum.photos/seed/p105/300/200',
        categoryId: 'c39'
    },
    {id: 'p106', title: 'Kids Sandals', price: 35, image: 'https://picsum.photos/seed/p106/300/200', categoryId: 'c39'},
    {id: 'p107', title: 'Kids Boots', price: 60, image: 'https://picsum.photos/seed/p107/300/200', categoryId: 'c39'},
    {
        id: 'p108',
        title: 'Kids Slippers',
        price: 20,
        image: 'https://picsum.photos/seed/p108/300/200',
        categoryId: 'c39'
    },

    {id: 'p109', title: 'Yoga Mat', price: 30, image: 'https://picsum.photos/seed/p109/300/200', categoryId: 'c42'},
    {id: 'p110', title: 'Yoga Block', price: 15, image: 'https://picsum.photos/seed/p110/300/200', categoryId: 'c42'},
    {id: 'p111', title: 'Yoga Strap', price: 12, image: 'https://picsum.photos/seed/p111/300/200', categoryId: 'c42'},
    {
        id: 'p112',
        title: 'Meditation Cushion',
        price: 40,
        image: 'https://picsum.photos/seed/p112/300/200',
        categoryId: 'c42'
    },

    {id: 'p113', title: 'Dumbbells', price: 80, image: 'https://picsum.photos/seed/p113/300/200', categoryId: 'c43'},
    {id: 'p114', title: 'Kettlebell', price: 70, image: 'https://picsum.photos/seed/p114/300/200', categoryId: 'c43'},
    {id: 'p115', title: 'Bench', price: 150, image: 'https://picsum.photos/seed/p115/300/200', categoryId: 'c43'},
    {id: 'p116', title: 'Pull-up Bar', price: 60, image: 'https://picsum.photos/seed/p116/300/200', categoryId: 'c43'},

    {
        id: 'p117',
        title: 'Resistance Bands',
        price: 25,
        image: 'https://picsum.photos/seed/p117/300/200',
        categoryId: 'c44'
    },
    {
        id: 'p118',
        title: 'Fitness Gloves',
        price: 20,
        image: 'https://picsum.photos/seed/p118/300/200',
        categoryId: 'c44'
    },
    {id: 'p119', title: 'Jump Rope', price: 15, image: 'https://picsum.photos/seed/p119/300/200', categoryId: 'c44'},
    {id: 'p120', title: 'Foam Roller', price: 35, image: 'https://picsum.photos/seed/p120/300/200', categoryId: 'c44'},

    {id: 'p121', title: 'Tent', price: 180, image: 'https://picsum.photos/seed/p121/300/200', categoryId: 'c46'},
    {id: 'p122', title: 'Sleeping Bag', price: 90, image: 'https://picsum.photos/seed/p122/300/200', categoryId: 'c46'},
    {
        id: 'p123',
        title: 'Camping Stove',
        price: 70,
        image: 'https://picsum.photos/seed/p123/300/200',
        categoryId: 'c46'
    },
    {
        id: 'p124',
        title: 'Camping Chair',
        price: 45,
        image: 'https://picsum.photos/seed/p124/300/200',
        categoryId: 'c46'
    },

    {
        id: 'p125',
        title: 'Hiking Backpack',
        price: 120,
        image: 'https://picsum.photos/seed/p125/300/200',
        categoryId: 'c47'
    },
    {
        id: 'p126',
        title: 'Hiking Boots',
        price: 160,
        image: 'https://picsum.photos/seed/p126/300/200',
        categoryId: 'c47'
    },
    {
        id: 'p127',
        title: 'Trekking Poles',
        price: 60,
        image: 'https://picsum.photos/seed/p127/300/200',
        categoryId: 'c47'
    },
    {id: 'p128', title: 'Rain Cover', price: 25, image: 'https://picsum.photos/seed/p128/300/200', categoryId: 'c47'},

    {id: 'p129', title: 'Bike Helmet', price: 70, image: 'https://picsum.photos/seed/p129/300/200', categoryId: 'c48'},
    {id: 'p130', title: 'Bike Gloves', price: 25, image: 'https://picsum.photos/seed/p130/300/200', categoryId: 'c48'},
    {id: 'p131', title: 'Bike Lock', price: 35, image: 'https://picsum.photos/seed/p131/300/200', categoryId: 'c48'},
    {
        id: 'p132',
        title: 'Water Bottle Holder',
        price: 15,
        image: 'https://picsum.photos/seed/p132/300/200',
        categoryId: 'c48'
    },

    {
        id: 'p133',
        title: 'Football Ball',
        price: 30,
        image: 'https://picsum.photos/seed/p133/300/200',
        categoryId: 'c50'
    },
    {
        id: 'p134',
        title: 'Goalkeeper Gloves',
        price: 45,
        image: 'https://picsum.photos/seed/p134/300/200',
        categoryId: 'c50'
    },
    {
        id: 'p135',
        title: 'Football Boots',
        price: 100,
        image: 'https://picsum.photos/seed/p135/300/200',
        categoryId: 'c50'
    },
    {
        id: 'p136',
        title: 'Training Cones',
        price: 20,
        image: 'https://picsum.photos/seed/p136/300/200',
        categoryId: 'c50'
    },

    {
        id: 'p137',
        title: 'Basketball Ball',
        price: 35,
        image: 'https://picsum.photos/seed/p137/300/200',
        categoryId: 'c51'
    },
    {
        id: 'p138',
        title: 'Basketball Shoes',
        price: 120,
        image: 'https://picsum.photos/seed/p138/300/200',
        categoryId: 'c51'
    },
    {
        id: 'p139',
        title: 'Basketball Hoop',
        price: 180,
        image: 'https://picsum.photos/seed/p139/300/200',
        categoryId: 'c51'
    },
    {id: 'p140', title: 'Knee Pads', price: 25, image: 'https://picsum.photos/seed/p140/300/200', categoryId: 'c51'},

    {
        id: 'p141',
        title: 'Volleyball Ball',
        price: 30,
        image: 'https://picsum.photos/seed/p141/300/200',
        categoryId: 'c52'
    },
    {
        id: 'p142',
        title: 'Volleyball Net',
        price: 80,
        image: 'https://picsum.photos/seed/p142/300/200',
        categoryId: 'c52'
    },
    {id: 'p143', title: 'Arm Sleeves', price: 20, image: 'https://picsum.photos/seed/p143/300/200', categoryId: 'c52'},
    {
        id: 'p144',
        title: 'Volleyball Shoes',
        price: 110,
        image: 'https://picsum.photos/seed/p144/300/200',
        categoryId: 'c52'
    }
];

export const optionData = [
    {
        value: 'delivery',
        text: 'Delivery'
    },
    {
        value: 'pickup',
        text: 'Pickup'
    }
]
