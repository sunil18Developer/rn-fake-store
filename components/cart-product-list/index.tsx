import React from "react";
import { Button, FlatList, Icon, Modal, Text } from "..";
import ProductCard from "../product-card";
import { useCartProductList } from "./hooks";
import { View } from "react-native";

interface CartProductListProps {
  visible: boolean;
  onClose: () => void;
}

const CartProductList: React.FC<CartProductListProps> = ({
  visible,
  onClose,
}) => {
  const { cartProducts } = useCartProductList();
  return (
    <Modal visible={visible} onClose={onClose}>
      <View
        style={{
          flex: 1,
          marginTop: "50%",
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          borderTopEndRadius: 50,
          borderTopStartRadius: 50,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
        }}
      >
        <View
          style={{
            marginTop: 10,
            padding: 10,
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Button style={{ flexDirection: "row" }} onPress={onClose}>
            <Icon
              type="MaterialCommunityIcons"
              name="close"
              size={24}
              color="black"
            />
            <Text size={18} fontWeight="bold">
              Close
            </Text>
          </Button>
        </View>
        <FlatList
          data={cartProducts}
          renderItem={({ item, index }) => (
            <ProductCard item={item} index={index} onPress={() => {}} isCartModal />
          )}
          keyExtractor={(item) => String(item.id)}
          ListEmptyComponent={
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>No Products add in carts</Text>
            </View>
          }
        />
      </View>
    </Modal>
  );
};

export default CartProductList;
