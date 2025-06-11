"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ZoomIn } from "lucide-react"
import { galleryItems, categoryLabels, categoryColors, type MediaItem, type CategoryKey } from "@/lib/gallery-config"

export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all")
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section className="w-full">
      {/* Category Filter */}
      <Tabs value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as CategoryKey)} className="mb-8">
        <TabsList className="grid w-full grid-cols-5 bg-slate-800 border border-slate-700">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <TabsTrigger 
              key={key} 
              value={key}
              className="data-[state=active]:bg-teal-500 data-[state=active]:text-slate-900"
            >
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="bg-slate-800 border-slate-700 overflow-hidden hover:bg-slate-750 transition-colors group">
            <CardContent className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/80 hover:bg-slate-900 border border-teal-500"
                        onClick={() => setSelectedItem(item)}
                      >
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full bg-slate-900 border-slate-700">
                      <div className="relative">
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-contain"
                            sizes="90vw"
                          />
                        </div>
                        <div className="mt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-teal-400">{item.title}</h3>
                            <Badge className={categoryColors[item.category]}>
                              {categoryLabels[item.category]}
                            </Badge>
                          </div>
                          {item.description && (
                            <p className="text-slate-300">{item.description}</p>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-slate-100 text-sm truncate">{item.title}</h3>
                  <Badge className={`${categoryColors[item.category]} text-xs`}>
                    {categoryLabels[item.category]}
                  </Badge>
                </div>
                {item.description && (
                  <p className="text-slate-400 text-xs line-clamp-2">{item.description}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-400 text-lg">No items found in this category.</p>
        </div>
      )}
    </section>
  )
} 