<?php

namespace App\Http\Controllers;

use App\Data\StripeProductData;
use App\Models\StripeProduct;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StripeProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $products = StripeProduct::active()
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(fn($product) => StripeProductData::fromModel($product));

        return Inertia::render('products/index', [
            'products' => $products,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('products/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|url',
            'price' => 'required|numeric|min:0',
            'currency' => 'required|string|size:3',
            'active' => 'boolean',
        ]);

        $product = StripeProduct::create($validated);

        return redirect()->route('products.index')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(StripeProduct $stripeProduct): Response
    {
        return Inertia::render('products/show', [
            'product' => StripeProductData::fromModel($stripeProduct),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(StripeProduct $stripeProduct): Response
    {
        return Inertia::render('products/edit', [
            'product' => StripeProductData::fromModel($stripeProduct),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, StripeProduct $stripeProduct)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|url',
            'price' => 'required|numeric|min:0',
            'currency' => 'required|string|size:3',
            'active' => 'boolean',
        ]);

        $stripeProduct->update($validated);

        return redirect()->route('products.index')
            ->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(StripeProduct $stripeProduct)
    {
        $stripeProduct->delete();

        return redirect()->route('products.index')
            ->with('success', 'Product deleted successfully.');
    }
}
