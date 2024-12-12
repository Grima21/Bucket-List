"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { XCircle, Gift, TreesIcon as ChristmasTree } from "lucide-react";
import AnimatedGift from "@/components/AnimatedGift";

export default function ChristmasBucketList() {
  const [items, setItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [showGift, setShowGift] = useState(false);
  const [shakeTree, setShakeTree] = useState(false);

  const addItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      setItems([...items, newItem.trim()]);
      setNewItem("");
      setShowGift(true);
      setShakeTree(true);
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (shakeTree) {
      const timer = setTimeout(() => setShakeTree(false), 500);
      return () => clearTimeout(timer);
    }
  }, [shakeTree]);

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm shadow-lg">
        <CardHeader className="text-center">
          <ChristmasTree
            className={`w-12 h-12 mx-auto text-green-600 transition-transform ${
              shakeTree ? "animate-shake" : ""
            }`}
          />
          <CardTitle className="text-3xl font-bold text-red-600">
            Mi Lista de Deseos Navideños
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={addItem} className="flex gap-2 mb-4">
            <Input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Agregar un deseo..."
              className="flex-grow"
            />
            <Button type="submit" className="bg-red-600 hover:bg-red-700">
              <Gift className="mr-2 h-4 w-4" /> Agregar
            </Button>
          </form>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-green-100 p-2 rounded animate-fadeIn"
              >
                <span className="text-green-800">{item}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeItem(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <XCircle className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
      {showGift && <AnimatedGift />}
    </div>
  );
}
