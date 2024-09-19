import { useNavigate, useParams } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";

const categoryList = [
    { name: 'fashion' },
    { name: 'shirt' },
    { name: 'jacket' },
    { name: 'mobile' },
    { name: 'laptop' },
    { name: 'shoes' },
    { name: 'home' },
    { name: 'books' }
];

const UpdateProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProductFunction } = context;

    const navigate = useNavigate();
    const { id } = useParams();

    // Product state
    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        time: Timestamp.now(),
        date: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric"
        })
    });

    // Get Single Product Function
    const getSingleProductFunction = async () => {
        if (!id) return;

        setLoading(true);
        try {
            const productDoc = await getDoc(doc(fireDB, "products", id));
            if (productDoc.exists()) {
                const productData = productDoc.data();
                setProduct({
                    ...productData,
                    time: productData?.time || Timestamp.now(),
                    date: productData?.date || new Date().toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric"
                    })
                });
            } else {
                toast.error("Product not found");
            }
        } catch (error) {
            console.error("Error fetching product:", error);
            toast.error("Error fetching product");
        } finally {
            setLoading(false);
        }
    };

    // Update Product Function
    const updateProduct = async () => {
        if (!id) return;

        setLoading(true);
        try {
            await setDoc(doc(fireDB, "products", id), product);
            toast.success("Product updated successfully");
            getAllProductFunction();
            navigate("/admin-dashboard");
        } catch (error) {
            console.error("Error updating product:", error);
            toast.error("Error updating product");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getSingleProductFunction();
        console.log("useEffect re-rendered");
    }, [id]);

    return (
        <div className='flex justify-center items-center h-screen'>
            {loading && <Loader />}
            <div className="login_Form bg-pink-50 px-8 py-6 border border-pink-100 rounded-xl shadow-md">
                {/* Top Heading */}
                <h2 className='text-center text-2xl font-bold text-pink-500 mb-5'>
                    Update Product
                </h2>

                {/* Product Title */}
                <div className="mb-3">
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={(e) => setProduct({ ...product, title: e.target.value })}
                        placeholder='Product Title'
                        className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                    />
                </div>

                {/* Product Price */}
                <div className="mb-3">
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={(e) => setProduct({ ...product, price: e.target.value })}
                        placeholder='Product Price'
                        className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                    />
                </div>

                {/* Product Image URL */}
                <div className="mb-3">
                    <input
                        type="text"
                        name="productImageUrl"
                        value={product.productImageUrl}
                        onChange={(e) => setProduct({ ...product, productImageUrl: e.target.value })}
                        placeholder='Product Image URL'
                        className='bg-pink-50 border text-pink-300 border-pink-200 px-2 py-2 w-96 rounded-md outline-none placeholder-pink-300'
                    />
                </div>

                {/* Product Category */}
                <div className="mb-3">
                    <select
                        value={product.category}
                        onChange={(e) => setProduct({ ...product, category: e.target.value })}
                        className="w-full px-1 py-2 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none"
                    >
                        <option disabled>Select Product Category</option>
                        {categoryList.map(({ name }, index) => (
                            <option key={index} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Product Description */}
                <div className="mb-3">
                    <textarea
                        value={product.description}
                        onChange={(e) => setProduct({ ...product, description: e.target.value })}
                        placeholder="Product Description"
                        rows="5"
                        className="w-full px-2 py-1 text-pink-300 bg-pink-50 border border-pink-200 rounded-md outline-none placeholder-pink-300"
                    />
                </div>

                {/* Update Product Button */}
                <div className="mb-3">
                    <button
                        onClick={updateProduct}
                        className='bg-pink-500 hover:bg-pink-600 w-full text-white text-center py-2 font-bold rounded-md'
                    >
                        Update Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProductPage;
