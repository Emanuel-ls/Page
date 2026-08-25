"use client";

import { useState } from "react";
import type { ReactNode, ChangeEvent, MouseEvent } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ShoppingBag, Search, Heart, ShoppingCart, Laptop, Gamepad2, Headphones,
  Smartphone, Keyboard, Mouse, Watch, Mic, Plug, Camera, HardDrive, Zap,
  Monitor, Wifi, Volume2, Glasses, BatteryFull, Video, Plus, Check
} from "lucide-react";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  Icon: LucideIcon;
}

interface Spec {
  label: string;
  value: string;
}

interface FooterEntry {
  title: string;
  paragraphs: string[];
}

const products: Product[] = [
  { id: 1, title: "Pro Gaming Mechanical Keyboard", category: "Gaming", price: 89.99, Icon: Keyboard },
  { id: 2, title: "Wireless ANC Headphones", category: "Audio", price: 149.99, Icon: Headphones },
  { id: 3, title: 'Ultra Slim 14" Laptop', category: "Electronics", price: 799.99, Icon: Laptop },
  { id: 4, title: "Ergonomic Gaming Mouse", category: "Gaming", price: 49.99, Icon: Mouse },
  { id: 5, title: "Smart Sports Watch v2", category: "Smartphones", price: 199.99, Icon: Watch },
  { id: 6, title: "Studio Condenser Microphone", category: "Audio", price: 119.99, Icon: Mic },
  { id: 7, title: "USB-C Docking Station", category: "Electronics", price: 79.99, Icon: Plug },
  { id: 8, title: "4K Webcam Pro", category: "Electronics", price: 59.99, Icon: Camera },
  { id: 9, title: "Portable SSD 1TB", category: "Electronics", price: 129.99, Icon: HardDrive },
  { id: 10, title: "Wireless Charging Pad", category: "Electronics", price: 29.99, Icon: Zap },
  { id: 11, title: '27" 4K Monitor', category: "Electronics", price: 349.99, Icon: Monitor },
  { id: 12, title: "Mesh WiFi Router", category: "Electronics", price: 159.99, Icon: Wifi },
  { id: 13, title: "Bluetooth Portable Speaker", category: "Audio", price: 69.99, Icon: Volume2 },
  { id: 14, title: "RGB Gaming Headset", category: "Gaming", price: 79.99, Icon: Headphones },
  { id: 15, title: "Mechanical Numpad", category: "Gaming", price: 34.99, Icon: Keyboard },
  { id: 16, title: "VR Headset", category: "Gaming", price: 399.99, Icon: Glasses },
  { id: 17, title: "Power Bank 20000mAh", category: "Smartphones", price: 39.99, Icon: BatteryFull },
  { id: 18, title: "Smartphone Gimbal Stabilizer", category: "Smartphones", price: 89.99, Icon: Video },
];

const CATEGORY_ICONS = [
  { name: "Electronics", Icon: Laptop },
  { name: "Gaming", Icon: Gamepad2 },
  { name: "Audio", Icon: Headphones },
  { name: "Smartphones", Icon: Smartphone },
];

const PRODUCT_DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

function getSpecs(product: Product): Spec[] {
  return [
    { label: "Brand", value: "Lorem Tech" },
    { label: "Model", value: `LX-${1000 + product.id}` },
    { label: "Weight", value: "0.45 kg" },
    { label: "Dimensions", value: "12 x 8 x 3 cm" },
    { label: "Material", value: "Lorem ipsum alloy" },
    { label: "Warranty", value: "12 months" },
  ];
}

const FOOTER_CONTENT: Record<string, FooterEntry> = {
  about: {
    title: "About Us",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.",
    ],
  },
  careers: {
    title: "Careers",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Curabitur pretium tincidunt lacus, ut interdum tellus elit sed risus. Interested candidates can check back soon for open positions.",
    ],
  },
  blog: {
    title: "Blog",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
  },
  help: {
    title: "Help Center",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat in id.",
      "Cursus sit amet dictum sit amet, justo donec enim diam, vulputate vel pharetra vel, suscipit nec magna. For further assistance, please reach out through our contact channels.",
    ],
  },
  returns: {
    title: "Returns",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Items may be returned within 30 days of purchase in their original condition.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Refunds are processed within 5-7 business days after inspection.",
    ],
  },
  shipping: {
    title: "Shipping",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orders are typically processed within 1-2 business days.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Estimated delivery times vary by location.",
    ],
  },
};

interface BackdropProps {
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

function Backdrop({ onClose, children, maxWidth = "max-w-md" }: BackdropProps) {
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`bg-slate-900 border border-slate-800 rounded-xl p-6 sm:p-8 w-full ${maxWidth} max-h-[85vh] overflow-y-auto shadow-2xl`}
      >
        {children}
      </div>
    </div>
  );
}

export default function NovaStore() {
  const [cart, setCart] = useState<Product[]>([]);
  const [view, setView] = useState("home");
  const [heading, setHeading] = useState("Featured Products");
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [infoKey, setInfoKey] = useState<string | null>(null);
  const [addedId, setAddedId] = useState<number | null>(null);

  const showHero = view === "home";
  const showCategories = view === "home" || view === "categories";
  const showProducts = view === "home" || view === "shop" || view === "deals";
  const showNewsletter = view === "home" || view === "contact";

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  function showPage(page: string) {
    setView(page);
    if (page === "home") {
      setHeading("Featured Products");
      setDisplayedProducts(products);
    } else if (page === "shop") {
      setHeading("All Products");
      setDisplayedProducts(products);
    } else if (page === "deals") {
      setHeading("Hot Deals (Under $100)");
      setDisplayedProducts(products.filter((p) => p.price < 100));
    }
  }

  function filterByCategory(categoryName: string) {
    setView("shop");
    setHeading(`${categoryName} Department`);
    setDisplayedProducts(products.filter((p) => p.category === categoryName));
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    setSearchValue(val);
    setView("shop");
    const lower = val.toLowerCase().trim();
    setHeading(`Search results for: "${val}"`);
    setDisplayedProducts(
      products.filter(
        (p) => p.title.toLowerCase().includes(lower) || p.category.toLowerCase().includes(lower)
      )
    );
  }

  function addToCart(e: MouseEvent, product: Product) {
    e.stopPropagation();
    setCart((prev) => [...prev, product]);
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 600);
  }

  function removeFromCart(index: number) {
    setCart((prev) => prev.filter((_, i) => i !== index));
  }

  function checkout() {
    alert("Order placed successfully! Thank you for testing NovaStore.");
    setCart([]);
    setCartOpen(false);
  }

  function AddToCartButton({ product, className = "" }: { product: Product; className?: string }) {
    const isAdded = addedId === product.id;
    return (
      <button
        onClick={(e) => addToCart(e, product)}
        className={`w-full py-3 rounded-md font-display font-semibold flex items-center justify-center gap-2 text-white transition-colors ${
          isAdded ? "bg-emerald-500" : "bg-indigo-500 hover:bg-indigo-600"
        } ${className}`}
      >
        {isAdded ? (
          <>
            <Check size={16} /> Added!
          </>
        ) : (
          <>
            <Plus size={16} /> Add to Cart
          </>
        )}
      </button>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 px-[5%] py-4">
        <div className="flex items-center gap-2 text-indigo-400 font-display font-bold text-2xl">
          <ShoppingBag size={24} />
          NovaStore
        </div>

        <div className="flex items-center bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 w-full sm:w-72 gap-2 order-3 sm:order-none">
          <Search size={16} className="text-slate-500 shrink-0" />
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search products..."
            className="bg-transparent border-none outline-none w-full text-sm text-slate-100 placeholder-slate-500"
          />
        </div>

        <ul className="hidden lg:flex list-none gap-8 font-medium text-slate-300">
          {["home", "shop", "categories", "deals", "contact"].map((r) => (
            <li key={r}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  showPage(r);
                }}
                className="hover:text-indigo-400 capitalize"
              >
                {r}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <button className="p-2 text-slate-300 hover:text-indigo-400" aria-label="Wishlist">
            <Heart size={20} />
          </button>
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 text-slate-300 hover:text-indigo-400"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />
            <span
              className={`absolute -top-0.5 -right-0.5 bg-indigo-500 text-white text-xs font-mono font-bold rounded-full px-1.5 py-0.5 leading-none transition-transform duration-200 ${
                addedId ? "scale-125" : "scale-100"
              }`}
            >
              {cart.length}
            </span>
          </button>
        </div>
      </nav>

      {/* HERO */}
      {showHero && (
        <section
          className="relative overflow-hidden px-[5%] py-24 flex items-center min-h-[60vh]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(99,102,241,0.12), transparent 45%), radial-gradient(circle at 85% 80%, rgba(251,191,36,0.06), transparent 45%)",
          }}
        >
          <div className="max-w-[1200px] mx-auto w-full">
            <span className="font-mono text-amber-400 font-bold tracking-widest text-sm">
              // LIMITED OFFER
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-slate-100 my-4 max-w-xl leading-tight">
              Upgrade Your Setup
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-md">
              Discover premium electronics, gaming gear and accessories with exclusive discounts.
            </p>
            <button
              onClick={() => showPage("shop")}
              className="bg-indigo-500 text-white px-10 py-4 rounded-lg font-display font-semibold hover:bg-indigo-600 hover:-translate-y-0.5 transition-all"
            >
              Shop Now
            </button>
          </div>
        </section>
      )}

      {/* CATEGORIES */}
      {showCategories && (
        <section className="max-w-[1200px] mx-auto my-20 px-[5%]">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORY_ICONS.map(({ name, Icon }) => (
              <div
                key={name}
                onClick={() => filterByCategory(name)}
                className="bg-slate-900 border border-slate-800 rounded-xl p-10 text-center cursor-pointer transition-all hover:-translate-y-1 hover:border-indigo-500"
              >
                <Icon size={40} className="text-indigo-400 mb-4 mx-auto" />
                <h3 className="font-display text-lg font-semibold">{name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* PRODUCTS */}
      {showProducts && (
        <section className="max-w-[1200px] mx-auto my-20 px-[5%]">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">{heading}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProducts.length === 0 ? (
              <p className="col-span-full text-center text-slate-500 py-8">No products found.</p>
            ) : (
              displayedProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden flex flex-col cursor-pointer transition-all hover:-translate-y-1 hover:border-indigo-500/50"
                >
                  <div className="bg-slate-800/50 h-56 flex items-center justify-center text-slate-500">
                    <product.Icon size={64} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs uppercase text-amber-400 font-mono font-bold tracking-wider mb-2">
                      {product.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold mb-2 text-slate-100">{product.title}</h3>
                    <p className="font-mono text-xl font-bold mt-auto mb-4 text-indigo-400">
                      ${product.price.toFixed(2)}
                    </p>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      )}

      {/* NEWSLETTER */}
      {showNewsletter && (
        <section className="bg-slate-900 border-y border-slate-800 text-center py-20 px-[5%]">
          <h2 className="font-display text-3xl font-bold mb-2">Stay Updated</h2>
          <p className="text-slate-400 mb-8">Subscribe to receive offers and new arrivals.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-md border border-slate-700 bg-slate-950 text-slate-100 placeholder-slate-500 text-sm"
            />
            <button
              onClick={() => alert("Subscribed successfully!")}
              className="bg-indigo-500 text-white px-6 py-3 rounded-md font-display font-semibold hover:bg-indigo-600"
            >
              Subscribe
            </button>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 px-[5%] pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-indigo-400 mb-4">NovaStore</h3>
            <p className="text-slate-500">Premium products for everyday life.</p>
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Company</h4>
            {["about", "careers", "blog"].map((key) => (
              <button
                key={key}
                onClick={() => setInfoKey(key)}
                className="block text-left text-slate-500 mb-3 hover:text-indigo-400"
              >
                {FOOTER_CONTENT[key].title}
              </button>
            ))}
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Support</h4>
            {["help", "returns", "shipping"].map((key) => (
              <button
                key={key}
                onClick={() => setInfoKey(key)}
                className="block text-left text-slate-500 mb-3 hover:text-indigo-400"
              >
                {FOOTER_CONTENT[key].title}
              </button>
            ))}
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <a href="#" className="block text-slate-500 mb-3">Instagram</a>
            <a href="#" className="block text-slate-500 mb-3">Facebook</a>
            <a href="#" className="block text-slate-500 mb-3">Twitter</a>
          </div>
        </div>
        <p className="text-center text-slate-500 text-sm border-t border-slate-800 pt-8 max-w-[1200px] mx-auto font-mono">
          © 2026 NovaStore. All rights reserved.
        </p>
      </footer>

      {/* CART MODAL */}
      {cartOpen && (
        <Backdrop onClose={() => setCartOpen(false)}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
            <h2 className="font-display text-xl font-bold">Your Shopping Cart</h2>
            <button onClick={() => setCartOpen(false)} className="text-3xl leading-none text-slate-500 hover:text-slate-100">
              &times;
            </button>
          </div>
          <div className="max-h-64 overflow-y-auto mb-6">
            {cart.length === 0 ? (
              <p className="text-center text-slate-500 py-4">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-slate-800">
                  <div>
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="font-mono text-sm text-indigo-400 font-bold">${item.price.toFixed(2)}</p>
                  </div>
                  <button onClick={() => removeFromCart(index)} className="text-red-400 text-sm hover:underline">
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="flex justify-between text-lg font-bold mb-4">
            <span className="font-display">Total:</span>
            <span className="font-mono">${cartTotal.toFixed(2)}</span>
          </div>
          <button onClick={checkout} className="bg-indigo-500 text-white w-full py-3 rounded-md font-display font-semibold hover:bg-indigo-600">
            Proceed to Payment
          </button>
        </Backdrop>
      )}

      {/* PRODUCT DETAILS MODAL */}
      {selectedProduct && (
        <Backdrop onClose={() => setSelectedProduct(null)} maxWidth="max-w-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
            <h2 className="font-display text-xl font-bold">{selectedProduct.title}</h2>
            <button
              onClick={() => setSelectedProduct(null)}
              className="text-3xl leading-none text-slate-500 hover:text-slate-100"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-none sm:w-52 h-52 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-500">
              <selectedProduct.Icon size={72} />
            </div>
            <div className="flex-1">
              <span className="text-xs uppercase text-amber-400 font-mono font-bold tracking-wider">
                {selectedProduct.category}
              </span>
              <p className="font-mono text-2xl font-bold my-2 text-indigo-400">
                ${selectedProduct.price.toFixed(2)}
              </p>
              <p className="text-slate-400 mb-6">{PRODUCT_DESCRIPTION}</p>
              <h4 className="font-display font-semibold mb-3">Specifications</h4>
              <ul className="border border-slate-800 rounded-lg overflow-hidden mb-6 font-mono text-sm">
                {getSpecs(selectedProduct).map((spec, i) => (
                  <li
                    key={spec.label}
                    className={`flex justify-between px-4 py-2.5 ${i % 2 === 1 ? "bg-slate-800/40" : ""}`}
                  >
                    <span className="text-slate-500">{spec.label}</span>
                    <span className="font-bold text-slate-100">{spec.value}</span>
                  </li>
                ))}
              </ul>
              <AddToCartButton product={selectedProduct} />
            </div>
          </div>
        </Backdrop>
      )}

      {/* FOOTER INFO MODAL */}
      {infoKey && (
        <Backdrop onClose={() => setInfoKey(null)}>
          <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-4">
            <h2 className="font-display text-xl font-bold">{FOOTER_CONTENT[infoKey].title}</h2>
            <button onClick={() => setInfoKey(null)} className="text-3xl leading-none text-slate-500 hover:text-slate-100">
              &times;
            </button>
          </div>
          <div className="text-slate-400 max-h-[60vh] overflow-y-auto space-y-4">
            {FOOTER_CONTENT[infoKey].paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Backdrop>
      )}
    </div>
  );
}
