import React from "react";
import "./shop.css";

const products = [
    {
        id: 1,
        name: "Adjustable Dumbbells",
        description: "Compact and versatile dumbbells for strength training.",
        price: 79.99,
        image: "https://i5.walmartimages.com/seo/FitRx-SmartBell-Quick-Select-Adjustable-Dumbbell-for-Home-Gym-5-52-5-lbs-Weight-Black-Single_2ca41580-034b-4113-be6b-41148163f94f.ccfc5eff9cced3c1c2296e670813f5a2.png",
    },
    {
        id: 2,
        name: "Yoga Mat",
        description: "Non-slip, cushioned yoga mat for all fitness levels.",
        price: 29.99,
        image: "https://www.health.com/thmb/yLgAbSF6Cy_c-bDxnD52OGFbAek=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/amazon-balancefrom-all-purpose-exercise-yoga-mat-7c5dfaa6472a4d549f506aab3293335e.jpg",
    },
    {
        id: 3,
        name: "Resistance Bands Set",
        description: "Set of 5 resistance bands for strength and flexibility.",
        price: 24.99,
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1687347420-614nOWKEtL.jpg?crop=1xw:1.00xh;center,top&resize=980:*",
    },
    {
        id: 4,
        name: "Fitness Tracker Watch",
        description: "Track your workouts, heart rate, and sleep quality.",
        price: 99.99,
        image: "https://m.media-amazon.com/images/I/716qQOJtDtL._AC_UL800_QL65_.jpg",
    },
    {
        id: 5,
        name: "Jump Rope",
        description: "Durable and adjustable jump rope for cardio workouts.",
        price: 14.99,
        image: "https://www.verywellfit.com/thmb/9k-vVYuWZ7SGMmo5Wo708gFCocw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/FitnessFactorAdjustableJumpRope-f1c36c3470b045f4871240fed4cf5ea2.jpg",
    },
    {
        id: 6,
        name: "Foam Roller",
        description: "Relieve muscle tension and improve flexibility.",
        price: 34.99,
        image: "https://images.pexels.com/photos/60331/pexels-photo-60331.jpeg?cs=srgb&dl=exercise-foam-roller-foam-rollers-60331.jpg&fm=jpg",
    },
];

const Shop = () => {
    const getAmazonUrl = (id) => {
        switch (id) {
            case 1:
                return "https://www.amazon.in/s?k=adjustable+dumbbells";
            case 2:
                return "https://www.amazon.in/s?k=yoga+mat";
            case 3:
                return "https://www.amazon.in/s?k=resistance+band";
            case 4:
                return "https://www.amazon.in/s?k=fitness+tracker+watch";
            case 5:
                return "https://www.amazon.in/s?k=jump+rope";
            case 6:
                return "https://www.amazon.in/s?k=foam+roller";
            default:
                return "https://www.amazon.in";
        }
    };

    return (
        <div className="shop-container">
            <h1 className="shop-title">Fitness Shop</h1>
            <p className="shop-subtitle">
                Discover our premium fitness gear to help you reach your goals.
            </p>

            <div className="products-grid">
                {products.map(({ id, name, description, price, image }) => (
                    <div key={id} className="product-card">
                        <div className="product-image-wrapper">
                            <img src={image} alt={name} className="product-image" />
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">{name}</h3>
                            <p className="product-description">{description}</p>
                            <div className="product-footer">
                                <span className="product-price">${price.toFixed(2)}</span>
                                <button
                                    className="add-to-cart-btn"
                                    onClick={() => window.location.href = getAmazonUrl(id)}
                                    aria-label={`Buy ${name} on Amazon`}
                                >
                                    Buy on Amazon
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;