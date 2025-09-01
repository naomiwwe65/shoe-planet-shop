"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Button } from "@relume_io/relume-ui";

export default function CheckoutPage() {
  const { items, subtotal, shippingCost, totalPrice, clearCart, addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Kenya",
    
    // Payment Information
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
    
    // Additional Information
    notes: "",
    saveInfo: false
  });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode'];
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const handleNextStep = () => {
    if (currentStep === 1 && validateForm()) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Clear cart and show success
    clearCart();
    setOrderComplete(true);
    setIsProcessing(false);
  };

  // Test function to add a sample product
  const addTestProduct = () => {
    const testProduct = {
      id: "test-product",
      name: "Test Nike Air Max Kids",
      price: "KSh 7,500",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      color: "Blue",
      category: "Kids"
    };
    console.log('Adding test product:', testProduct);
    addToCart(testProduct);
    
    // Force a page refresh to show the updated cart
    setTimeout(() => {
      window.location.reload();
    }, 100);
  };

  // Debug: Log cart items to console
  console.log('Cart items in checkout:', items);
  console.log('Cart subtotal:', subtotal);
  console.log('Cart total:', totalPrice);

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-kicks-cream flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-kicks-black mb-2">Your cart is empty</h1>
          <p className="text-kicks-anthracite mb-6">Add some products to proceed to checkout</p>
          <div className="space-y-4">
            <Button 
              onClick={() => window.history.back()}
              className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite mr-4"
            >
              Continue Shopping
            </Button>
            <Button 
              onClick={addTestProduct}
              className="bg-kicks-anthracite text-kicks-white hover:bg-kicks-black"
            >
              Add Test Product (Debug)
            </Button>
          </div>
          <div className="mt-4 text-sm text-kicks-anthracite">
            Debug Info: Cart items count: {items.length}
          </div>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-kicks-cream flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="text-6xl mb-4">✅</div>
          <h1 className="text-2xl font-bold text-kicks-black mb-2">Order Confirmed!</h1>
          <p className="text-kicks-anthracite mb-6">
            Thank you for your order. You will receive a confirmation email shortly.
          </p>
          <div className="bg-kicks-white p-4 rounded-lg mb-6">
            <p className="text-sm text-kicks-anthracite">Order Number:</p>
            <p className="font-bold text-kicks-black">SPK-{Date.now().toString().slice(-8)}</p>
          </div>
          <Button 
            onClick={() => window.location.href = '/'}
            className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite"
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kicks-cream py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-kicks-black mb-2">Checkout</h1>
            <div className="flex justify-center items-center space-x-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-kicks-gold text-kicks-white' : 'bg-kicks-pearl text-kicks-anthracite'
              }`}>
                1
              </div>
              <div className={`w-16 h-1 ${
                currentStep >= 2 ? 'bg-kicks-gold' : 'bg-kicks-pearl'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-kicks-gold text-kicks-white' : 'bg-kicks-pearl text-kicks-anthracite'
              }`}>
                2
              </div>
              <div className={`w-16 h-1 ${
                currentStep >= 3 ? 'bg-kicks-gold' : 'bg-kicks-pearl'
              }`}></div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'bg-kicks-gold text-kicks-white' : 'bg-kicks-pearl text-kicks-anthracite'
              }`}>
                3
              </div>
            </div>
            <div className="flex justify-center space-x-8 mt-2 text-sm">
              <span className={currentStep >= 1 ? 'text-kicks-gold' : 'text-kicks-anthracite'}>Shipping</span>
              <span className={currentStep >= 2 ? 'text-kicks-gold' : 'text-kicks-anthracite'}>Payment</span>
              <span className={currentStep >= 3 ? 'text-kicks-gold' : 'text-kicks-anthracite'}>Review</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-kicks-white rounded-lg shadow-lg p-6">
                {/* Step 1: Shipping Information */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-2xl font-bold text-kicks-black mb-6">Shipping Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">Phone *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-kicks-black mb-2">Address *</label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">City *</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">Postal Code *</label>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-kicks-black mb-2">Order Notes</label>
                        <textarea
                          name="notes"
                          value={formData.notes}
                          onChange={handleInputChange}
                          rows="3"
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          placeholder="Any special instructions for delivery..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Payment Information */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-2xl font-bold text-kicks-black mb-6">Payment Information</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">Card Number *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-kicks-black mb-2">Cardholder Name *</label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-kicks-black mb-2">Expiry Date *</label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                            placeholder="MM/YY"
                            maxLength="5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-kicks-black mb-2">CVV *</label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-kicks-pearl rounded-lg focus:outline-none focus:border-kicks-gold"
                            placeholder="123"
                            maxLength="4"
                          />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="saveInfo"
                          checked={formData.saveInfo}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <label className="text-sm text-kicks-anthracite">Save payment information for future orders</label>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Review Order */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold text-kicks-black mb-6">Review Your Order</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-kicks-black mb-3">Shipping Information</h3>
                        <div className="bg-kicks-cream p-4 rounded-lg">
                          <p className="text-kicks-black">
                            {formData.firstName} {formData.lastName}
                          </p>
                          <p className="text-kicks-anthracite">{formData.email}</p>
                          <p className="text-kicks-anthracite">{formData.phone}</p>
                          <p className="text-kicks-anthracite">{formData.address}</p>
                          <p className="text-kicks-anthracite">{formData.city}, {formData.postalCode}</p>
                          <p className="text-kicks-anthracite">{formData.country}</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-kicks-black mb-3">Order Items</h3>
                        <div className="space-y-3">
                          {items.map((item) => (
                            <div key={item.id} className="flex items-center justify-between p-3 bg-kicks-cream rounded-lg">
                              <div className="flex items-center space-x-3">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 object-cover rounded"
                                />
                                <div>
                                  <p className="font-semibold text-kicks-black">{item.name}</p>
                                  <p className="text-sm text-kicks-anthracite">Qty: {item.quantity}</p>
                                </div>
                              </div>
                              <p className="font-semibold text-kicks-gold">{item.price}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <Button
                      onClick={handlePreviousStep}
                      variant="secondary"
                      className="bg-kicks-pearl text-kicks-black hover:bg-kicks-anthracite"
                    >
                      Previous
                    </Button>
                  )}
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <Button
                        onClick={handleNextStep}
                        disabled={currentStep === 1 && !validateForm()}
                        className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite disabled:opacity-50"
                      >
                        Next
                      </Button>
                    ) : (
                      <Button
                        onClick={handlePlaceOrder}
                        disabled={isProcessing}
                        className="bg-kicks-gold text-kicks-white hover:bg-kicks-anthracite disabled:opacity-50"
                      >
                        {isProcessing ? "Processing..." : "Place Order"}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-kicks-white rounded-lg shadow-lg p-6 sticky top-8">
                <h2 className="text-xl font-bold text-kicks-black mb-4">Order Summary</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-kicks-anthracite">Subtotal:</span>
                    <span className="font-semibold">KSh {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-kicks-anthracite">Shipping:</span>
                    <span className="font-semibold">
                      {shippingCost === 0 ? "Free" : `KSh ${shippingCost.toLocaleString()}`}
                    </span>
                  </div>
                  <div className="border-t border-kicks-pearl pt-3">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold text-kicks-black">Total:</span>
                      <span className="text-lg font-bold text-kicks-gold">KSh {totalPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-kicks-cream rounded-lg">
                  <h3 className="font-semibold text-kicks-black mb-2">Shipping Policy</h3>
                  <ul className="text-sm text-kicks-anthracite space-y-1">
                    <li>• Free shipping on orders over KSh 5,000</li>
                    <li>• Standard delivery: 2-5 business days</li>
                    <li>• Express delivery available</li>
                    <li>• Secure payment processing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
