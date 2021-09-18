
import Link from 'next/link'

export default function Overview() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl">Overview Page Coming Soon</h1>
            <Link href="/">
                <a className="p-4 m-4 test-2xl bg-gray-300 rounded-lg">Back to Home</a>
            </Link>
        </div>)
}