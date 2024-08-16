import React from "react";
import { useProductModal } from "./hooks";
import { Image, View } from "react-native";
import Modal from "../modal";
import { Button, Icon, Text } from "..";

interface IProps {
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
  };
  index: number;
  visible: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<IProps> = (props) => {
  const { index, item, visible, onClose, handleAddCartButton } = useProductModal(props);
  return (
    <Modal visible={visible} onClose={onClose}>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            backgroundColor: "white",
            padding: 30,
            borderWidth: 2,
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            borderColor: "lightgray",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
          }}
        >
          <View
            style={{
              width: 180,
              height: 220,
              backgroundColor: "lightgray",
              borderRadius: 5,
            }}
          >
            <Image
              source={{ uri: item?.image }}
              resizeMethod="auto"
              resizeMode="cover"
              style={{ width: 180, height: 220, borderRadius: 5 }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginTop: 10,
            }}
          >
            <Text>Description:</Text>
            <View
              style={{
                width: "70%",
                marginLeft: 10,
              }}
            >
              <Text>{item?.description}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <Button
              onPress={handleAddCartButton}
              style={{
                flexDirection: "row",
                backgroundColor: "red",
                alignItems: 'center',
                paddingVertical: 15,
                paddingHorizontal: 30,
                borderRadius: 10,
              }}
            >
              <Icon type="FontAwesome" name="shopping-cart" size={24} color="white" />
              <Text style={{ marginLeft: 8 }} size={16} fontWeight="bold" color="white">Add To Cart</Text>
            </Button>
            <Button
              style={{
                backgroundColor: "lightgray",
                paddingVertical: 15,
                paddingHorizontal: 30,
                borderRadius: 10,
                marginLeft: 20,
              }}
              onPress={onClose}
            >
              <Text size={16} fontWeight="bold">Close</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;
