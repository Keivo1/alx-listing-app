import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { PLACEHOLDER_IMAGE } from '../constants'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Explore Listings</h1>
      <Card
        title="Modern Studio Apartment"
        description="Located in the heart of Lagos."
        image={PLACEHOLDER_IMAGE}
      />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert("Booking...")} />
      </div>
    </main>
  )
}
