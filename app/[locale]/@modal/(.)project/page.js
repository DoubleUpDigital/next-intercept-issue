"use client"

import SampleContent from "@/components/SampleContent"
import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    console.log("Modal page is mounted.")
    return () => {
    console.log("Modal page is unmounted.")
      }
  }, [])
  return (
    <div className="fixed left-0 top-0 z-50 h-full w-full overflow-auto bg-white bg-opacity-70 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center h-full">
            <div className="text-red-600">
                You are on the modal page.
            </div>
            <SampleContent />
        </div>
    </div>
  )
}