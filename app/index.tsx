import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Button, FlatList, Icon, Text } from "@/components";
import { useEffect } from "react";
import api from "@/config/api-config";
import { routes } from "@/config/api-config/routes";
import { useDispatch, useSelector } from "react-redux";
import {
  addProducts,
  selectCardProductCount,
  selectProducts,
  selectTotalPrice,
} from "@/config/store-config/features/products";
import { data } from "@/constants/data";
import ProductCard from "@/components/product-card";
import ProductModal from "@/components/product-modal";
import CartProductList from "@/components/cart-product-list";

const index = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const handleGetProducts = async () => {
    await api
      .get(routes.getAllProducts)
      .then((response) => dispatch(addProducts(response)))
      .catch((err) => dispatch(addProducts(data)));
      setIsLoading(false);
  };
  useEffect(() => {
    handleGetProducts();
  }, []);
  const [visible, setVisible] = useState(false);
  const handleToggleModal = (index: number) => {
    setVisible(!visible);
    setSelectedIndex(index);
    if (visible && selectedIndex !== -1) {
      setSelectedIndex(-1);
    }
  };
  const [visibleCardProduct, setVisibleCartProduct] = useState(false);
  const handleToggleVisibleCardProduct = () => {
    setVisibleCartProduct(!visibleCardProduct);
  };
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const products = useSelector(selectProducts);
  const totalPrice = useSelector(selectTotalPrice);
  const count = useSelector(selectCardProductCount);
  if (!products) return null;
  return (
    <>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            backgroundColor: "lightblue",
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ textDecorationLine: "underline" }}
              fontWeight="bold"
              size={18}
            >
              Shopping
            </Text>
          </View>
          <Button style={{ width: 100 }} onPress={handleToggleVisibleCardProduct}>
            <View style={{ marginTop: 10, alignItems: "center", justifyContent: 'center', position: 'relative' }}>
              <Icon
                type="FontAwesome"
                name="shopping-cart"
                size={20}
                color="demo"
              />
              <Text
                style={{
                  top: -8,
                  right: 26,
                  position: "absolute",
                  color: 'red',
                  fontWeight: "bold",
                }}
              >
                {count}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                size={20}
                fontWeight="bold"
              >{`Rs. ${totalPrice}`}</Text>
            </View>
          </Button>
        </View>
        {
          isLoading && (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size="large" color="lightblue" />
            </View>
          )
        }
        {
          products?.length === 0 && !isLoading && (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text size={18} color="darkgray">No products found.</Text>
            </View>
          )
        }
        {products?.length > 0 && (
          <FlatList
            data={products}
            renderItem={({ item, index }) => (
              <ProductCard
                item={item}
                index={index}
                onPress={handleToggleModal}
              />
            )}
          />
        )}
      </View>
      {visible && (
        <ProductModal
          item={products[selectedIndex]}
          index={selectedIndex}
          visible={visible}
          onClose={() => {
            handleToggleModal(-1);
          }}
        />
      )}
      {visibleCardProduct && (
        <CartProductList
          visible={visibleCardProduct}
          onClose={handleToggleVisibleCardProduct}
        />
      )}
    </>
  );
};

export default index;
