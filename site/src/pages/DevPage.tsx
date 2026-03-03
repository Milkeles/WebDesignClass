import { Button } from "@/components/ui/button"

export default function DevPage() {
  return (
    <div className="p-8 flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}