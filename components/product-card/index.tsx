import React from "react";
import { View, Image } from "react-native";
import { Button, Icon, Text } from "..";
import { useProductCard } from "./hooks";

export interface ProductItem {
  item: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: {
      count: number;
      rate: number;
    };
    quantity: number;
  };
  onPress: (index: number) => void;
  index: number;
  isCartModal?: boolean;
}

const ProductCard: React.FC<ProductItem> = ({
  item,
  onPress,
  index,
  isCartModal,
}) => {
  const { id, title, price, description, image, category, rating } = item;
  const {
    handleDecrementCartButton,
    handleIncrementCartButton,
    handleRemoveCartProduct,
  } = useProductCard(item);
  return (
    <Button
      disabled={isCartModal}
      onPress={() => {
        onPress(index);
      }}
      style={{
        borderWidth: 2,
        borderRadius: 16,
        padding: 20,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginBottom: 16,
        marginTop: 4,
        borderColor: "lightgray",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
    >
      <View
        style={{
          width: 100,
          height: 140,
          backgroundColor: "lightgray",
          borderRadius: 5,
        }}
      >
        <Image
          source={{ uri: image }}
          resizeMethod="auto"
          resizeMode="cover"
          style={{ width: 100, height: 140, borderRadius: 5 }}
        />
      </View>
      <View style={{ width: 220, height: 120, marginLeft: 10 }}>
        <Text size={16} fontWeight="medium" lineBreakMode="tail" numberOfLines={2}>
          {title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 2, marginTop: 4 }}>
          <View style={{ flexDirection: "row", alignItems: "center" , marginHorizontal: 5}}>
            {Array(5)
              .fill(0)
              .map((item, index) =>
                index + 1 < Math.round(rating.rate) ? (
                  <Icon
                    key={index}
                    type="MaterialCommunityIcons"
                    name="star"
                    size={20}
                    color="gold"
                  />
                ) : (
                  <Icon
                    key={index}
                    type="MaterialCommunityIcons"
                    name="star"
                    size={20}
                    color="lightgray"
                  />
                )
              )}
          </View>
          <Text size={14} color="darkgray" fontWeight="bolder">{item.rating.count}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 3 }}>
          <View style={{ flex: 1 }}>
            <Text size={18} fontWeight="bold">Rs. {price}</Text>
          </View>
          {isCartModal && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "lightgray",
                borderRadius: 5,
                paddingHorizontal: 5,
                paddingVertical: 1,
                marginLeft: 5,
              }}
            >
              <Button onPress={handleDecrementCartButton}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="minus"
                  size={16}
                  color="black"
                />
              </Button>
              <Text style={{ marginLeft: 5, marginRight: 5 }}>
                {item.quantity}
              </Text>
              <Button onPress={handleIncrementCartButton}>
                <Icon
                  type="MaterialCommunityIcons"
                  name="plus"
                  size={16}
                  color="black"
                />
              </Button>
            </View>
          )}
        </View>
        {!isCartModal && <Text size={16} color="darkgray">{`Catergory: ${category}`}</Text>}
        {isCartModal && (
          <Button
            onPress={handleRemoveCartProduct}
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
              borderRadius: 5,
              borderWidth: 0.5,
              marginTop: 10,
            }}
          >
            <Icon
              type="MaterialCommunityIcons"
              name="delete-sweep"
              color="black"
              size={24}
            />
            <Text size={14} fontWeight="bold">Remove from cart</Text>
          </Button>
        )}
      </View>
    </Button>
  );
};

export default ProductCard;
