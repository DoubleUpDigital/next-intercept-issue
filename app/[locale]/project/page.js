import SampleContent from "@/components/SampleContent"

export default function Page() {
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full overflow-auto bg-white">
      <div className="flex flex-col items-center justify-center h-full">
        <div className="text-red-600">
          You are on the route page.
        </div>
        <SampleContent />
      </div>
    </div>
  )
}