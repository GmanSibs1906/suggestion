import { Search, MapPin, Calendar, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/25 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Find Your Perfect Home</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover exceptional properties with our AI-powered rental platform
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-4 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input placeholder="Location" className="pl-10" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Input type="date" placeholder="Move-in Date" className="pl-10" />
                </div>
                <div className="relative">
                  <Users className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                  <Select>
                    <SelectTrigger className="pl-10">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="condo">Condo</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button size="lg" className="w-full">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Properties</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of premium properties, each offering unique features and exceptional
              value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <PropertyCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function PropertyCard() {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-semibold text-white">Luxury Apartment</h3>
          <p className="text-white/90">New York, NY</p>
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="text-2xl font-bold">$2,500/mo</p>
          </div>
          <Button variant="outline" size="sm">
            View Details
          </Button>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
            Pet Friendly
          </span>
          <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
            Remote Work
          </span>
        </div>
      </div>
    </div>
  )
}

