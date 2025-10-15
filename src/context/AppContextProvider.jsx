import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { AppContext } from "./AppContext"; // Import the context from the separate file

// Configure axios instance for the whole app
axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// This file now ONLY exports the provider component as a default
export default function AppContextProvider({ children }) {
  const currency = import.meta.env.VITE_CURRENCY;
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin, setShowUserLogin] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");

  // --- API Functions ---

  const fetchSeller = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/seller/is-auth");
      setIsSeller(data.success === true);
    } catch (error) {
      setIsSeller(false);
      console.error("Failed to fetch seller status:", error);
    }
  }, []);

  const fetchUser = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/user/is-auth");
      if (data.success) {
        setUser(data.user);
        setCartItems(data.user.cartItems || {});
      }
    } catch (error) {
      setUser(null);
      console.error("Failed to fetch user status:", error);
    }
  }, []);

  const fetchProducts = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/product/list");
      if (data.success) {
        setProducts(data.products);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Failed to fetch products");
    }
  }, []);

  // --- Cart Management ---

  const addToCart = useCallback((itemId) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
      newCart[itemId] = (newCart[itemId] || 0) + 1;
      return newCart;
    });
    toast.success("Added to Cart");
  }, []);

  const updateCartItem = useCallback((itemId, quantity) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
      newCart[itemId] = quantity;
      return newCart;
    });
    toast.success("Cart Updated");
  }, []);

  const removeFromCart = useCallback((itemId) => {
    setCartItems((prevCart) => {
      const newCart = { ...prevCart };
      if (newCart[itemId] > 1) {
        newCart[itemId] -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
    toast.success("Removed from Cart");
  }, []);

  const getCartCount = useMemo(() => {
    return Object.values(cartItems).reduce((total, qty) => total + qty, 0);
  }, [cartItems]);

  const getCartAmount = useMemo(() => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo && cartItems[itemId] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[itemId];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  }, [cartItems, products]);

  // --- Effects ---

  // Initial data fetch on component mount
  useEffect(() => {
    fetchUser();
    fetchSeller();
    fetchProducts();
  }, [fetchUser, fetchSeller, fetchProducts]);

  // Update cart in the database whenever it changes for a logged-in user
  useEffect(() => {
    const updateCart = async () => {
      try {
        await axios.post("/api/cart/update", { cartItems });
      } catch (error) {
        toast.error("Failed to sync cart.");
        console.error("Cart sync error:", error);
      }
    };

    if (user) {
      updateCart();
    }
  }, [cartItems, user]);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      navigate,
      user,
      setUser,
      isSeller,
      setIsSeller,
      showUserLogin,
      setShowUserLogin,
      products,
      currency,
      cartItems,
      addToCart,
      updateCartItem,
      removeFromCart,
      searchQuery,
      setSearchQuery,
      getCartAmount,
      getCartCount,
      fetchProducts,
    }),
    [
      navigate,
      user,
      isSeller,
      showUserLogin,
      products,
      currency,
      cartItems,
      addToCart,
      updateCartItem,
      removeFromCart,
      searchQuery,
      getCartAmount,
      getCartCount,
      fetchProducts,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}