import BrandDynamicPage from "../about/BrandDynamicPage.jsx";

const HighJewelry = () => {
    const factoryData = {
        title: "High Jewelry | Fonon",
        heroImage: "",
        sections: [], // 👈 emptied sections, structure kept
        galleryImages: [
            "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800",
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
            "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?w=800",
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800",
        ],
    };

    return <BrandDynamicPage {...factoryData} />;
};

export default HighJewelry;
