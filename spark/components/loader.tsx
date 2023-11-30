import Image from 'next/image'

export default function Loader() {
    return (
        <div className="h-full flex flex-col items-center gap-y-4 justify-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image
                alt='logo'
                fill
                src='/logo.png'
                />
            </div>
            <p className='text-sm text-muted-foreground'>
                Thinking...
            </p>
        </div>
    )
}